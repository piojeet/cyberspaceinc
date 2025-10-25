import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import React, { useRef, useEffect } from 'react'
import Color from '../assets/images/color.jpg'
import Normal from '../assets/images/normal.png'
import Occlusion from '../assets/images/occlusion.jpg'

function GlobeMesh() {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    Color,
    Normal,
    Occlusion
  ])

  const meshRef = useRef()

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry.attributes.uv2 = meshRef.current.geometry.attributes.uv
    }
  }, [])

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#33aaff"
        transparent
        // opacity={0.2}
        side={5} // DoubleSide
        map={color}
        normalMap={normal}
        aoMap={aoMap}
        aoMapIntensity={3}
      />
    </mesh>
  )
}

export default function Glob() {
  return (
    <div className="w-full lg:h-[500px] md:h-[300px] h-[250px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={3} color={"#88ccff"} />
        <directionalLight intensity={3} position={[6, 6, 6]} color={"#66b3ff"} />
        <pointLight position={[6, 3, 5]} intensity={3} color={"#3366ff"} />

        <GlobeMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}
