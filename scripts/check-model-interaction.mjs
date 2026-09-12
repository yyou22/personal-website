import assert from 'node:assert/strict'
import fs from 'node:fs'
import {
  OrthographicCamera,
  Group,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  Raycaster,
  Vector2,
  Vector3
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const source = fs.readFileSync(
  new URL('../lib/model-interaction.js', import.meta.url),
  'utf8'
)
const {
  configureModelControls,
  createModelHitTest,
  bindModelInput,
  MODEL_ZOOM_LIMITS
} = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
)
globalThis.document = {}
const listeners = new Map()
const isCapture = options => options === true || options?.capture
const canvas = {
  style: {},
  clientWidth: 600,
  clientHeight: 600,
  getBoundingClientRect: () => ({
    left: 100,
    top: 50,
    right: 700,
    bottom: 650,
    width: 600,
    height: 600
  }),
  setPointerCapture() {},
  releasePointerCapture() {},
  addEventListener(name, callback, options) {
    listeners.set(name, [...(listeners.get(name) || []), { callback, options }])
  },
  removeEventListener(name, callback) {
    listeners.set(
      name,
      (listeners.get(name) || []).filter(item => item.callback !== callback)
    )
  }
}
function emit(name, properties) {
  const event = {
    prevented: false,
    stopped: false,
    preventDefault() {
      this.prevented = true
    },
    stopImmediatePropagation() {
      this.stopped = true
    },
    ...properties
  }
  for (const { callback } of [...(listeners.get(name) || [])].sort(
    (a, b) =>
      Number(Boolean(isCapture(b.options))) -
      Number(Boolean(isCapture(a.options)))
  )) {
    callback(event)
    if (event.stopped) break
  }
  return event
}
const camera = new OrthographicCamera(-5, 5, 5, -5, 0.01, 100)
camera.position.set(0, 0, 10)
camera.lookAt(0, 0, 0)
const model = new Group()
for (const x of [-2, 2]) {
  const mesh = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial())
  mesh.position.x = x
  model.add(mesh)
}
const hits = createModelHitTest(
  new Raycaster(),
  new Vector2(),
  camera,
  canvas,
  () => model
)
assert.equal(hits(520, 350), true)
assert.equal(
  hits(400, 350),
  true,
  'Empty space between meshes must interact with the model'
)
assert.equal(hits(110, 60), false, 'Empty canvas corners must scroll')
model.rotation.z = Math.PI / 4
assert.equal(hits(400, 350), true, 'Interior gaps remain interactive after rotation')
assert.equal(hits(480, 430), false, 'Space outside the rotated outline must scroll, even inside its bounding rectangle')
model.rotation.z = 0
model.visible = false
assert.equal(hits(520, 350), false)
model.visible = true
const controls = new OrbitControls(camera, canvas)
configureModelControls(controls)
controls.autoRotate = false
controls.saveState()
let rotations = 0
let zoomRatio = 0
const unbind = bindModelInput(controls, canvas, hits, {
  rotateTouch() {
    rotations++
  },
  zoomTouch(ratio) {
    zoomRatio = ratio
  }
})
assert.equal(canvas.style.touchAction, 'pan-y pinch-zoom')
assert.equal(
  emit('wheel', { clientX: 110, clientY: 60, deltaY: -100 }).prevented,
  false
)
assert.equal(camera.zoom, 1)
assert.equal(
  emit('wheel', { clientX: 400, clientY: 350, deltaY: -100 }).prevented,
  true
)
function wheelOnMesh(deltaY) {
  camera.updateMatrixWorld()
  const projected = new Vector3(2, 0, 0).project(camera)
  return emit('wheel', {
    clientX: 100 + (projected.x + 1) * 300,
    clientY: 50 + (1 - projected.y) * 300,
    deltaY
  })
}
for (let i = 0; i < 300; i++) wheelOnMesh(-100)
assert.equal(camera.zoom, MODEL_ZOOM_LIMITS.max)
for (let i = 0; i < 300; i++) wheelOnMesh(100)
assert.equal(camera.zoom, MODEL_ZOOM_LIMITS.min)
controls.reset()
assert.equal(
  emit('pointerdown', {
    pointerType: 'mouse',
    clientX: 110,
    clientY: 60,
    pointerId: 1,
    button: 0
  }).stopped,
  true
)
assert.equal(
  emit('pointermove', { pointerType: 'mouse', clientX: 400, clientY: 350 })
    .stopped,
  false
)
assert.equal(canvas.style.cursor, 'grab')
const blank = { clientX: 110, clientY: 60 }
const solid = { clientX: 520, clientY: 350 }
assert.equal(emit('touchstart', { touches: [{ clientX: 400, clientY: 350 }] }).prevented, true, 'A touch in an interior gap belongs to the model')
emit('touchmove', { touches: [{ clientX: 410, clientY: 355 }] })
assert.equal(rotations, 1)
emit('touchend', { touches: [] })
rotations = 0
assert.equal(emit('touchstart', { touches: [blank] }).prevented, false)
assert.equal(
  emit('touchmove', { touches: [solid] }).prevented,
  false,
  'A page swipe must stay a page swipe when crossing the model'
)
emit('touchend', { touches: [] })
assert.equal(emit('touchstart', { touches: [solid] }).prevented, true)
assert.equal(
  emit('touchmove', { touches: [{ clientX: 530, clientY: 355 }] }).prevented,
  true
)
assert.equal(rotations, 1)
emit('touchstart', { touches: [solid, { clientX: 550, clientY: 350 }] })
emit('touchmove', { touches: [solid, { clientX: 580, clientY: 350 }] })
assert.equal(zoomRatio, 2)
emit('touchend', { touches: [] })
assert.equal(controls.autoRotate, true)
unbind()
controls.dispose()
assert.equal([...listeners.values()].flat().length, 0)
console.log(
  'Passed: interior gaps interact, outside outline scrolls, rotation updates hit area, wheel routing, zoom limits, touch gesture ownership, cursor feedback, and cleanup.'
)
