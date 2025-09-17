import { AuthSlideshow } from '@/components/auth/AuthSlideshow';
import { AuthForm } from '@/components/auth/AuthForm';

const Index = () => {
  return (
    <div className="min-h-screen flex relative">
      {/* Animated background with conic gradient */}
      <div className="absolute inset-0 bg-conic-gradient animate-rotate-slow opacity-20"></div>
      
      {/* Left side - Slideshow with gradient shadow */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative">
        <div className="relative w-full">
          <div className="absolute -inset-2 rounded-lg bg-gradient-to-t from-red-600 via-indigo-600 to-indigo-600 opacity-50 blur-2xl animate-pulse-glow"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <AuthSlideshow />
          </div>
        </div>
      </div>
      
      {/* Right side - Auth Form with gradient shadow */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-accent/5"></div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-lg bg-gradient-to-t from-blue-600 via-indigo-600 to-purple-600 opacity-30 blur-2xl animate-pulse-glow"></div>
          <div className="relative">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
