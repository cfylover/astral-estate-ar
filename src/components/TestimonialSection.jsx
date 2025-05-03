
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    id: 1,
    text: "Astral Estate AR has completely transformed how we showcase properties. Our clients are amazed by the immersive experience.",
    author: "Sarah Johnson",
    role: "Real Estate Agent",
    company: "Luxury Realty Group"
  },
  {
    id: 2,
    text: "The virtual tours allowed me to explore multiple properties from my home before making the trip to see my favorite in person. Saved so much time!",
    author: "Michael Chen",
    role: "Property Buyer",
    company: ""
  },
  {
    id: 3,
    text: "As a property developer, this technology has increased our sales by 30%. The AR visualization of unbuilt properties is simply incredible.",
    author: "James Petersen",
    role: "CEO",
    company: "Modern Home Developments"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
          Client Testimonials
        </h2>
        
        <div className="relative mt-16">
          <div className="ar-card max-w-4xl mx-auto">
            <div className="flex flex-col space-y-6">
              <p className="text-lg md:text-xl italic text-white/80">
                "{testimonials[activeIndex].text}"
              </p>
              
              <Separator className="bg-white/10" />
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-sm text-white/70">
                    {testimonials[activeIndex].role}
                    {testimonials[activeIndex].company && (
                      <span>, {testimonials[activeIndex].company}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-astral-purple" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
