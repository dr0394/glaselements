import { Lock, Ruler, Palette } from 'lucide-react';

interface DoorModel {
  name: string;
  description: string;
  image: string;
}

interface DoorsProps {
  onOpenForm: () => void;
}

export default function Doors({ onOpenForm }: DoorsProps) {

  const doorModels: DoorModel[] = [
    {
      name: 'Torino',
      description: 'Komfortable Haustüranlage mit klaren Linien und zeitloser Eleganz',
      image: 'https://i.imgur.com/JQsm3C2.jpeg',
    },
    {
      name: 'Firenze',
      description: 'Zeitlos elegantes Design in anthrazit für moderne Architektur',
      image: 'https://i.imgur.com/G1SNSrX.jpeg',
    },
    {
      name: 'Verona',
      description: 'Dunkelgraue Tür mit seitlichem Glaselement für optimalen Lichteinfall',
      image: 'https://i.imgur.com/hRB27Cm.jpeg',
    },
    {
      name: 'Modena',
      description: 'Schlichte, weiße Haustür für minimalistische Gestaltung',
      image: 'https://i.imgur.com/skTOJ55.jpeg',
    },
    {
      name: 'Messina',
      description: 'Dunkelbraune Tür mit Holzdekor für warme Atmosphäre',
      image: 'https://i.imgur.com/EIIjdjC.jpeg',
    },
    {
      name: 'Trieste',
      description: 'Rustikales rot oder cognacfarbiges Finish mit Charakter',
      image: 'https://i.imgur.com/7KW9jFI.jpeg',
    },
    {
      name: 'Foggia',
      description: 'Intensive Holztöne oder neutrales Dunkelrot für elegante Eingänge',
      image: 'https://i.imgur.com/k0TEFJw.jpeg',
    },
    {
      name: 'Livorno',
      description: 'Schwarze Haustür mit schlichtem Griff und puristischem Design',
      image: 'https://i.imgur.com/4VXCZcz.jpeg',
    },
  ];

  return (
    <section id="doors" className="py-20 bg-glaswerk-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-anthrazit">
            Design und Sicherheit All in One Systeme
          </h2>
          <p className="text-xl text-anthrazit/70 max-w-3xl mx-auto mb-8">
            Von der klassischen Haustür bis zur modernen Schiebetür – entdecken Sie unser vielseitiges
            Sortiment. Jede Tür vereint höchste Sicherheit mit ästhetischem Design in einem intelligenten System.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Lock className="text-stahlblau" size={32} />
              <div className="text-left">
                <p className="font-semibold text-anthrazit">Sicherheit</p>
                <p className="text-sm text-anthrazit/70">Mehrfachverriegelung & RC-Klassen</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Ruler className="text-stahlblau" size={32} />
              <div className="text-left">
                <p className="font-semibold text-anthrazit">Maßanfertigung</p>
                <p className="text-sm text-anthrazit/70">Individuell nach Ihren Wünschen</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Palette className="text-stahlblau" size={32} />
              <div className="text-left">
                <p className="font-semibold text-anthrazit">Vielfalt</p>
                <p className="text-sm text-anthrazit/70">Farben, Beschläge & Glas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doorModels.map((model) => (
            <div
              key={model.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-silbergrau/30 group"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  src={model.image}
                  alt={`${model.name} Haustür`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-anthrazit/90 to-transparent p-6">
                  <h3 className="text-3xl font-bold text-glaswerk-white">
                    {model.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-anthrazit/70 mb-4">{model.description}</p>
                <button
                  onClick={onOpenForm}
                  className="text-stahlblau font-semibold hover:underline"
                >
                  Anfragen →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenForm}
            className="bg-stahlblau text-white px-8 py-4 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold text-lg"
          >
            Tür auswählen und anfragen
          </button>
        </div>
      </div>
    </section>
  );
}
