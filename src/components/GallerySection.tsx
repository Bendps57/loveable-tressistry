
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook } from 'lucide-react';

const GallerySection: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61562533844626";
  
  return (
    <section id="gallery" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Créations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre galerie de tresses africaines, chaque coiffure est unique et personnalisée pour mettre en valeur votre beauté naturelle.
          </p>
          <Separator className="w-24 h-1 bg-tressesbyhoney-gold mx-auto mt-6" />
        </div>

        {/* Black & White Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image 1 */}
          <Card className="group overflow-hidden rounded-lg border-0 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img 
                    src="https://i.imgur.com/ldn8Su9.jpeg" 
                    alt="Tresses africaines style unique" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
          
          {/* Image 2 */}
          <Card className="group overflow-hidden rounded-lg border-0 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img 
                    src="https://i.imgur.com/83D0pMg.jpeg" 
                    alt="Tresses africaines style box braids" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
          
          {/* Image 3 */}
          <Card className="group overflow-hidden rounded-lg border-0 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img 
                    src="https://i.imgur.com/verdRyq.jpeg" 
                    alt="Tresses africaines style fulani" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
          
          {/* Image 4 */}
          <Card className="group overflow-hidden rounded-lg border-0 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img 
                    src="https://i.imgur.com/sEaYXNA.jpeg" 
                    alt="Tresses africaines style cornrows" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
          
          {/* Image 5 */}
          <Card className="group overflow-hidden rounded-lg border-0 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img 
                    src="https://i.imgur.com/FRxZyVD.jpeg" 
                    alt="Tresses africaines style twist" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
          
          {/* Image 6 */}
          <Card className="group overflow-hidden rounded-lg border-0 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img 
                    src="https://i.imgur.com/CxRtzL9.jpeg" 
                    alt="Tresses africaines style lemonade braids" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Facebook CTA section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-loveable-chocolate">Découvrez nos créations</h3>
            <p className="text-muted-foreground mb-6">
              Suivez-nous sur Facebook pour voir nos dernières réalisations et restez informés de nos promotions exclusives.
            </p>
            <Button 
              className="bg-[#1877F2] hover:bg-[#0e5ecd] text-white gap-2 py-2 px-5 text-base"
              onClick={() => window.open(facebookUrl, '_blank')}
            >
              <Facebook className="w-5 h-5" />
              Voir nos réalisations sur Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
