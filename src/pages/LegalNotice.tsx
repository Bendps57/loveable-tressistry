
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const LegalNotice = () => {
  return (
    <Layout>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title">Mentions Légales</h1>
            <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
          </div>
          
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">1. Informations légales</h2>
            <p className="text-muted-foreground">
              Le site TressesByHoney est édité par :
            </p>
            <address className="not-italic text-muted-foreground">
              <p>TressesByHoney</p>
              <p>60 rue de Verdun, 57700 Hayange, France</p>
              <p>Email : ruthtshipama69@gmail.com</p>
              <p>Téléphone : +33 6 13 66 37 80</p>
            </address>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">2. Hébergement</h2>
            <p className="text-muted-foreground">
              Le site est hébergé par :
            </p>
            <address className="not-italic text-muted-foreground">
              <p>eLimyt</p>
              <p>60 rue de Verdun, 57700 Hayange, France</p>
              <p>Site web : <a href="https://www.elimyt.com" target="_blank" rel="noopener noreferrer" className="text-loveable-gold hover:underline">www.elimyt.com</a></p>
            </address>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">3. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble du contenu du site TressesByHoney est la propriété exclusive de TressesByHoney ou des titulaires de droits avec lesquels des accords d'utilisation ont été passés. Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, par quelque procédé que ce soit, sans l'autorisation écrite préalable de TressesByHoney, est interdite.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">4. Données personnelles</h2>
            <p className="text-muted-foreground">
              Les informations recueillies sur ce site sont traitées par TressesByHoney pour la gestion de sa clientèle et de ses prospects. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, et de portabilité des données vous concernant. Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter TressesByHoney par email à ruthtshipama69@gmail.com.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">5. Cookies</h2>
            <p className="text-muted-foreground">
              Le site TressesByHoney peut utiliser des cookies pour améliorer l'expérience de l'utilisateur. En naviguant sur le site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">6. Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              TressesByHoney s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur son site. Cependant, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">7. Loi applicable et juridiction</h2>
            <p className="text-muted-foreground">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalNotice;
