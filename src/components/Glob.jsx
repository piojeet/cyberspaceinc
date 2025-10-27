import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

function CyberNetworkGlobe() {
  const groupRef = useRef()
  const pointsRef = useRef()

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.15
  })

  // Create random network points (latitude-longitude distributed)
  const points = []
  const vertexCount = 800
  for (let i = 0; i < vertexCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const x = Math.sin(phi) * Math.cos(theta)
    const y = Math.sin(phi) * Math.sin(theta)
    const z = Math.cos(phi)
    points.push(x, y, z)
  }

  return (
    <group ref={groupRef} scale={2}>
      {/* Main wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#1d4ed8"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Points (glowing nodes) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 1}
            array={new Float32Array(points)}
            itemSize={2}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#1d4ed8"
          size={0.04}
          transparent
          opacity={0.8}
        />
      </points>

      {/* Outer aura glow */}
      <mesh scale={1.05}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

export default function CyberGlobeScene() {
  return (
    <div className="w-full lg:h-[600px] md:h-[400px] h-[300px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} color="#1d4ed8" />
        <pointLight position={[3, 3, 5]} intensity={2} color="#1d4ed8" />
        <CyberNetworkGlobe />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
