
import React from 'react';
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
    image: 'https://images.unsplash.com/photo-1599387737838-646405046442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Box Braids'
  },
  {
    id: 2,
    title: 'Cornrows Sophistiqués',
    image: 'https://images.unsplash.com/photo-1626177493371-57a4d010b771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Cornrows'
  },
  {
    id: 3,
    title: 'Twists Naturelles',
    image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Twists'
  },
  {
    id: 4,
    title: 'Tresses Collées',
    image: 'https://images.unsplash.com/photo-1626177439568-7615db6c651e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Tresses Collées'
  },
  {
    id: 5,
    title: 'Fulani Braids',
    image: 'https://images.unsplash.com/photo-1604514462150-31b02ef3be63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Fulani Braids'
  },
  {
    id: 6,
    title: 'Goddess Braids',
    image: 'https://images.unsplash.com/photo-1610125594276-3dad28214a84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Goddess Braids'
  }
];

const GallerySection: React.FC = () => {
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
          <Button variant="outline" className="rounded-full">Toutes</Button>
          <Button variant="outline" className="rounded-full">Box Braids</Button>
          <Button variant="outline" className="rounded-full">Cornrows</Button>
          <Button variant="outline" className="rounded-full">Twists</Button>
          <Button variant="outline" className="rounded-full">Tresses Collées</Button>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
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
