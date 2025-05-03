import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "./SocialLogin";

const LoginForm = ({ onFlip }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-playfair font-bold">Welcome Back</h2>
        <p className="text-gray-300 text-sm">Login to continue your immersive experience</p>
      </div>
      
      <form className="space-y-4 flex-1">
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border-white/10 pl-10"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="password">Password</label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm text-gray-300">Remember me</label>
          </div>
          <Link to="/forgot-password" className="text-sm text-astral-light hover:underline">
            Forgot password?
          </Link>
        </div>
        
        <Button className="w-full cta-button">Login</Button>
        
        <SocialLogin />
      </form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-300">
          Don't have an account?{" "}
          <button
            onClick={onFlip}
            className="text-astral-light hover:underline font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
