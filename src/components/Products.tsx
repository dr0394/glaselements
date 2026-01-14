import { Maximize2, DoorOpen, Grid3x3, Home } from 'lucide-react';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function ProductCard({ icon, title, description, onClick }: ProductCardProps) {
  return (
    <div className="bg-anthrazit/5 p-8 rounded-lg hover:shadow-xl transition-shadow border border-silbergrau/30 group cursor-pointer" onClick={onClick}>
      <div className="text-stahlblau mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-anthrazit">{title}</h3>
      <p className="text-anthrazit/70 mb-4 leading-relaxed">{description}</p>
      <button className="text-stahlblau font-semibold hover:underline">
        Mehr erfahren →
      </button>
    </div>
  );
}

export default function Products() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-glaswerk-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-anthrazit">
            Unsere Kollektionen
          </h2>
          <p className="text-xl text-anthrazit/70 max-w-3xl mx-auto">
            Von Fenstern über Türen bis hin zu kompletten Systemen – entdecken Sie unsere vielseitigen Produktwelten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            icon={<Maximize2 size={48} />}
            title="Fenster"
            description="Aluminium- und Glasfenster mit hoher Energieeffizienz für maximalen Lichteinfall"
            onClick={() => scrollToSection('windows')}
          />

          <ProductCard
            icon={<DoorOpen size={48} />}
            title="Türen"
            description="Haustüren, Schiebetüren und Pivot-Türen in zeitlosem Design und höchster Sicherheit"
            onClick={() => scrollToSection('doors')}
          />

          <ProductCard
            icon={<Grid3x3 size={48} />}
            title="Systeme"
            description="Schiebe- und Faltsysteme, Glas-Schiebesysteme für raumhohe Öffnungen"
            onClick={() => scrollToSection('systems')}
          />

          <ProductCard
            icon={<Home size={48} />}
            title="Überdachungen"
            description="Glas-Terrassenüberdachungen und Balkonsysteme für wettergeschützte Freiräume"
            onClick={() => scrollToSection('roofing')}
          />
        </div>
      </div>
    </section>
  );
}
