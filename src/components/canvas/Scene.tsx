"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Suspense } from "react";
import Particles from "./Particles";
import HeroEnvironment from "./HeroEnvironment";
import SolutionsEnvironment from "./SolutionsEnvironment";
import WorkEnvironment from "./WorkEnvironment";
import GlobeEnvironment from "./GlobeEnvironment";
import { useSceneContext } from "@/context/SceneContext";

export default function Scene() {
  const { section } = useSceneContext();

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00f0ff" />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Particles count={300} />
          
          {/* Render environments without className on group */}
          <group position={[0, -section * 10, 0]}>
            <HeroEnvironment position={[0, 0, 0]} visible={section === 0} />
            <SolutionsEnvironment position={[0, -10, 0]} visible={section === 1} />
            <WorkEnvironment position={[0, -20, 0]} visible={section === 2} />
            <GlobeEnvironment position={[0, -30, 0]} visible={section === 3} />
          </group>

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
