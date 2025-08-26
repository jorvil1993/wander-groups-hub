import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ 
            width: '100vw', 
            height: '100vh', 
            transform: isMobile ? 'scale(2.5) rotate(90deg)' : 'scale(1.5)', 
            transformOrigin: 'center center',
            minWidth: '100%',
            minHeight: '100%'
          }}
          src="https://streamable.com/e/y68mlw?autoplay=1&muted=1&loop=1&nocontrols=1"
          title="Wander banner video"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        ></iframe>
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

        <div className="flex justify-center">
          <Button 
            size="default" 
            className="bg-orange hover:bg-orange/90 text-orange-foreground font-semibold px-4 sm:px-8 py-3 text-sm sm:text-base h-12 rounded-md"
            onClick={() => window.open('https://form.jotform.com/242625806418863', '_blank')}
          >
            <span className="hidden sm:inline">SOLICITAR PROPUESTA PERSONALIZADA</span>
            <span className="sm:hidden">SOLICITAR PROPUESTA</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;