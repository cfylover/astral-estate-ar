
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

const AuthBackground = () => {
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

export default AuthBackground;
