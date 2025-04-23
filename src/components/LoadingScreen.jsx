import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 3D Building for loading animation
const LoadingModel = () => {
  const groupRef = useRef(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the building continuously
      groupRef.current.rotation.y += 0.01;
      
      // Add a subtle floating effect
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      groupRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      groupRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Base of the building */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#1A1F2C" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Middle section */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <meshStandardMaterial color="#9b87f5" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Top section */}
      <mesh position={[0, 2.25, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#D946EF" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.9, 1, 4]} />
        <meshStandardMaterial color="#1EAEDB" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

const LoadingScreen = ({ 
  progress = 0, 
  isLoading = true,
  text = "Loading Experience"
}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      // If external progress is provided, use it
      if (progress > 0) {
        setLoadingProgress(progress);
      } else {
        // Otherwise simulate loading
        const interval = setInterval(() => {
          setLoadingProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 1;
          });
        }, 50);
        
        return () => clearInterval(interval);
      }
    }
  }, [isLoading, progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-astral-dark flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="w-full max-w-md flex flex-col items-center justify-center px-6">
            <div className="w-48 h-48 mb-8">
              <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 8], fov: 45 }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5EBBFF" />
                
                <LoadingModel />
                
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
              </Canvas>
            </div>
            
            <motion.div 
              className="w-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-center font-playfair font-bold text-2xl mb-1">{text}</h2>
              <p className="text-center text-gray-400 text-sm mb-6">
                Preparing your immersive experience...
              </p>
              
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-astral-purple to-astral-pink"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-sm text-gray-400">{Math.floor(loadingProgress)}%</span>
              </div>
            </motion.div>
            
            <motion.div
              className="text-sm text-gray-400 text-center max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>For the best experience, please ensure your device supports WebGL and 3D rendering.</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
