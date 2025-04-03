
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61562533844626";
  
  return (
    <footer className="bg-loveable-chocolate text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              TressesByHoney<span className="text-loveable-gold">.</span>
            </Link>
            <p className="mt-4 text-white/80">
              Spécialiste des tresses africaines. Nous sublimez votre beauté naturelle avec des créations uniques et personnalisées.
            </p>
            <div className="flex mt-6">
              <a 
                href={facebookUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-loveable-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-loveable-gold transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-loveable-gold transition-colors">Galerie</a>
              </li>
              <li>
                <a href="#booking" className="text-white/80 hover:text-loveable-gold transition-colors">Réservation</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-loveable-gold transition-colors">À Propos</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-loveable-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <p className="text-white/80">
              Chaque coiffure est unique, tout comme vous ! Nous vous proposons une approche personnalisée pour trouver la coiffure qui vous correspond parfaitement.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>60 rue de Verdun, 57700 Hayange, France</p>
              <p>Téléphone: +33 6 13 66 37 80</p>
              <p>Email: ruthtshipama69@gmail.com</p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} TressesByHoney. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/60 hover:text-loveable-gold transition-colors text-sm">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-loveable-gold transition-colors text-sm">Conditions d'utilisation</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-loveable-gold transition-colors text-sm">Mentions légales</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <a 
            href="https://www.elimyt.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-loveable-gold transition-colors text-sm inline-block border border-white/20 rounded-md px-4 py-1 hover:border-loveable-gold"
          >
            Créé par eLimyt
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
