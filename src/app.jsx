import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    material: '',
    tipo: '',
    descripcion: ''
  });

  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => revealObs.observe(el));

    return () => revealObs.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const enviarCotizacion = (e) => {
    e.preventDefault();
    const nombre = formData.nombre.trim() || 'Diana';
    const material = formData.material || 'Aconséjame';
    const tipo = formData.tipo || 'No especificado';
    const desc = formData.descripcion.trim() || 'Sin descripción';

    const telefono = '5215516918348'; // Reemplazar con tu número

    const msg = `¡Hola Atomic Lab 3D! \n\n*Idea de cotización amigable:*\n\n *Nombre:* ${nombre}\n *Tipo:* ${tipo}\n *Material:* ${material}\n *Descripción:* ${desc}\n\n¡Cuéntenme cómo podemos hacerlo realidad!`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <nav>
        <a href="#inicio" className="nav-logo">Atomic Lab <span>3D</span></a>
        <div className="nav-links">
          <a href="#portafolio">Portafolio</a>
          <a href="#proceso">Proceso</a>
          <a href="#personaliza">Personalizar</a>
          <a href="#faq">Ayuda</a>
          <a href="#personaliza" className="nav-cta">Cotizar</a>
        </div>
        <button 
          className={`nav-burger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Menú"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#portafolio" onClick={closeMenu}>Portafolio</a>
        <a href="#proceso" onClick={closeMenu}>Proceso</a>
        <a href="#personaliza" onClick={closeMenu}>Personalizar</a>
        <a href="#faq" onClick={closeMenu}>Ayuda</a>
        <a href="#personaliza" className="nav-cta" onClick={closeMenu}>Cotizar</a>
      </div>

      <header id="inicio">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1626260742116-e55590c609d9?q=80&w=1600&auto=format&fit=crop" alt="Estudio creativo de impresión 3D Cdmx" loading="eager" />
        </div>
        <div className="hero-content reveal">
          <div className="hero-eyebrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            Laboratorio Creativo en Cdmx
          </div>
          <h1 className="hero-title">
            Del archivo <br/>a la <span>realidad.</span>
          </h1>
          <p className="hero-subtitle">
            Materializamos tus ideas en 3D: figuras de colección, regalos personalizados, cajas de luz y prototipos con un acabado suave y amigable.
          </p>
          <div className="hero-actions">
            <a href="#personaliza" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Cotizar Proyecto
            </a>
            <a href="#portafolio" className="btn-secondary">Ver Galería →</a>
          </div>
        </div>
        <div className="hero-stats reveal">
          <div>
            <div className="hero-stat-num">25 cm</div>
            <div className="hero-stat-lbl">Volumen FDM</div>
          </div>
          <div>
            <div className="hero-stat-num">4K</div>
            <div className="hero-stat-lbl">Detalle Resina</div>
          </div>
          <div>
            <div className="hero-stat-num">1 Semana</div>
            <div className="hero-stat-lbl">Tiempo Entrega Promedio</div>
          </div>
        </div>
      </header>

      <section id="valores">
        <div className="inner">
          <div className="section-header reveal">
            <span className="section-label">Filosofía Atomic</span>
            <h2 className="section-title">Impresión 3D con <em>alma</em></h2>
            <p className="section-desc">Nos apasiona crear objetos agradables a la vista y al tacto, lejos de la frialdad industrial.</p>
          </div>
          <div className="values-grid">
            <div className="value-card reveal">
              <div className="value-icon"></div>
              <h3 className="value-name">Creatividad</h3>
              <p className="value-desc">No hay límites. Nos encanta el reto de convertir un boceto simple en un objeto tangible y hermoso.</p>
            </div>
            <div className="value-card reveal">
              <div className="value-icon"></div>
              <h3 className="value-name">Suavidad</h3>
              <p className="value-desc">Cuidamos el acabado final. Utilizamos técnicas y materiales que garantizan superficies agradables y suaves.</p>
            </div>
            <div className="value-card reveal">
              <div className="value-icon"></div>
              <h3 className="value-name">Cercanía</h3>
              <p className="value-desc">Te acompañamos en el proceso. Queremos que tu experiencia sea agradable de principio a fin.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portafolio">
        <div className="section-header reveal">
          <span className="section-label">Galería</span>
          <h2 className="section-title">Nuestras <em>creaciones</em></h2>
        </div>
        <div className="portfolio-grid reveal">
          <div className="portfolio-card">
            <img src="https://tse4.mm.bing.net/th/id/OIP.SbgJQXsRsxdZyBcIkGnZxgHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Figura coleccionable 3D suave" loading="lazy" />
            <div className="portfolio-overlay">
              <div className="portfolio-tag">Figuras</div>
              <div className="portfolio-name">Coleccionables Suaves</div>
            </div>
            <div className="portfolio-hover-cta">Cotizar →</div>
          </div>
          <div className="portfolio-card">
            <img src="https://i.pinimg.com/originals/21/1f/8b/211f8bd514f3cdbac1793c5d9a6f287d.jpg" alt="Caja de luz 3D personalizada" loading="lazy" />
            <div className="portfolio-overlay">
              <div className="portfolio-tag">Regalos</div>
              <div className="portfolio-name">Cajas de Luz Cálidas</div>
            </div>
            <div className="portfolio-hover-cta">Cotizar →</div>
          </div>
          <div className="portfolio-card">
            <img src="https://narvalpainterstudio.com/wp-content/uploads/2024/07/Servicio-de-Impresion-3D-figuras-y-miniaturas-Warhammer-Narval-Painter-Studio.png" alt="Miniaturas 3D de alta resolución" loading="lazy" />
            <div className="portfolio-overlay">
              <div className="portfolio-tag">Resina</div>
              <div className="portfolio-name">Miniaturas Amigables</div>
            </div>
            <div className="portfolio-hover-cta">Cotizar →</div>
          </div>
          <div className="portfolio-card">
            <img src="https://th.bing.com/th/id/R.ee6ecb7a599b0df223bc3be84ad2fd00?rik=m%2fFlNAS7YRtcMA&riu=http%3a%2f%2fmerchccs.com%2fcdn%2fshop%2ffiles%2fil_570xN.5329002994_q354.jpg%3fv%3d1747772398&ehk=p7RCPpGtssSO5bRBIBEy7qgJZmxM5njGAeqY8%2fyvQIY%3d&risl=&pid=ImgRaw&r=0" alt="Llaveros 3D creativos" loading="lazy" />
            <div className="portfolio-overlay">
              <div className="portfolio-tag">Accesorios</div>
              <div className="portfolio-name">Llaveros con Estilo</div>
            </div>
            <div className="portfolio-hover-cta">Cotizar →</div>
          </div>
        </div>
      </section>

      <section id="proceso">
        <div className="inner">
          <div className="section-header reveal">
            <span className="section-label">El Viaje</span>
            <h2 className="section-title">Hacemos realidad <em>tu idea</em></h2>
          </div>
          <div className="proceso-steps">
            <div className="step reveal">
              <div className="step-num">1</div>
              <div>
                <h3 className="step-title">Cuéntanos</h3>
                <p className="step-desc">Comparte tu idea, dibujo o archivo. Definimos juntos el estilo amigable.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">2</div>
              <div>
                <h3 className="step-title">Modelado</h3>
                <p className="step-desc">Damos forma digital a tu proyecto cuidando la suavidad de las líneas.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">3</div>
              <div>
                <h3 className="step-title">Impresión</h3>
                <p className="step-desc">Uso de tecnología FDM o Resina 4K para máxima fidelidad.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">4</div>
              <div>
                <h3 className="step-title">Acabado</h3>
                <p className="step-desc">Post-procesado artesanal para lograr la textura suave y agradable final.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fabricacion">
        <div className="fab-grid reveal">
          <div>
            <span className="section-label">Tecnología</span>
            <h2 className="section-title">Herramientas <em>precisas</em></h2>
            <div className="fab-big-num">25x25</div>
            <div className="fab-unit">cm Volumen Máximo</div>
            <p className="section-desc" style={{ marginTop: '20px' }}>Utilizamos equipos modernos pero nos enfocamos en el resultado humano y cercano.</p>
          </div>
          <div className="fab-materials">
            <div className="mat-row">
              <div className="mat-dot pla"></div>
              <div className="mat-name">PLA+</div>
              <div className="mat-desc">Material biodegradable, ideal para figuras suaves y agradables al tacto.</div>
            </div>
            <div className="mat-row">
              <div className="mat-dot petg"></div>
              <div className="mat-name">PETG</div>
              <div className="mat-desc">Más resistente, para piezas que necesitan durabilidad sin perder la forma.</div>
            </div>
            <div className="mat-row">
              <div className="mat-dot resina"></div>
              <div className="mat-name">Resina</div>
              <div className="mat-desc">Máximo detalle 4K para miniaturas y acabados tipo joyería.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="personaliza">
        <div className="inner">
          <div className="cotizador-wrap">
            <div className="cotizador-info reveal">
              <span className="section-label">Cuéntanos tu idea</span>
              <h2 className="section-title">Crea tu <em>objeto único</em></h2>
              <p className="section-desc">Escríbenos directamente o usa el formulario para enviarnos los detalles por WhatsApp. ¡Estamos emocionados de ayudarte!</p>
              <ul>
                <li className="c-bullet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Respuesta personal en menos de 2 horas.
                </li>
                <li className="c-bullet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Entregas personales amigables en Cdmx.
                </li>
                <li className="c-bullet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Asesoría clara sobre materiales suaves.
                </li>
              </ul>
            </div>
            <form className="form-card reveal" onSubmit={enviarCotizacion}>
              <h3 className="form-title">Información de tu proyecto</h3>
              <div className="form-group">
                <label className="form-label" htmlFor="nombre">Tu nombre</label>
                <input className="form-input" type="text" id="nombre" placeholder="Ej: Angel Rosas" onChange={handleInputChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="material">Material preferido</label>
                  <select className="form-select" id="material" onChange={handleInputChange}>
                    <option value="">Material</option>
                    <option value="PLA+">PLA+ (Suave)</option>
                    <option value="Resina">Resina (Detalle)</option>
                    <option value="Aconséjame">Aconséjame</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="tipo">Tipo de creación</label>
                  <select className="form-select" id="tipo" onChange={handleInputChange}>
                    <option value="">Modelo</option>
                    <option value="Figura">Figura</option>
                    <option value="Caja de Luz">Caja de Luz</option>
                    <option value="Regalo">Regalo</option>
                    <option value="Llavero">Llavero</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="descripcion">Comparte tu visión</label>
                <textarea className="form-textarea" id="descripcion" placeholder="Describe qué quieres crear, tamaño, colores preferidos..." onChange={handleInputChange}></textarea>
              </div>
              <button type="submit" className="btn-whatsapp">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chatear por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="reveal">
          <div className="section-header reveal">
            <span className="section-label">Ayuda</span>
            <h2 className="section-title">Respuestas amigables</h2>
          </div>
          <div className="faq-list reveal">
            {[
              { q: "¿Cuánto tiempo tardará mi creación?", a: "El tiempo promedio es de 1 semana, pero figuras muy suaves o complejas pueden tomar un poquito más. Te avisaremos siempre." },
              { q: "¿Qué tamaño máximo hacen?", a: "25 cm por pieza FDM. Si quieres algo más grande, lo hacemos por partes y lo unimos con cariño." },
              { q: "¿Ofrecen garantía si llega dañada?", a: "¡Claro! Reponemos tu pieza si llega dañada en el transporte o tiene fallas de impresión. Queremos que estés feliz." }
            ].map((faq, index) => (
              <div className={`faq-item ${openFaqIndex === index ? 'open' : ''}`} key={index}>
                <div className="faq-q" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <div className="faq-arrow">+</div>
                </div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="reveal">
          <span className="section-label">Empecemos</span>
          <h2 className="contact-title">¿Creamos algo <br/><span>hermoso?</span></h2>
          <p className="contact-subtitle">hola@atomiclab3d.store · Cdmx, México</p>
          <div className="contact-actions">
            <a href="https://wa.me/5215516918348?text=Hola+Atomic+Lab+3D!+Tengo+una+idea." className="btn-primary" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Mándanos WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Atomic Lab <span>3D</span></div>
        <div className="footer-copy">© 2026 · Hecho en Cdmx | Hecho Por <a href="https://riders.media" target="_blank" rel="noopener noreferrer">Riders.Media</a></div>
        <div className="footer-links">
          <a href="#portafolio">Galería</a>
          <a href="#faq">Preguntas</a>
        </div>
      </footer>

      <a className="wa-float" href="https://wa.me/5215516918348?text=Hola!+Quiero+saber+más." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
};

export default App;