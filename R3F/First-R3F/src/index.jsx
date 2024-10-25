import './style.css'
import { Canvas } from '@react-three/fiber'
import ReactDOM from 'react-dom/client'
import Experience from './experience'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings =
{ 
    fov: 45, 
    near: 0.1, 
    far: 200, 
    position: [3, 2, 6]
} 

const glSettings = 
{
    antialias: true,
    toneMapping: THREE.ACESFilmicToneMapping
}

root.render(
    <Canvas dpr={ [1,2] } flat gl={ glSettings } camera={ cameraSettings }>          
        <Experience />
    </Canvas>
)