
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophia Rodriguez",
      role: "First-time Homebuyer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      text: "The VR tours saved me so much time! I could tour dozens of properties from my couch and only visit the ones I truly loved in person."
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Real Estate Investor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      text: "As an investor managing properties across multiple states, the AR visualization tools have been game-changing for my business."
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Interior Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      text: "The AR furniture placement feature helps my clients visualize designs immediately. It's revolutionized our consultation process."
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Relocating Professional",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      text: "When relocating across the country, being able to tour homes virtually made the whole process stress-free and efficient."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Client <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from clients who have transformed their real estate journey with our AR and VR technologies.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          {/* Testimonial Slider */}
          <motion.div 
            ref={slideRef}
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-4">
                <div className="ar-card flex flex-col items-center text-center p-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-astral-purple/30">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-6">{testimonial.text}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-playfair font-bold text-xl">{testimonial.name}</h4>
                    <p className="text-astral-light">{testimonial.role}</p>
                  </div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-8 left-8 opacity-10">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7V4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V10C3 10.5523 3.44772 11 4 11H7C7.55228 11 8 11.4477 8 12V16C8 16.5523 7.55228 17 7 17H4C3.44772 17 3 16.5523 3 16V13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 7V4C21 3.44772 20.5523 3 20 3H14C13.4477 3 13 3.44772 13 4V10C13 10.5523 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V16C18 16.5523 17.5523 17 17 17H14C13.4477 17 13 16.5523 13 16V13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-gradient-to-r from-astral-purple to-astral-pink scale-125" 
                    : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -z-10 -top-20 -left-20 w-64 h-64 rounded-full bg-astral-purple/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 rounded-full bg-astral-pink/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
