import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function ParticleConstellation({ theme }) {
  const pointsRef = useRef();
  const count = 400;
  
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sp[i] = 0.05 + Math.random() * 0.15;
    }
    return [pos, sp];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;
    
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, time * 0.03 + targetX * 0.5, 0.05);
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, time * 0.01 + targetY * 0.5, 0.05);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={theme === 'light' ? '#4f46e5' : '#818cf8'}
        size={0.06}
        sizeAttenuation={true}
        transparent
        opacity={theme === 'light' ? 0.4 : 0.6}
        blending={theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending}
      />
    </points>
  );
}

function CentralGlobe({ theme }) {
  const meshOuterRef = useRef();
  const meshInnerRef = useRef();
  const meshRingRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshOuterRef.current.rotation.y = time * 0.08;
    meshOuterRef.current.rotation.z = time * 0.04;
    
    meshInnerRef.current.rotation.y = -time * 0.12;
    meshInnerRef.current.rotation.x = time * 0.06;

    meshRingRef.current.rotation.x = time * 0.05;
    meshRingRef.current.rotation.y = time * 0.1;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Torus Ring */}
      <mesh ref={meshRingRef}>
        <torusGeometry args={[3, 0.03, 12, 64]} />
        <meshBasicMaterial
          color={theme === 'light' ? '#db2777' : '#ec4899'}
          transparent
          opacity={theme === 'light' ? 0.12 : 0.25}
          blending={theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Wireframe Globe */}
      <mesh ref={meshOuterRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial
          color={theme === 'light' ? '#9333ea' : '#a855f7'}
          wireframe
          transparent
          opacity={theme === 'light' ? 0.08 : 0.15}
          blending={theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Wireframe Globe */}
      <mesh ref={meshInnerRef}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial
          color={theme === 'light' ? '#4f46e5' : '#6366f1'}
          wireframe
          transparent
          opacity={theme === 'light' ? 0.12 : 0.25}
          blending={theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function Scene3D({ theme }) {
  const isLight = theme === 'light';
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isLight ? 0.9 : 0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        {!isLight && (
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        )}
        <ParticleConstellation theme={theme} />
        <CentralGlobe theme={theme} />
      </Canvas>
    </div>
  );
}
