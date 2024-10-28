import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { RigidBody, Physics } from '@react-three/rapier'
import { useState, useRef } from 'react'
import { CuboidCollider } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Experience()
{
    const [ hitSound ] = useState(() => new Audio('./hit.mp3'))

    const cube = useRef();
    const twister = useRef();

    const cubeJump = () =>
    {
        const mass = cube.current.mass();

        let randomRotation = Math.random();

        cube.current.applyImpulse( { x: 0, y: 5 * mass, z: 0 } )
        cube.current.applyTorqueImpulse( { x: randomRotation - 0, y: randomRotation -  1, z: randomRotation -  0 } )
    }

    useFrame((state) =>
    {
        const time = state.clock.getElapsedTime()

        const eulerRotation = new THREE.Euler(0, time, 0)
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation)
        twister.current.setNextKinematicRotation(quaternionRotation)

        const angle = time * 0.5;
        const x = Math.cos(angle) * 2;
        const z = Math.sin(angle) * 2;

        twister.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z})
    })

    const collisionEnter = () => 
    {
        hitSound.currentTime = 0;
        hitSound.volume = Math.random();
        hitSound.play()
    }

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <Physics debug>

            <RigidBody colliders="ball" restitution={2}>
                <mesh castShadow position={ [ - 2, 2, 0 ] }>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            <RigidBody ref={ cube } position={ [ 1.5, 2, 0 ] } colliders={false} friction={0} onCollisionEnter={ collisionEnter }>
                <mesh castShadow onClick= { cubeJump } position={ [ 1.5, 2, 0 ] }>
                    <boxGeometry />
                    <CuboidCollider mass= { 0.5 } args= { [.5, .5, .5] } />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>

            <RigidBody
                ref = { twister }
                position= { [0, -0.8, 0] }
                friction = { 0 }
                type="kinematicPosition">
                    <mesh castShadow scale={ [ 0.4, 0.4, 3 ] }>
                        <boxGeometry />
                        <meshStandardMaterial color="red" />
                    </mesh>
            </RigidBody>
            
            <RigidBody type="fixed">
                <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>
    </>
}