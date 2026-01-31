import { X, Check } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenForm: () => void;
}

export default function ProblemSolution({ onOpenForm }: ProblemSolutionProps) {
  const problems = [
    'Alte, undichte Fenster treiben Heizkosten in die Höhe',
    'Standardlösungen passen nicht zur individuellen Architektur',
    'Schlechte Beratung und mangelnde Serviceleistungen',
    'Lange Wartezeiten und unprofessionelle Montage'
  ];

  const solutions = [
    'Modernste Wärmedämmung senkt Energiekosten um bis zu 40%',
    'Maßgefertigte Lösungen perfekt abgestimmt auf Ihr Projekt',
    'Persönliche Beratung vom Erstgespräch bis zur Montage',
    'Schnelle Umsetzung durch erfahrene Fachkräfte'
  ];

  return (
    <section className="py-20 bg-anthrazit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-glaswerk-white">
            Schluss mit Kompromissen
          </h2>
          <p className="text-xl text-glaswerk-white/80 max-w-3xl mx-auto">
            Von veralteten Fenstern zu modernen, energieeffizienten Bauelementen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-glaswerk-white/5 p-8 border border-red-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500 flex items-center justify-center">
                <X size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-normal text-glaswerk-white">Das Problem</h3>
            </div>

            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X size={20} className="text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-glaswerk-white/80">{problem}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-glaswerk-white/5 p-8 border border-stahlblau">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-stahlblau flex items-center justify-center">
                <Check size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-normal text-glaswerk-white">Unsere Lösung</h3>
            </div>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-stahlblau flex-shrink-0 mt-1" />
                  <p className="text-glaswerk-white/80">{solution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenForm}
            className="bg-stahlblau text-white px-8 py-4 hover:bg-stahlblau/90 transition-all font-normal text-lg"
          >
            Jetzt kostenlose Beratung sichern
          </button>
        </div>
      </div>
    </section>
  );
}
