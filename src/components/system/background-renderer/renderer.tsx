/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

const Renderer = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentMountRef = mountRef.current;

    if (!currentMountRef) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMountRef.append(renderer.domElement);

    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-10';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    const color1 = new THREE.Color(0xff_f6_e7).convertLinearToSRGB();
    const color2 = new THREE.Color(0xff_e1_af).convertLinearToSRGB();
    const uniforms = {
      color1: { value: color1 },
      color2: { value: color2 },
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const square = new THREE.Mesh(geometry, material);
    scene.add(square);

    const animate = () => {
      uniforms.time.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // eslint-disable-next-line consistent-return
    return () => {
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return (
    <div className="w-full" ref={mountRef}>
      {children}
    </div>
  );
};

export default Renderer;
