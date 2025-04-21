import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const PropertyCard = ({
  image,
  title,
  price,
  beds,
  baths,
  sqft,
  location,
}) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="ar-card overflow-hidden"
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-md h-48 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 m-3">
          <span className="px-2 py-1 text-xs font-semibold glassmorphic text-white rounded-full">
            Virtual Tour
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-playfair font-semibold text-lg">{title}</h3>
          <span className="text-gradient font-bold">{price}</span>
        </div>

        <p className="text-gray-300 text-sm">{location}</p>

        <div className="flex justify-between text-sm text-gray-300">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          <span>{sqft} sqft</span>
        </div>

        <div className="pt-3 flex gap-3">
          <Button
            className="w-full neon-border overflow-hidden"
            variant="outline"
          >
            <span className="relative z-10">Details</span>
          </Button>
          <Button
            className="cta-button flex items-center gap-2"
          >
            <Eye size={16} /> View in VR
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
