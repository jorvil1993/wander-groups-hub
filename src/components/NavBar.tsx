import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="bg-forest/95 backdrop-blur-sm sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white tracking-wider">
              WANDER
            </div>
            <div className="text-xs text-white/80 ml-2 font-light">
              CABINS
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              DESTINOS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              PAQUETES
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              ¿CÓMO FUNCIONA?
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              LA EXPERIENCIA WANDER
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              ACTIVIDADES
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              BLOG
            </a>
            <a href="/grupos" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide border-b border-white">
              GRUPOS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              WANDER OFFICE
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium text-sm tracking-wide">
              PRENSA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;