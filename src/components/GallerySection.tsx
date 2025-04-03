
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Box Braids Élégantes',
    image: 'https://i.imgur.com/6F9HqF3.jpg',
    category: 'Box Braids'
  },
  {
    id: 2,
    title: 'Cornrows Sophistiqués',
    image: 'https://i.imgur.com/d8sOO7B.jpg',
    category: 'Cornrows'
  },
  {
    id: 3,
    title: 'Twists Naturelles',
    image: 'https://i.imgur.com/o44WJJ9.jpg',
    category: 'Twists'
  },
  {
    id: 4,
    title: 'Tresses Collées',
    image: 'https://i.imgur.com/n1K0SWC.jpg',
    category: 'Tresses Collées'
  },
  {
    id: 5,
    title: 'Fulani Braids',
    image: 'https://i.imgur.com/YXQXDpN.jpg',
    category: 'Fulani Braids'
  },
  {
    id: 6,
    title: 'Goddess Braids',
    image: 'https://i.imgur.com/AvCrX2R.jpg',
    category: 'Goddess Braids'
  },
  {
    id: 7,
    title: 'Tresses Élégantes',
    image: 'https://i.imgur.com/Lm8TFOk.jpg',
    category: 'Tresses'
  },
  {
    id: 8,
    title: 'Style Créatif',
    image: 'https://i.imgur.com/YULgjVa.jpg',
    category: 'Créations'
  },
  {
    id: 9,
    title: 'Tresses Ondulées',
    image: '/lovable-uploads/18593ac0-9be5-4753-b3b1-9d5fb7c64ea2.png',
    category: 'Tresses Ondulées'
  }
];

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const filteredItems = activeFilter 
    ? galleryItems.filter(item => item.category === activeFilter)
    : galleryItems;

  return (
    <section id="gallery" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Créations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre galerie de tresses africaines, chaque coiffure est unique et personnalisée pour mettre en valeur votre beauté naturelle.
          </p>
          <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
        </div>

        {/* Gallery filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button 
            variant={activeFilter === null ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setActiveFilter(null)}
          >
            Toutes
          </Button>
          {Array.from(new Set(galleryItems.map(item => item.category))).map(category => (
            <Button 
              key={category}
              variant={activeFilter === category ? "default" : "outline"} 
              className="rounded-full"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery grid */}
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
          <Button className="bg-loveable-gold hover:bg-loveable-copper text-white">
            Voir plus de créations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
