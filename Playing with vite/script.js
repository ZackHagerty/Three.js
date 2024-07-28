import * as THREE from 'three'

const scene = new THREE.Scene()

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)

//material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

//combined mesh
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

renderer.render(scene, camera)