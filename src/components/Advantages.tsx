import { Sparkles, User, Award, Shield, Headphones, MapPin } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: <Sparkles size={40} />,
      title: 'Design trifft Funktionalität',
      description: 'Modernste Designs für nachhaltige Architektur. Form und Funktion in perfekter Harmonie.',
    },
    {
      icon: <User size={40} />,
      title: 'Individualität',
      description: 'Maßanfertigungen nach Kundenwunsch. Jede Installation ist einzigartig und auf Sie zugeschnitten.',
    },
    {
      icon: <Award size={40} />,
      title: 'Materialqualität',
      description: 'Hochwertiges Glas und Aluminium, energieeffiziente Profile für langfristige Zufriedenheit.',
    },
    {
      icon: <Shield size={40} />,
      title: 'Komfort & Sicherheit',
      description: 'Schallschutz, Wärmedämmung und Einbruchschutz auf höchstem Niveau.',
    },
    {
      icon: <Headphones size={40} />,
      title: 'Full-Service',
      description: 'Beratung, Planung, Fertigung und Montage – alles aus einer Hand.',
    },
    {
      icon: <MapPin size={40} />,
      title: 'Lokale Fertigung',
      description: 'In der Region gefertigt mit persönlichem Service und kurzen Wegen.',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-anthrazit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glaswerk-white">
            Ihre Vorteile mit Glaswerk Elements
          </h2>
          <p className="text-xl text-glaswerk-white/80 max-w-3xl mx-auto">
            Warum sich Kunden für uns entscheiden – Qualität, Service und Expertise in jedem Detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-glaswerk-white/5 backdrop-blur-sm p-8 rounded-lg border border-silbergrau/20 hover:bg-glaswerk-white/10 transition-all"
            >
              <div className="text-stahlblau mb-4">{advantage.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-glaswerk-white">{advantage.title}</h3>
              <p className="text-glaswerk-white/70 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-stahlblau/20 border border-stahlblau p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4 text-glaswerk-white">
            Mehr Licht. Mehr Raum. Mehr Komfort.
          </h3>
          <p className="text-glaswerk-white/80 text-lg max-w-3xl mx-auto">
            Erleben Sie Wohnen neu mit hochwertigen Bauelementen von Glaswerk Elements.
            Kontaktieren Sie uns für eine kostenlose Beratung und entdecken Sie die Möglichkeiten.
          </p>
        </div>
      </div>
    </section>
  );
}
