import { CloudRain, Sun, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

interface RoofingProps {
  onOpenForm: () => void;
}

export default function Roofing({ onOpenForm }: RoofingProps) {
  const images = [
    '/ChatGPT_Image_12._Feb._2026,_18_35_17.png',
    '/e86227b4-9432-4fe7-bff1-2bc3d805dadf.jpg',
    '/SlideCold23_scale-2-4-e1719987469973-qqjyew1jtpoeky573c6h5j1kue7rrekkg4g98foml4.png',
    '/SkyView_scale2-2-2-qqma1wdog7itgshgwv3cdplt4tc0us2if8i89r8aqg.png',
    '/ChatGPT_Image_12._Feb._2026,_19_06_12.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="roofing" className="relative py-32 bg-glaswerk-white overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-anthrazit/50 via-anthrazit/40 to-anthrazit/30"></div>
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Überdachungen – Schutz & Transparenz
          </h2>

          <p className="text-xl mb-12 text-white/90 leading-relaxed drop-shadow-md">
            Genießen Sie Ihre Terrasse oder Ihren Balkon das ganze Jahr über. Unsere Glasüberdachungen
            bieten optimalen Schutz vor Wind und Wetter, während Sie gleichzeitig von maximaler
            Lichtdurchlässigkeit profitieren.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
              <div className="text-white mb-4">
                <CloudRain size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-white text-lg mb-2">Wettergeschützt</h4>
              <p className="text-white/80 text-sm">
                Schutz vor Regen, Schnee und Wind. Nutzen Sie Ihren Außenbereich bei jedem Wetter.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
              <div className="text-white mb-4">
                <Sun size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-white text-lg mb-2">Lichtdurchflutet</h4>
              <p className="text-white/80 text-sm">
                Hochwertiges Sicherheitsglas lässt Tageslicht hindurch und schafft eine helle Atmosphäre.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
              <div className="text-white mb-4">
                <Lightbulb size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-white text-lg mb-2">Smart & Modern</h4>
              <p className="text-white/80 text-sm">
                Optional mit integrierter LED-Beleuchtung und automatischen Beschattungssystemen.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg mb-10">
            <h4 className="font-semibold text-white text-xl mb-4">Unsere Varianten:</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-white/90">
              <li className="flex items-center gap-2">
                <span className="text-stahlblau text-2xl">•</span>
                Klarsicht-Verglasung für maximales Licht
              </li>
              <li className="flex items-center gap-2">
                <span className="text-stahlblau text-2xl">•</span>
                Getönte Verglasung für Sonnenschutz
              </li>
              <li className="flex items-center gap-2">
                <span className="text-stahlblau text-2xl">•</span>
                Mit integrierter LED-Beleuchtung
              </li>
              <li className="flex items-center gap-2">
                <span className="text-stahlblau text-2xl">•</span>
                Automatische Beschattungssysteme
              </li>
              <li className="flex items-center gap-2">
                <span className="text-stahlblau text-2xl">•</span>
                Für Terrassen, Balkone und Carports
              </li>
            </ul>
          </div>

          <button
            onClick={onOpenForm}
            className="bg-white text-anthrazit px-10 py-4 rounded-md hover:bg-white/90 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl"
          >
            Überdachung planen
          </button>

          <div className="flex gap-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'w-12 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Bild ${index + 1} anzeigen`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
