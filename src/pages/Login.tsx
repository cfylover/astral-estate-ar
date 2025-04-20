
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";

// 3D Auth Card component
const AuthCard = ({ isFlipped }: { isFlipped: boolean }) => {
  // Create a simple card mesh
  return (
    <mesh rotation={[0, isFlipped ? Math.PI : 0, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[5, 3.5, 0.05]} />
      <meshStandardMaterial 
        color="#1A1F2C" 
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.7}
      />

      {/* Glow effect */}
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[5.1, 3.6, 0.01]} />
        <meshBasicMaterial 
          color={isFlipped ? "#D946EF" : "#8B5CF6"} 
          opacity={0.2}
          transparent
        />
      </mesh>
    </mesh>
  );
};

// Background elements
const BackgroundElements = () => {
  // Create floating objects in the background
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5EBBFF" />
      
      {/* Floating sphere */}
      <mesh position={[-3, 2, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#8B5CF6" 
          metalness={0.9}
          roughness={0.1}
          emissive="#8B5CF6"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Floating cube */}
      <mesh position={[3, -2, -3]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color="#D946EF" 
          metalness={0.9}
          roughness={0.1}
          emissive="#D946EF"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Floating torus */}
      <mesh position={[2.5, 1.5, -4]} rotation={[1, 0.5, 0]}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial 
          color="#1EAEDB" 
          metalness={0.9}
          roughness={0.1}
          emissive="#1EAEDB"
          emissiveIntensity={0.2}
        />
      </mesh>
    </>
  );
};

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
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
          <BackgroundElements />
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
                  className="p-8 h-full flex flex-col"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-playfair font-bold">Welcome Back</h2>
                    <p className="text-gray-300 text-sm">Login to continue your immersive experience</p>
                  </div>
                  
                  <form className="space-y-4 flex-1">
                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="email">Email</label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-white/5 border-white/10 pl-10"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="password">Password</label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="bg-white/5 border-white/10 pl-10"
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link to="/forgot-password" className="text-sm text-astral-light hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    
                    <Button className="w-full cta-button">
                      Login
                    </Button>
                    
                    <div className="relative flex items-center justify-center mt-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative z-10 bg-astral-dark px-4 text-sm text-gray-400">
                        Or continue with
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-3">
                      {["Google", "Apple", "Facebook", "GitHub"].map((provider) => (
                        <Button
                          key={provider}
                          variant="outline"
                          className="bg-white/5 border-white/10 hover:bg-white/10"
                        >
                          <img 
                            src={`https://simpleicons.org/icons/${provider.toLowerCase()}.svg`} 
                            alt={provider} 
                            className="w-5 h-5 opacity-80" 
                          />
                        </Button>
                      ))}
                    </div>
                  </form>
                  
                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-300">
                      Don't have an account?{" "}
                      <button
                        onClick={toggleFlip}
                        className="text-astral-light hover:underline font-medium"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 h-full flex flex-col"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-playfair font-bold">Create Account</h2>
                    <p className="text-gray-300 text-sm">Join to experience properties in AR & VR</p>
                  </div>
                  
                  <form className="space-y-4 flex-1">
                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="register-name">Full Name</label>
                      <div className="relative">
                        <Input
                          id="register-name"
                          type="text"
                          placeholder="Enter your name"
                          className="bg-white/5 border-white/10 pl-10"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="register-email">Email</label>
                      <div className="relative">
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-white/5 border-white/10 pl-10"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="register-password">Password</label>
                      <div className="relative">
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="bg-white/5 border-white/10 pl-10"
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-300"
                      >
                        I agree to the{" "}
                        <Link to="/terms" className="text-astral-light hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-astral-light hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <Button className="w-full cta-button">
                      Create Account
                    </Button>
                    
                    <div className="relative flex items-center justify-center mt-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative z-10 bg-astral-dark px-4 text-sm text-gray-400">
                        Or sign up with
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-3">
                      {["Google", "Apple", "Facebook", "GitHub"].map((provider) => (
                        <Button
                          key={provider}
                          variant="outline"
                          className="bg-white/5 border-white/10 hover:bg-white/10"
                        >
                          <img 
                            src={`https://simpleicons.org/icons/${provider.toLowerCase()}.svg`} 
                            alt={provider} 
                            className="w-5 h-5 opacity-80" 
                          />
                        </Button>
                      ))}
                    </div>
                  </form>
                  
                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-300">
                      Already have an account?{" "}
                      <button
                        onClick={toggleFlip}
                        className="text-astral-light hover:underline font-medium"
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
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
