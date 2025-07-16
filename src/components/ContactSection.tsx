
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import SectionTitle from './contact/SectionTitle';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contactez-Nous" 
          description="Vous avez des questions ou besoin d'informations supplémentaires ? Contactez-nous directement."
        />

        <div className="max-w-2xl mx-auto">
          {/* Contact Info Only */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
