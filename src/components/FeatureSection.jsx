import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  // Feature data
  const features = [
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V12V10.5" />
          <path d="M15 3.5V7C15 7.55228 15.4477 8 16 8H19.5" />
          <path d="M19 8L15 3.5" />
          <path d="M8 10H16" />
          <path d="M8 14H16" />
          <path d="M8 18H16" />
        </svg>
      ),
      title: "Virtual Property Tours",
      description: "Walk through properties virtually from anywhere in the world with our immersive 3D tours."
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#D946EF" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
          <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
          <path d="M12 18.5V22" />
          <path d="M7 4.34l1.51 1.52" />
          <path d="M4.34 7L5.86 8.5" />
          <path d="M2 12h3.5" />
          <path d="M4.34 17l1.52-1.5" />
          <path d="M7 19.66l1.51-1.52" />
          <path d="M12 22v-3.5" />
          <path d="M15.5 19.66l1.52-1.52" />
          <path d="M18.5 17l1.52-1.5" />
          <path d="M22 12h-3.5" />
          <path d="M20.66 7l-1.52 1.5" />
          <path d="M18.5 4.34l-1.52 1.52" />
        </svg>
      ),
      title: "AR Furniture Placement",
      description: "Visualize how furniture fits in a space before you buy with our AR furniture placement tool."
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#1EAEDB" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <rect width="7" height="5" x="7" y="7" rx="1" />
          <rect width="7" height="5" x="10" y="12" rx="1" />
        </svg>
      ),
      title: "3D Floor Plans",
      description: "Explore property layouts with interactive 3D floor plans that provide accurate spatial awareness."
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#F97316" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Neighborhood Insights",
      description: "View neighborhood information in AR when you point your camera at nearby properties and landmarks."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Experience Real Estate in <span className="text-gradient">AR & VR</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our cutting-edge immersive technologies transform how you search for and experience properties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
