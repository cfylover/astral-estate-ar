
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="ar-card"
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5, 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(155, 135, 245, 0.3)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      <div className="mb-4">
        <motion.div 
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-astral-purple/20 to-astral-pink/20"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </div>
      
      <h3 className="text-xl font-playfair font-semibold mb-3">{title}</h3>
      
      <p className="text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="mt-4">
        <motion.button
          className="text-astral-light flex items-center gap-1 text-sm font-medium"
          whileHover={{ x: 5 }}
        >
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
