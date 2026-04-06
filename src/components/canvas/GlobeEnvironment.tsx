"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function GlobeEnvironment({ position, visible }: { position: [number, number, number], visible: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state: any) => {
    if (meshRef.current && visible) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group position={position} visible={visible}>
      {/* Wireframe Globe */}
      <Sphere ref={meshRef} args={[3, 32, 32]}>
        <meshBasicMaterial 
          color="#00f0ff" 
          wireframe={true} 
          transparent 
          opacity={0.15} 
        />
      </Sphere>
      
      {/* Solid Inner Core */}
      <Sphere args={[2.8, 32, 32]}>
        <meshStandardMaterial 
          color="#000000" 
          metalness={1} 
          roughness={0.2} 
        />
      </Sphere>
    </group>
  );
}
