
import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Mail } from "lucide-react";

const SocialLogin = () => {
  return (
    <div className="space-y-3 mt-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-600" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-astral-dark px-2 text-gray-400">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
        <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
