import { useState } from 'react';
import { Move, Minimize2, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

interface SystemsProps {
  onOpenForm: () => void;
}

export default function Systems({ onOpenForm }: SystemsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://i.imgur.com/vj2b4iZ.png',
    'https://i.imgur.com/qucY2gF.png',
    'https://i.imgur.com/tYzFGNL.png',
    'https://i.imgur.com/SUPTfko.png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="systems" className="py-20 bg-anthrazit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg shadow-2xl overflow-hidden group bg-glaswerk-white">
              <img
                src={images[currentSlide]}
                alt={`Schiebe- und Faltsysteme ${currentSlide + 1}`}
                className="w-full h-auto object-contain"
              />

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-anthrazit/80 hover:bg-anthrazit text-glaswerk-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-anthrazit/80 hover:bg-anthrazit text-glaswerk-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Nächstes Bild"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-glaswerk-white w-8'
                        : 'bg-glaswerk-white/50 hover:bg-glaswerk-white/75'
                    }`}
                    aria-label={`Gehe zu Bild ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glaswerk-white">
              Systeme – Schiebe‑ und Faltsysteme
            </h2>

            <p className="text-lg mb-8 text-glaswerk-white/80 leading-relaxed">
              Glas-Schiebesysteme öffnen Räume und schaffen fließende Übergänge zwischen Innen und Außen.
              Gleichzeitig bieten sie hervorragende Isolierung und Geräuschlosigkeit.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Move size={32} />
                </div>
                <div>
                  <h4 className="font-semibold text-glaswerk-white mb-2">Schiebetürsysteme</h4>
                  <p className="text-glaswerk-white/70">
                    Platzsparende, barrierefreie Lösungen für großflächige Öffnungen. Geräuschlos
                    und komfortabel in der Bedienung.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Minimize2 size={32} />
                </div>
                <div>
                  <h4 className="font-semibold text-glaswerk-white mb-2">Faltsysteme</h4>
                  <p className="text-glaswerk-white/70">
                    Ideal für Wintergärten oder großflächige Öffnungen. Komplett aufklappbar
                    für maximale Raumöffnung.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Maximize size={32} />
                </div>
                <div>
                  <h4 className="font-semibold text-glaswerk-white mb-2">Raumhohe Elemente</h4>
                  <p className="text-glaswerk-white/70">
                    Nahtlose Integration in moderne Architektur. Von Boden bis Decke für
                    maximale Transparenz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stahlblau/20 border border-stahlblau/30 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-glaswerk-white mb-3">Vorteile unserer Systeme:</h4>
              <ul className="space-y-2 text-glaswerk-white/80">
                <li>✓ Barrierefrei und schwellenfrei</li>
                <li>✓ Geräuschloser Betrieb</li>
                <li>✓ Hervorragende Wärme- und Schalldämmung</li>
                <li>✓ Perfekt für Wohn- und Geschäftsräume</li>
              </ul>
            </div>

            <button
              onClick={onOpenForm}
              className="bg-stahlblau text-white px-8 py-3 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold"
            >
              System anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
