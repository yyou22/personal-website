import { useState, useEffect, useRef, useCallback } from 'react'
import { Image } from '@chakra-ui/react'
import * as THREE from 'three'
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'
import {
  configureModelControls,
  createModelHitTest,
  bindModelInput,
  MODEL_ZOOM_LIMITS,
  getModelFrustum
} from '../lib/model-interaction'

const FALLBACK_MODEL_SRC = '/images/fallback_model.png'

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [staticFallback, setStaticFallback] = useState(false)
  const [renderer, setRenderer] = useState()
  const [camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
      if (camera) {
        Object.assign(camera, getModelFrustum(scW, scH))
        camera.updateProjectionMatrix()
      }
    }
  }, [renderer, camera])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      if (!WebGL.isWebGLAvailable()) {
        setStaticFallback(true)
        setLoading(false)
        return
      }

      const scW = container.clientWidth
      const scH = container.clientHeight

      let renderer
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        })
      } catch {
        try {
          renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true
          })
        } catch {
          setStaticFallback(true)
          setLoading(false)
          return
        }
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const framing = getModelFrustum(scW, scH)
      const camera = new THREE.OrthographicCamera(
        framing.left,
        framing.right,
        framing.top,
        framing.bottom,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target.copy(target)
      configureModelControls(controls)
      controls.autoRotate = true
      controls.update()
      controls.saveState()
      let model = null
      const hitsModel = createModelHitTest(
        new THREE.Raycaster(),
        new THREE.Vector2(),
        camera,
        renderer.domElement,
        () => model
      )
      const spherical = new THREE.Spherical()
      const offset = new THREE.Vector3()
      const unbindInput = bindModelInput(
        controls,
        renderer.domElement,
        hitsModel,
        {
          rotateTouch(dx, dy) {
            spherical.setFromVector3(
              offset.copy(camera.position).sub(controls.target)
            )
            const speed = (2 * Math.PI) / container.clientHeight
            spherical.theta -= dx * speed
            spherical.phi -= dy * speed
            spherical.makeSafe()
            camera.position
              .copy(controls.target)
              .add(offset.setFromSpherical(spherical))
            controls.update()
          },
          zoomTouch(ratio) {
            camera.zoom = THREE.MathUtils.clamp(
              camera.zoom * Math.pow(ratio, controls.zoomSpeed),
              MODEL_ZOOM_LIMITS.min,
              MODEL_ZOOM_LIMITS.max
            )
            camera.updateProjectionMatrix()
            controls.update()
          }
        }
      )

      let req = null
      let disposed = false
      let visible = true
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
      })
      observer.observe(container)
      const disposeRenderer = () => {
        if (disposed) return
        disposed = true
        cancelAnimationFrame(req)
        observer.disconnect()
        unbindInput()
        controls.dispose()
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }

      const animate = () => {
        req = requestAnimationFrame(animate)
        if (!visible || document.hidden) return
        controls.update()
        renderer.render(scene, camera)
      }

      loadGLTFModel(scene, '/scene.glb', {
        receiveShadow: false,
        castShadow: false
      })
        .then(loadedModel => {
          if (disposed) return
          model = loadedModel
          animate()
          setLoading(false)
        })
        .catch(() => {
          if (disposed) return
          disposeRenderer()
          setRenderer(undefined)
          setStaticFallback(true)
          setLoading(false)
        })

      return () => {
        disposeRenderer()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <DogContainer ref={refContainer}>
      {loading && <DogSpinner />}
      {staticFallback && (
        <Image
          src={FALLBACK_MODEL_SRC}
          alt="Voxel model preview"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          w="100%"
          h="100%"
          objectFit="contain"
          pointerEvents="none"
          draggable={false}
          sx={{ transform: 'translateY(-6%)' }}
        />
      )}
    </DogContainer>
  )
}

export default VoxelDog
