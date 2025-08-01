import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/f1c44bf2-561d-4d7d-9861-d5052c101394.png')"
        }}
      />
      
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <Building2 className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">6+</div>
            <div className="text-sm">Ubicaciones</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">5-50</div>
            <div className="text-sm">Personas</div>
          </div>
          <div className="text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Disponible</div>
          </div>
          <div className="text-center">
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