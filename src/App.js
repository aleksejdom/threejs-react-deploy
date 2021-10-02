
import './App.css';
import { Canvas } from 'react-three-fiber'
import { Suspense } from 'react'
import { Physics } from 'use-cannon'

import Orbit from './components/Orbit';
import Skybox from './components/Skybox';
import Light from './components/Light';
import Floor from './components/Floor';
/* import Box from './components/Box'; */
import ColorPicker from './components/ColorPicker';
import Cars from './components/Cars';
import CameraControls from './components/CameraControls';
import CameraButtons from './components/CameraButtons';
import Effects from './components/Effects';


function App() {  

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <ColorPicker />
      <CameraButtons />
      <Canvas 
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false
        }}
        shadowMap 
        style={{background: '#000000'}}
        camera={{position: [1,0,1]}} 
      >
        <CameraControls />
        <Orbit />
       {/*  <axesHelper args={[5]} />  */}
        
        <Light />
        <Physics>
          <Cars />
          <Floor position={[0, 0, 0]} />
        </Physics> 
       
        <Suspense fallback={null}>
          <Skybox />
        </Suspense>
       <Effects />
      </Canvas>
    </div>
   
  );
}

export default App;
