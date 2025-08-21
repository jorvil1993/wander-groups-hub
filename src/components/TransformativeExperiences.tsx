import { Card } from "@/components/ui/card";

// Import real images for the three pillars (avoiding duplicates with carousel)
import teamMindfulnessRiver from "@/assets/team-mindfulness-river.jpg";
import teamCelebrationCampfire from "@/assets/team-celebration-campfire.jpg";
import teamProductivityForest from "@/assets/team-productivity-forest.jpg";

const TransformativeExperiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Wellness",
      subtitle: "BIENESTAR INTEGRAL EN LA NATURALEZA",
      description: "Experimenta la transformación a través de yoga al aire libre, caminatas revitalizantes, ejercicios en contacto con la naturaleza y sesiones de meditación. Nuestros programas de wellness están diseñados para renovar cuerpo, mente y espíritu en el entorno perfecto de nuestras cabañas.",
      image: teamMindfulnessRiver,
      color: "from-green-500/20 to-teal-500/20",
      textColor: "text-green-600"
    },
    {
      id: 2,
      title: "Eventos Personales",
      subtitle: "CELEBRACIONES MEMORABLES",
      description: "Convierte tus momentos especiales en experiencias inolvidables. Desde fiestas íntimas hasta celebraciones de cumpleaños únicas, creamos el ambiente perfecto para tus eventos personales rodeados de la magia de la naturaleza y la comodidad de nuestras instalaciones.",
      image: teamCelebrationCampfire,
      color: "from-orange-500/20 to-red-500/20",
      textColor: "text-orange-600"
    },
    {
      id: 3,
      title: "Eventos Corporativos",
      subtitle: "POTENCIA TU EQUIPO DE TRABAJO",
      description: "Retiros corporativos diseñados para fortalecer la cohesión del equipo, impulsar la productividad y fomentar la innovación. Espacios inspiradores que transforman las dinámicas laborales a través de experiencias compartidas en un entorno natural excepcional.",
      image: teamProductivityForest,
      color: "from-blue-500/20 to-purple-500/20",
      textColor: "text-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-forest rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-oswald font-light mb-6 text-neutral-700">
            Momentos que transforman
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Experiencias diseñadas para crear conexiones profundas, impulsar la innovación 
            y celebrar el éxito de manera auténtica
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-forest to-orange mx-auto rounded-full"></div>
        </div>

        {/* Experiences Grid */}
        <div className="space-y-24">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={experience.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`lg:col-span-5 space-y-8 ${!isEven ? 'lg:col-start-8' : ''}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light mb-2 text-neutral-800">
                        {experience.title}
                      </h3>
                      <p className="text-sm md:text-base font-bold text-neutral-500 tracking-wider uppercase">
                        {experience.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
                
                {/* Image */}
                <div className={`lg:col-span-7 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-rotate-1">
                    <div className="relative">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={experience.image} 
                          alt={experience.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${experience.color} opacity-20`}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TransformativeExperiences;