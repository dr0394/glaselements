import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silbergrau/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://i.imgur.com/kkbAVmd.png"
                alt="Glaswerk Elements Logo"
                className="h-12 w-auto"
              />
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">Über uns</button>
            <button onClick={() => scrollToSection('products')} className="nav-link">Produkte</button>
            <button onClick={() => scrollToSection('advantages')} className="nav-link">Vorteile</button>
            <button onClick={() => scrollToSection('references')} className="nav-link">Referenzen</button>
            <button onClick={() => scrollToSection('process')} className="nav-link">Ablauf</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Kontakt</button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-stahlblau text-white px-6 py-2 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold"
          >
            Beratung anfragen
          </button>

          <button
            className="md:hidden text-anthrazit"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-silbergrau/30">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">Über uns</button>
            <button onClick={() => scrollToSection('products')} className="mobile-nav-link">Produkte</button>
            <button onClick={() => scrollToSection('advantages')} className="mobile-nav-link">Vorteile</button>
            <button onClick={() => scrollToSection('references')} className="mobile-nav-link">Referenzen</button>
            <button onClick={() => scrollToSection('process')} className="mobile-nav-link">Ablauf</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Kontakt</button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-stahlblau text-white px-6 py-3 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold"
            >
              Beratung anfragen
            </button>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          color: #2C2C2C;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #3E5A80;
        }
        .mobile-nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 0;
          color: #2C2C2C;
          font-weight: 500;
          transition: color 0.2s;
        }
        .mobile-nav-link:hover {
          color: #3E5A80;
        }
      `}</style>
    </header>
  );
}
