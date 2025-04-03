
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock, Send, Facebook } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using direct form submission to FormSubmit.co for more reliable delivery
      const form = e.target as HTMLFormElement;
      const formElement = document.createElement('form');
      formElement.method = 'POST';
      formElement.action = 'https://formsubmit.co/ruthtshipama69@gmail.com';
      formElement.style.display = 'none';

      // Add all form data as hidden inputs
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
      
        formElement.appendChild(input);
      });

      // Add custom subject
      const subjectInput = document.createElement('input');
      subjectInput.type = 'hidden';
      subjectInput.name = '_subject';
      subjectInput.value = 'Nouveau message du site TressesByHoney';
      formElement.appendChild(subjectInput);

      // Add return URL (current page)
      const redirectInput = document.createElement('input');
      redirectInput.type = 'hidden';
      redirectInput.name = '_next';
      redirectInput.value = window.location.href;
      formElement.appendChild(redirectInput);

      // Add captcha
      const captchaInput = document.createElement('input');
      captchaInput.type = 'hidden';
      captchaInput.name = '_captcha';
      captchaInput.value = 'true';
      formElement.appendChild(captchaInput);

      // Disable default FormSubmit thank you page
      const autoResponseInput = document.createElement('input');
      autoResponseInput.type = 'hidden';
      autoResponseInput.name = '_autoresponse';
      autoResponseInput.value = 'Merci pour votre message. Nous vous répondrons bientôt.';
      formElement.appendChild(autoResponseInput);

      // Append form to body, submit it, then remove it
      document.body.appendChild(formElement);
      formElement.submit();
      
      // Show success message
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Reset form
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const facebookUrl = "https://www.facebook.com/profile.php?id=61562533844626";

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
            
            <form className="space-y-6" onSubmit={handleSubmit} action="https://formsubmit.co/ruthtshipama69@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="Nouveau message du site TressesByHoney" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_autoresponse" value="Merci pour votre message. Nous vous répondrons bientôt." />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input 
                    type="text"
                    name="nom" 
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full focus:ring-2 focus:ring-loveable-gold" 
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom</label>
                  <Input 
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full focus:ring-2 focus:ring-loveable-gold" 
                    placeholder="Votre prénom"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full focus:ring-2 focus:ring-loveable-gold" 
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <Input 
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full focus:ring-2 focus:ring-loveable-gold" 
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 resize-none focus:ring-2 focus:ring-loveable-gold" 
                  placeholder="Votre message..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-loveable-gold hover:bg-loveable-copper text-white flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
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
                    <p className="text-muted-foreground">60 rue de Verdun, 57700 Hayange, France</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-muted-foreground">+33 6 13 66 37 80</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">ruthtshipama69@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Horaires d'ouverture</h4>
                    <p className="text-muted-foreground">Lundi - Dimanche: 10h - 21h</p>
                  </div>
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
