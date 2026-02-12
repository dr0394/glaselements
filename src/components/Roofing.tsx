import { CloudRain, Sun, Lightbulb } from 'lucide-react';

interface RoofingProps {
  onOpenForm: () => void;
}

export default function Roofing({ onOpenForm }: RoofingProps) {

  return (
    <section id="roofing" className="py-20 bg-gradient-to-br from-glaswerk-white to-silbergrau/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-anthrazit">
              Überdachungen – Schutz & Transparenz
            </h2>

            <p className="text-xl mb-10 text-anthrazit/80 leading-relaxed">
              Genießen Sie Ihre Terrasse oder Ihren Balkon das ganze Jahr über. Unsere Glasüberdachungen
              bieten optimalen Schutz vor Wind und Wetter, während Sie gleichzeitig von maximaler
              Lichtdurchlässigkeit profitieren.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <CloudRain size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-anthrazit text-lg mb-2">Wettergeschützt</h4>
                  <p className="text-anthrazit/70">
                    Schutz vor Regen, Schnee und Wind. Nutzen Sie Ihren Außenbereich bei jedem Wetter.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Sun size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-anthrazit text-lg mb-2">Lichtdurchflutet</h4>
                  <p className="text-anthrazit/70">
                    Hochwertiges Sicherheitsglas lässt Tageslicht hindurch und schafft eine helle Atmosphäre.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Lightbulb size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-anthrazit text-lg mb-2">Smart & Modern</h4>
                  <p className="text-anthrazit/70">
                    Optional mit integrierter LED-Beleuchtung und automatischen Beschattungssystemen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stahlblau/10 border-l-4 border-stahlblau p-6 rounded-r-lg mb-10">
              <h4 className="font-bold text-anthrazit text-xl mb-4">Unsere Varianten:</h4>
              <ul className="space-y-2 text-anthrazit/80">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-stahlblau rounded-full"></span>
                  Klarsicht-Verglasung für maximales Licht
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-stahlblau rounded-full"></span>
                  Getönte Verglasung für Sonnenschutz
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-stahlblau rounded-full"></span>
                  Mit integrierter LED-Beleuchtung
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-stahlblau rounded-full"></span>
                  Automatische Beschattungssysteme
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-stahlblau rounded-full"></span>
                  Für Terrassen, Balkone und Carports
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenForm}
              className="bg-stahlblau text-white px-10 py-4 rounded-md hover:bg-stahlblau/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Überdachung planen
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Glasüberdachung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthrazit/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stahlblau/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-stahlblau/15 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
