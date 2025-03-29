
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Contactez-Nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez des questions ou besoin d'informations supplémentaires ? N'hésitez pas à nous contacter.
          </p>
          <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-secondary rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-loveable-gold" 
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-loveable-gold" 
                    placeholder="Votre prénom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-loveable-gold" 
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-loveable-gold" 
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full h-32 px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-loveable-gold" 
                  placeholder="Votre message..."
                />
              </div>
              
              <Button className="w-full bg-loveable-gold hover:bg-loveable-copper text-white flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Envoyer le message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-muted-foreground">123 Rue des Tresses, 75001 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">contact@loveable-tresses.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Horaires d'ouverture</h4>
                    <p className="text-muted-foreground">Lundi - Samedi: 9h - 19h</p>
                    <p className="text-muted-foreground">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-semibold text-xl mb-3">Suivez-nous sur les réseaux</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-loveable-gold flex items-center justify-center text-white hover:bg-loveable-copper transition-colors">
                    FB
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-loveable-gold flex items-center justify-center text-white hover:bg-loveable-copper transition-colors">
                    IG
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-loveable-gold flex items-center justify-center text-white hover:bg-loveable-copper transition-colors">
                    TW
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-loveable-gold flex items-center justify-center text-white hover:bg-loveable-copper transition-colors">
                    YT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
