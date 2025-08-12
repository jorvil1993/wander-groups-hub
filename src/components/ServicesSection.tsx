import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Reuniones y retiros",
      subtitle: "INSPIRACIÓN, NATURALMENTE",
      description: "Llevamos las reuniones más allá de las cuatro paredes, a espacios al aire libre. Desde reuniones corporativas fuera de la oficina y actividades de team building hasta retiros de bienestar y trabajo profundo, nuestras pintorescas ubicaciones y espacios dedicados para grupos ofrecen el escenario perfecto para una experiencia inspiradora y productiva.",
      images: [
        "/lovable-uploads/92099cfb-9c56-4868-a486-6c614217ec8f.png"
      ],
      primaryImage: "/lovable-uploads/92099cfb-9c56-4868-a486-6c614217ec8f.png"
    },
    {
      id: 2,
      title: "Reuniones y celebraciones",
      subtitle: "RECUERDOS QUE DURAN TODA LA VIDA",
      description: "Mañanas radiantes. Noches estrelladas. Naturaleza en un relieve exquisito. Ya sea para dar el \"Sí, quiero\" bajo un frondoso follaje o para reunir a amigos y familiares para celebrar un acontecimiento importante, Postcard Cabins tiene todo lo necesario para crear una experiencia memorable y conmovedora.",
      images: [
        "/lovable-uploads/4d383a08-1b9c-49dd-9436-364f687cd1cd.png"
      ],
      primaryImage: "/lovable-uploads/4d383a08-1b9c-49dd-9436-364f687cd1cd.png"
    },
    {
      id: 3,
      title: "Servicios y soporte",
      subtitle: "PLANIFICACIÓN DE BRICOLAJE PARA LA CURACIÓN DE GUANTE BLANCO",
      description: "Ya sea una remodelación completa o una reunión íntima, estamos aquí para ayudarte a darle vida a tu evento, retiro o celebración, a cualquier escala. Desde una planificación sencilla que puedes hacer tú mismo hasta experiencias totalmente personalizadas, podemos ayudarte directamente o conectarte con socios de confianza para gestionar cada detalle de principio a fin.",
      images: [
        "/lovable-uploads/4528bca1-81f5-47ec-91b6-940dd6b44f9d.png"
      ],
      primaryImage: "/lovable-uploads/4528bca1-81f5-47ec-91b6-940dd6b44f9d.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2 text-neutral-800">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-base font-medium text-neutral-600 tracking-wider uppercase">
                    {service.subtitle}
                  </p>
                </div>
                
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-4">
                  <button className="group flex items-center gap-2 text-neutral-800 hover:text-forest transition-colors duration-200">
                    <span className="text-sm md:text-base font-medium">Conocer más</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
              
              {/* Image Content */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.primaryImage} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;