import React, { useState } from 'react';

const AtomicLabLanding = () => {
  const [formData, setFormData] = useState({ nombre: '', idea: '', material: 'PLA' });

  // Flujo Directo a WhatsApp
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const numero = "522221234567"; // Reemplazar con el número de Atomic Lab
    const mensaje = `¡Hola Atomic Lab! Soy ${formData.nombre}. Tengo una idea: ${formData.idea}. Me interesa en material: ${formData.material}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#121212] text-gray-200 min-h-screen font-sans selection:bg-[#ffdb58] selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed w-full bg-[#121212]/90 backdrop-blur-md z-50 border-b border-[#1f5f5b]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-2xl tracking-tighter">
              <span className="text-white">ATOMIC</span><span className="text-[#ffdb58]">LAB</span><span className="text-[#e4572e]"> 3D</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#hero" className="hover:text-[#ffdb58] transition-colors">Inicio</a>
              <a href="#portfolio" className="hover:text-[#ffdb58] transition-colors">Portafolio</a>
              <a href="#proceso" className="hover:text-[#ffdb58] transition-colors">Proceso</a>
              <a href="#cotizador" className="bg-[#ffdb58] text-black px-4 py-2 rounded-full hover:bg-[#e4572e] hover:text-white transition-all">Cotizar Idea</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            De la imaginación <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb58] to-[#e4572e]">a la impresión.</span>
          </h1>
          <p className="text-xl text-gray-400">
            Un laboratorio creativo donde las ideas no solo se diseñan, se materializan[cite: 5]. No es solo un servicio, es un proceso de evolución creativa[cite: 6].
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#cotizador" className="px-8 py-4 bg-[#ffdb58] text-black font-bold rounded-lg hover:bg-[#e4572e] hover:text-white transition-colors">
              Iniciar Proyecto
            </a>
            <a href="#portfolio" className="px-8 py-4 border border-[#1f5f5b] text-[#1f5f5b] font-bold rounded-lg hover:bg-[#1f5f5b] hover:text-white transition-colors">
              Ver Trabajos
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1631541909061-71e34a49cb56?auto=format&fit=crop&w=800&q=80" 
            alt="Impresora 3D trabajando" 
            className="rounded-2xl shadow-2xl shadow-[#1f5f5b]/20 object-cover h-[500px] w-full"
          />
        </div>
      </section>

      {/* PODER DE FABRICACIÓN & VALORES */}
      <section className="bg-[#0a0a0a] py-20 border-y border-[#1f5f5b]/20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="text-[#ffdb58] text-4xl mb-2">💡</div>
            <h3 className="text-2xl font-bold text-white">Creatividad</h3>
            <p className="text-gray-400">Si se puede imaginar, se puede imprimir[cite: 9]. Sin límites para las ideas[cite: 9].</p>
          </div>
          <div className="space-y-4">
            <div className="text-[#e4572e] text-4xl mb-2">⚙️</div>
            <h3 className="text-2xl font-bold text-white">Innovación Material</h3>
            <p className="text-gray-400">Evolución constante en técnicas y materiales (PLA, PETG, Resina)[cite: 11, 12].</p>
          </div>
          <div className="space-y-4">
            <div className="text-[#1f5f5b] text-4xl mb-2">📏</div>
            <h3 className="text-2xl font-bold text-white">Precisión & Calidad</h3>
            <p className="text-gray-400">Atención al detalle en cada capa[cite: 14]. Precisión de hasta 0.2mm [cite: 15] en volúmenes de 25x25 cm[cite: 17, 18].</p>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO VISUAL */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portafolio Visual [cite: 24]</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Diseñado para que los colores neón de los materiales y las fotos resalten[cite: 69].</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Figuras */}
          <div className="group relative overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1614036417651-1d473f3c39d8?auto=format&fit=crop&w=600&q=80" alt="Figuras" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white">Figuras & Miniaturas [cite: 26]</h3>
            </div>
          </div>
          {/* Cajas de Luz */}
          <div className="group relative overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=600&q=80" alt="Cajas de Luz" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white">Cajas de Luz [cite: 28]</h3>
            </div>
          </div>
          {/* Relieves 3D */}
          <div className="group relative overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80" alt="Relieves 3D" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white">Relieves 3D [cite: 29]</h3>
            </div>
          </div>
        </div>
      </section>

      {/* EL VIAJE DE LA IDEA (PROCESO) */}
      <section id="proceso" className="py-20 bg-[#1f5f5b]/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">El Viaje de la Idea [cite: 78]</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="bg-[#121212] p-6 rounded-xl border border-[#1f5f5b]/30 relative z-10">
              <span className="text-[#ffdb58] text-5xl font-black opacity-50 absolute -top-6 -left-2">01</span>
              <h4 className="text-xl font-bold text-white mt-4 mb-2">Conceptualización</h4>
              <p className="text-sm text-gray-400">Entendemos la idea del personaje o pieza[cite: 80].</p>
            </div>
            <div className="bg-[#121212] p-6 rounded-xl border border-[#1f5f5b]/30 relative z-10">
              <span className="text-[#ffdb58] text-5xl font-black opacity-50 absolute -top-6 -left-2">02</span>
              <h4 className="text-xl font-bold text-white mt-4 mb-2">Curaduría</h4>
              <p className="text-sm text-gray-400">Buscamos o diseñamos el archivo óptimo[cite: 81].</p>
            </div>
            <div className="bg-[#121212] p-6 rounded-xl border border-[#1f5f5b]/30 relative z-10">
              <span className="text-[#ffdb58] text-5xl font-black opacity-50 absolute -top-6 -left-2">03</span>
              <h4 className="text-xl font-bold text-white mt-4 mb-2">Producción</h4>
              <p className="text-sm text-gray-400">Impresión con control de calidad constante[cite: 82].</p>
            </div>
            <div className="bg-[#121212] p-6 rounded-xl border border-[#1f5f5b]/30 relative z-10">
              <span className="text-[#ffdb58] text-5xl font-black opacity-50 absolute -top-6 -left-2">04</span>
              <h4 className="text-xl font-bold text-white mt-4 mb-2">Post-procesado</h4>
              <p className="text-sm text-gray-400">Lijado y acabado profesional[cite: 83].</p>
            </div>
          </div>
        </div>
      </section>

      {/* COTIZADOR / CIERRE DE VENTAS */}
      <section id="cotizador" className="py-24 max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-[#e4572e]/30 shadow-2xl shadow-[#e4572e]/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listos para Imprimir? [cite: 97]</h2>
            <p className="text-gray-400">Los formularios envían los datos estructurados directamente a WhatsApp Business, eliminando la fricción del correo.</p>
          </div>
          
          <form onSubmit={handleWhatsApp} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#ffdb58] mb-2">Tu Nombre</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#1a1a1a] border border-[#1f5f5b]/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffdb58] transition-colors"
                  placeholder="Ej. Carlos Martínez"
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#ffdb58] mb-2">Material Preferido</label>
                <select 
                  className="w-full bg-[#1a1a1a] border border-[#1f5f5b]/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffdb58] transition-colors"
                  onChange={(e) => setFormData({...formData, material: e.target.value})}
                >
                  <option value="PLA">PLA (Ideal para figuras) [cite: 21]</option>
                  <option value="PETG">PETG (Uso técnico) [cite: 22]</option>
                  <option value="Resina">Resina (Máximo detalle) [cite: 23]</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#ffdb58] mb-2">Cuéntanos tu idea</label>
              <textarea 
                required
                rows="4" 
                className="w-full bg-[#1a1a1a] border border-[#1f5f5b]/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffdb58] transition-colors"
                placeholder="¿Qué tienes en mente? Un llavero, una figura articulada, una pieza de motor..."
                onChange={(e) => setFormData({...formData, idea: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#e4572e] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#ffdb58] hover:text-black transition-all transform hover:scale-[1.02]"
            >
              Enviar a WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER & GARANTÍA */}
      <footer className="bg-[#050505] pt-16 pb-8 border-t border-[#1f5f5b]/20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Garantía Atómica [cite: 86]</h4>
            <ul className="space-y-2 text-gray-400">
              <li>⏱️ <strong className="text-white">Tiempo:</strong> Promedio de 1 semana para piezas estándar[cite: 87].</li>
              <li>🛡️ <strong className="text-white">Post-Venta:</strong> Reposición o reembolso ante daños de impresión[cite: 87].</li>
              <li>📍 <strong className="text-white">Logística:</strong> Entregas locales en Cdmx y área metropolitana.</li>
            </ul>
          </div>
          <div className="flex flex-col md:items-end justify-center text-left md:text-right">
             <div className="font-bold text-2xl tracking-tighter mb-2">
              <span className="text-white">ATOMIC</span><span className="text-[#ffdb58]">LAB</span><span className="text-[#e4572e]"> 3D</span>
            </div>
            <p className="text-gray-500">El futuro de tus ideas[cite: 98].</p>
            <a href="mailto:hola@atomiclab3d.store" className="text-[#1f5f5b] hover:text-[#ffdb58] mt-2">hola@atomiclab3d.store</a>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Atomic Lab 3D. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default AtomicLabLanding;