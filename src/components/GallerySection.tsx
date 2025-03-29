
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  beforeImage?: string;
}

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Box Braids',
      category: 'box-braids',
      image: 'https://images.unsplash.com/photo-1594359773871-caff0d07a068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1584297091447-3289d5cdbdba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80'
    },
    {
      id: 2,
      title: 'Twists',
      category: 'twists',
      image: 'https://images.unsplash.com/photo-1626177540743-cd045da44307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 3,
      title: 'Cornrows',
      category: 'cornrows',
      image: 'https://images.unsplash.com/photo-1604265360400-bb2bbdcdafa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 4,
      title: 'Fulani Braids',
      category: 'fulani',
      image: 'https://images.unsplash.com/photo-1650421442553-e9e89f9f1b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 5,
      title: 'Micro Braids',
      category: 'box-braids',
      image: 'https://images.unsplash.com/photo-1605980625600-88de880c3d33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 6,
      title: 'Loc Styles',
      category: 'other',
      image: 'https://images.unsplash.com/photo-1622280479106-406c33cd8962?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
  ];

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'box-braids', label: 'Box Braids' },
    { value: 'cornrows', label: 'Cornrows' },
    { value: 'twists', label: 'Twists' },
    { value: 'fulani', label: 'Fulani' },
    { value: 'other', label: 'Autres Styles' },
  ];

  const filterGalleryItems = (category: string) => {
    if (category === 'all') {
      return galleryItems;
    }
    return galleryItems.filter(item => item.category === category);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-loveable-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Notre Galerie</h2>
          <p className="text-loveable-brown/80 max-w-2xl mx-auto">
            Découvrez nos créations et trouvez l'inspiration pour votre prochaine coiffure.
            Nous proposons une grande variété de styles pour tous les goûts.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="data-[state=active]:bg-loveable-gold data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterGalleryItems(category.value).map((item) => (
                  <div 
                    key={item.id} 
                    className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="aspect-square">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)}>
            <div className="bg-white rounded-lg max-w-5xl max-h-[90vh] overflow-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end p-4">
                <button onClick={() => setSelectedImage(null)} className="text-loveable-brown hover:text-loveable-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold text-loveable-chocolate mb-4">{selectedImage.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedImage.beforeImage && (
                    <div>
                      <p className="text-sm text-loveable-brown mb-2">Avant</p>
                      <img 
                        src={selectedImage.beforeImage} 
                        alt={`Avant ${selectedImage.title}`} 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-loveable-brown mb-2">{selectedImage.beforeImage ? 'Après' : ''}</p>
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.title} 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <a href="#booking" className="btn-primary" onClick={() => setSelectedImage(null)}>
                    Réserver ce style
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
