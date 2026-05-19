import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import { useRef, Suspense } from 'react'

function FloatingShape({ position, color, scale, speed }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime() * speed
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.y = t * 0.45
  })
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <Icosahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.15}
          metalness={0.85}
          emissive={color}
          emissiveIntensity={0.18}
        />
      </Icosahedron>
    </Float>
  )
}

function GlowOrb({ position, color, scale }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={3}>
      <Sphere args={[1, 32, 32]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.35}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <pointLight position={[10, 10, 10]} intensity={1.3} color="#22d3ee" />
          <pointLight position={[-10, -8, -6]} intensity={1} color="#6366f1" />
          <pointLight position={[0, 6, -8]} intensity={0.8} color="#38bdf8" />

          <Stars radius={70} depth={50} count={2600} factor={4} saturation={0} fade speed={1} />

          <FloatingShape position={[-4.6, 1.8, -2]} color="#22d3ee" scale={0.95} speed={0.6} />
          <FloatingShape position={[4.8, -1.4, -3]} color="#6366f1" scale={1.2} speed={0.4} />
          <FloatingShape position={[3.4, 2.6, -4]} color="#38bdf8" scale={0.6} speed={0.8} />
          <GlowOrb position={[-3.2, -2.4, -2]} color="#38bdf8" scale={0.7} />
          <GlowOrb position={[5.2, 1.6, -5]} color="#22d3ee" scale={1.1} />
          <GlowOrb position={[0, -3, -4]} color="#6366f1" scale={0.5} />
        </Suspense>
      </Canvas>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-ink/30 via-ink/5 to-ink pointer-events-none" />
    </div>
  )
}
