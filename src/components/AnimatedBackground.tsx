import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FloatingCube = ({ 
  position, 
  size,
  rotationSpeed,
  floatSpeed,
  floatRange,
  delay = 0
}: { 
  position: [number, number, number];
  size: number;
  rotationSpeed: number;
  floatSpeed: number;
  floatRange: number;
  delay?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay;
      
      meshRef.current.rotation.x = time * rotationSpeed;
      meshRef.current.rotation.y = time * rotationSpeed * 0.8;
      meshRef.current.rotation.z = time * rotationSpeed * 0.5;
      
      meshRef.current.position.y = initialPos.current[1] + Math.sin(time * floatSpeed) * floatRange;
      meshRef.current.position.x = initialPos.current[0] + Math.cos(time * floatSpeed * 0.7) * (floatRange * 0.3);
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#c8ff00",
    metalness: 0.8,
    roughness: 0.2,
    transparent: true,
    opacity: 0.15,
    wireframe: true
  }), []);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <boxGeometry args={[size, size, size]} />
    </mesh>
  );
};

const SolidCube = ({ 
  position, 
  size,
  rotationSpeed,
  floatSpeed,
  delay = 0
}: { 
  position: [number, number, number];
  size: number;
  rotationSpeed: number;
  floatSpeed: number;
  delay?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay;
      
      meshRef.current.rotation.x = time * rotationSpeed;
      meshRef.current.rotation.y = time * rotationSpeed * 1.2;
      
      meshRef.current.position.y = initialPos.current[1] + Math.sin(time * floatSpeed) * 2;
      meshRef.current.position.x = initialPos.current[0] + Math.sin(time * floatSpeed * 0.5) * 0.5;
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#c8ff00",
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.08,
    emissive: "#c8ff00",
    emissiveIntensity: 0.1
  }), []);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <boxGeometry args={[size, size, size]} />
    </mesh>
  );
};

const FloatingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesCount = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  const material = useMemo(() => new THREE.PointsMaterial({
    color: "#c8ff00",
    size: 0.05,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.4
  }), []);

  return (
    <points ref={pointsRef} material={material}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
    </points>
  );
};

const AnimatedBackground = () => {
  const cubes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 70,
          -8 - Math.random() * 15
        ] as [number, number, number],
        size: 0.4 + Math.random() * 1,
        rotationSpeed: 0.1 + Math.random() * 0.3,
        floatSpeed: 0.2 + Math.random() * 0.4,
        floatRange: 1 + Math.random() * 2,
        delay: Math.random() * 10
      });
    }
    return arr;
  }, []);

  const solidCubes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 60,
          -10 - Math.random() * 12
        ] as [number, number, number],
        size: 0.8 + Math.random() * 1.5,
        rotationSpeed: 0.05 + Math.random() * 0.15,
        floatSpeed: 0.1 + Math.random() * 0.2,
        delay: Math.random() * 10
      });
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#c8ff00" />
        <pointLight position={[-10, -10, 10]} intensity={0.3} color="#ffffff" />
        
        <FloatingParticles />
        
        {cubes.map((cube, i) => (
          <FloatingCube
            key={`wire-${i}`}
            position={cube.position}
            size={cube.size}
            rotationSpeed={cube.rotationSpeed}
            floatSpeed={cube.floatSpeed}
            floatRange={cube.floatRange}
            delay={cube.delay}
          />
        ))}
        
        {solidCubes.map((cube, i) => (
          <SolidCube
            key={`solid-${i}`}
            position={cube.position}
            size={cube.size}
            rotationSpeed={cube.rotationSpeed}
            floatSpeed={cube.floatSpeed}
            delay={cube.delay}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
