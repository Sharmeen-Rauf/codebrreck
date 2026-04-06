"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export default function WorkEnvironment({ position, visible }: { position: [number, number, number], visible: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state: any) => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group position={position} ref={groupRef} visible={visible}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron args={[1.5, 0]} position={[-3, 0, 0]}>
          <MeshDistortMaterial 
            color="#1a1a1a" 
            metalness={0.8} 
            roughness={0.2} 
            envMapIntensity={1} 
            distort={0.4} 
            speed={2} 
          />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Icosahedron args={[2, 0]} position={[0, 1, -2]}>
          <MeshDistortMaterial 
            color="#000000" 
            metalness={0.9} 
            roughness={0.1} 
            envMapIntensity={2} 
            distort={0.2} 
            speed={1} 
          />
        </Icosahedron>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <Icosahedron args={[1.2, 0]} position={[3, -1, 1]}>
           <MeshDistortMaterial 
            color="#ffffff" 
            metalness={0.5} 
            roughness={0.3} 
            envMapIntensity={1} 
            distort={0.5} 
            speed={3} 
          />
        </Icosahedron>
      </Float>
    </group>
  );
}
