
import React from 'react';
import { Separator } from '@/components/ui/separator';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">À Propos de TressesByHoney</h2>
          <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://i.imgur.com/LlvMDx0.jpeg" 
              alt="Notre salon TressesByHoney" 
              className="rounded-lg shadow-xl w-full h-auto object-cover grayscale"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-loveable-gold font-bold text-2xl">+3 années</p>
              <p className="text-loveable-brown">d'excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-loveable-chocolate">Notre Histoire</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fondé avec passion en 2022 par Honey, TressesByHoney s'est donné pour mission de célébrer et préserver l'art ancestral des tresses africaines. Depuis toujours, Honey est animée par cette tradition et a voulu créer un espace où chaque client se sent valorisé et sublimé.
            </p>
            
            <h3 className="text-2xl font-semibold text-loveable-chocolate pt-4">Notre Philosophie</h3>
            <p className="text-muted-foreground leading-relaxed">
              Chez TressesByHoney, nous croyons que chaque tresse raconte une histoire. Notre approche personnalisée garantit à chaque cliente une création unique, adaptée à sa personnalité et à son style. Nous utilisons uniquement des produits de qualité supérieure, respectueux des cheveux et de l'environnement.
            </p>
            
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-loveable-gold">+100</p>
                <p className="text-loveable-brown">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
