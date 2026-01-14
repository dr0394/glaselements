import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-silbergrau/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://i.imgur.com/kkbAVmd.png"
              alt="Glaswerk Elements Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-anthrazit/70 mb-4">
              Moderne Bauelemente aus Glas & Aluminium für anspruchsvolle Architektur.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/glaswerkelements"
                target="_blank"
                rel="noopener noreferrer"
                className="text-anthrazit hover:text-stahlblau transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-anthrazit mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Produkte
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('advantages')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Vorteile
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('references')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Referenzen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-anthrazit mb-4">Produkte</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('windows')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Fenster
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('doors')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Türen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('systems')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Systeme
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('roofing')} className="text-anthrazit/70 hover:text-stahlblau transition-colors">
                  Überdachungen
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-anthrazit mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-anthrazit/70">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  Rudolf Diesel Straße 14<br />
                  72250 Freudenstadt
                </span>
              </li>
              <li className="flex items-center gap-2 text-anthrazit/70">
                <Phone size={20} />
                <a href="tel:+4915292612720" className="hover:text-stahlblau transition-colors">
                  0152 / 926 127 20
                </a>
              </li>
              <li className="flex items-center gap-2 text-anthrazit/70">
                <Mail size={20} />
                <a href="mailto:info@glaswerk-elements.de" className="hover:text-stahlblau transition-colors">
                  info@glaswerk-elements.de
                </a>
              </li>
              <li className="flex items-start gap-2 text-anthrazit/70">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <div>Mo - Fr: 8:00 - 17:00 Uhr</div>
                  <div>Sa: Nach Vereinbarung</div>
                  <div>So: Geschlossen</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-silbergrau/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-anthrazit/60 text-sm">
              © {new Date().getFullYear()} Glaswerk Elements. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => onNavigate('impressum')}
                className="text-anthrazit/60 hover:text-stahlblau transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => onNavigate('datenschutz')}
                className="text-anthrazit/60 hover:text-stahlblau transition-colors"
              >
                Datenschutz
              </button>
              <button
                onClick={() => onNavigate('agb')}
                className="text-anthrazit/60 hover:text-stahlblau transition-colors"
              >
                AGB
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://webflix.info/499"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://i.imgur.com/xd6OuKP.png"
                alt="Webflix Logo"
                className="h-16 w-auto"
              />
            </a>
            <a
              href="https://webflix.info/499"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-anthrazit/60 hover:text-stahlblau transition-colors"
            >
              designed by webflix
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
