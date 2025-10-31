import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Users, MapPin, Wifi, Car, X } from "lucide-react";
import { useState } from "react";

interface LocationCardProps {
  title: string;
  location: string;
  image: string;
  capacity: string;
  features: string[];
  description: string;
  priceRange: string;
  links: {
    sobreNosotros: string;
    nuestrasCabanas: string;
    nuestrasExperiencias: string;
    nuestrosPrecios: string;
  };
}

const LocationCard = ({ title, location, image, capacity, features, description, priceRange, links }: LocationCardProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card border-border w-full max-w-sm h-full flex flex-col">
        <div className="relative overflow-hidden cursor-pointer" onClick={() => setIsImageOpen(true)}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 md:h-auto md:aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
              Click para ver imagen completa
            </span>
          </div>
        </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed flex-1 text-justify">{description}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-4 w-4 text-earth" />
          <span className="text-sm font-medium">{capacity}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="bg-warm-beige text-warm-beige-foreground px-2 py-1 rounded-md text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            className="text-[10px] sm:text-xs leading-tight py-2 px-2 h-auto" 
            onClick={() => window.open(links.sobreNosotros, '_blank')}
          >
            <span className="hidden sm:inline">SOBRE NOSOTROS</span>
            <span className="sm:hidden">NOSOTROS</span>
          </Button>
          <Button 
            className="text-[10px] sm:text-xs leading-tight py-2 px-2 h-auto"
            onClick={() => window.open(links.nuestrasCabanas, '_blank')}
          >
            <span className="hidden sm:inline">NUESTRAS CABAÑAS</span>
            <span className="sm:hidden">CABAÑAS</span>
          </Button>
          <Button 
            className="text-[10px] sm:text-xs leading-tight py-2 px-2 h-auto"
            onClick={() => window.open(links.nuestrasExperiencias, '_blank')}
          >
            <span className="hidden sm:inline">NUESTRAS EXPERIENCIAS</span>
            <span className="sm:hidden">EXPERIENCIAS</span>
          </Button>
          <Button 
            className="text-[10px] sm:text-xs leading-tight py-2 px-2 h-auto"
            onClick={() => window.open(links.nuestrosPrecios, '_blank')}
          >
            <span className="hidden sm:inline">NUESTROS PRECIOS</span>
            <span className="sm:hidden">PRECIOS</span>
          </Button>
        </div>
      </div>
    </Card>

    <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
      <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-0">
        <button
          onClick={() => setIsImageOpen(false)}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="relative w-full h-[90vh] flex items-center justify-center">
          <img 
            src={image} 
            alt={title}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default LocationCard;