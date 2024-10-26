import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import HelmetModel from './HelmetModel.jsx'
import { Suspense } from 'react'
import Placeholder from './Placeholder.jsx'
import BurgerModel from './BurgerModel.jsx'
import FoxModel from './FoxModel.jsx'


export default function Experience()
{
   

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 1.5 } />

        <Suspense
            fallback=
            { 
                <Placeholder position-y = { 0.5 } scale = { [ 2, 2, 2] }/>
            }>
            <FoxModel scale= { 0.1 } />
        </Suspense>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}