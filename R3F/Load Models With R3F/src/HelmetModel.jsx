import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { DRACOLoader } from 'three/examples/jsm/Addons.js'

export default function HelmetModel()
{
    const model = useLoader(
        GLTFLoader, 
        './FlightHelmet/glTF/FlightHelmet.gltf',
    (loader) => 
    {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./draco/')
        loader.setDRACOLoader(dracoLoader)
    })

    return  <primitive 
            object= { model.scene }
            scale = { 5 }
            position-y={ -1 }
        />
}