import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import LocationCard from "@/components/LocationCard";
import CorporatePackages from "@/components/CorporatePackages";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Target, Lightbulb, Heart, Phone, Mail, MessageCircle } from "lucide-react";

// Import team images
import teamBuildingForest from "@/assets/team-building-forest.jpg";
import teamProductivityForest from "@/assets/team-productivity-forest.jpg";
import teamInnovationForest from "@/assets/team-innovation-forest.jpg";
import teamWellnessForest from "@/assets/team-wellness-forest.jpg";

const Grupos = () => {
  const locations = [
    {
      title: "Valle de Bravo",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      capacity: "5-40 personas",
      features: ["WiFi", "Cocina", "Jacuzzi", "Fogata", "Vista al lago"],
      description: "Cabañas frente al lago ideales para retiros empresariales con actividades acuáticas y senderismo.",
      priceRange: "$2,500-$5,000"
    },
    {
      title: "Malinalco Rojkind",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      capacity: "8-30 personas",
      features: ["Arquitectura única", "WiFi", "Cocina", "Terrazas", "Vista panorámica"],
      description: "Diseño arquitectónico excepcional en las montañas, perfecto para equipos creativos.",
      priceRange: "$3,000-$6,000"
    },
    {
      title: "La Marquesa",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1542006614-aa1c8b6f6bb5?q=80&w=2127&auto=format&fit=crop",
      capacity: "6-35 personas",
      features: ["Bosque", "Chimenea", "WiFi", "Cocina", "Actividades outdoor"],
      description: "Bosque de pinos y aire puro, ideal para dinámicas de team building en la naturaleza.",
      priceRange: "$2,200-$4,500"
    },
    {
      title: "Malinalco Centro",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      capacity: "4-25 personas",
      features: ["Pueblo mágico", "WiFi", "Cocina", "Cultura", "Gastronomía"],
      description: "Experiencia cultural en pueblo mágico, combinando trabajo y tradición mexicana.",
      priceRange: "$2,800-$5,200"
    },
    {
      title: "Mineral del Chico",
      location: "Hidalgo",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
      capacity: "8-45 personas",
      features: ["Bosque templado", "WiFi", "Cocina", "Senderismo", "Aire puro"],
      description: "Bosques de coníferas y clima fresco, perfecto para retiros de reflexión y estrategia.",
      priceRange: "$2,000-$4,200"
    },
    {
      title: "Villa Alpina",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop",
      capacity: "10-50 personas",
      features: ["Estilo alpino", "WiFi", "Cocina", "Amplios espacios", "Vista montañas"],
      description: "Arquitectura alpina con amplios espacios comunes, ideal para grupos grandes.",
      priceRange: "$3,500-$7,000"
    },
    {
      title: "Tzibantza, Querétaro",
      location: "Querétaro",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      capacity: "6-32 personas",
      features: ["Viñedos", "WiFi", "Cocina", "Cata de vinos", "Ambiente exclusivo"],
      description: "Rodeado de viñedos con experiencias gastronómicas únicas para equipos ejecutivos.",
      priceRange: "$3,200-$6,500"
    },
    {
      title: "Arteaga, Monterrey",
      location: "Coahuila",
      image: "https://images.unsplash.com/photo-1542006614-aa1c8b6f6bb5?q=80&w=2127&auto=format&fit=crop",
      capacity: "5-28 personas",
      features: ["Sierra madre", "WiFi", "Cocina", "Clima fresco", "Aventura"],
      description: "Montañas de Coahuila con actividades de aventura, ideal para team building extremo.",
      priceRange: "$2,800-$5,500"
    }
  ];

  const benefits = [
    {
      image: teamBuildingForest,
      title: "Fortalecimiento del Equipo",
      description: "Actividades diseñadas para mejorar la comunicación y cohesión del equipo en un ambiente relajado."
    },
    {
      image: teamProductivityForest,
      title: "Productividad Mejorada",
      description: "Espacios inspiradores que fomentan la creatividad y el pensamiento estratégico fuera de la oficina."
    },
    {
      image: teamInnovationForest,
      title: "Innovación y Creatividad",
      description: "El contacto con la naturaleza estimula nuevas ideas y soluciones innovadoras para tu empresa."
    },
    {
      image: teamWellnessForest,
      title: "Bienestar del Equipo",
      description: "Reduce el estrés y mejora el bienestar mental de tu equipo con experiencias en la naturaleza."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      
      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-medium text-warm-beige mb-6 uppercase mx-2.5" style={{ letterSpacing: '0.5px' }}>
              ¿Por qué elegir Wander para tu equipo?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los retiros corporativos en la naturaleza han demostrado mejorar significativamente 
              la productividad, creatividad y cohesión de los equipos de trabajo.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <Carousel 
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="relative"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {benefits.map((benefit, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4">
                      <Card className="mx-auto max-w-2xl overflow-hidden bg-gradient-to-br from-background to-muted/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative">
                          <div className="aspect-[16/9] overflow-hidden">
                            <img 
                              src={benefit.image} 
                              alt={benefit.title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{benefit.title}</h3>
                            <p className="text-lg md:text-xl leading-relaxed text-white/90">{benefit.description}</p>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-2 border-forest text-forest hover:text-forest shadow-lg" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-2 border-forest text-forest hover:text-forest shadow-lg" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestras Ubicaciones
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde lagos tranquilos hasta montañas inspiradoras, cada ubicación está cuidadosamente 
              seleccionada para ofrecer la experiencia perfecta para tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      <CorporatePackages />

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ¿Listo para planificar tu retiro corporativo?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Nuestro equipo de especialistas en eventos corporativos te ayudará a diseñar 
            la experiencia perfecta para tu equipo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-forest mb-3" />
              <h3 className="font-bold text-primary mb-2">Llámanos</h3>
              <p className="text-muted-foreground">+52 55 1234 5678</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-forest mb-3" />
              <h3 className="font-bold text-primary mb-2">Escríbenos</h3>
              <p className="text-muted-foreground">grupos@wandercabins.mx</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-8 w-8 text-forest mb-3" />
              <h3 className="font-bold text-primary mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+52 55 9876 5432</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-forest hover:bg-forest/90 text-forest-foreground font-semibold px-8 py-3">
              Solicitar Cotización
            </Button>
            <Button size="lg" variant="outline" className="border-forest text-forest hover:bg-forest hover:text-forest-foreground font-semibold px-8 py-3">
              Programar Llamada
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grupos;