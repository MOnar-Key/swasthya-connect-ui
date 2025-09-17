import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Shield, Users, Mail, Lock, User, Check } from 'lucide-react';

export const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto animate-slide-up">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <Heart className="w-8 h-8 text-primary animate-float" />
            <div className="absolute -top-1 -right-1">
              <Shield className="w-4 h-4 text-primary-light animate-pulse" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-healthcare-gradient bg-clip-text text-transparent mb-2">
          Swasthya Setu
        </h1>
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <Users className="w-4 h-4 animate-pulse" />
          Your bridge to better health
        </p>
      </div>

      <Card className="shadow-form border-0 backdrop-blur-sm bg-card/80 hover:shadow-glow transition-all duration-500">
        <CardHeader className="pb-4">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="data-[state=active]:bg-healthcare-gradient data-[state=active]:text-white">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-healthcare-gradient data-[state=active]:text-white">
                Sign Up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary animate-pulse" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary animate-pulse" />
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Remember me</span>
                    </label>
                    <button type="button" className="text-primary hover:text-primary-light">
                      Forgot password?
                    </button>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-healthcare-gradient hover:bg-healthcare-gradient hover:scale-105 transition-transform shadow-healthcare"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="signup">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary animate-pulse" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary animate-pulse" />
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signupEmail" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary animate-pulse" />
                      Email
                    </Label>
                    <Input
                      id="signupEmail"
                      type="email"
                      placeholder="Enter your email"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signupPassword" className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary animate-pulse" />
                      Password
                    </Label>
                    <Input
                      id="signupPassword"
                      type="password"
                      placeholder="Create a password"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary animate-pulse" />
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded" required />
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-primary animate-pulse" />
                      I agree to the <button type="button" className="text-primary underline hover:text-primary-light transition-colors">Terms & Conditions</button>
                    </span>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-healthcare-gradient hover:bg-healthcare-gradient hover:scale-105 transition-transform shadow-healthcare"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>

      <div className="text-center mt-6 text-sm text-muted-foreground">
        Secure healthcare platform with end-to-end encryption
      </div>
    </div>
  );
};