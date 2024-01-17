import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Cylinder } from "@react-three/drei";
import { GanekLogo } from "../converted/GanekLogo";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Logo() {
  return (
    <Canvas
      camera={{ fov: 45, position: [0, 2, 5], lookat: [0,0,0] }}
      gl={{
        powerPreference: "high-performance",
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}
    >
      <color attach="background" args={["#050505"]} />
      <fog color="#161616" attach="fog" near={8} far={30} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[0, 1, 1]} intensity={10} />

      <GanekLogo position={[0, 0, 0]} />

      {/* <Cylinder scale={[.1, 50, .1]} position={[0,0,0]} rotation={[0, 0, 9]} /> */}

      {/* <OrbitControls /> */}
      {/* <Environment preset="dawn" background blur={0.6} /> */}
      <EffectComposer multisampling={0} disableNormalPass={true}>
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        /> */}
        {/* <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={50}
          height={300}
          opacity={10}
        /> */}
        <Noise opacity={0.05} />
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
    </Canvas>
  );
}
