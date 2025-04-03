
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    image: '/lovable-uploads/0b762f5c-30dd-466c-9c27-bcc29bf9ae8e.png',
    category: 'Tresses'
  },
  {
    id: 2,
    title: 'Tresses Style Africain',
    image: '/lovable-uploads/8508775b-a336-4c6b-985d-0f2157e5f593.png',
    category: 'Tresses'
  },
  {
    id: 3,
    title: 'Tresses Dorées',
    image: '/lovable-uploads/c52716b0-f2d7-4714-9b9c-08ce3efbe3af.png',
    category: 'Tresses'
  },
  {
    id: 4,
    title: 'Tresses Ombré',
    image: '/lovable-uploads/dd212111-92d2-4761-a141-698a7490683d.png',
    category: 'Tresses'
  },
  {
    id: 5,
    title: 'Tresses Enfant',
    image: '/lovable-uploads/db5ba1d3-b699-4dd8-9c9a-a2ba414eed0f.png',
    category: 'Tresses'
  },
  {
    id: 6,
    title: 'Tresses Artistiques',
    image: '/lovable-uploads/803feba6-c952-4bb6-bdd0-19c3931ccac6.png',
    category: 'Tresses'
  },
  {
    id: 7,
    title: 'Tresses Colorées',
    image: '/lovable-uploads/dd9d5872-3e7c-487c-8653-d7526bdce82c.png',
    category: 'Tresses'
  },
  {
    id: 8,
    title: 'Tresses Coiffées',
    image: '/lovable-uploads/07ae6b25-f3a5-4c0f-a9e0-d6a6991edba0.png',
    category: 'Tresses'
  },
  {
    id: 9,
    title: 'Tresses Ondulées',
    image: '/lovable-uploads/18593ac0-9be5-4753-b3b1-9d5fb7c64ea2.png',
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

        {/* Gallery grid - Pas besoin de filtres spécifiques puisqu'il n'y a qu'une catégorie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
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
