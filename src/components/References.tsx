import { Quote } from 'lucide-react';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

function ProjectCard({ image, title, description, category }: ProjectProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all">
      <div className="aspect-[4/3] overflow-hidden bg-glaswerk-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-anthrazit via-anthrazit/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block bg-stahlblau text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
            {category}
          </span>
          <h4 className="text-xl font-bold text-glaswerk-white mb-2">{title}</h4>
          <p className="text-glaswerk-white/80 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function References() {
  const projects: ProjectProps[] = [
    {
      image: 'https://i.imgur.com/0iMFjts.jpeg',
      
    },
    {
      image: 'https://i.imgur.com/MRx5wik.jpeg',
      
    },
    {
      image: 'https://i.imgur.com/QpbbQV1.jpeg',
     
    },
    {
      image: 'https://i.imgur.com/UZMIyTb.jpeg',
      
    },
  ];

  const testimonials = [
    {
      text: 'Die Zusammenarbeit mit Glaswerk Elements war von Anfang bis Ende professionell. Unsere neuen Fenster sind nicht nur wunderschön, sondern auch unglaublich energieeffizient.',
      author: 'Familie Müller',
    },
    {
      text: 'Die maßgefertigte Haustür in anthrazit ist ein absoluter Blickfang. Qualität und Service waren hervorragend!',
      author: 'Thomas Schmidt',
    },
    {
      text: 'Unser Schiebetürsystem öffnet unseren Wohnraum völlig neu. Die Montage war schnell und sauber. Absolut empfehlenswert!',
      author: 'Anna Weber',
    },
  ];

  return (
    <section id="references" className="py-20 bg-glaswerk-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-anthrazit">
            Referenzen & Projekte
          </h2>
          <p className="text-xl text-anthrazit/70 max-w-3xl mx-auto">
            Entdecken Sie unsere realisierten Projekte und erfahren Sie, was unsere Kunden sagen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="bg-anthrazit py-16 px-8 rounded-lg">
          <h3 className="text-3xl font-bold text-center text-glaswerk-white mb-12">
            Das sagen unsere Kunden
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-glaswerk-white/5 backdrop-blur-sm p-6 rounded-lg border border-silbergrau/20">
                <Quote className="text-stahlblau mb-4" size={32} />
                <p className="text-glaswerk-white/80 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-silbergrau/20 pt-4">
                  <p className="font-semibold text-glaswerk-white">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
