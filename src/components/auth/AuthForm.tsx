import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Shield, Users, Mail, Lock, User, Check, Loader2, Chrome } from 'lucide-react';

export const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (email && !validateEmail(email)) {
      setFormErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else {
      setFormErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    const password = (document.getElementById('signupPassword') as HTMLInputElement)?.value;
    if (confirmPassword && password !== confirmPassword) {
      setFormErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
    } else {
      setFormErrors(prev => ({ ...prev, confirmPassword: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="w-full animate-slide-up">
      <div className="text-center mb-6 lg:mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-primary animate-float" />
            <div className="absolute -top-1 -right-1">
              <Shield className="w-3 h-3 lg:w-4 lg:h-4 text-primary-light animate-pulse" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-healthcare-gradient bg-clip-text text-transparent mb-2">
          Swasthya Setu
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-primary font-medium mb-1">
          Your trusted healthcare partner
        </p>
        <p className="text-muted-foreground flex items-center justify-center gap-2 text-xs sm:text-sm">
          <Users className="w-3 h-3 lg:w-4 lg:h-4 animate-pulse" />
          Your bridge to better health
        </p>
      </div>

      <Card className="shadow-form border-0 backdrop-blur-sm bg-card/80 hover:shadow-glow transition-all duration-500">
        <CardHeader className="pb-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 lg:mb-6">
              <TabsTrigger 
                value="login" 
                className="data-[state=active]:bg-healthcare-gradient data-[state=active]:text-white transition-all duration-300 data-[state=active]:scale-105"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="signup" 
                className="data-[state=active]:bg-healthcare-gradient data-[state=active]:text-white transition-all duration-300 data-[state=active]:scale-105"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="animate-fade-in">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium" aria-label="Email address">
                      <Mail className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      onChange={handleEmailChange}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                      required
                    />
                    {formErrors.email && (
                      <p id="email-error" className="text-xs text-destructive animate-fade-in" role="alert">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2 text-sm font-medium" aria-label="Password">
                      <Lock className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                      Password <span className="text-destructive">*</span>
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
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-primary/20 text-primary focus:ring-primary/20" />
                      <span>Remember me</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-primary hover:text-primary-light transition-colors underline hover:no-underline"
                      aria-label="Reset your password"
                    >
                      Forgot password?
                    </button>
                  </div>
                  
                  {/* Social Login Buttons */}
                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      className="w-full bg-healthcare-gradient hover:bg-healthcare-gradient hover:scale-105 transition-all duration-300 shadow-healthcare disabled:opacity-50"
                      disabled={isLoading}
                      aria-label={isLoading ? "Signing you in" : "Sign in to your account"}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Signing in...
                        </div>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full hover:bg-accent hover:scale-105 transition-all duration-300"
                    >
                      <Chrome className="w-4 h-4 mr-2" />
                      Continue with Google
                    </Button>
                  </div>
                </form>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="signup" className="animate-fade-in">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium" aria-label="First name">
                        <User className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                        First Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium" aria-label="Last name">
                        <User className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                        Last Name <span className="text-destructive">*</span>
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
                    <Label htmlFor="signupEmail" className="flex items-center gap-2 text-sm font-medium" aria-label="Email address">
                      <Mail className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="signupEmail"
                      type="email"
                      placeholder="Enter your email"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      onChange={handleEmailChange}
                      aria-describedby={formErrors.email ? "signup-email-error" : undefined}
                      required
                    />
                    {formErrors.email && (
                      <p id="signup-email-error" className="text-xs text-destructive animate-fade-in" role="alert">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signupPassword" className="flex items-center gap-2 text-sm font-medium" aria-label="Password">
                      <Lock className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                      Password <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="signupPassword"
                      type="password"
                      placeholder="Create a password (min 8 characters)"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      minLength={8}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center gap-2 text-sm font-medium" aria-label="Confirm password">
                      <Lock className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                      Confirm Password <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-glow"
                      onChange={handlePasswordConfirm}
                      aria-describedby={formErrors.confirmPassword ? "confirm-password-error" : undefined}
                      required
                    />
                    {formErrors.confirmPassword && (
                      <p id="confirm-password-error" className="text-xs text-destructive animate-fade-in" role="alert">
                        {formErrors.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <input 
                      type="checkbox" 
                      id="terms"
                      className="rounded border-primary/20 text-primary focus:ring-primary/20 mt-1" 
                      required 
                    />
                    <label htmlFor="terms" className="flex items-start gap-1 cursor-pointer">
                      <Check className="w-3 h-3 text-primary animate-pulse mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>
                        I agree to the{' '}
                        <button 
                          type="button" 
                          className="text-primary underline hover:text-primary-light transition-colors hover:no-underline"
                          aria-label="Read terms and conditions"
                        >
                          Terms & Conditions
                        </button>
                        {' '}and{' '}
                        <button 
                          type="button" 
                          className="text-primary underline hover:text-primary-light transition-colors hover:no-underline"
                          aria-label="Read privacy policy"
                        >
                          Privacy Policy
                        </button>
                      </span>
                    </label>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      className="w-full bg-healthcare-gradient hover:bg-healthcare-gradient hover:scale-105 transition-all duration-300 shadow-healthcare disabled:opacity-50"
                      disabled={isLoading}
                      aria-label={isLoading ? "Creating your account" : "Create new account"}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Creating account...
                        </div>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full hover:bg-accent hover:scale-105 transition-all duration-300"
                    >
                      <Chrome className="w-4 h-4 mr-2" />
                      Continue with Google
                    </Button>
                  </div>
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