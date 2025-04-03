
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Tresses Élégantes',
    image: 'https://i.imgur.com/BZYpWqA.jpeg',
    category: 'Tresses'
  },
  {
    id: 2,
    title: 'Tresses Style Africain',
    image: 'https://i.imgur.com/NlnAeQH.jpeg',
    category: 'Tresses'
  },
  {
    id: 3,
    title: 'Tresses Dorées',
    image: 'https://i.imgur.com/Y2bIkP3.jpeg',
    category: 'Tresses'
  },
  {
    id: 4,
    title: 'Tresses Ombré',
    image: 'https://i.imgur.com/mhidlLM.jpeg',
    category: 'Tresses'
  },
  {
    id: 5,
    title: 'Tresses Enfant',
    image: 'https://i.imgur.com/zNIu0J0.jpeg',
    category: 'Tresses'
  },
  {
    id: 6,
    title: 'Tresses Artistiques',
    image: 'https://i.imgur.com/7iSgL3w.jpeg',
    category: 'Tresses'
  },
  {
    id: 7,
    title: 'Tresses Colorées',
    image: 'https://i.imgur.com/Eo0mHsM.jpeg',
    category: 'Tresses'
  },
  {
    id: 8,
    title: 'Tresses Coiffées',
    image: 'https://i.imgur.com/YpkO3Gr.jpeg',
    category: 'Tresses'
  },
  {
    id: 9,
    title: 'Tresses Ondulées',
    image: 'https://i.imgur.com/BNDt6z9.jpeg',
    category: 'Tresses'
  }
];

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Comme il n'y a qu'une seule catégorie maintenant, le filtrage est simplifié
  const filteredItems = galleryItems;

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

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={1 / 1} className="w-full">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-tressesbyhoney-gold hover:bg-tressesbyhoney-copper text-white">
            Voir plus de créations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
