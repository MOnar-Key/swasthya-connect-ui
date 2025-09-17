import { useState, useEffect } from 'react';
import doctor1 from '@/assets/doctor-1.jpg';
import doctor2 from '@/assets/doctor-2.jpg';
import doctor3 from '@/assets/doctor-3.jpg';

const slides = [
  {
    image: doctor1,
    title: "Expert Healthcare",
    subtitle: "Connect with certified professionals"
  },
  {
    image: doctor2,
    title: "Digital Health Solutions",
    subtitle: "Modern technology meets medical care"
  },
  {
    image: doctor3,
    title: "Trusted Medical Team",
    subtitle: "Your health is our priority"
  }
];

export const AuthSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/10" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-white text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-white/90 text-lg">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};