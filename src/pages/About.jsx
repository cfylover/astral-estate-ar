import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQS = [
  {
    question: "What is Real Eastate?",
    answer: "Real Eastate is a futuristic platform that merges real estate with immersive AR and VR technology for property exploration.",
  },
  {
    question: "How does AR/VR property viewing work?",
    answer: "You can explore properties using web-based augmented and virtual reality, either directly on your device or in supported headsets.",
  },
  {
    question: "Do I need special hardware?",
    answer: "No special hardware is required for AR previews. For the full VR experience, compatible headsets are recommended.",
  },
  {
    question: "Is Real Eastate available on mobile?",
    answer: "Yes! The platform is built mobile-first and optimized for smartphones and tablets with touch-friendly 3D interactions.",
  },
  {
    question: "How do I get started?",
    answer: "Browse immersive listings or sign in to book virtual tours and customize your experience.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen py-20 px-4 relative z-10 bg-gradient-to-b from-[#1A1F2C]/80 to-[#222249]/80 flex flex-col items-center">
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="max-w-3xl mx-auto bg-white/10 glassmorphic rounded-xl p-8 shadow-2xl mb-10 backdrop-blur-md border border-white/10"
      >
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">About Real Eastate</h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to <span className="font-semibold text-astral-light">Real Eastate</span>—the next evolution of property exploration. 
          Immerse yourself in luxury listings with AR &amp; VR, experience 3D walkthroughs, and connect globally from any device.
        </p>
        <ul className="list-disc text-gray-200 ml-6 space-y-2 pb-2">
          <li>🌐 Fully immersive digital tours in real time</li>
          <li>🎨 Futuristic design with glassmorphic and neon elements</li>
          <li>🕶️ Compatible with AR &amp; VR devices, but works on any screen</li>
        </ul>
      </motion.section>
      <section className="max-w-2xl w-full mx-auto mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold font-playfair text-center mb-4 text-astral-light"
        >Frequently Asked Questions</motion.h2>
        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((faq, idx) => (
            <AccordionItem 
              key={faq.question} 
              value={"faq-" + idx}
              className="bg-[#2f2356]/80 rounded-lg p-1"
            >
              <AccordionTrigger className="text-base md:text-lg font-medium text-astral-light">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <footer className="w-full max-w-2xl mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Real Eastate. All rights reserved.
      </footer>
    </main>
  );
};

export default About;
