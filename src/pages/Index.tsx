import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import QuickStats from "@/components/QuickStats";
import LocationCard from "@/components/LocationCard";
import CorporatePackages from "@/components/CorporatePackages";
import TransformativeExperiences from "@/components/TransformativeExperiences";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Target, Lightbulb, Heart, Phone, Mail, MessageCircle } from "lucide-react";

// Import team images
import teamBuildingForest from "@/assets/team-building-forest.jpg";
import teamProductivityForest from "@/assets/team-productivity-forest-outdoor.jpg";
import teamInnovationForest from "@/assets/team-innovation-forest-casual.jpg";
import teamWellnessForest from "@/assets/team-wellness-forest.jpg";
import teamCampfireForest from "@/assets/team-campfire-forest.jpg";

const Index = () => {
  const locations = [
    {
      title: "Valle de Bravo",
      location: "2 horas desde CDMX",
      image: "/lovable-uploads/def6e8e6-a5b0-4008-9109-de65ea8474af.png",
      capacity: "2-4 personas por cabaña (9 cabañas disponibles)",
      features: ["Bosque de pinos", "Río", "Jacuzzi", "Cine", "Senderismo"],
      description: "Disfruta de nuestras cabañas originales ubicadas en medio del bosque en Valle de Bravo. Cada cabaña rodeada de imponentes pinos para mayor privacidad con acceso a río y múltiples actividades outdoor.",
      priceRange: "Desde $1,990 p/noche",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGTlCX20d8/YjcwfL6FAMXZ6N6Kd_R4Xw/view?utm_content=DAGTlCX20d8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd23c272fbc",
        nuestrasCabanas: "https://www.canva.com/design/DAGWcay6luU/NEHxMvyVITg0JkdTn6vhpw/view?utm_content=DAGWcay6luU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5f51670d6e#1",
        nuestrasExperiencias: "https://www.canva.com/design/DAGWcVXaoPQ/wbhXGZD99zD1X6HLitoxCQ/view?utm_content=DAGWcVXaoPQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h807160ca8b#1",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCsmz7Q8/VWAhufJ2NXTddPsI7RhZSA/view?utm_content=DAGfCsmz7Q8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb058b7706b"
      }
    },
    {
      title: "La Marquesa",
      location: "30 minutos desde CDMX",
      image: "/lovable-uploads/3bc77ed4-4657-4518-9abe-2aa4f51536b2.png",
      capacity: "2-4 personas por cabaña (4 cabañas disponibles)",
      features: ["Bosque de pinos", "Máxima privacidad", "Sendero 5km", "Cerca de Santa Fe", "Aislamiento total"],
      description: "Nuestro Wander más extenso y privado. Disfruta de una cabaña completamente aislada en medio de un gran bosque de pinos de La Marquesa, ideal para desconexión total.",
      priceRange: "Desde $1,990 p/noche",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGSByBdvhc/wmDjoJRcWxr4D1nXNpZSrA/view?utm_content=DAGSByBdvhc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4ecae278e5",
        nuestrasCabanas: "https://www.canva.com/design/DAGY3EVNtHY/2lOL6dkiu0YLWwmgz_Mgfg/view?utm_content=DAGY3EVNtHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4865eb75e8",
        nuestrasExperiencias: "https://www.canva.com/design/DAGYJ8n_W1A/U1rugEAKb8YZNOxkPrqhLQ/view?utm_content=DAGYJ8n_W1A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h672faf7b07",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCK1h4H8/smZ5ydAAnqRkJFeWhoOtPw/view?utm_content=DAGfCK1h4H8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h17f454b787"
      }
    },
    {
      title: "Malinalco Rojkind",
      location: "1.5 horas desde CDMX",
      image: "/lovable-uploads/c92ac0ee-edf5-4121-a90e-c2f25d3acf3c.png",
      capacity: "2-4 personas por cabaña (8 cabañas disponibles)",
      features: ["Diseño Michel Rojkind", "A orilla del río", "Jacuzzi", "Rappel", "Rutas de mezcal"],
      description: "Creado por la mente visionaria del arquitecto Michel Rojkind, este sitio ofrece un refugio encantador que abraza la naturaleza, con cabañas ubicadas a la orilla de un imponente río en Malinalco.",
      priceRange: "Desde $1,990 p/noche",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGT2Xw89So/0YLDTTRL7KQYLRLn91NAig/view?utm_content=DAGT2Xw89So&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd29e9a6960",
        nuestrasCabanas: "https://www.canva.com/design/DAGZIOtSras/GwPgthRy_Bel_jl29us9ng/view?utm_content=DAGZIOtSras&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e77e660fe",
        nuestrasExperiencias: "https://www.canva.com/design/DAGY3G83XoI/znihseZR2GXnJ9RZM0qJxw/view?utm_content=DAGY3G83XoI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h100299c485",
        nuestrosPrecios: "https://www.canva.com/design/DAGfCggZHcY/wjxqgz8RAdsWTxPSeWDITw/view?utm_content=DAGfCggZHcY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ab45b0022"
      }
    },
    {
      title: "Mineral del Chico",
      location: "2 horas desde CDMX",
      image: "/lovable-uploads/1a135d20-e130-4649-b20a-c5103142b4a9.png",
      capacity: "2-4 personas por cabaña (11 cabañas disponibles)",
      features: ["Parque Nacional", "Diseño circular", "A Frames", "Vistas panorámicas", "Pueblo Mágico"],
      description: "Wander llega a Mineral del Chico! Conoce nuestro nuevo Wander con diseño de cabañas circular y nuestras famosas A Frames ubicadas en el Parque Nacional El Chico.",
      priceRange: "Desde $1,990 p/noche",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGgEWlIvRA/X5_zuDz_xVElLMEthDbPcA/view?utm_content=DAGgEWlIvRA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha66a1817d4",
        nuestrasCabanas: "https://www.canva.com/design/DAGgaPWL-Fo/T1P8fy-Nq1SemhfFlA9wUA/view?utm_content=DAGgaPWL-Fo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68076ad2fd",
        nuestrasExperiencias: "https://www.canva.com/design/DAGl2_y49OI/bN5_K9dPDINbLJIX_MrviA/view?utm_content=DAGl2_y49OI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd5507d241",
        nuestrosPrecios: "https://www.canva.com/design/DAGkSUV1z0I/izOIkA8ffHdIPjXuLVlo2w/view?utm_content=DAGkSUV1z0I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hecad2c004a"
      }
    },
    {
      title: "Villa Alpina",
      location: "45 minutos desde CDMX",
      image: "/lovable-uploads/d10ca04b-1cb8-4f5b-89df-0faa35b5c41b.png",
      capacity: "2-4 personas por cabaña (15 cabañas disponibles)",
      features: ["Diseño Michel Rojkind", "Vistas panorámicas", "Piedras gigantes", "Árboles alpinos", "Huixquilucan"],
      description: "Conoce el nuevo diseño de cabañas de Michel Rojkind y disfruta de una experiencia única debajo de espectaculares árboles y rodeado de piedras gigantes en Villa Alpina.",
      priceRange: "Desde $1,990 p/noche",
      links: {
        sobreNosotros: "https://www.canva.com/design/DAGgZpNSNzE/3BUDMmh4JNc1gPX9sIIAew/view?utm_content=DAGgZpNSNzE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h329f020023",
        nuestrasCabanas: "https://www.canva.com/design/DAGgac66x9Q/WjjawwLLpxHkljAsVKoOng/view?utm_content=DAGgac66x9Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h95caf87aa9",
        nuestrasExperiencias: "https://www.canva.com/design/DAGisaH2uvM/w4d7NJ36v8NQHSoTx9D4sg/view?utm_content=DAGisaH2uvM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8d1be15698",
        nuestrosPrecios: "https://www.canva.com/design/DAGkSxPxSQw/QTglB5OlG3xpYJ0HIc_dNg/view?utm_content=DAGkSxPxSQw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0f8dd29162"
      }
    }
  ];

  const benefits = [
    {
      image: "/lovable-uploads/725c8b75-97cb-4d30-9d03-c0d62c65cd9d.png",
      title: "Conexión Auténtica",
      description: "Lejos del ruido. Cerca de lo importante. Espacios que fomentan conversaciones profundas y vínculos reales entre compañeros."
    },
    {
      image: "/lovable-uploads/2563bb07-0267-4560-88dd-13dc17f89fda.png",
      title: "Fortalecimiento del Equipo",
      description: "Actividades diseñadas para mejorar la comunicación y cohesión del equipo en un ambiente relajado."
    },
    {
      image: "/lovable-uploads/ba39b383-68c5-4329-be3b-95e88288e2b2.png",
      title: "Mindfulness & Meditación",
      description: "Espacios únicos diseñados para la práctica de mindfulness y meditación, conectando con la naturaleza interior y exterior."
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
      <QuickStats />
      
      <section id="beneficios" className="py-12 bg-white">{/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-oswald font-light mb-6 text-neutral-700">
              ¿Por qué elegir Wander para tu equipo?
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Disfrutar de la naturaleza en grupo no solo estimula la creatividad y la unión, también abre la puerta a experiencias únicas. Con un enfoque en Wellness, cada espacio está diseñado para favorecer el descanso, la desconexión y el equilibrio personal. A través de Eventos Personales, los participantes pueden vivir celebraciones íntimas y momentos que se convierten en recuerdos duraderos. Y en Eventos Corporativos, los entornos se transforman en escenarios ideales para fortalecer equipos, alinear objetivos y potenciar la productividad.
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

      {/* Transformative Experiences Section */}
      <div id="experiencias">
        <TransformativeExperiences />
      </div>

      <section className="py-16 bg-white border-t border-b border-neutral-200">{/* Call to Action Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-oswald font-light mb-6 text-neutral-700">
            ¿Listo para transformar a tu equipo?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Obtén una propuesta personalizada para tu retiro corporativo en menos de 24 horas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://form.jotform.com/242625806418863"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-orange hover:bg-orange/90 text-white transition-all duration-300 font-oswald font-bold text-sm sm:text-base px-4 sm:px-8 py-3 rounded-md shadow-lg hover:shadow-orange/30 transform hover:scale-105"
            >
              <span className="hidden sm:inline">SOLICITAR COTIZACIÓN AHORA</span>
              <span className="sm:hidden">COTIZACIÓN</span>
            </a>
            
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Respuesta inmediata</span>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-600">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-sm">Sin compromiso</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              <span className="text-sm">Propuesta personalizada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="text-sm">Asesoría gratuita</span>
            </div>
          </div>
        </div>
      </section>

      <section id="ubicaciones" className="py-20 bg-muted/30">{/* Locations Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-oswald font-light mb-6 text-neutral-700">
              Nuestras Ubicaciones
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Desde lagos tranquilos hasta montañas inspiradoras, cada ubicación está cuidadosamente 
              seleccionada para ofrecer la experiencia perfecta para tu equipo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* <CorporatePackages /> */}

      <section id="contacto" className="py-20 bg-white">{/* Contact Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-oswald font-light mb-6 text-neutral-700">
            ¿Listo para planificar tu retiro corporativo?
          </h2>
          <p className="text-xl text-foreground mb-12 max-w-2xl mx-auto">
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
              <a 
                href="mailto:gerardo@wandercabins.mx"
                className="text-muted-foreground hover:text-forest transition-colors cursor-pointer"
              >
                gerardo@wandercabins.mx
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-8 w-8 text-forest mb-3" />
              <h3 className="font-bold text-primary mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/5215533919316?text=Hola,%20quiero%20más%20información%20de%20los%20paquetes%20corporativos%20de%20Wander"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-forest transition-colors cursor-pointer"
              >
                +52 1 55 3391 9316
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              size="default" 
              className="bg-orange hover:bg-orange/90 text-orange-foreground font-semibold px-8 py-3 text-base h-12 rounded-md"
              onClick={() => window.open('https://form.jotform.com/242625806418863', '_blank')}
            >
              SOLICITAR PROPUESTA PERSONALIZADA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
