
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const VRSection = () => {
  return (
    <section className="py-24 px-6 overflow-hidden relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-astral-dark via-astral-dark/80 to-transparent z-0" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-[-1] opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1626387350805-a6be679347c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Immersive <span className="text-gradient">VR Tours</span> From Anywhere
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Experience properties as if you were there in person. Our VR tours provide an immersive, interactive experience that lets you explore every corner of a property from anywhere in the world.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "360° room-by-room exploration",
                "Interactive hotspots with property details",
                "High-definition visual quality",
                "Compatible with all major VR headsets",
                "Mobile-friendly viewing options"
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-astral-purple to-astral-pink flex items-center justify-center text-white">
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
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button">
                Try VR Tour Demo
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border border-white/20 text-white hover:bg-white/10"
              >
                How It Works
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] glassmorphic p-1">
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=996&q=80"
                alt="VR Headset"
                className="w-full h-full object-cover rounded-lg"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-astral-purple to-astral-pink flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-white ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </motion.div>
              </div>
            </div>
            
            {/* Floating decoration elements */}
            <motion.div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-astral-purple/20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-astral-pink/20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                duration: 5,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VRSection;
