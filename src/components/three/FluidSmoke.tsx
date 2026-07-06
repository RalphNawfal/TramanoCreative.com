"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Full-screen smoky noise plane. The cursor injects energy that ripples
// outward and slowly dissipates — the Lusion-style "fluid" backdrop.
const fragmentShader = /* glsl */ `
uniform float uTime;
uniform vec2 uMouse;
uniform float uStrength;
uniform float uAspect;
varying vec2 vUv;

vec2 hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(dot(hash(i), f), dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)), dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = p * 2.05 + vec2(13.7, 7.3);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  vec2 m = vec2(uMouse.x * uAspect, uMouse.y);
  float d = distance(p, m);

  // Expanding, decaying ripple around the cursor
  float ripple = sin(d * 26.0 - uTime * 4.2) * exp(-d * 5.0) * uStrength;
  vec2 dir = (p - m) / max(d, 0.0001);
  vec2 warp = dir * ripple * 0.14;

  float n = fbm((p + warp) * 2.4 + vec2(uTime * 0.045, -uTime * 0.03));
  n += 0.45 * fbm(p * 4.8 - vec2(0.0, uTime * 0.05) + warp * 2.0);

  vec3 cyan = vec3(0.13, 0.83, 0.93);
  vec3 violet = vec3(0.55, 0.36, 0.96);
  vec3 tint = mix(cyan, violet, smoothstep(-0.35, 0.5, n));

  float smoke = smoothstep(0.12, 0.75, n) * 0.10;
  float glow = max(ripple, 0.0) * 0.5 + abs(ripple) * 0.18;
  gl_FragColor = vec4(tint, smoke + glow);
}
`;

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export default function FluidSmoke() {
  const { viewport, camera } = useThree();
  const lastPointer = useRef(new THREE.Vector2(0, 0));
  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uStrength: { value: 0 },
    uAspect: { value: 1 },
  });

  const plane = useMemo(() => {
    const v = viewport.getCurrentViewport(camera, new THREE.Vector3(0, 0, -2));
    return { width: v.width * 1.05, height: v.height * 1.05 };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport.width, viewport.height, camera]);

  useFrame((state, delta) => {
    const u = uniforms.current;
    u.uTime.value += delta;
    u.uAspect.value = state.size.width / state.size.height;
    // pointer is -1..1; shader wants 0..1
    u.uMouse.value.lerp(
      new THREE.Vector2((state.pointer.x + 1) / 2, (state.pointer.y + 1) / 2),
      0.09,
    );
    // Cursor speed injects energy; it dissipates slowly on its own
    const speed = state.pointer.distanceTo(lastPointer.current) / Math.max(delta, 1e-4);
    lastPointer.current.copy(state.pointer);
    const target = Math.min(speed * 0.5, 1.2);
    u.uStrength.value =
      target > u.uStrength.value
        ? THREE.MathUtils.lerp(u.uStrength.value, target, 0.12)
        : THREE.MathUtils.lerp(u.uStrength.value, 0, 0.015);
  });

  return (
    <mesh position={[0, 0, -2]} scale={[plane.width, plane.height, 1]} frustumCulled={false}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
