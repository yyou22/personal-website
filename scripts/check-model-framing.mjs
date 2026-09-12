import assert from 'node:assert/strict'
import fs from 'node:fs'
import { OrthographicCamera, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const source = fs.readFileSync(new URL('../lib/model-interaction.js', import.meta.url), 'utf8')
const { getModelFrustum } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`)
const bytes = fs.readFileSync(new URL('../public/scene.glb', import.meta.url))
const gltf = await new Promise((resolve, reject) => new GLTFLoader().parse(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '', resolve, reject))
gltf.scene.updateMatrixWorld(true)
const vertices = []
gltf.scene.traverse(object => {
  if (!object.isMesh) return
  const positions = object.geometry.attributes.position
  for (let i = 0; i < positions.count; i++) vertices.push(new Vector3().fromBufferAttribute(positions, i).applyMatrix4(object.matrixWorld))
})
const target = new Vector3(-0.5, 1.2, 0)
const radius = Math.hypot(20 * Math.sin(0.2 * Math.PI) - target.x, 20 * Math.cos(0.2 * Math.PI))
const point = new Vector3()
for (const width of [320, 360, 390, 430, 440, 480, 600, 767, 640]) {
  const desktop = width === 640
  const height = desktop ? 640 : Math.round(width * 0.78)
  const frame = getModelFrustum(width, height)
  const camera = new OrthographicCamera(frame.left, frame.right, frame.top, frame.bottom, 0.01, 50000)
  let lowestPixel = 0
  for (let degrees = 0; degrees < 360; degrees += 5) {
    const radians = degrees * Math.PI / 180
    camera.position.set(target.x + radius * Math.sin(radians), 10, radius * Math.cos(radians))
    camera.lookAt(target)
    camera.updateMatrixWorld()
    for (const vertex of vertices) {
      point.copy(vertex).project(camera)
      assert(Math.abs(point.x) < 0.95 && Math.abs(point.y) < 0.95, `Clipping at ${width}px / ${degrees} degrees`)
      if (desktop) assert(height * (1 - point.y) / 2 > 120, 'Desktop model must stay below the navigation bar, including its negative top margin')
      lowestPixel = Math.max(lowestPixel, height * (1 - point.y) / 2)
    }
  }
  const bannerTop = desktop ? height - 200 : height + 20 - width * 0.16
  assert(bannerTop > lowestPixel, `Homepage banner overlaps model at ${width}px`)
}
console.log('Passed: full rotation fits at 8 mobile widths and desktop; desktop clears navigation; no banner overlap.')
