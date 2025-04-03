
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title">Politique de Confidentialité</h1>
            <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
          </div>
          
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">1. Introduction</h2>
            <p className="text-muted-foreground">
              Chez TressesByHoney, accessible depuis notre site web, nous accordons une importance primordiale à la confidentialité de nos visiteurs. Cette politique de confidentialité décrit les types d'informations que nous recueillons et comment nous les utilisons.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">2. Collecte d'informations</h2>
            <p className="text-muted-foreground">
              Nous recueillons des informations personnelles lorsque vous utilisez notre formulaire de contact ou de réservation, telles que votre nom, adresse email, numéro de téléphone et les détails concernant votre demande de service.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">3. Utilisation des informations</h2>
            <p className="text-muted-foreground">
              Les informations que nous collectons sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Vous contacter concernant vos demandes</li>
              <li>Gérer vos réservations</li>
              <li>Améliorer notre service client</li>
              <li>Vous envoyer des informations relatives à nos services</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">4. Protection des données</h2>
            <p className="text-muted-foreground">
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">5. Partage d'informations</h2>
            <p className="text-muted-foreground">
              Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers, sauf si cela est nécessaire pour fournir nos services (comme pour traiter les réservations) ou si la loi l'exige.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">6. Cookies</h2>
            <p className="text-muted-foreground">
              Notre site web peut utiliser des "cookies" pour améliorer votre expérience. Ces cookies sont stockés sur votre ordinateur et permettent d'analyser l'utilisation du site web.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">7. Droits des utilisateurs</h2>
            <p className="text-muted-foreground">
              Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : ruthtshipama69@gmail.com.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">8. Modifications de notre politique</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.
            </p>
            
            <h2 className="text-xl font-semibold text-loveable-chocolate mt-8">9. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à :
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

export default PrivacyPolicy;
