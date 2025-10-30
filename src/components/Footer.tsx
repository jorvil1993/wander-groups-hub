import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };

  return (
    <footer className="g-footer">
      <div className="container">
        <div className="row align-items-start" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div>
            <div className="listFooter">
              <div className="listFooter__box listFooter__box--brand">
                <a href="/">
                  <img 
                    src="/lovable-uploads/8c7cbe51-e74c-48b3-8c0f-f45c4a5164a6.png" 
                    alt="Wander" 
                    width="108" 
                    height="55"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="listFooter">
              <div className="title_Footer">Contacto</div>
              <ul className="listFooter__box listFooter__box--socFoot">
                <li>
                  <a className="tap-target" href="#">
                    <i className="fas fa-map-marker-alt"></i> Ciudad de México
                  </a>
                </li>
                <li>
                  <a className="tap-target" href="tel:+525592253225" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-phone-square"></i> Llamadas: +52 55 9225 3225
                  </a>
                </li>
                <li>
                  <a className="tap-target" href="https://api.whatsapp.com/send?phone=525568976165" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> Whatsapp: +52 55 6897 6165
                  </a>
                </li>
                <li>
                  <a className="tap-target" href="mailto:contacto@wandercabins.mx" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i> contacto@wandercabins.mx
                  </a>
                </li>
                <li>
                  <a className="tap-target" href="#">
                    <i className="fas fa-arrow-circle-right"></i> Contáctanos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div>
            <div className="listFooter">
              <div className="title_Footer">Newsletter</div>
              <div className="listFooter__newsletter">
                <p>Entérate de las experiencias más asombrosas en Wander y de las promociones para vivirlas.</p>
                <form onSubmit={handleNewsletterSubmit}>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Escribe tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                    type="submit" 
                    id="submit-news" 
                    name="submit" 
                    value="Suscribirme"
                  />
                </form>
              </div>
            </div>
          </div> */}

          <div>
            <div className="listFooter">
              <ul className="listFooter__box listFooter__box--socFoot">
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> Aviso de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> Deslinde de Responsabilidad
                  </a>
                </li>
                <li>
                  <a href="https://app.air.inc/a/boJQiMwHm" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-chevron-right"></i> Prensa
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="listSociales">
              <ul className="listSociales__box">
                <li>
                  <a 
                    className="btnSocial btnSocial__tni--facebook rounded" 
                    href="https://www.facebook.com/CabinsWander-100326041660465/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block', 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      backgroundColor: '#3b5998',
                      marginRight: '10px',
                      textAlign: 'center',
                      lineHeight: '40px'
                    }}
                  >
                    <i className="fab fa-facebook-f" style={{ color: '#fff' }}></i>
                  </a>
                </li>
                <li>
                  <a 
                    className="btnSocial btnSocial__tni--instagram rounded" 
                    href="https://www.instagram.com/cabins.wander/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block', 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                      marginRight: '10px',
                      textAlign: 'center',
                      lineHeight: '40px'
                    }}
                  >
                    <i className="fab fa-instagram" style={{ color: '#fff' }}></i>
                  </a>
                </li>
                <li>
                  <a 
                    className="btnSocial btnSocial__tni--whatsapp rounded" 
                    href="https://api.whatsapp.com/send/?phone=525568976165&text&app_absent=0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block', 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      backgroundColor: '#25d366',
                      textAlign: 'center',
                      lineHeight: '40px'
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ color: '#fff' }}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <div className="listFooter">
            <div className="listFooter__box listFooter__box--copyright">
              <p>Todos los Derechos Reservados | &reg; Wander Cabins {new Date().getFullYear()} México</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;