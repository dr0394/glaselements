import { Sun, Shield, Volume2, Thermometer } from 'lucide-react';

interface WindowsProps {
  onOpenForm: () => void;
}

export default function Windows({ onOpenForm }: WindowsProps) {

  const features = [
    {
      icon: <Sun size={32} />,
      title: 'Maximaler Lichteinfall',
      description: 'Große Glasflächen für helle, lichtdurchflutete Räume',
    },
    {
      icon: <Thermometer size={32} />,
      title: 'Wärmedämmung',
      description: 'Mehrfachverglasung und thermisch getrennte Profile',
    },
    {
      icon: <Volume2 size={32} />,
      title: 'Schallschutz',
      description: 'Hochwertige Verglasung für optimale Lärmreduktion',
    },
    {
      icon: <Shield size={32} />,
      title: 'Langlebigkeit',
      description: 'Robuste Aluminiumprofile in verschiedenen Farben',
    },
  ];

  return (
    <section id="windows" className="py-20 bg-anthrazit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative md:order-1">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Moderne Fenster"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glaswerk-white">
              Fenster – Licht & Energieeffizienz
            </h2>

            <p className="text-lg mb-8 text-glaswerk-white/80 leading-relaxed">
              Moderne Glasfenster verbinden Ästhetik mit Funktionalität. Unsere Fenster aus hochwertigen
              Materialien bieten nicht nur große Glasflächen für maximalen Lichteinfall, sondern auch
              erstklassige Energieeffizienz.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-stahlblau flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-glaswerk-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-glaswerk-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-glaswerk-white mb-3">Verfügbare Farben:</h4>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-anthrazit border-2 border-glaswerk-white" title="Anthrazit"></div>
                <div className="w-12 h-12 rounded-full bg-white border-2 border-silbergrau" title="Weiß"></div>
                <div className="w-12 h-12 rounded-full bg-amber-700 border-2 border-glaswerk-white" title="Holzeffekt"></div>
              </div>
            </div>

            <button
              onClick={onOpenForm}
              className="bg-stahlblau text-white px-8 py-3 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold"
            >
              Fenster anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
