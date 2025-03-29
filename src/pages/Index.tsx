
import React from 'react';
import Layout from '@/components/Layout';
import HomePage from '@/components/HomePage';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <Layout>
      <HomePage />
      <GallerySection />
      <BookingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default Index;
