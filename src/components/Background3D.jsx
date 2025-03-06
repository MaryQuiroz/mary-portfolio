import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Componente de partículas
const ParticleField = ({ count = 1000, color = "#00FF7F" }) => {
  const points = useRef();
  
  // Generar posiciones aleatorias para las partículas
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, [count]);
  
  // Animar las partículas
  useFrame((state) => {
    const { clock } = state;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3 + 1] += Math.sin(clock.elapsedTime * 0.2 + i * 0.1) * 0.01;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Componente principal de fondo
const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-dark">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Background3D; 