import { AuthSlideshow } from '@/components/auth/AuthSlideshow';
import { AuthForm } from '@/components/auth/AuthForm';

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Slideshow */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5">
        <AuthSlideshow />
      </div>
      
      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-8 bg-gradient-to-br from-background to-accent/5">
        <AuthForm />
      </div>
    </div>
  );
};

export default Index;
