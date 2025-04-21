import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ThreeBackground from "@/components/ThreeBackground";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import PropertySection from "@/components/PropertySection";
import VRSection from "@/components/VRSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Set dark background
  useEffect(() => {
    document.body.classList.add("bg-astral-dark");
    
    return () => {
      document.body.classList.remove("bg-astral-dark");
    };
  }, []);

  return (
    <main className="min-h-screen text-white">
      {/* Background 3D elements */}
      <ThreeBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* Property Section */}
      <PropertySection />
      
      {/* VR Section */}
      <VRSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
