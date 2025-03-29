
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-loveable-beige/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Contactez-Nous</h2>
          <p className="text-loveable-brown/80 max-w-2xl mx-auto">
            Vous avez des questions ou besoin d'informations supplémentaires ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-loveable-chocolate mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" placeholder="Votre nom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Sujet de votre message" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Votre message..." 
                      required 
                      className="min-h-[120px]" 
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-loveable-gold hover:bg-loveable-copper text-white"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-loveable-chocolate mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-loveable-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-loveable-brown/80">123 Rue des Tresses, 75001 Paris, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-loveable-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-loveable-brown/80">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-loveable-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-loveable-brown/80">contact@loveable-tresses.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-loveable-chocolate mb-6">Suivez-nous</h3>
              <p className="text-loveable-brown/80 mb-4">
                Retrouvez nos dernières créations et actualités sur nos réseaux sociaux.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-loveable-beige hover:bg-loveable-tan transition-colors duration-300 p-3 rounded-full">
                  <Facebook className="w-5 h-5 text-loveable-brown" />
                </a>
                <a href="#" className="bg-loveable-beige hover:bg-loveable-tan transition-colors duration-300 p-3 rounded-full">
                  <Instagram className="w-5 h-5 text-loveable-brown" />
                </a>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033357!2d2.3417654766116347!3d48.86606067132296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1705674622050!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
