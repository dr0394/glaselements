import { MessageCircle, Lightbulb, FileText, Wrench, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProcessStep({ number, icon, title, description }: StepProps) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-stahlblau flex items-center justify-center text-glaswerk-white mb-4 relative z-10">
          {icon}
        </div>
        <div className="absolute top-10 left-1/2 w-px h-full bg-silbergrau/30 -z-0 hidden lg:block"></div>
        <div className="bg-stahlblau text-glaswerk-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4">
          {number}
        </div>
        <h3 className="text-xl font-bold mb-3 text-anthrazit">{title}</h3>
        <p className="text-anthrazit/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  const steps: Omit<StepProps, 'number'>[] = [
    {
      icon: <MessageCircle size={32} />,
      title: 'Kontaktaufnahme & Beratung',
      description: 'Kostenloses Erstgespräch und ausführliche Analyse Ihrer Anforderungen vor Ort oder remote.',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Planung',
      description: 'Maßgeschneiderte Lösungen für Ihr Projekt mit detaillierter Konzeptausarbeitung.',
    },
    {
      icon: <FileText size={32} />,
      title: 'Angebot & Auftragserteilung',
      description: 'Transparentes und faires Angebot mit detaillierter Aufschlüsselung aller Positionen.',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Fertigung & Montage',
      description: 'Präzise Verarbeitung in unserer Werkstatt und professionelle Installation vor Ort.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'After-Sales & Service',
      description: 'Wartung, Pflegehinweise und langfristiger Service für Ihre Zufriedenheit.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-glaswerk-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-anthrazit">
            So funktioniert's – Von der Idee bis zur Montage
          </h2>
          <p className="text-xl text-anthrazit/70 max-w-3xl mx-auto">
            Ihr Weg zu hochwertigen Bauelementen in fünf einfachen Schritten
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <ProcessStep key={index} number={index + 1} {...step} />
          ))}
        </div>

        <div className="mt-16 bg-anthrazit p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4 text-glaswerk-white">
            Bereit für Ihr Projekt?
          </h3>
          <p className="text-glaswerk-white/80 mb-6 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung. Wir freuen uns darauf,
            Ihre Vision Wirklichkeit werden zu lassen.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-stahlblau text-white px-8 py-3 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold"
          >
            Jetzt Beratung anfragen
          </button>
        </div>
      </div>
    </section>
  );
}
