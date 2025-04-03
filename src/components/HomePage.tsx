
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HomePage: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61562533844626";
  
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black">
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ opacity: 0.7 }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-getting-her-hair-styled-in-a-salon-42060-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            L'élégance des tresses africaines à votre portée
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Sublimez votre beauté naturelle avec TressesByHoney
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="btn-primary text-center">
              Prendre rendez-vous
            </a>
            <a 
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-outline text-white border-white hover:bg-white hover:text-loveable-chocolate text-center"
            >
              Voir nos créations
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#gallery" className="flex flex-col items-center">
          <span className="text-sm mb-2">Découvrir</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HomePage;
