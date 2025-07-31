import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              WANDER
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              DESTINOS
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              PAQUETES
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              ¿CÓMO FUNCIONA?
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              LA EXPERIENCIA WANDER
            </a>
            <a href="/grupos" className="text-primary border-b-2 border-primary font-medium">
              GRUPOS
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              ACTIVIDADES
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              BLOG
            </a>
          </div>

          {/* Reserve Button */}
          <Button variant="default" className="bg-forest hover:bg-forest/90 text-forest-foreground font-medium">
            RESERVAR
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;