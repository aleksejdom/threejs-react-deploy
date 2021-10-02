import { useBox } from 'use-cannon'

const Floor = props => {
  const [ref, api] = useBox(()=> ({args:[10,0.2,10], ...props}))
    return(
      <mesh ref={ref} {...props} receiveShadow>
        <boxBufferGeometry args={[200,0.2,200]}/>
        <meshPhongMaterial 
          transparent
          opacity={0.6}
        />
      </mesh>
    )
  }

  export default Floor;