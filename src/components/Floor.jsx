import { useBox } from 'use-cannon'

const Floor = props => {
  const [ref, api] = useBox(()=> ({args:[10,0.2,10], ...props}))
    return(
      <mesh ref={ref} {...props} receiveShadow>
        <boxBufferGeometry args={[100,0.2,100]}/>
        <meshPhongMaterial 
          transparent
          opacity={0.2}
        />
      </mesh>
    )
  }

  export default Floor;