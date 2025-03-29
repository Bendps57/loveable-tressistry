
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scissors } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-loveable-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Expertise",
      description: "Notre équipe de spécialistes maîtrise toutes les techniques de tressage traditionnel et moderne."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-loveable-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Qualité",
      description: "Nous utilisons exclusivement des matériaux de haute qualité pour des résultats durables et confortables."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-loveable-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: "Créativité",
      description: "Chaque coiffure est personnalisée selon vos envies, votre style et la forme de votre visage."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">À Propos de Loveable</h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-loveable-gold rounded"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80" 
                alt="Salon Loveable" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-loveable-gold rounded-full p-4 shadow-lg">
                <Scissors className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="section-subtitle">Notre Histoire</h3>
            <p className="text-loveable-brown/80">
              Fondé par passion pour l'art de la coiffure africaine, Loveable est né d'une vision simple : créer un espace où la beauté naturelle est célébrée et sublimée.
            </p>
            <p className="text-loveable-brown/80">
              Notre expertise est le fruit d'années d'apprentissage des techniques traditionnelles, transmises de génération en génération, et d'innovation constante pour répondre aux tendances modernes.
            </p>
            <h3 className="section-subtitle mt-6">Notre Engagement</h3>
            <p className="text-loveable-brown/80">
              Nous croyons que chaque client mérite une attention personnalisée et un service d'exception. Notre équipe prend le temps de comprendre vos besoins pour créer la coiffure qui vous ressemble vraiment.
            </p>
            <div className="pt-4">
              <a href="#booking" className="btn-primary">
                Réservez votre expérience
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-loveable-gold/20 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-loveable-chocolate mb-2">{feature.title}</h3>
                <p className="text-loveable-brown/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-loveable-beige rounded-lg p-8 md:p-12 text-center">
          <h3 className="section-subtitle">Témoignages</h3>
          <div className="flex flex-col gap-8 mt-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-loveable-gold text-white w-8 h-8 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <p className="italic text-loveable-brown/80">
                "J'ai eu mes premières box braids chez Loveable et je suis absolument ravie du résultat ! L'équipe est attentionnée, professionnelle et talentueuse. Je ne confierai mes cheveux à personne d'autre."
              </p>
              <div className="mt-4">
                <p className="font-semibold text-loveable-chocolate">Sophie L.</p>
                <div className="flex justify-center mt-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-loveable-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
