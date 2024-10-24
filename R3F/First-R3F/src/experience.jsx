import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useRef } from 'react'

extend({ OrbitControls })

export default function Experience()
{
   const cubeRef = useRef();
   const groupRef = useRef();
   const { camera, gl } = useThree();

   useFrame((state, delta) => 
   {
      cubeRef.current.rotation.y += delta;
      // groupRef.current.rotation.y += delta;
   })

    return <>

      <directionalLight position = { [ 1, 2, 3 ] } intensity={ 4.5} />
      <ambientLight intensity = { 4.5 }></ambientLight>
      <orbitControls args = { [camera, gl.domElement ]} />

      <group ref={ groupRef }>
         <mesh position-x = { -2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
         </mesh>

         <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x = { 2 } scale = { 1.5 }>
            <boxGeometry/>
            <meshStandardMaterial color="purple" />
         </mesh>
      </group>
         <mesh position-y={-1} rotation-x={ -Math.PI * 0.50} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
         </mesh>
    </>
}