import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const menuItems = [
    { label: "Paquetes", href: "/packs" },
    { label: "¿Cómo funciona?", href: "#cabanas" },
    { label: "La experiencia Wander", href: "#experiencia" },
    { label: "Actividades", href: "#actividades" },
    { label: "Blog", href: "/blog" },
    { label: "Prensa", href: "https://app.air.inc/a/boJQiMwHm", external: true },
  ];

  return (
    <>
      <header id="headerGeneral" className="gHeader absolute top-0 left-0 right-0 z-50 py-3">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-1/2 md:w-1/2 lg:w-1/12">
              <div className="logoHead">
                <Link to="/">
                  <img 
                    src="/lovable-uploads/8c7cbe51-e74c-48b3-8c0f-f45c4a5164a6.png" 
                    alt="Wander" 
                    className="h-10 w-auto"
                  />
                  <h1 className="site-title sr-only">Wander</h1>
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block lg:w-10/12">
              <div className="menuMain">
                <nav className="menuDesk">
                  <ul id="md" className="flex items-center justify-center gap-8">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        {item.external ? (
                          <a 
                            className="menuIemHover text-white hover:text-gray-200 transition-colors" 
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <a 
                            className="menuIemHover text-white hover:text-gray-200 transition-colors" 
                            href={item.href}
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="w-1/2 md:w-1/2 lg:w-1/12">
              <div className="toolsHead flex justify-end">
                <button
                  type="button"
                  id="openMenuMobile"
                  className="toolsHead__link menu-mobile-btn lg:hidden"
                  onClick={toggleMenu}
                  data-menu-expand={menuExpanded}
                  aria-label="Toggle menu"
                >
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        id="mm" 
        className="cont-menu-mobile" 
        data-menu-expand={menuExpanded}
      >
        {/* Close Button */}
        <button
          type="button"
          className="mobile-menu-close-btn"
          onClick={toggleMenu}
          aria-label="Cerrar menú"
        >
          <span>✕</span>
        </button>
        
        <div id="contListMenu" className="mnuContMob">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.external ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a 
                    href={item.href}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;