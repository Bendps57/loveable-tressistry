
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';
import { Button } from '@/components/ui/button';

const ContactInfo: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61562533844626";
  const whatsappUrl = "https://wa.me/33613663780";
  const phoneNumber = "+33 6 13 66 37 80";

  return (
    <div className="bg-secondary rounded-lg p-8 shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate text-center">Contactez-moi directement</h3>
      
      {/* Boutons de contact principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-medium transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        
        <a 
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-3 bg-loveable-gold hover:bg-loveable-copper text-white py-4 px-6 rounded-lg font-medium transition-colors"
        >
          <Phone className="w-5 h-5" />
          Appeler
        </a>
      </div>
      
      {/* Informations de contact */}
      <div className="space-y-6">
        <ContactInfoItem 
          icon={Phone}
          title="Téléphone"
          content="+33 6 13 66 37 80"
        />
        
        <ContactInfoItem 
          icon={MapPin}
          title="Adresse"
          content="60 rue de Verdun, 57700 Hayange, France"
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
      
      {/* Réseaux sociaux */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-lg mb-4 text-center">Suivez-nous sur les réseaux</h4>
        <div className="flex justify-center">
          <a 
            href={facebookUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-full bg-loveable-gold flex items-center justify-center text-white hover:bg-loveable-copper transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
