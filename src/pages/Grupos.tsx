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
      location: "2 horas desde CDMX",
      image: "/lovable-uploads/def6e8e6-a5b0-4008-9109-de65ea8474af.png",
      capacity: "5-40 personas",
      features: ["Cocina", "Jacuzzi", "Fogata", "Vista al lago"],
      description: "Cabañas frente al lago ideales para retiros empresariales con actividades acuáticas y senderismo.",
      priceRange: "$2,500-$5,000",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGTlCX20d8/YjcwfL6FAMXZ6N6Kd_R4Xw/view?utm_content=DAGTlCX20d8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd23c272fbc",
        nuestrasCabanas: "https://www.canva.com/design/DAGWcay6luU/NEHxMvyVITg0JkdTn6vhpw/view?utm_content=DAGWcay6luU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5f51670d6e#1",
        nuestrasExperiencias: "https://www.canva.com/design/DAGWcVXaoPQ/wbhXGZD99zD1X6HLitoxCQ/view?utm_content=DAGWcVXaoPQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h807160ca8b#1",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCsmz7Q8/VWAhufJ2NXTddPsI7RhZSA/view?utm_content=DAGfCsmz7Q8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb058b7706b"
      }
    },
    {
      title: "Malinalco Rojkind",
      location: "1.5 horas desde CDMX",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      capacity: "8-30 personas",
      features: ["Arquitectura única", "Cocina", "Terrazas", "Vista panorámica"],
      description: "Diseño arquitectónico excepcional en las montañas, perfecto para equipos creativos.",
      priceRange: "$3,000-$6,000",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGT2Xw89So/0YLDTTRL7KQYLRLn91NAig/view?utm_content=DAGT2Xw89So&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd29e9a6960",
        nuestrasCabanas: "https://www.canva.com/design/DAGZIOtSras/GwPgthRy_Bel_jl29us9ng/view?utm_content=DAGZIOtSras&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e77e660fe",
        nuestrasExperiencias: "https://www.canva.com/design/DAGY3G83XoI/znihseZR2GXnJ9RZM0qJxw/view?utm_content=DAGY3G83XoI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h100299c485",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCggZHcY/wjxqgz8RAdsWTxPSeWDITw/view?utm_content=DAGfCggZHcY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ab45b0022"
      }
    },
    {
      title: "La Marquesa",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1542006614-aa1c8b6f6bb5?q=80&w=2127&auto=format&fit=crop",
      capacity: "6-35 personas",
      features: ["Bosque", "Chimenea", "Cocina", "Actividades outdoor"],
      description: "Bosque de pinos y aire puro, ideal para dinámicas de team building en la naturaleza.",
      priceRange: "$2,200-$4,500",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGSByBdvhc/wmDjoJRcWxr4D1nXNpZSrA/view?utm_content=DAGSByBdvhc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4ecae278e5",
        nuestrasCabanas: "https://www.canva.com/design/DAGY3EVNtHY/2lOL6dkiu0YLWwmgz_Mgfg/view?utm_content=DAGY3EVNtHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4865eb75e8",
        nuestrasExperiencias: "https://www.canva.com/design/DAGYJ8n_W1A/U1rugEAKb8YZNOxkPrqhLQ/view?utm_content=DAGYJ8n_W1A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h672faf7b07",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCK1h4H8/smZ5ydAAnqRkJFeWhoOtPw/view?utm_content=DAGfCK1h4H8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h17f454b787"
      }
    },
    {
      title: "Malinalco Centro",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      capacity: "4-25 personas",
      features: ["Pueblo mágico", "Cocina", "Cultura", "Gastronomía"],
      description: "Experiencia cultural en pueblo mágico, combinando trabajo y tradición mexicana.",
      priceRange: "$2,800-$5,200",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGT2Xw89So/0YLDTTRL7KQYLRLn91NAig/view?utm_content=DAGT2Xw89So&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd29e9a6960",
        nuestrasCabanas: "https://www.canva.com/design/DAGZIOtSras/GwPgthRy_Bel_jl29us9ng/view?utm_content=DAGZIOtSras&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e77e660fe",
        nuestrasExperiencias: "https://www.canva.com/design/DAGY3G83XoI/znihseZR2GXnJ9RZM0qJxw/view?utm_content=DAGY3G83XoI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h100299c485",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCggZHcY/wjxqgz8RAdsWTxPSeWDITw/view?utm_content=DAGfCggZHcY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ab45b0022"
      }
    },
    {
      title: "Mineral del Chico",
      location: "Hidalgo",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
      capacity: "8-45 personas",
      features: ["Bosque templado", "Cocina", "Senderismo", "Aire puro"],
      description: "Bosques de coníferas y clima fresco, perfecto para retiros de reflexión y estrategia.",
      priceRange: "$2,000-$4,200",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGgEWlIvRA/X5_zuDz_xVElLMEthDbPcA/view?utm_content=DAGgEWlIvRA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha66a1817d4",
        nuestrasCabanas: "https://www.canva.com/design/DAGgaPWL-Fo/T1P8fy-Nq1SemhfFlA9wUA/view?utm_content=DAGgaPWL-Fo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68076ad2fd",
        nuestrasExperiencias: "https://www.canva.com/design/DAGl2_y49OI/bN5_K9dPDINbLJIX_MrviA/view?utm_content=DAGl2_y49OI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd5507d241",
        nuestrosPrecios: "https://www.canva.com/design/DAGkSUV1z0I/izOIkA8ffHdIPjXuLVlo2w/view?utm_content=DAGkSUV1z0I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hecad2c004a"
      }
    },
    {
      title: "Villa Alpina",
      location: "Estado de México",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop",
      capacity: "10-50 personas",
      features: ["Estilo alpino", "Cocina", "Amplios espacios", "Vista montañas"],
      description: "Arquitectura alpina con amplios espacios comunes, ideal para grupos grandes.",
      priceRange: "$3,500-$7,000",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGgZpNSNzE/3BUDMmh4JNc1gPX9sIIAew/view?utm_content=DAGgZpNSNzE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h329f020023",
        nuestrasCabanas: "https://www.canva.com/design/DAGgac66x9Q/WjjawwLLpxHkljAsVKoOng/view?utm_content=DAGgac66x9Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h95caf87aa9",
        nuestrasExperiencias: "https://www.canva.com/design/DAGisaH2uvM/w4d7NJ36v8NQHSoTx9D4sg/view?utm_content=DAGisaH2uvM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8d1be15698",
        nuestrosPrecios: "https://www.canva.com/design/DAGkSxPxSQw/QTglB5OlG3xpYJ0HIc_dNg/view?utm_content=DAGkSxPxSQw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0f8dd29162"
      }
    },
    {
      title: "Tzibantza, Querétaro",
      location: "Querétaro",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      capacity: "6-32 personas",
      features: ["Viñedos", "Cocina", "Cata de vinos", "Ambiente exclusivo"],
      description: "Rodeado de viñedos con experiencias gastronómicas únicas para equipos ejecutivos.",
      priceRange: "$3,200-$6,500",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGT2Xw89So/0YLDTTRL7KQYLRLn91NAig/view?utm_content=DAGT2Xw89So&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd29e9a6960",
        nuestrasCabanas: "https://www.canva.com/design/DAGZIOtSras/GwPgthRy_Bel_jl29us9ng/view?utm_content=DAGZIOtSras&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e77e660fe",
        nuestrasExperiencias: "https://www.canva.com/design/DAGY3G83XoI/znihseZR2GXnJ9RZM0qJxw/view?utm_content=DAGY3G83XoI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h100299c485",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCggZHcY/wjxqgz8RAdsWTxPSeWDITw/view?utm_content=DAGfCggZHcY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ab45b0022"
      }
    },
    {
      title: "Arteaga, Monterrey",
      location: "Coahuila",
      image: "https://images.unsplash.com/photo-1542006614-aa1c8b6f6bb5?q=80&w=2127&auto=format&fit=crop",
      capacity: "5-28 personas",
      features: ["Sierra madre", "Cocina", "Clima fresco", "Aventura"],
      description: "Montañas de Coahuila con actividades de aventura, ideal para team building extremo.",
      priceRange: "$2,800-$5,500",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGPoRelHK8/Sq1svtoAWGE8ayFFb6U92A/view?utm_content=DAGPoRelHK8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb9c07ffbb",
        nuestrasCabanas: "https://www.canva.com/design/DAGY2hBW6TU/bkH7MxxogSAJ95Id-1gAsg/view?utm_content=DAGY2hBW6TU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h549bf4d6ec",
        nuestrasExperiencias: "https://www.canva.com/design/DAGX0PVPl6s/p4a9M0-QHY2JqXtpN0Sr2Q/view?utm_content=DAGX0PVPl6s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc9545cca0c#1",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCOVNNz0/xIXoEWnsVbvnhsj8iTFJhg/view?utm_content=DAGfCOVNNz0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1cf38b4222"
      }
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
            <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 uppercase mx-2.5" style={{ letterSpacing: '0.5px', color: '#818C70' }}>
              ¿Por qué elegir Wander para tu equipo?
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Los retiros corporativos en la naturaleza han demostrado mejorar significativamente 
              la productividad, creatividad y cohesión de los equipos de trabajo.
            </p>
          </div>

          <div className="flex justify-center px-4">
            <div className="w-full max-w-5xl">
              <Carousel 
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="relative"
              >
                <CarouselContent className="-ml-1 md:-ml-4">
                  {benefits.map((benefit, index) => (
                    <CarouselItem key={index} className="pl-1 md:pl-4 basis-full">
                      <Card className="mx-auto max-w-2xl overflow-hidden bg-gradient-to-br from-background to-muted/30 shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2">
                        <div className="relative">
                          <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                            <img 
                              src={benefit.image} 
                              alt={benefit.title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 md:hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 tracking-tight">{benefit.title}</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90">{benefit.description}</p>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:block md:left-4 md:h-10 md:w-10 bg-white/90 hover:bg-white border-2 border-forest text-forest hover:text-forest shadow-lg" />
                <CarouselNext className="hidden md:block md:right-4 md:h-10 md:w-10 bg-white/90 hover:bg-white border-2 border-forest text-forest hover:text-forest shadow-lg" />
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
            <Button size="lg" className="bg-forest hover:bg-forest/90 text-forest-foreground font-semibold px-16 py-6 text-xl h-16">
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