
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Floating Building component
const FloatingBuilding = () => {
  const mesh = useRef(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
      mesh.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        metalness={0.8}
        roughness={0.2}
        emissive="#5EBBFF"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Sky box with stars
const Background = () => {
  const { scene } = useThree();
  
  useEffect(() => {
    scene.background = new THREE.Color("#0f1021");
  }, [scene]);
  
  return null;
};

// Main scene component
const Scene = () => {
  return (
    <>
      <Background />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9F6EFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5EBBFF" />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <FloatingBuilding />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        rotateSpeed={0.1}
        autoRotate 
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// Wrapper component with Framer Motion
const ThreeBackground = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`w-full h-full absolute top-0 left-0 ${className}`}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
};

export default ThreeBackground;
