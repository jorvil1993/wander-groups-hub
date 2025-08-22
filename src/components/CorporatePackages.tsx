import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Award } from "lucide-react";

const CorporatePackages = () => {
  const packages = [
    {
      name: "Retiro Básico",
      icon: <Star className="h-8 w-8" />,
      price: "Desde $2,500 MXN",
      duration: "por persona/noche",
      features: [
        "Cabaña compartida para 4-6 personas",
        "Desayuno incluido",
        "Área común para reuniones",
        "WiFi de alta velocidad",
        "Actividades al aire libre básicas",
        "Check-in/out flexible"
      ],
      color: "bg-warm-beige text-warm-beige-foreground",
      popular: false
    },
    {
      name: "Experiencia Premium",
      icon: <Crown className="h-8 w-8" />,
      price: "Desde $4,200 MXN",
      duration: "por persona/noche",
      features: [
        "Cabaña privada para cada equipo",
        "Todas las comidas incluidas",
        "Salón privado de conferencias",
        "Facilitador para team building",
        "Actividades premium (spa, aventura)",
        "Servicio de concierge 24/7",
        "Transporte desde CDMX"
      ],
      color: "bg-forest text-forest-foreground",
      popular: true
    },
    {
      name: "Retiro Ejecutivo",
      icon: <Award className="h-8 w-8" />,
      price: "Cotización personalizada",
      duration: "según necesidades",
      features: [
        "Cabañas de lujo exclusivas",
        "Chef privado y menú personalizado",
        "Centro de negocios completo",
        "Consultor especializado en liderazgo",
        "Actividades VIP diseñadas a medida",
        "Servicio premium completo",
        "Coordinación integral del evento"
      ],
      color: "bg-earth text-earth-foreground",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Paquetes Corporativos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diseñamos experiencias únicas para fortalecer equipos de trabajo, 
            desde retiros básicos hasta experiencias ejecutivas de lujo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative p-8 ${pkg.popular ? 'ring-2 ring-forest scale-105' : ''} hover:shadow-xl transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-forest text-forest-foreground px-4 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${pkg.color} mb-4`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-foreground">{pkg.price}</div>
                <div className="text-muted-foreground">{pkg.duration}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-forest mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${pkg.popular ? 'bg-forest hover:bg-forest/90 text-forest-foreground' : ''}`}
                variant={pkg.popular ? "default" : "outline"}
                onClick={() => window.open('https://form.jotform.com/242625806418863', '_blank')}
              >
                {pkg.price.includes('Cotización') ? 'Solicitar Cotización' : 'Seleccionar Paquete'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporatePackages;