import { useState, useEffect } from 'react';
import doctor1 from '@/assets/doctor-1.jpg';
import doctor2 from '@/assets/doctor-2.jpg';
import doctor3 from '@/assets/doctor-3.jpg';

const slides = [
  {
    image: doctor1,
    title: "Expert Healthcare",
    subtitle: "Connect with certified professionals",
    alt: "Professional healthcare doctor in medical consultation"
  },
  {
    image: doctor2,
    title: "Digital Health Solutions", 
    subtitle: "Modern technology meets medical care",
    alt: "Doctor using digital healthcare technology"
  },
  {
    image: doctor3,
    title: "Trusted Medical Team",
    subtitle: "Your health is our priority",
    alt: "Trusted medical team providing healthcare services"
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
    <div className="relative h-full overflow-hidden" role="region" aria-label="Healthcare slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 transform scale-100' 
              : 'opacity-0 transform scale-105'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div 
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/10" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 lg:mb-2 animate-slide-up">
                {slide.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg animate-fade-in">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" role="tablist" aria-label="Slideshow navigation">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/70'
            }`}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`View slide ${index + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
};