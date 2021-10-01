const Light = () => {
    return (
      <>
        <ambientLight intensity={0.2} />
        <directionalLight
          shadow-mapSize-height={2**10}
          shadow-mapSize-width={2**10}
          shadow-radius={15} 
          position={[6,3,0]}
          intensity={2}
          castShadow
        />
        <pointLight 
          position={[0,4,0]}
          intensity={2}
        />
      </>
    )
}

export default Light;