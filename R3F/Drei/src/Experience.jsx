import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from "@react-three/drei"
import { useRef } from "react"

export default function Experience()
{
    const cube = useRef();
    const sphere = useRef();

    return <>

        <OrbitControls makeDefault enableDamping = {false} />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <PivotControls 
            anchor={ [ 0, 0, 0 ] }
            depthTest={ false }
            lineWidth={ 4 }
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ] }
            scale={ 100 }
            fixed={ true }>
            <mesh ref={ sphere } position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html occlude={ [sphere, cube] }distanceFactor={ 8 } center position={ [1, 1, 0] } wrapperClass="label">Test</Html>
            </mesh>
        </PivotControls>

        <TransformControls object={ cube } mode="translate">
            <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </TransformControls>
        
        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial 
                resolution={ 512 } 
                blur={ [ 1000, 1000 ] }
                mixBlur={ 1 }
                mirror={ 0.5 }
                color="greenyellow"
                  />
        </mesh>

        <Float>
            <Text font="./bangers-v20-latin-regular.woff"
                position={[0,2,0]}
                fontSize={ 3 }
                color="salmon">
                I LOVE SHELBY
                <meshNormalMaterial />
            </Text>
        </Float>
    </>
}