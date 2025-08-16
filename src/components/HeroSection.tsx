import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/lovable-uploads/f1c44bf2-561d-4d7d-9861-d5052c101394.png"
          crossOrigin="anonymous"
        >
          <source src="https://drive.google.com/uc?export=download&id=1DnXJNHOilliZM-sviEEbTDrTI8PWxvNa" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-oswald font-light mb-6 leading-tight">
          Lejos del ruido. 
          <span className="block text-warm-beige">Cerca de lo importante.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Creamos espacios donde nacen las ideas que transforman equipos.
        </p>

        <div className="flex justify-center mb-12">
          <Button 
            size="default" 
            className="bg-orange hover:bg-orange/90 text-orange-foreground font-semibold px-4 sm:px-8 py-3 text-sm sm:text-base h-12 rounded-md"
            onClick={() => window.open('https://calendly.com/gerardo-wandercabins/30min', '_blank')}
          >
            <span className="hidden sm:inline">SOLICITAR PROPUESTA PERSONALIZADA</span>
            <span className="sm:hidden">SOLICITAR PROPUESTA</span>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto py-6 sm:py-8 px-2 sm:px-6">
          <div className="text-center p-2 sm:p-4">
            <Building2 className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-xl sm:text-2xl font-bold">6+</div>
            <div className="text-xs sm:text-sm">Ubicaciones</div>
          </div>
          <div className="text-center p-2 sm:p-4">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-xl sm:text-2xl font-bold">5-50</div>
            <div className="text-xs sm:text-sm">Personas</div>
          </div>
          <div className="text-center p-2 sm:p-4">
            <Calendar className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-xl sm:text-2xl font-bold">24/7</div>
            <div className="text-xs sm:text-sm">Disponible</div>
          </div>
          <div className="text-center p-2 sm:p-4">
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-warm-beige" />
            <div className="text-xl sm:text-2xl font-bold">3</div>
            <div className="text-xs sm:text-sm">Estados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;