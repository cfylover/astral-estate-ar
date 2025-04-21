import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled
          ? "glassmorphic shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl text-gradient font-playfair font-bold">Real Eastate</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/ar-explore">AR Explore</NavLink>
          <NavLink to="/vr-tours">VR Tours</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button
              variant="outline"
              className="bg-transparent border-astral-light text-white hover:bg-astral-purple/20"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup" className="hidden md:block">
            <Button className="cta-button">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative text-white hover:text-astral-light transition-colors duration-300 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-astral-light group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default Navbar;
