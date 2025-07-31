import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/601c3679-d66d-4e30-bf21-0540489d38ea.png" 
              alt="Wander Cabins Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              DESTINOS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              PAQUETES
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              ¿CÓMO FUNCIONA?
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              LA EXPERIENCIA WANDER
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              ACTIVIDADES
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              BLOG
            </a>
            <a href="/grupos" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide border-b border-white">
              GRUPOS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              WANDER OFFICE
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-oswald font-normal text-sm uppercase tracking-wide">
              PRENSA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;