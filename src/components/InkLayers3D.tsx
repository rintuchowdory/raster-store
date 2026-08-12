import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function InkBlob() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.35, 6]} />
      <MeshDistortMaterial
        color="#0B0B0C"
        roughness={0.25}
        metalness={0.4}
        distort={0.38}
        speed={1.6}
      />
    </mesh>
  )
}

function ScreenPlane({
  color,
  position,
  rotationSpeed,
  size = 2.5,
}: {
  color: string
  position: [number, number, number]
  rotationSpeed: number
  size?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * rotationSpeed
  })
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.22}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#00B7C3" />
      <pointLight position={[-4, -2, 3]} intensity={40} color="#E8447A" />
      <pointLight position={[0, 4, -3]} intensity={20} color="#F5C400" />

      <ScreenPlane color="#00B7C3" position={[-0.9, 0.4, -0.6]} rotationSpeed={0.12} />
      <ScreenPlane color="#E8447A" position={[0.8, -0.3, -0.4]} rotationSpeed={-0.09} />
      <ScreenPlane color="#F5C400" position={[0.1, 0.7, -1]} rotationSpeed={0.07} size={2} />

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
        <InkBlob />
      </Float>

      <Sparkles count={60} scale={4.5} size={2} speed={0.25} color="#EDE9DE" opacity={0.5} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
    </>
  )
}

export function InkLayers3D() {
  return (
    <div className="w-full h-full" role="img" aria-label="Rotating 3D animation of layered cyan, magenta and yellow print screens around a distorting ink blob">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
