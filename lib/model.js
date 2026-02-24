import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export function loadFBXModel(scene, fbxPath, options = {}) {
  const { receiveShadow = false, castShadow = false } = options
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader()
    loader.setPath('/')
    loader.load(
      fbxPath,
      (group) => {
        group.name = 'fbx-model'
        group.position.set(0, 0, 0)
        group.receiveShadow = receiveShadow
        group.castShadow = castShadow
        group.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        scene.add(group)
        resolve(group)
      },
      undefined,
      (err) => reject(err)
    )
  })
}

export function loadOBJModel(scene, objPath, options = {}) {
  const { mtlPath, receiveShadow = false, castShadow = false } = options
  const basePath = objPath.replace(/\/[^/]+$/, '/') || '/'

  return new Promise((resolve, reject) => {
    const onObjLoaded = (group) => {
      group.name = 'obj-model'
      group.position.set(0, 0, 0)
      group.receiveShadow = receiveShadow
      group.castShadow = castShadow
      group.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = castShadow
          child.receiveShadow = receiveShadow
        }
      })
      scene.add(group)
      resolve(group)
    }

    const loadObj = (materials = null) => {
      const loader = new OBJLoader()
      if (materials) loader.setMaterials(materials)
      loader.load(objPath, onObjLoaded, undefined, (err) => reject(err))
    }

    if (mtlPath) {
      const mtlLoader = new MTLLoader()
      mtlLoader.setPath('/')
      mtlLoader.load(mtlPath.replace(/.*\//, ''), (materials) => {
        materials.preload()
        loadObj(materials)
      }, undefined, () => loadObj())
    } else {
      loadObj()
    }
  })
}

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
