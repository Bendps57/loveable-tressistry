
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HomePage: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61562533844626";
  const whatsappUrl = "https://wa.me/33613663780";
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image - tresses africaines */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://i.imgur.com/0Vp4KIN.jpeg')",
            opacity: 0.85,
          }}
        />
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className={`max-w-3xl ${isMobile ? '' : 'ml-8'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-loveable-gold mb-6 text-shadow-lg">
            L'élégance des tresses africaines à votre portée
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Sublimez votre beauté naturelle avec TressesByHoney
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
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
