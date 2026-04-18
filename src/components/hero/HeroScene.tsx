"use client";

import { useRef, useMemo, useEffect } from "react";
import type { ElementRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FloatingOrb({ position, scale, color, emissive, distort, speed }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<ElementRef<typeof MeshDistortMaterial>>(null);
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          if (meshRef.current) {
             meshRef.current.position.y = position[1] + self.progress * 3;
          }
        },
      });
    });
    return () => ctx.revert();
  }, [position]);

  const geometry = useMemo(() => new THREE.SphereGeometry(1, 64, 64), []);

  useFrame(() => {
    if (!materialRef.current || !meshRef.current) return;
    
    // Pointer influence (subtle rotation)
    const targetRotX = mouse.current.y * 0.2;
    const targetRotY = mouse.current.x * 0.2;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <MeshDistortMaterial
          ref={materialRef}
          color={color}
          emissive={emissive}
          emissiveIntensity={0.8}
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-[100vh] overflow-hidden" aria-hidden="true">
      {/* Background ambient gradient blur */}
      <div className="absolute inset-0 bg-[#030303] z-[-2]" />
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-gradient-to-b from-[rgba(138,43,226,0.15)] to-transparent z-[-1] blur-3xl pointer-events-none" />
      
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#00e5ff" />
        <directionalLight position={[-5, -5, 5]} intensity={2} color="#ff007f" />
        <pointLight position={[0, 0, -2]} intensity={1} color="#8a2be2" />
        <fog attach="fog" args={["#030303", 5, 15]} />
        
        {/* Main large orb */}
        <FloatingOrb 
          position={[1.5, 0, 0]} 
          scale={2.5} 
          color="#000" 
          emissive="#8a2be2" 
          distort={0.4} 
          speed={2} 
        />
        
        {/* Secondary smaller orb */}
        <FloatingOrb 
          position={[-2.5, 1, -2]} 
          scale={1.5} 
          color="#000" 
          emissive="#ff007f" 
          distort={0.6} 
          speed={3} 
        />
        
        {/* Distant small orb */}
        <FloatingOrb 
          position={[0, -2, -3]} 
          scale={1} 
          color="#000" 
          emissive="#00e5ff" 
          distort={0.5} 
          speed={4} 
        />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_110%)] mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
