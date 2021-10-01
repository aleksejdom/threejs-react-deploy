import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { extend, useThree } from 'react-three-fiber'

//Components added this way can then be referenced in the scene
extend({OrbitControls})

const Orbit = () => {
    //This hook gives you access to the state model which contains the default renderer, the scene, your camera, and so on
    const { camera, gl } = useThree()
    return(
        <orbitControls 
            /* attach sorgt für die Zugänglichkeit des Elements von der Scene aus */
            autoRotate enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 2.8} 
            maxPolarAngle={Math.PI / 2.8}
            attach="orbitControls"
            args={[camera, gl.domElement]} 
        />
    )
}
  
export default Orbit