import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

const PropertySection = () => {
  // Sample properties data (in a real app, this would come from an API)
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Modern Luxury Villa",
      price: "$2,850,000",
      beds: 5,
      baths: 4.5,
      sqft: 4200,
      location: "Beverly Hills, CA"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      title: "Skyline Penthouse",
      price: "$3,200,000",
      beds: 3,
      baths: 3,
      sqft: 2800,
      location: "Downtown Manhattan, NY"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80",
      title: "Coastal Beach House",
      price: "$1,950,000",
      beds: 4,
      baths: 3,
      sqft: 3100,
      location: "Malibu, CA"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Urban Smart Loft",
      price: "$875,000",
      beds: 2,
      baths: 2,
      sqft: 1500,
      location: "Seattle, WA"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-astral-dark/50 to-astral-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Featured <span className="text-gradient">Properties</span>
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Explore our handpicked selection of premium properties, each offering immersive AR and VR experiences.
            </p>
          </div>
          
          <motion.button
            className="mt-6 md:mt-0 text-astral-light flex items-center gap-1 text-lg font-medium"
            whileHover={{ x: 5 }}
          >
            View all properties
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              price={property.price}
              beds={property.beds}
              baths={property.baths}
              sqft={property.sqft}
              location={property.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
