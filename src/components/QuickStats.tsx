import { Building2, Users, Calendar, MapPin } from "lucide-react";

const QuickStats = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black/5 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Building2 className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-3 text-forest" />
            <div className="text-2xl md:text-3xl font-bold text-neutral-800 mb-1">6+</div>
            <div className="text-sm md:text-base text-neutral-600">Ubicaciones</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-3 text-forest" />
            <div className="text-2xl md:text-3xl font-bold text-neutral-800 mb-1">5-50</div>
            <div className="text-sm md:text-base text-neutral-600">Personas</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-3 text-forest" />
            <div className="text-2xl md:text-3xl font-bold text-neutral-800 mb-1">24/7</div>
            <div className="text-sm md:text-base text-neutral-600">Disponible</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-3 text-forest" />
            <div className="text-2xl md:text-3xl font-bold text-neutral-800 mb-1">3</div>
            <div className="text-sm md:text-base text-neutral-600">Estados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;