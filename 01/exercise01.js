import * as THREE from 'three'

// create scene
const scene =  new THREE.Scene();

// create object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// create size object
const sizes = {
    width: 800,
    height: 600
}

// create camera - fov usually 35 not so big
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

// get canvas from html
const canvas = document.querySelector('canvas.webgl')

// create renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)