import { shaderMaterial, Sparkles, Center, useGLTF, OrbitControls, useTexture } from '@react-three/drei'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef } from 'react'

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#ffffff'),
        uColorEnd: new THREE.Color('#000000')
    },
    portalVertexShader,
    portalFragmentShader
)


extend({PortalMaterial})


export default function Experience()
{
    const { nodes } = useGLTF('./model/portal.glb');
    console.log(nodes)
    
    const bakedTexture = useTexture('./model/baked.jpg')
    const material = new THREE.MeshBasicMaterial({ map: bakedTexture });
    
    bakedTexture.flipY = false;
    
    const portalMaterial = useRef()
    useFrame((state, delta) => 
    {
        portalMaterial.current.uTime += delta;
    })

    return <>

    <OrbitControls makeDefault />
    <color args= { ['#030202'] } attach="background" />
    
    <Center>
        <group>
            {nodes.baked.children.map((child, index) => (
                <mesh key={index} geometry={child.geometry} material={material} />
            ))}
        </group>

        <mesh geometry={ nodes.portalLight.geometry } position={ nodes.portalLight.position } rotation={ nodes.portalLight.rotation}>
            <portalMaterial ref={portalMaterial} />
        </mesh>

        <mesh geometry= { nodes.poleLightA.geometry } position={ [nodes.poleLightA.position.x, nodes.poleLightA.position.y, nodes.poleLightA.position.z] }>
            <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh geometry= { nodes.poleLightB.geometry } position={ [nodes.poleLightB.position.x, nodes.poleLightB.position.y, nodes.poleLightB.position.z + .95] }>
            <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <Sparkles 
            size={ 4 }
            scale={ [ 4, 2, 4 ] }
            position-y={ 1.4 }
            speed={ 0.2 }
            count={ 30 }>
            
        </Sparkles>
    </Center>
    </>
}