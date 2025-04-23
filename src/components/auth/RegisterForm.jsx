
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "./SocialLogin";

const RegisterForm = ({ onFlip }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-playfair font-bold">Create Account</h2>
        <p className="text-gray-300 text-sm">Join to experience properties in AR & VR</p>
      </div>
      
      <form className="space-y-4 flex-1">
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="register-name">Full Name</label>
          <div className="relative">
            <Input
              id="register-name"
              type="text"
              placeholder="Enter your name"
              className="bg-white/5 border-white/10 pl-10"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="register-email">Email</label>
          <div className="relative">
            <Input
              id="register-email"
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border-white/10 pl-10"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="register-password">Password</label>
          <div className="relative">
            <Input
              id="register-password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="bg-white/5 border-white/10 pl-10"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm text-gray-300">
            I agree to the{" "}
            <Link to="/terms" className="text-astral-light hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link to="/privacy" className="text-astral-light hover:underline">Privacy Policy</Link>
          </label>
        </div>
        
        <Button className="w-full cta-button">Create Account</Button>
        
        <SocialLogin />
      </form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-300">
          Already have an account?{" "}
          <button
            onClick={onFlip}
            className="text-astral-light hover:underline font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
