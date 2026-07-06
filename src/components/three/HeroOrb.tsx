"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Ashima 3D simplex noise, displaces vertices along normals; warp amount
// rises as the cursor moves so the orb visibly reacts to the visitor.
const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uWarp;
uniform vec2 uPointer;
varying vec3 vNormal;
varying float vNoise;

vec3 mod289(vec3 x){return x - floor(x * (1.0/289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0/289.0)) * 289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
  vNormal = normalize(normalMatrix * normal);
  // Cursor side of the orb bulges harder than the far side
  float facing = dot(normalize(normal.xy), normalize(uPointer + vec2(0.0001)));
  float amp = 0.18 + uWarp * (0.28 + 0.22 * max(facing, 0.0));
  float n = snoise(normal * 1.6 + vec3(uTime * 0.25));
  n += 0.5 * snoise(normal * 3.4 - vec3(uTime * 0.4));
  vNoise = n;
  vec3 displaced = position + normal * n * amp;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
`;

const fragmentShader = /* glsl */ `
uniform float uTime;
varying vec3 vNormal;
varying float vNoise;

void main() {
  vec3 viewDir = vec3(0.0, 0.0, 1.0);
  float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.2);
  vec3 base = vec3(0.012, 0.02, 0.045);
  vec3 cyan = vec3(0.13, 0.83, 0.93);
  vec3 violet = vec3(0.55, 0.36, 0.96);
  vec3 rim = mix(cyan, violet, smoothstep(-0.6, 0.9, vNoise));
  vec3 color = base + rim * fresnel * 1.6 + rim * 0.06;
  gl_FragColor = vec4(color, 0.92);
}
`;

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  const uniforms = useRef({
    uTime: { value: 0 },
    uWarp: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
  });
  const lastPointer = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    const u = uniforms.current;
    u.uTime.value += delta;
    // Warp spikes with cursor velocity, then relaxes
    const velocity = state.pointer.distanceTo(lastPointer.current) / Math.max(delta, 1e-4);
    lastPointer.current.copy(state.pointer);
    const target = Math.min(0.2 + velocity * 0.35, 1.4);
    u.uWarp.value = THREE.MathUtils.lerp(u.uWarp.value, target, 0.06);
    u.uPointer.value.lerp(state.pointer, 0.08);
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.12;
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        -state.pointer.y * 0.35,
        0.05,
      );
      mesh.current.rotation.z = THREE.MathUtils.lerp(
        mesh.current.rotation.z,
        state.pointer.x * 0.25,
        0.05,
      );
    }
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.35, 96]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function HeroOrb({ className = "" }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
    const el = container.current;
    if (!el) return;
    // Stop the render loop once the hero scrolls out of view
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} aria-hidden className={className}>
      {enabled ? (
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          dpr={dpr}
          frameloop={active ? "always" : "never"}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          eventSource={typeof document !== "undefined" ? document.body : undefined}
          eventPrefix="client"
        >
          <PerformanceMonitor
            onIncline={() => setDpr(Math.min(1.75, window.devicePixelRatio))}
            onDecline={() => setDpr(1)}
          />
          <Orb />
        </Canvas>
      ) : (
        // Reduced-motion fallback: static glow
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 35%, rgba(34,211,238,0.35), rgba(139,92,246,0.18) 55%, transparent 72%)",
            filter: "blur(2px)",
          }}
        />
      )}
    </div>
  );
}
