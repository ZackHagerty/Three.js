import { OrbitControls } from '@react-three/drei'
import { button, useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    const {position, colorLight, visible } = useControls('sphere', { 
        position: 
        {
            value: {x: -2, y: 0},
            step: 0.05,
            joystick: 'invertY'
        },
        colorLight: '#ff0000',
        visible: true,
        myInterval:
        {
            min: 0,
            max: 10,
            value: [4, 5],
        },
        clickMe: button(() => console.log('printed')),
        choice: { options: [ 'a', 'b', 'c' ] }
    })

    const { scale, colorDark } = useControls('cube', {
        scale: 
        {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5
        },
        colorDark: '#ffffff',

    })

    const { perfVisible } = useControls({
        perfVisible: true
    })

    return <>

        { perfVisible && <Perf position="top-left"/> }

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <mesh visible={visible} position={ [position.x, position.y, 0] }>
            <sphereGeometry />
            <meshStandardMaterial color={ colorLight } />
        </mesh>

        <mesh position-x={ 2 } scale={ scale }>
            <boxGeometry />
            <meshStandardMaterial color={ colorDark } />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}