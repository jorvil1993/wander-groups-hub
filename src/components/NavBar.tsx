import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8c7cbe51-e74c-48b3-8c0f-f45c4a5164a6.png" 
              alt="Wander Cabins Logo" 
              className="h-10 w-auto"
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;