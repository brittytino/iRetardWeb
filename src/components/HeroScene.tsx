"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function HeroMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.8, 1), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.3 + mouse.current.y * 0.3;
    meshRef.current.rotation.y = Math.cos(t * 0.1) * 0.3 + mouse.current.x * 0.3;
    meshRef.current.rotation.z = Math.sin(t * 0.08) * 0.1;
  });

  const handlePointerMove = (e: { point: THREE.Vector3 }) => {
    mouse.current.x = (e.point.x / viewport.width) * 2;
    mouse.current.y = (e.point.y / viewport.height) * 2;
  };

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        geometry={geometry}
        onPointerMove={handlePointerMove}
      >
        <meshBasicMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#c6ff00"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
    </Float>
  );
}

function InnerGlow() {
  return (
    <mesh>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshBasicMaterial color="#00e5ff" transparent opacity={0.03} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <HeroMesh />
        <InnerGlow />
      </Canvas>
    </div>
  );
}
