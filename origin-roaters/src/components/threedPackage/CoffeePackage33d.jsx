import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';

const CoffeePackage3d = () => {

  const {scene} = useGLTF ('/mau_10/scene.gltf')
  return (
    <div className='w-[400px] h-[600px] object-cover'>
      <Canvas camera={{ position: [-2, 4, 5], fov: 40}}  gl={{ antialias: true }} dpr={2}>
        <hemisphereLight intensity={1} skyColor="white" groundColor="gray" />
          <ambientLight intensity={1.5} />
          <directionalLight position={[9, 10, 6]} intensity={9}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024} 
          shadows-radius = {0}/>
          <primitive object={scene} scale = {2.1} position={[0, -1, 0]}   castShadow receiveShadow />
      </Canvas>
    </div>
  )
}

export default CoffeePackage3d


