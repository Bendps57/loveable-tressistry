
import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import SectionTitle from './contact/SectionTitle';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contactez-Nous" 
          description="Vous avez des questions ou besoin d'informations supplémentaires ? N'hésitez pas à nous contacter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
