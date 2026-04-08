"use client";

import { useRef, useMemo, useEffect } from "react";
import type { ElementRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function DistortionPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<ElementRef<typeof MeshDistortMaterial>>(null);
  const { viewport } = useThree();
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
             // Camera moves "forward"
             meshRef.current.position.z = self.progress * 4;
             meshRef.current.position.y = -viewport.height / 3 - self.progress * 2;
          }
          if (materialRef.current) {
             // Grid settles down as we scroll completely flat
             materialRef.current.distort = gsap.utils.interpolate(1.2, 0.05, self.progress);
          }
        },
      });
    });
    return () => ctx.revert();
  }, [viewport.height]);

  const geometry = useMemo(() => new THREE.PlaneGeometry(30, 30, 64, 64), []);

  useFrame(() => {
    if (!materialRef.current || !meshRef.current) return;
    
    // Pointer influence (Subtle grid push)
    const targetRotX = -Math.PI / 2.5 + mouse.current.y * 0.1;
    const targetRotY = mouse.current.x * 0.1;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.05);

    // Dynamic distortion calming on hover
    const dist = Math.sqrt(mouse.current.x * mouse.current.x + mouse.current.y * mouse.current.y);
    if (materialRef.current.distort !== undefined) {
      // Base distortion shrinks as mouse approaches center
      const interactionTarget = THREE.MathUtils.mapLinear(Math.min(dist * 1.5, 1), 0, 1, 0.1, 1.2);
      // We don't want to fight the scroll trigger, so we only apply this if scroll isn't active
      // For simplicity, we just lerp toward interaction target if it's smaller.
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, interactionTarget, 0.05);
    }
  });

  return (
    <group position={[0, -viewport.height / 3, 0]} rotation={[-Math.PI / 2.5, 0, 0]}>
      <mesh ref={meshRef} geometry={geometry}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#050505"
          emissive="#00e5ff"
          emissiveIntensity={0.15}
          distort={1.2}
          speed={4}
          roughness={0.8}
          metalness={0.2}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-[100vh]" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 10, 5]} intensity={0.5} color="#00e5ff" />
        <directionalLight position={[0, -10, -5]} intensity={0.2} color="#c6ff00" />
        <fog attach="fog" args={["#050505", 2, 15]} />
        <DistortionPlane />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
