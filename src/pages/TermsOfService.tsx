
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  return (
    <Layout>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title">Conditions d'Utilisation</h1>
            <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
          </div>
          
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">1. Acceptation des conditions</h2>
            <p className="text-muted-foreground">
              En accédant à ce site web, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable du respect des lois locales applicables.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">2. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              Le contenu de ce site web, y compris les textes, graphiques, logos, images, ainsi que leur compilation, sont la propriété de TressesByHoney et sont protégés par le droit d'auteur et les lois sur la propriété intellectuelle. L'utilisation non autorisée de ce contenu est strictement interdite.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">3. Réservations et services</h2>
            <p className="text-muted-foreground">
              Les réservations effectuées via notre site web sont soumises à disponibilité. Nous nous réservons le droit de refuser une réservation pour quelque raison que ce soit. Les tarifs et services peuvent être modifiés sans préavis.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">4. Annulations et retards</h2>
            <p className="text-muted-foreground">
              Nous vous demandons de nous informer au moins 24 heures à l'avance en cas d'annulation ou de modification de votre rendez-vous. En cas de retard, nous ne pouvons pas garantir que votre prestation pourra être réalisée dans son intégralité.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">5. Responsabilité</h2>
            <p className="text-muted-foreground">
              Les informations contenues sur ce site sont fournies "telles quelles", sans garantie d'aucune sorte. TressesByHoney ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser nos services.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">6. Liens externes</h2>
            <p className="text-muted-foreground">
              Notre site web peut contenir des liens vers des sites externes qui ne sont pas exploités par nous. Nous n'avons aucun contrôle sur le contenu et les pratiques de ces sites et ne pouvons accepter aucune responsabilité pour leurs contenus respectifs.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">7. Modifications des conditions</h2>
            <p className="text-muted-foreground">
              TressesByHoney se réserve le droit de réviser ces conditions d'utilisation à tout moment sans préavis. En utilisant ce site, vous acceptez d'être lié par la version actuelle de ces conditions.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">8. Droit applicable</h2>
            <p className="text-muted-foreground">
              Ces conditions sont régies et interprétées conformément aux lois françaises, et vous vous soumettez irrévocablement à la juridiction exclusive des tribunaux français.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">9. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à :
            </p>
            <address className="not-italic text-muted-foreground">
              <p>TressesByHoney</p>
              <p>60 rue de Verdun, 57700 Hayange, France</p>
              <p>Email : ruthtshipama69@gmail.com</p>
              <p>Téléphone : +33 6 13 66 37 80</p>
            </address>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
