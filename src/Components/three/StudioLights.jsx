// StudioLights.jsx
import React from 'react'
import { Environment, Lightformer } from '@react-three/drei'

const StudioLights = () => {
  return (
    <group name="lights">
        {/* Reflections to metallic and glossy surfaces */}
      <Environment resolution={256}>
        <group>
          {/* Simulates two large, soft rectangular studio lights */}
          <Lightformer 
            form="rect"
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI/2}
          />
          <Lightformer 
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI/2}
          />
          {/* Overhead lighting */}
          <spotLight
            position={[-2, 10, 5]}
            angle={0.15}
            decay={0}
            intensity={Math.PI * 0.2}
          />
          {/* Bottom lighting */}
          <spotLight
            position={[0, -25, 10]}
            angle={0.15}
            decay={0}
            intensity={Math.PI * 0.2}
          />
          {/* Lighting from the sides */}
          <spotLight
            position={[0, 15, 5]}
            angle={0.15}
            decay={0.1}
            intensity={Math.PI * 3}
          />
        </group>
      </Environment>
    </group >
  )
}

export default StudioLights