import { Award, Users, Wrench } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-glaswerk-white text-anthrazit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Glaswerk Elements –<br />Ihr Partner für moderne Bauelemente
            </h2>

            <p className="text-lg mb-6 text-anthrazit/80 leading-relaxed">
              Glaswerk Elements ist ein Handwerksbetrieb, der sich auf maßgefertigte Fenster, Türen und
              Glas-Systeme spezialisiert hat. Mit jahrelanger Erfahrung verbinden wir Innovationsfreude
              mit Kundenorientierung.
            </p>

            <p className="text-lg mb-6 text-anthrazit/80 leading-relaxed">
              Unser Credo: <strong>Form trifft Funktion</strong>. Wir haben eine Leidenschaft für klare Linien,
              hochwertige Materialien und langlebiges Design. Jedes Projekt ist für uns einzigartig – von der
              ersten Beratung bis zur finalen Montage.
            </p>

            <p className="text-lg text-anthrazit/80 leading-relaxed">
              Ob zeitlose Eleganz oder moderne Architektur – wir schaffen Bauelemente, die Ihre Vision
              Wirklichkeit werden lassen.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modernes Glasgebäude"
              className="rounded-lg shadow-2xl"
            />

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-stahlblau text-white p-6 rounded-lg text-center">
                <Award size={32} className="mx-auto mb-2" />
                <p className="font-bold text-lg">Qualität</p>
              </div>
              <div className="bg-stahlblau text-white p-6 rounded-lg text-center">
                <Users size={32} className="mx-auto mb-2" />
                <p className="font-bold text-lg">Erfahrung</p>
              </div>
              <div className="bg-stahlblau text-white p-6 rounded-lg text-center">
                <Wrench size={32} className="mx-auto mb-2" />
                <p className="font-bold text-lg">Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
