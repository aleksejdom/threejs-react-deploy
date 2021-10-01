import { 
    EffectComposer,
    DepthOfField,
    Bloom
  } from 'react-postprocessing'

  
const Effects = () => {
    return(
        <EffectComposer>
        <DepthOfField 
          focusDistance={0} 
          focalLength={0.02} 
          bokehScale={2} 
          height={480} 
        />
         <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.9} height={300} /> 
      </EffectComposer>
    )
}

export default Effects;