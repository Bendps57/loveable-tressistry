
import React, { useState } from 'react';
import { Menu, X, PhoneCall, Calendar, Home, Image, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: 'Galerie', href: '#gallery', icon: <Image className="w-5 h-5" /> },
    { name: 'Réservation', href: '#booking', icon: <Calendar className="w-5 h-5" /> },
    { name: 'À Propos', href: '#about', icon: <User className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Send className="w-5 h-5" /> }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-loveable-chocolate">
              TressesByHoney<span className="text-loveable-gold">.</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-loveable-brown hover:text-loveable-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a 
              href="#booking" 
              className="btn-primary flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-loveable-brown"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 py-2 text-loveable-brown hover:text-loveable-gold transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking" 
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PhoneCall className="w-4 h-4" />
                Prendre RDV
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;
