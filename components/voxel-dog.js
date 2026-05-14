import { useState, useEffect, useRef, useCallback } from 'react'
import { Image } from '@chakra-ui/react'
import * as THREE from 'three'
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

const FALLBACK_MODEL_SRC = '/images/fallback_model.png'

//function easeOutCirc(x) {
  //return Math.sqrt(1 - Math.pow(x - 1, 4))
//}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [staticFallback, setStaticFallback] = useState(false)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

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
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      let req = null
      let disposed = false
      const disposeRenderer = () => {
        if (disposed) return
        disposed = true
        cancelAnimationFrame(req)
        controls.dispose()
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }

      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 0 ? frame + 1 : frame

        if (frame == 0) {
          const p = initialCameraPosition
          //const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
          const rotSpeed = 5

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      loadGLTFModel(scene, '/scene.glb', {
        receiveShadow: false,
        castShadow: false
      })
        .then(() => {
          animate()
          setLoading(false)
        })
        .catch(() => {
          disposeRenderer()
          setRenderer(undefined)
          setStaticFallback(true)
          setLoading(false)
        })

      return () => {
        console.log('unmount')
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
