"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create Scene, Camera & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Gradient Background
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x1D1616) }, // Dark Blue
        color2: { value: new THREE.Color(0x1D1616) }, // Light Blue
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
        }
      `,
      side: THREE.BackSide,
    });

    const backgroundGeometry = new THREE.SphereGeometry(5, 32, 32);
    const backgroundMesh = new THREE.Mesh(backgroundGeometry, gradientMaterial);
    scene.add(backgroundMesh);

    // Add Lights
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    // Create Moving Sparks (Bottom-Right to Top-Left)
    const particlesCount = 100;
    const positions = new Float32Array(particlesCount * 3);
    const speeds = new Float32Array(particlesCount); // Speed for each spark

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = Math.random() * 4 - 2; // X (random start position)
      positions[i * 3 + 1] = Math.random() * -2 - 1; // Y (bottom area)
      positions[i * 3 + 2] = Math.random() * 2 - 1; // Z depth

      speeds[i] = Math.random() * 0.005 + 0.002; // Slow, random speed
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ff00, // Green sparks
      size: 0.02, // Small glowing sparks
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    // Animation Loop (Move sparks in a wavy motion)
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01; // Increment time for sine wave effect

      const positionsArray = particlesGeometry.attributes.position.array;

      for (let i = 0; i < particlesCount; i++) {
        const index = i * 3;

        positionsArray[index] -= speeds[i]; // Move left (X direction)
        positionsArray[index + 1] += speeds[i]; // Move up (Y direction)

        // Wavy movement (Apply sine function for smooth oscillation)
        positionsArray[index] += Math.sin(time * 2 + i) * 0.005; // Sine wave effect for X
        positionsArray[index + 2] += Math.sin(time * 1.5 + i) * 0.003; // Sine wave for Z depth

        // Reset sparks when they go out of view
        if (positionsArray[index] < -2 || positionsArray[index + 1] > 2) {
          positionsArray[index] = Math.random() * 4 - 2; // Reset X position
          positionsArray[index + 1] = Math.random() * -2 - 1; // Reset to bottom
          positionsArray[index + 2] = Math.random() * 2 - 1; // Reset Z depth
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }} />;
}
