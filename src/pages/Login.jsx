
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import AuthBackground from "@/components/auth/AuthBackground";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden px-6 py-10 bg-gradient-to-b from-astral-dark to-black">
      {/* Background glow effects */}
      <div className="absolute z-0 top-0 left-0 right-0 h-40 bg-gradient-to-b from-astral-purple/10 to-transparent"></div>
      <div className="absolute z-0 bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-astral-pink/10 to-transparent"></div>
      
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <AuthBackground />
        </Canvas>
      </div>
      
      <div className="container max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <Link to="/" className="inline-block">
            <h1 className="text-4xl text-gradient font-playfair font-bold">Real Eastate</h1>
          </Link>
        </motion.div>
        
        <div className="relative h-[500px] w-full">
          {/* 3D Card Background */}
          <div className="absolute inset-0">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <AuthCard isFlipped={isFlipped} />
            </Canvas>
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full glassmorphic rounded-lg overflow-hidden backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {!isFlipped ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <LoginForm onFlip={toggleFlip} />
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RegisterForm onFlip={toggleFlip} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
