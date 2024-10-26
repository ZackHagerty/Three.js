import { useThree, useFrame } from '@react-three/fiber'
import { Lightformer, Environment, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, SoftShadows, useHelper, OrbitControls, BakeShadows } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useControls } from 'leva'

export default function Experience()
{
    const directionalLight = useRef();
    useHelper(directionalLight,THREE.DirectionalLightHelper, 1)

    const cube = useRef()

    const { color, opacity, blur, far } = useControls('contact shadows', {
        color: '#1d8f75',
        opacity: { value: 0.4, min: 0, max: 1 },
        blur: { value: 2.8, min: 0, max: 10 },
        far: { value: 1, min: 0, max: 10 }
    })

    const { sunPosition } = useControls('sky', {
        sunPosition: { value: [ 1, 2, 3 ] }
    })

    const { envMapIntensity } = useControls('environment map', {
        envMapIntensity: { value: 1.2, min: 0, max: 12 }
    })

    const scene = useThree(state => state.scene)

    useEffect(() => 
    {
        scene.environmentIntensity = envMapIntensity
    }, [ envMapIntensity ])
    
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })

    return <>

        <Environment
            preset="lobby"
            ground={ {
                height: 7,
                radius: 28,
                scale: 100
            } }
        >
            {/* <mesh position-z={ - 5 } scale={ 10 }>
                <planeGeometry />
                <meshBasicMaterial color={ [10, 0, 0 ] } />
            </mesh> */}
            {/* <color args={ [ 'black' ] } attach="background" />
            <Lightformer 
                position-z={ - 5 } 
                scale={ 10 }
                color="red"
                intensity={ 10 } 
                form="ring"/> */}
        </Environment>

        {/* <Sky sunPosition={ sunPosition } /> */}
        {/* <BakeShadows /> */}
        {/* <SoftShadows size={ 25 } samples={ 10 }  focus = { 0 } /> */}
        <ContactShadows
            position = { [ 0, 0, 0 ] }
            resolution= { 512 }
            far = { far }
            color = { color }
            opacity= { opacity }
            blur = { blur }
            frames = { 1 }  
        >
        </ContactShadows>
            {/* Frames 1 bakes the shadows */}
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight 
            castShadow 
            ref={ directionalLight } 
            position={ sunPosition }
            intensity={ 4.5 }
            shadow-mapSize= { [1024, 1024 ] }/>
            {/* <AccumulativeShadows
                position={ [ 0, - 0.99, 0 ] }
                scale={ 10 }
                color="#316d39"
                opacity={ 0.8 }
                frames={ Infinity }
                temporal
                blend = { 100 }
            >
                <RandomizedLight
                    amount={ 8 }
                    radius={ 1 }
                    ambient={ 0.5 }
                    intensity={ 3 }
                    position={ [ 1, 2, 3 ] }
                    bias={ 0.001 }
                />
            </AccumulativeShadows> 
        <ambientLight intensity={ 1.5 } /> */}


        <mesh castShadow  position={ [- 2, 1.1, 0] }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow  ref={ cube } position={ [ 2, 1, 0] } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        {/* <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}

    </>
}