"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

function randomInSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Rejection-free spherical distribution, biased outward so the center stays clear
    const r = radius * (0.35 + 0.65 * Math.cbrt(Math.random()));
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function StarLayer({
  count,
  radius,
  size,
  color,
  speed,
  scrollRef,
}: {
  count: number;
  radius: number;
  size: number;
  color: string;
  speed: number;
  scrollRef: React.RefObject<number>;
}) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => randomInSphere(count, radius), [count, radius]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Slow ambient drift
    ref.current.rotation.y += delta * 0.015 * speed;
    // Cursor parallax — each layer moves at a different rate for depth
    const px = state.pointer.x * 0.35 * speed;
    const py = state.pointer.y * 0.25 * speed;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, py, 0.04);
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, -px, 0.04);
    // Scroll pushes the field past the camera like flying through it
    ref.current.position.z = (scrollRef.current ?? 0) * 2.2 * speed;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Starfield({ dense = true }: { dense?: boolean }) {
  const scrollRef = useRef(0);

  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 70 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#030509");
      }}
      // Track normalized scroll progress without re-rendering React
      onPointerMissed={() => {}}
    >
      <ScrollTracker scrollRef={scrollRef} />
      <StarLayer
        count={dense ? 2600 : 900}
        radius={4}
        size={0.006}
        color="#9fd8e8"
        speed={1}
        scrollRef={scrollRef}
      />
      <StarLayer
        count={dense ? 1400 : 500}
        radius={6}
        size={0.01}
        color="#67e8f9"
        speed={0.6}
        scrollRef={scrollRef}
      />
      <StarLayer
        count={dense ? 700 : 250}
        radius={8}
        size={0.014}
        color="#a78bfa"
        speed={0.35}
        scrollRef={scrollRef}
      />
    </Canvas>
  );
}

function ScrollTracker({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  useFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollRef.current = max > 0 ? window.scrollY / max : 0;
  });
  return null;
}
