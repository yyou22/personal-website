export const MODEL_ZOOM_LIMITS = { min: 0.8, max: 2.5 }

export function getModelFrustum(width, height) {
  const aspect = width / Math.max(height, 1)
  const scale = height * 0.005 + 4.8
  // Keep camera sizing independent of the viewer's page spacing.
  const mobile = aspect > 1.1
  const halfHeight = mobile ? Math.max(scale, 7.8) : (scale * 1.4) / 1.0609
  const verticalOffset = mobile ? 0.8 : 0.5
  return {
    left: -halfHeight * aspect,
    right: halfHeight * aspect,
    top: halfHeight + verticalOffset,
    bottom: -halfHeight + verticalOffset
  }
}

export function configureModelControls(controls) {
  controls.minZoom = MODEL_ZOOM_LIMITS.min
  controls.maxZoom = MODEL_ZOOM_LIMITS.max
  controls.enablePan = false
  controls.zoomSpeed = 0.65
}

export function createModelHitTest(raycaster, point, camera, canvas, getModel) {
  const corner = raycaster.ray.origin.clone()
  const cross = (a, b, c) =>
    (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
  return (clientX, clientY) => {
    const model = getModel()
    const rect = canvas.getBoundingClientRect()
    if (
      !model ||
      !rect.width ||
      !rect.height ||
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    )
      return false
    point.set(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      1 - ((clientY - rect.top) / rect.height) * 2
    )
    camera.updateMatrixWorld()
    model.updateMatrixWorld(true)
    raycaster.setFromCamera(point, camera)
    const directHit = raycaster.intersectObject(model, true).some(hit => {
      for (let object = hit.object; object; object = object.parent) {
        if (!object.visible) return false
      }
      const material = Array.isArray(hit.object.material)
        ? hit.object.material[hit.face?.materialIndex || 0]
        : hit.object.material
      return material?.visible !== false && material?.opacity !== 0
    })
    if (directHit) return true

    // Fill gaps inside the model's projected outline, while leaving the
    // surrounding canvas (including the outline's corners) for page scrolling.
    const points = []
    model.traverseVisible(object => {
      if (!object.isMesh) return
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material]
      if (
        !materials.some(
          material => material?.visible !== false && material?.opacity !== 0
        )
      )
        return
      const geometry = object.geometry
      if (!geometry.boundingBox) geometry.computeBoundingBox()
      const bounds = geometry.boundingBox
      if (!bounds || bounds.isEmpty()) return
      for (const x of [bounds.min.x, bounds.max.x]) {
        for (const y of [bounds.min.y, bounds.max.y]) {
          for (const z of [bounds.min.z, bounds.max.z]) {
            corner.set(x, y, z).applyMatrix4(object.matrixWorld).project(camera)
            if (corner.z >= -1 && corner.z <= 1)
              points.push({ x: corner.x, y: corner.y })
          }
        }
      }
    })
    if (points.length < 3) return false
    points.sort((a, b) => a.x - b.x || a.y - b.y)
    const halfHull = ordered => {
      const hull = []
      for (const vertex of ordered) {
        while (
          hull.length > 1 &&
          cross(hull[hull.length - 2], hull[hull.length - 1], vertex) <= 0
        )
          hull.pop()
        hull.push(vertex)
      }
      return hull.slice(0, -1)
    }
    const hull = [...halfHull(points), ...halfHull([...points].reverse())]
    return (
      hull.length >= 3 &&
      hull.every(
        (vertex, index) =>
          cross(vertex, hull[(index + 1) % hull.length], point) >= -1e-8
      )
    )
  }
}

export function bindModelInput(
  controls,
  canvas,
  hitsModel,
  { rotateTouch, zoomTouch }
) {
  let dragging = false
  let touchOnModel = null
  let previousTouches = []
  const listeners = []
  const listen = (name, callback, options) => {
    canvas.addEventListener(name, callback, options)
    listeners.push([name, callback, options])
  }
  const hover = event => {
    const hit = hitsModel(event.clientX, event.clientY)
    controls.enabled = hit
    canvas.style.cursor = hit ? 'grab' : 'auto'
    return hit
  }
  controls.enabled = false
  // Leave empty canvas areas available to native page scrolling and zooming.
  canvas.style.touchAction = 'pan-y pinch-zoom'
  listen(
    'wheel',
    event => {
      hover(event)
    },
    { capture: true, passive: true }
  )
  listen(
    'pointerdown',
    event => {
      if (event.pointerType === 'touch') {
        // Handle touch separately so empty canvas areas keep native scrolling.
        event.stopImmediatePropagation()
        return
      }
      dragging = hover(event)
      if (dragging) canvas.style.cursor = 'grabbing'
      else event.stopImmediatePropagation()
    },
    true
  )
  listen(
    'pointermove',
    event => {
      if (event.pointerType !== 'touch' && !dragging) hover(event)
    },
    true
  )
  listen(
    'pointerup',
    event => {
      if (event.pointerType !== 'touch') {
        dragging = false
        hover(event)
      }
    },
    true
  )
  listen(
    'pointercancel',
    () => {
      dragging = false
    },
    true
  )
  listen('pointerleave', () => {
    if (!dragging) {
      controls.enabled = false
      canvas.style.cursor = 'auto'
    }
  })

  const positions = event =>
    Array.from(event.touches, touch => ({ x: touch.clientX, y: touch.clientY }))
  const distance = touches =>
    Math.hypot(touches[0].x - touches[1].x, touches[0].y - touches[1].y)
  listen(
    'touchstart',
    event => {
      if (touchOnModel === null)
        touchOnModel = hitsModel(
          event.touches[0].clientX,
          event.touches[0].clientY
        )
      if (!touchOnModel) return
      event.preventDefault()
      controls.enabled = false
      controls.autoRotate = false
      previousTouches = positions(event)
    },
    { passive: false }
  )
  listen(
    'touchmove',
    event => {
      if (!touchOnModel) return
      event.preventDefault()
      const touches = positions(event)
      if (touches.length === 1 && previousTouches.length === 1) {
        rotateTouch(
          touches[0].x - previousTouches[0].x,
          touches[0].y - previousTouches[0].y
        )
      } else if (touches.length === 2 && previousTouches.length === 2) {
        const before = distance(previousTouches)
        if (before > 0) zoomTouch(distance(touches) / before)
      }
      previousTouches = touches
    },
    { passive: false }
  )
  const endTouch = event => {
    previousTouches = positions(event)
    if (!event.touches.length) {
      touchOnModel = null
      controls.autoRotate = true
      controls.enabled = false
    }
  }
  listen('touchend', endTouch)
  listen('touchcancel', endTouch)
  return () => {
    listeners.forEach(([name, callback, options]) =>
      canvas.removeEventListener(name, callback, options)
    )
    canvas.style.cursor = 'auto'
  }
}
