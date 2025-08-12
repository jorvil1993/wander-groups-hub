import { Card } from "@/components/ui/card";

// Import new generated images
import teamCasualRetreatForest from "@/assets/team-casual-retreat-forest.jpg";
import teamGroupTravelNature from "@/assets/team-group-travel-nature.jpg";
import teamCelebrationCampfire from "@/assets/team-celebration-campfire.jpg";

const TransformativeExperiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Encuentros y retiros",
      subtitle: "CONEXIÓN AUTÉNTICA EN LA NATURALEZA",
      description: "Espacios diseñados para encuentros genuinos fuera del ambiente corporativo tradicional. Nuestros retiros facilitan conversaciones profundas y conexiones reales entre equipos, donde la naturaleza actúa como catalizador para fortalecer relaciones y generar nuevas perspectivas colaborativas.",
      image: teamCasualRetreatForest,
      color: "from-blue-500/20 to-purple-500/20",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Viaje en grupo",
      subtitle: "AVENTURAS QUE UNEN EQUIPOS",
      description: "Experiencias de viaje diseñadas para fortalecer vínculos a través de aventuras compartidas. Nuestros viajes grupales combinan exploración, desafíos colaborativos y momentos de descubrimiento que transforman colegas en verdaderos compañeros de equipo, creando recuerdos inolvidables fuera del entorno laboral.",
      image: teamGroupTravelNature,
      color: "from-green-500/20 to-teal-500/20",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "Celebraciones auténticas",
      subtitle: "ÉXITOS QUE SE SIENTEN EN EL ALMA",
      description: "Cada logro merece ser celebrado de manera memorable. Creamos experiencias únicas donde los triunfos del equipo se viven intensamente, fortaleciendo la cultura organizacional y generando recuerdos que motivarán a tu equipo mucho después del retiro.",
      image: teamCelebrationCampfire,
      color: "from-orange-500/20 to-red-500/20",
      textColor: "text-orange-600"
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
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
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
                      <h3 className="text-3xl md:text-4xl font-light mb-2 text-neutral-800">
                        {experience.title}
                      </h3>
                      <p className="text-sm md:text-base font-semibold text-neutral-500 tracking-wider uppercase">
                        {experience.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
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
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-forest/10 to-orange/10 rounded-full border border-neutral-200/50 shadow-sm">
            <div className="w-3 h-3 bg-gradient-to-r from-forest to-orange rounded-full animate-pulse"></div>
            <span className="text-base font-medium text-neutral-700">
              Cada experiencia está diseñada para tu equipo específico
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformativeExperiences;