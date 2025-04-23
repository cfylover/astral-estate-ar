
import { Button } from "@/components/ui/button";

const SocialLogin = () => {
  return (
    <>
      <div className="relative flex items-center justify-center mt-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative z-10 bg-astral-dark px-4 text-sm text-gray-400">
          Or continue with
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {["Google", "Apple", "Facebook", "GitHub"].map((provider) => (
          <Button
            key={provider}
            variant="outline"
            className="bg-white/5 border-white/10 hover:bg-white/10"
          >
            <img 
              src={`https://simpleicons.org/icons/${provider.toLowerCase()}.svg`} 
              alt={provider} 
              className="w-5 h-5 opacity-80" 
            />
          </Button>
        ))}
      </div>
    </>
  );
};

export default SocialLogin;
