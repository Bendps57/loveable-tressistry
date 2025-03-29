
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1626177539156-7768c8f32f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')", 
            opacity: 0.7
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            L'élégance des tresses africaines à votre portée
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Sublimez votre beauté naturelle avec des créations uniques et personnalisées
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="btn-primary text-center">
              Prendre rendez-vous
            </a>
            <a href="#gallery" className="btn-outline text-white border-white hover:bg-white hover:text-loveable-chocolate text-center">
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
