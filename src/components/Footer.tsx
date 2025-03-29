
import React from 'react';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-loveable-chocolate text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Loveable<span className="text-loveable-gold">.</span></h3>
            <p className="text-white/80 mb-6 max-w-md">
              Loveable est un salon spécialisé dans l'art des tresses africaines, 
              dédié à sublimer votre beauté naturelle avec des créations uniques et personnalisées.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-300 p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-300 p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-loveable-gold transition-colors duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-loveable-gold transition-colors duration-300">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#booking" className="text-white/80 hover:text-loveable-gold transition-colors duration-300">
                  Réservation
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-loveable-gold transition-colors duration-300">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-loveable-gold transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/80">123 Rue des Tresses, 75001 Paris</li>
              <li className="text-white/80">+33 1 23 45 67 89</li>
              <li className="text-white/80">contact@loveable-tresses.com</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-bold mb-2">Horaires</h4>
              <p className="text-white/80">Mardi - Samedi: 9h - 18h</p>
              <p className="text-white/80">Dimanche - Lundi: Fermé</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Loveable. Tous droits réservés.
          </p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 bg-loveable-gold hover:bg-loveable-copper text-white p-2 rounded-full transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
