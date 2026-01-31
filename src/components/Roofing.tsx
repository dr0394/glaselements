import { CloudRain, Sun, Lightbulb } from 'lucide-react';

interface RoofingProps {
  onOpenForm: () => void;
}

export default function Roofing({ onOpenForm }: RoofingProps) {

  return (
    <section id="roofing" className="py-20 bg-glaswerk-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-anthrazit">
              Überdachungen – Schutz & Transparenz
            </h2>

            <p className="text-lg mb-8 text-anthrazit/80 leading-relaxed">
              Genießen Sie Ihre Terrasse oder Ihren Balkon das ganze Jahr über. Unsere Glasüberdachungen
              bieten optimalen Schutz vor Wind und Wetter, während Sie gleichzeitig von maximaler
              Lichtdurchlässigkeit profitieren.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <CloudRain size={32} />
                </div>
                <div>
                  <h4 className="font-semibold text-anthrazit mb-2">Wettergeschützt</h4>
                  <p className="text-anthrazit/70">
                    Schutz vor Regen, Schnee und Wind. Nutzen Sie Ihren Außenbereich bei jedem Wetter.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Sun size={32} />
                </div>
                <div>
                  <h4 className="font-semibold text-anthrazit mb-2">Lichtdurchflutet</h4>
                  <p className="text-anthrazit/70">
                    Hochwertiges Sicherheitsglas lässt Tageslicht hindurch und schafft eine helle Atmosphäre.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Lightbulb size={32} />
                </div>
                <div>
                  <h4 className="font-semibold text-anthrazit mb-2">Smart & Modern</h4>
                  <p className="text-anthrazit/70">
                    Optional mit integrierter LED-Beleuchtung und automatischen Beschattungssystemen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-silbergrau/20 border border-silbergrau p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-anthrazit mb-3">Varianten:</h4>
              <ul className="space-y-2 text-anthrazit/80">
                <li>• Klarsicht-Verglasung für maximales Licht</li>
                <li>• Getönte Verglasung für Sonnenschutz</li>
                <li>• Mit integrierter LED-Beleuchtung</li>
                <li>• Automatische Beschattungssysteme</li>
                <li>• Für Terrassen, Balkone und Carports</li>
              </ul>
            </div>

            <button
              onClick={onOpenForm}
              className="bg-stahlblau text-white px-8 py-3 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold"
            >
              Überdachung planen
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Glasüberdachung"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
