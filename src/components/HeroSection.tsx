import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          EXPERIENCIAS ÚNICAS PARA 
          <span className="block text-warm-beige">GRUPOS EMPRESARIALES</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Fortalece los lazos de tu equipo con retiros empresariales en cabañas únicas 
          rodeadas de naturaleza. Espacios diseñados para inspirar creatividad y colaboración.
        </p>

        <div className="flex justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange/90 text-orange-foreground font-semibold px-16 py-6 text-xl h-16"
            onClick={() => window.open('https://calendly.com/gerardo-wandercabins/30min', '_blank')}
          >
            SOLICITAR PROPUESTA PERSONALIZADA
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto py-8 px-6">
          <div className="text-center p-4">
            <Building2 className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">6+</div>
            <div className="text-sm">Ubicaciones</div>
          </div>
          <div className="text-center p-4">
            <Users className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">5-50</div>
            <div className="text-sm">Personas</div>
          </div>
          <div className="text-center p-4">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Disponible</div>
          </div>
          <div className="text-center p-4">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm">Estados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;