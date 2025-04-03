
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Define form validation schema with Zod
const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  prenom: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  telephone: z.string().optional(),
  message: z.string().min(5, { message: "Votre message doit contenir au moins 5 caractères" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  
  // Initialize React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      message: '',
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: FormValues) => {
    try {
      // Create a form element to submit to FormSubmit.co
      const formElement = document.createElement('form');
      formElement.method = 'POST';
      formElement.action = 'https://formsubmit.co/ruthtshipama69@gmail.com';
      formElement.style.display = 'none';

      // Add all form data as hidden inputs
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          formElement.appendChild(input);
        }
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
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
      });
    }
  };

  return (
    <div className="bg-secondary rounded-lg p-8 shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 text-loveable-chocolate">Envoyez-nous un message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} className="focus:ring-2 focus:ring-loveable-gold" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="prenom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre prénom" {...field} className="focus:ring-2 focus:ring-loveable-gold" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="votre@email.com" {...field} className="focus:ring-2 focus:ring-loveable-gold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Votre numéro de téléphone" {...field} className="focus:ring-2 focus:ring-loveable-gold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Votre message..." 
                    className="h-32 resize-none focus:ring-2 focus:ring-loveable-gold" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-loveable-gold hover:bg-loveable-copper text-white flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
