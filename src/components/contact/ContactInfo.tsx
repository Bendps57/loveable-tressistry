
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61562533844626";

  return (
    <div className="flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Informations de contact</h3>
        
        <div className="space-y-6">
          <ContactInfoItem 
            icon={MapPin}
            title="Adresse"
            content="60 rue de Verdun, 57700 Hayange, France"
          />
          
          <ContactInfoItem 
            icon={Phone}
            title="Téléphone"
            content="+33 6 13 66 37 80"
          />
          
          <ContactInfoItem 
            icon={Mail}
            title="Email"
            content="ruthtshipama69@gmail.com"
          />
          
          <ContactInfoItem 
            icon={Clock}
            title="Horaires d'ouverture"
            content="Lundi - Dimanche: 10h - 21h"
          />
        </div>
      </div>
      
      <div className="mt-8">
        <div className="bg-secondary p-6 rounded-lg">
          <h4 className="font-semibold text-xl mb-3">Suivez-nous sur les réseaux</h4>
          <div className="flex gap-4">
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-loveable-gold flex items-center justify-center text-white hover:bg-loveable-copper transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
