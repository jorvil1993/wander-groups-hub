import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Wifi, Car } from "lucide-react";

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
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card border-border">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
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
            className="text-sm" 
            onClick={() => window.open(links.sobreNosotros, '_blank')}
          >
            SOBRE NOSOTROS
          </Button>
          <Button 
            className="text-sm"
            onClick={() => window.open(links.nuestrasCabanas, '_blank')}
          >
            NUESTRAS CABAÑAS
          </Button>
          <Button 
            className="text-sm"
            onClick={() => window.open(links.nuestrasExperiencias, '_blank')}
          >
            NUESTRAS EXPERIENCIAS
          </Button>
          <Button 
            className="text-sm"
            onClick={() => window.open(links.nuestrosPrecios, '_blank')}
          >
            NUESTROS PRECIOS
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LocationCard;