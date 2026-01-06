import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';

const SeedThree = () => {

  const {scene} = useGLTF ('/coffee_beans/scene.gltf')
  return (
    <div className='w-full h-[400px] sm:h-[400px] md:h-[500px] lg:w-[500px] lg:h-screen'>
      <Canvas camera={{ position: [-3, 4, 5], fov: 75}}  gl={{ antialias: true }} dpr={2}>
        <hemisphereLight intensity={0.1} skyColor="green" groundColor="gray" />
          <ambientLight intensity={0.1} />
          <directionalLight position={[9, 10, 6]} intensity={9}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024} 
          shadows-radius = {0}/>
          <primitive object={scene} scale = {0.3} position={[0, -1, 0]}   castShadow receiveShadow />
      </Canvas>
    </div>
  )
}

export default SeedThree;


