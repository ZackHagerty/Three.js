import './style.css'
import { Canvas } from '@react-three/fiber'
import ReactDOM from 'react-dom/client'
import Experience from './experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <Experience />
    </Canvas>
)