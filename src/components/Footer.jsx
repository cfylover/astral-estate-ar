
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 px-6 bg-gradient-to-t from-black to-transparent">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl text-gradient font-playfair font-bold">Real Eastate</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Experience the future of real estate with immersive AR and VR technologies that transform how you discover and explore properties.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-astral-purple/20 transition-colors"
                whileHover={{ y: -5 }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-astral-light" />
              </motion.a>
              <motion.a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-astral-purple/20 transition-colors"
                whileHover={{ y: -5 }}
                aria-label="Twitter"
              >
                {/* Since twitter icon is not allowed from lucide-react icons per instructions, replace with Instagram or skip */}
                <Instagram className="w-5 h-5 text-astral-light" />
              </motion.a>
              <motion.a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-astral-purple/20 transition-colors"
                whileHover={{ y: -5 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-astral-light" />
              </motion.a>
              <motion.a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-astral-purple/20 transition-colors"
                whileHover={{ y: -5 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-astral-light" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Properties", path: "/properties" },
                { name: "AR Experiences", path: "/ar-explore" },
                { name: "VR Tours", path: "/vr-tours" },
                { name: "News & Updates", path: "/news" },
                { name: "About Us", path: "/about" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-astral-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
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
                  className="text-astral-light mt-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>1234 Tech Lane, Silicon Valley<br />CA 94043, USA</span>
              </li>
              <li className="flex items-center gap-3">
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
                  className="text-astral-light"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
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
                  className="text-astral-light"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>info@realeastate.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new properties and features.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              <Button className="w-full cta-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Real Eastate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
