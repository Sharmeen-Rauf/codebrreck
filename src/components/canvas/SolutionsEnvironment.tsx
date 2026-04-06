"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function SolutionsEnvironment({ position, visible }: { position: [number, number, number], visible: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state: any) => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  // Nodes for the abstract neural network
  const nodes = Array.from({ length: 20 }).map(() => [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 8
  ] as [number, number, number]);

  return (
    <group position={position} ref={groupRef} visible={visible}>
      {nodes.map((pos, i) => (
        <Sphere key={'node-'+i} args={[0.08, 16, 16]} position={pos}>
          <meshBasicMaterial color="#00f0ff" />
        </Sphere>
      ))}

      {nodes.map((pos, i) => {
        // Connect to a few other nodes
        const connections = [];
        for (let j = 0; j < 3; j++) {
          const target = nodes[Math.floor(Math.random() * nodes.length)];
          if (target !== pos) {
            connections.push(
              <Line 
                key={`line-${i}-${j}`} 
                points={[pos, target]} 
                color="#ffffff" 
                lineWidth={0.5} 
                transparent 
                opacity={0.2} 
              />
            );
          }
        }
        return connections;
      })}
    </group>
  );
}
