
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const AuthCard = ({ isFlipped }) => {
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

export default AuthCard;
