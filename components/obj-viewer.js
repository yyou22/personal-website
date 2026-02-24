import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Box, Spinner, Text } from '@chakra-ui/react'

const WIDTH = 180
const HEIGHT = 180

const BirdViewer = ({
  modelPath = '/Cockatoo.obj',
  texturePath = '/Textures/T_Base_D.png'
}) => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const rendererRef = useRef()
  const sceneRef = useRef(new THREE.Scene())
  const cameraRef = useRef()
  const birdRef = useRef()
  const birdBasePositionRef = useRef(new THREE.Vector3())
  const birdBaseRotationRef = useRef({ z: 0 })

  useEffect(() => {
    const container = refContainer.current
    if (!container) return

    const scene = sceneRef.current
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(WIDTH, HEIGHT)
    if (renderer.outputEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding
    else if (renderer.outputColorSpace !== undefined) renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
    camera.position.set(20, 20, 20)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const ambient = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambient)
    const sun = new THREE.DirectionalLight(0xffffff, 1)
    sun.position.set(5, 10, 5)
    scene.add(sun)

    const loadAssets = async () => {
      try {
        const base = window.location.origin

        const [textureRes, modelRes] = await Promise.all([
          fetch(base + texturePath),
          fetch(base + modelPath)
        ])

        if (!textureRes.ok) throw new Error(`Texture: ${textureRes.status} ${textureRes.statusText}`)
        if (!modelRes.ok) throw new Error(`Model: ${modelRes.status} ${modelRes.statusText}`)

        const textureBlob = await textureRes.blob()
        const modelText = await modelRes.text()

        const textureUrl = URL.createObjectURL(textureBlob)
        const textureLoader = new THREE.TextureLoader()
        const texture = await new Promise((resolve, reject) => {
          textureLoader.load(textureUrl, resolve, undefined, reject)
        })
        URL.revokeObjectURL(textureUrl)

        texture.magFilter = THREE.NearestFilter
        if (texture.colorSpace !== undefined) texture.colorSpace = THREE.SRGBColorSpace
        else if (texture.encoding !== undefined) texture.encoding = THREE.sRGBEncoding

        const objLoader = new OBJLoader()
        const group = objLoader.parse(modelText)

        group.traverse((child) => {
          if (child.isMesh && child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material]
            mats.forEach((m) => { m.map = texture })
          }
        })

        group.rotation.y = -Math.PI/2
        group.rotation.z = Math.PI/16

        const box = new THREE.Box3().setFromObject(group)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scaleFactor = 25 / maxDim

        group.position.sub(center)
        group.scale.setScalar(scaleFactor)
        group.position.copy(center).negate().multiplyScalar(scaleFactor)
        birdBasePositionRef.current.copy(group.position)
        birdBaseRotationRef.current.z = group.rotation.z

        scene.add(group)
        birdRef.current = group
        setLoading(false)
      } catch (err) {
        console.error(err)
        setError(err?.message || 'Failed to load assets')
        setLoading(false)
      }
    }

    loadAssets()

    let req = null
    const hopSpeed = 0.9
    const hopHeight = 0.5
    const animate = () => {
      req = requestAnimationFrame(animate)
      const t = performance.now() * 0.001
      if (birdRef.current) {
        const bird = birdRef.current
        const base = birdBasePositionRef.current
        const baseRotZ = birdBaseRotationRef.current.z
        const s = Math.sin(t * hopSpeed)
        const hop = 0.5 + 0.5 * s
        bird.position.x = base.x + 0.15 * Math.sin(t * 0.4)
        bird.position.y = base.y + hop * hopHeight - 1.2
        bird.position.z = base.z + 0.04 * Math.cos(t * 0.33)
        bird.rotation.z = baseRotZ + s * 0.08
      }
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(req)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [modelPath, texturePath])

  return (
    <Box
      position="fixed"
      right={{ base: 2, md: 4 }}
      bottom={{ base: 2, md: 4 }}
      w={`${WIDTH}px`}
      h={`${HEIGHT}px`}
      zIndex={50}
      borderRadius="md"
      overflow="hidden"
      boxShadow="none"
      bg="transparent"
      ref={refContainer}
    >
      {loading && (
        <Box
          position="absolute"
          inset={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="transparent"
        >
          <Spinner size="lg" color="teal.400" />
        </Box>
      )}
      {error && (
        <Text
          position="absolute"
          bottom={2}
          left={2}
          right={2}
          color="red.400"
          fontSize="xs"
          textAlign="center"
        >
          {error}
        </Text>
      )}
    </Box>
  )
}

export default BirdViewer
