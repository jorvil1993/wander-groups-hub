import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          EXPERIENCIAS ÚNICAS PARA 
          <span className="block text-warm-beige">GRUPOS EMPRESARIALES</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Fortalece los lazos de tu equipo con retiros empresariales en cabañas únicas 
          rodeadas de naturaleza. Espacios diseñados para inspirar creatividad y colaboración.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-warm-beige hover:bg-warm-beige/90 text-warm-beige-foreground font-semibold px-8 py-3">
            RESERVAR PARA GRUPO
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
            VER PAQUETES CORPORATIVOS
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <Building2 className="h-8 w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-2xl font-bold">8+</div>
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