import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Componente de Navegación con logo oficial
const Navigation = () => (
  <nav class="nav-sticky bg-leufu-black text-white shadow-lg" id="navbar">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Leufu MTB Logo" class="h-20 w-20 object-contain" />
          <div>
            <h1 class="text-2xl font-montserrat font-bold">Leufu MTB</h1>
            <p class="text-xs text-gray-300">Lebu, Región del Biobío, Chile</p>
          </div>
        </div>
        <div class="hidden md:flex space-x-6 items-center">
          <a href="/" class="hover:text-leufu-accent font-medium transition-colors">Inicio</a>
          <a href="/nosotros" class="hover:text-leufu-accent font-medium transition-colors">Nosotros</a>
          <a href="/#rutas" class="hover:text-leufu-accent font-medium transition-colors">Rutas</a>
          <a href="/#calendario" class="hover:text-leufu-accent font-medium transition-colors">Calendario</a>
          <a href="/inscripcion" class="hover:text-leufu-accent font-medium transition-colors">Inscripción</a>
          <a href="/#contacto" class="hover:text-leufu-accent font-medium transition-colors">Contacto</a>
          <a href="https://www.strava.com/clubs/1133016" target="_blank" rel="noopener noreferrer" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-all">
            <i class="fab fa-strava mr-1"></i>
            Strava
          </a>
        </div>
        <button class="md:hidden text-2xl">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
)

// Componente Footer
const Footer = () => (
  <footer class="bg-leufu-black text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <img src="/images/logo.png" alt="Leufu MTB" class="h-12 w-12" />
            <h3 class="text-2xl font-montserrat font-bold">Leufu MTB</h3>
          </div>
          <p class="text-gray-300 mb-4">
            Donde el río, el mar y la montaña se unen pedaleando.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/clubleufumtb/" target="_blank" class="text-2xl hover:text-leufu-accent transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/clubleufumtb" target="_blank" class="text-2xl hover:text-leufu-accent transition-colors">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="mailto:contacto@leufumtb.cl" class="text-2xl hover:text-leufu-accent transition-colors">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-xl font-montserrat font-bold mb-4 text-leufu-accent">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li><a href="/" class="text-gray-300 hover:text-leufu-accent transition-colors">Inicio</a></li>
            <li><a href="/nosotros" class="text-gray-300 hover:text-leufu-accent transition-colors">Nosotros</a></li>
            <li><a href="/#rutas" class="text-gray-300 hover:text-leufu-accent transition-colors">Rutas</a></li>
            <li><a href="/#calendario" class="text-gray-300 hover:text-leufu-accent transition-colors">Calendario</a></li>
            <li><a href="/inscripcion" class="text-gray-300 hover:text-leufu-accent transition-colors">Inscripción</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-xl font-montserrat font-bold mb-4 text-leufu-accent">Contacto</h4>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center space-x-2">
              <i class="fas fa-map-marker-alt text-leufu-accent"></i>
              <span>Lebu, Región del Biobío, Chile</span>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-envelope text-leufu-accent"></i>
              <span>contacto@leufumtb.cl</span>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fab fa-instagram text-leufu-accent"></i>
              <span>@clubleufumtb</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Leufu MTB. Todos los derechos reservados.</p>
        <p class="text-sm mt-2">Hecho con <i class="fas fa-heart text-leufu-accent"></i> en Lebu, Chile</p>
      </div>
    </div>
  </footer>
)

// Página de Inicio
app.get('/', (c) => {
  return c.render(
    <div>
      <Navigation />
      
      {/* Banner Promocional LEUFU KID - Clickeable para inscripción */}
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500 shadow-2xl">
        <div class="container mx-auto px-4 py-6 relative z-10">
          <div class="grid md:grid-cols-2 gap-6 items-center">
            {/* Lado izquierdo: Imagen promocional */}
            <div class="order-2 md:order-1">
              <img 
                src="/images/leufu-kid-promo.jpg" 
                alt="2do Desafío Ciclismo Infantil Leufu 2025" 
                class="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Lado derecho: Información y botones */}
            <div class="order-1 md:order-2 text-center md:text-left">
              <div class="bg-yellow-400 text-leufu-black inline-block px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
                🎉 ¡EVENTO ESPECIAL 2025!
              </div>
              <h2 class="text-4xl md:text-5xl font-montserrat font-black text-white mb-4 drop-shadow-lg">
                2º DESAFÍO<br/>CICLISMO INFANTIL
              </h2>
              <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
                <p class="text-2xl font-bold text-leufu-primary mb-2">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  DICIEMBRE 2025
                </p>
                <p class="text-lg text-gray-700 mb-3">
                  <i class="fas fa-map-marker-alt mr-2 text-leufu-accent"></i>
                  Lebu, Región del Biobío
                </p>
                <div class="border-t border-gray-300 pt-3 mt-3">
                  <p class="text-sm font-semibold text-gray-600 mb-2">📋 CATEGORÍAS:</p>
                  <div class="grid grid-cols-2 gap-2 text-xs text-gray-700">
                    <div>• Mini riders (2-3 años)</div>
                    <div>• Peques (4-5 años)</div>
                    <div>• Pre-infantil (6-7 años)</div>
                    <div>• Infantil (8-9 años)</div>
                    <div>• Junior (10-11 años)</div>
                    <div>• Juveniles (12-13 años)</div>
                  </div>
                </div>
              </div>
              
              {/* Botones de acción */}
              <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="https://www.instagram.com/clubleufumtb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i class="fab fa-instagram text-2xl"></i>
                  INSCRÍBETE EN INSTAGRAM
                </a>
                <a 
                  href="/bases-leufu-kid-2025.pdf" 
                  target="_blank"
                  class="bg-white hover:bg-gray-100 text-leufu-black px-8 py-4 rounded-full font-bold text-lg shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 border-4 border-yellow-400"
                >
                  <i class="fas fa-download text-xl"></i>
                  DESCARGAR BASES
                </a>
              </div>
              
              <p class="text-white text-sm mt-4 font-semibold drop-shadow">
                ¡PRONTO MÁS INFO! 🚴‍♂️ Organiza: Leufu MTB
              </p>
            </div>
          </div>
        </div>
        
        {/* Decoración con íconos animados */}
        <div class="absolute top-4 right-4 text-white text-6xl opacity-20 animate-bounce">
          <i class="fas fa-child"></i>
        </div>
        <div class="absolute bottom-4 left-4 text-white text-5xl opacity-20 animate-pulse">
          <i class="fas fa-bicycle"></i>
        </div>
      </section>
      
      {/* Hero Section */}
      <section class="hero-parallax relative h-screen flex items-center justify-center text-white" style="background-image: url('/images/hero-equipo.jpg');">
        <div class="hero-overlay absolute inset-0"></div>
        <div class="relative z-10 text-center px-4 animate-fadeInUp">
          <img src="/images/logo.png" alt="Leufu MTB" class="mx-auto mb-6 h-40 w-40 md:h-48 md:w-48 animate-fadeIn drop-shadow-2xl" />
          <h1 class="text-5xl md:text-7xl font-montserrat font-bold mb-6">
            Leufu MTB
          </h1>
          <p class="text-xl md:text-3xl font-light mb-4 italic">
            "Donde el río, el mar y la montaña se unen pedaleando"
          </p>
          <p class="text-lg md:text-xl mb-8">
            Club de Ciclismo - Lebu, Región del Biobío, Chile
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/inscripcion" class="btn-primary px-8 py-4 rounded-full text-lg font-semibold inline-block text-white">
              <i class="fas fa-user-plus mr-2"></i>
              Únete al Club
            </a>
            <a href="#rutas" class="bg-white text-leufu-primary px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-gray-100">
              <i class="fas fa-route mr-2"></i>
              Explora Rutas
            </a>
          </div>
        </div>
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#valores" class="text-white text-4xl">
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>

      {/* Contador de Estadísticas */}
      <section class="py-16 bg-gradient-to-r from-leufu-black via-leufu-primary to-leufu-black text-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div class="animate-fadeInUp">
              <div class="counter">50+</div>
              <p class="text-xl mt-2">Miembros Activos</p>
            </div>
            <div class="animate-fadeInUp" style="animation-delay: 0.2s;">
              <div class="counter">100+</div>
              <p class="text-xl mt-2">Rutas Exploradas</p>
            </div>
            <div class="animate-fadeInUp" style="animation-delay: 0.4s;">
              <div class="counter">25+</div>
              <p class="text-xl mt-2">Eventos al Año</p>
            </div>
            <div class="animate-fadeInUp" style="animation-delay: 0.6s;">
              <div class="counter">5</div>
              <p class="text-xl mt-2">Años de Historia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Valores */}
      <section id="valores" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 animate-fadeInUp">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-black mb-4">
              Nuestros Valores
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              En Leufu MTB, nos mueven tres pilares fundamentales que definen nuestra esencia como club
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="card-hover bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg text-center border-2 border-leufu-accent">
              <div class="bg-leufu-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <i class="fas fa-handshake text-4xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-4">Amistad</h3>
              <p class="text-gray-700 leading-relaxed">
                Creamos vínculos genuinos más allá del ciclismo. Cada ruta es una oportunidad para conocernos, 
                apoyarnos y construir un team sobre ruedas.
              </p>
            </div>

            <div class="card-hover bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg text-center border-2 border-leufu-black">
              <div class="bg-leufu-black text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <i class="fas fa-trophy text-4xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-4">Superación</h3>
              <p class="text-gray-700 leading-relaxed">
                Cada subida es un desafío, cada kilómetro una victoria personal. Te acompañamos a superar 
                tus límites y alcanzar metas que nunca imaginaste.
              </p>
            </div>

            <div class="card-hover bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg text-center border-2 border-leufu-accent">
              <div class="bg-leufu-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <i class="fas fa-medal text-4xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-4">Competición</h3>
              <p class="text-gray-700 leading-relaxed">
                Para quienes buscan más, ofrecemos preparación y apoyo en carreras locales y regionales. 
                Tu podio te espera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Equipo con foto oficial */}
      <section class="py-20 bg-gradient-to-br from-leufu-black to-leufu-gray text-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="animate-slideInLeft">
              <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Nuestro Equipo
              </h2>
              <p class="text-lg leading-relaxed mb-6">
                Somos más que un club, <strong class="text-leufu-accent">somos un team unido por la pasión del ciclismo</strong>. 
                Desde principiantes hasta competidores experimentados, todos compartimos el mismo amor por los senderos de Lebu.
              </p>
              <p class="text-lg leading-relaxed mb-6">
                Cada salida es una oportunidad para crear recuerdos, superar desafíos y fortalecer los lazos que nos unen. 
                <strong class="text-leufu-accent">Juntos somos más fuertes</strong>, y cada miembro aporta su energía única al club.
              </p>
              <div class="flex flex-wrap gap-4">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-check-circle text-leufu-accent text-2xl"></i>
                  <span>50+ Ciclistas Activos</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="fas fa-check-circle text-leufu-accent text-2xl"></i>
                  <span>Todos los Niveles</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="fas fa-check-circle text-leufu-accent text-2xl"></i>
                  <span>Comunidad Inclusiva</span>
                </div>
              </div>
            </div>
            <div class="animate-slideInRight">
              <img 
                src="/images/equipo.jpg" 
                alt="Equipo Leufu MTB"
                class="rounded-2xl shadow-2xl border-4 border-leufu-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Terreno Único */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <img 
                src="https://drive.google.com/thumbnail?id=1m42IYnDQtpIn2WiHL1hAg41dhnFEns5Z&sz=w2000" 
                alt="Senderos de Lebu MTB - Grupo ciclistas por la costa"
                class="rounded-2xl shadow-2xl"
              />
            </div>
            <div class="order-1 md:order-2">
              <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-leufu-black">
                Un Terreno Único en Chile
              </h2>
              <p class="text-lg leading-relaxed mb-6 text-gray-700">
                Lebu nos regala algo que pocos lugares en Chile pueden ofrecer: <strong class="text-leufu-primary">senderos 
                que conectan la montaña directamente con el mar</strong>. Desde las alturas de nuestros cerros hasta las 
                playas del Pacífico, cada ruta es un viaje épico.
              </p>
              <p class="text-lg leading-relaxed mb-6 text-gray-700">
                Nuestros senderos exclusivos son el corazón del club. Trabajamos en su mantención constante para 
                garantizar experiencias seguras y memorables. <strong class="text-leufu-primary">Paisajes que 
                parecen sacados de una postal</strong> acompañan cada pedalada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Rutas */}
      <section id="rutas" class="py-20 bg-leufu-light">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 animate-fadeInUp">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-black mb-4">
              Nuestras Rutas
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde Lebu hasta la majestuosa Cordillera de Nahuelbuta
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border-2 border-transparent hover:border-leufu-accent">
              <img 
                src="/images/rutas-lebu.jpg" 
                alt="Rutas en Lebu"
                class="w-full h-64 object-cover"
              />
              <div class="p-8">
                <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-4">
                  <i class="fas fa-map-marked-alt text-leufu-primary mr-2"></i>
                  Rutas Locales - Lebu
                </h3>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Nuestro territorio principal. Senderos técnicos, subidas desafiantes y bajadas con vistas 
                  al océano. Perfectos para entrenar entre semana y descubrir rincones secretos de nuestra comuna.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold border border-red-300">
                    <i class="fas fa-mountain mr-1"></i> Cross Country
                  </span>
                  <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-gray-300">
                    <i class="fas fa-road mr-1"></i> Ruta
                  </span>
                  <span class="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold border border-red-300">
                    <i class="fas fa-star mr-1"></i> Todos los niveles
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border-2 border-transparent hover:border-leufu-accent">
              <img 
                src="/images/nahuelbuta.jpg" 
                alt="Cordillera de Nahuelbuta"
                class="w-full h-64 object-cover"
              />
              <div class="p-8">
                <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-4">
                  <i class="fas fa-mountain text-leufu-secondary mr-2"></i>
                  Cordillera de Nahuelbuta
                </h3>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Expediciones épicas a la Cordillera de Nahuelbuta, especialmente a la icónica <strong>Piedra del Águila</strong>. 
                  Rutas de mayor exigencia con bosques nativos, araucarias milenarias y paisajes de altura.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold border border-red-300">
                    <i class="fas fa-mountain mr-1"></i> XC Avanzado
                  </span>
                  <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-gray-300">
                    <i class="fas fa-hiking mr-1"></i> Expedición
                  </span>
                  <span class="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <i class="fas fa-fire mr-1"></i> Nivel Alto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendario de Rutas */}
      <section id="calendario" class="py-20 bg-gradient-to-br from-leufu-black to-leufu-gray text-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Calendario de Rutas
            </h2>
            <div class="section-divider mb-6 bg-white"></div>
            <p class="text-xl max-w-3xl mx-auto">
              Rutas programadas en Lebu - Únete a nuestras salidas semanales
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Evento 1: Salidas Semanales */}
            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-primary text-white px-4 py-2 rounded-lg font-bold">
                  MIÉRCOLES
                </div>
                <div class="text-2xl font-bold text-leufu-primary">18:30</div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">Salidas Semanales</h3>
              <p class="text-gray-600 mb-4">Rutas por lugares turísticos de Lebu</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-calendar-week text-leufu-primary mr-2"></i>
                <span>Todos los miércoles</span>
              </div>
            </div>

            {/* Evento 2: Raid Laraquete */}
            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-secondary text-white px-4 py-2 rounded-lg font-bold">
                  30 NOV
                </div>
                <div class="text-2xl font-bold text-leufu-secondary">
                  <i class="fas fa-flag-checkered"></i>
                </div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">RAID</h3>
              <p class="text-gray-600 mb-4">Competencia en Laraquete</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-map-marker-alt text-leufu-primary mr-2"></i>
                <span>Laraquete</span>
              </div>
            </div>

            {/* Evento 3: Leufu Kid */}
            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-accent text-white px-4 py-2 rounded-lg font-bold">
                  13 DIC
                </div>
                <div class="text-2xl font-bold text-leufu-accent">
                  <i class="fas fa-child"></i>
                </div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">LEUFU KID</h3>
              <p class="text-gray-600 mb-4">Evento especial para niños</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-map-marker-alt text-leufu-primary mr-2"></i>
                <span>Lebu - Cerro Amalia</span>
              </div>
            </div>

            {/* Evento 4: Raid Final */}
            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-secondary text-white px-4 py-2 rounded-lg font-bold">
                  21 DIC
                </div>
                <div class="text-2xl font-bold text-leufu-secondary">
                  <i class="fas fa-trophy"></i>
                </div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">RAID - FECHA FINAL</h3>
              <p class="text-gray-600 mb-4">Cierre de temporada</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-map-marker-alt text-leufu-primary mr-2"></i>
                <span>Curanilahue</span>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <p class="text-lg mb-6">
              <i class="fas fa-info-circle text-leufu-accent mr-2"></i>
              Las rutas pueden cambiar según condiciones climáticas. Confirma siempre en nuestro Instagram.
            </p>
            <a href="https://www.instagram.com/clubleufumtb/" target="_blank" class="btn-primary px-8 py-4 rounded-full text-lg font-semibold inline-block text-white">
              <i class="fab fa-instagram mr-2"></i>
              Ver Calendario Actualizado
            </a>
          </div>
        </div>
      </section>

      {/* Sección Para Quién es el Club */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 animate-fadeInUp">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-black mb-4">
              ¿Para Quién es Leufu MTB?
            </h2>
            <div class="section-divider mb-6"></div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="bg-leufu-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-bicycle text-2xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-3">
                Principiantes
              </h3>
              <p class="text-gray-700 leading-relaxed">
                ¿Primera vez en MTB? <strong>Te enseñamos desde cero</strong>. Rutas suaves, técnica básica y 
                un grupo que te acompaña en cada pedaleo.
              </p>
            </div>

            <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="bg-leufu-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-users text-2xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-3">
                Recreacionales
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Buscas <strong>diversión y comunidad</strong>. Salidas sociales, eventos y amistades que duran 
                toda la vida. Aquí encuentras tu tribu.
              </p>
            </div>

            <div class="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="bg-leufu-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-flag-checkered text-2xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-3">
                Competitivos
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Quieres <strong>competir y ganar</strong>. Entrenamientos estructurados, apoyo técnico y 
                participación en carreras regionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección LEUFU KID - Rama Infantil */}
      <section class="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <div class="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
              🚴‍♂️ RAMA INFANTIL
            </div>
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-black mb-4">
              LEUFU KID
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Fomentando el amor por el ciclismo desde temprana edad
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="order-2 md:order-1">
              <img 
                src="https://drive.google.com/thumbnail?id=10bHPL247B6sXiw85EdIGgbX3LPBQ5CN7&sz=w2000" 
                alt="LEUFU KID - Niños ciclistas del club"
                class="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="order-1 md:order-2">
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="bg-yellow-400 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-child text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-leufu-black mb-2">Iniciación Temprana</h3>
                    <p class="text-gray-700">
                      Desde los 2 años, los niños pueden comenzar su aventura en el ciclismo con nuestro programa especial.
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-users text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-leufu-black mb-2">Desarrollo Integral</h3>
                    <p class="text-gray-700">
                      Más que pedalear: desarrollamos habilidades motrices, trabajo en equipo y valores deportivos.
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-red-400 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-trophy text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-leufu-black mb-2">Eventos Especiales</h3>
                    <p class="text-gray-700">
                      Organizamos carreras y desafíos adaptados para cada categoría de edad, fomentando la competencia sana.
                    </p>
                  </div>
                </div>

                <div class="bg-gradient-to-r from-leufu-primary to-leufu-secondary text-white p-6 rounded-xl mt-6">
                  <h4 class="font-bold text-lg mb-2">📋 Categorías LEUFU KID:</h4>
                  <div class="grid grid-cols-2 gap-2 text-sm">
                    <div>• Mini riders (2-3 años)</div>
                    <div>• Peques (4-5 años)</div>
                    <div>• Pre-infantil (6-7 años)</div>
                    <div>• Infantil (8-9 años)</div>
                    <div>• Junior (10-11 años)</div>
                    <div>• Juveniles (12-13 años)</div>
                  </div>
                </div>

                <div class="text-center mt-8">
                  <a href="/inscripcion" class="btn-primary px-8 py-4 rounded-full text-lg font-semibold inline-block text-white">
                    <i class="fas fa-user-plus mr-2"></i>
                    Inscribe a tu Hijo/a
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section class="py-20 bg-leufu-light">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-black mb-4">
              Galería
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Momentos que capturan la esencia de Leufu MTB
            </p>
          </div>

          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="/images/rutas-lebu.jpg" alt="Rutas Locales Lebu" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Rutas Locales</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="https://drive.google.com/thumbnail?id=1bQrDuABWBWHp9Seogj7EWXL8IuGBw4gx&sz=w2000" alt="Grupo de ciclistas Leufu MTB" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Grupo en Acción</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="/images/equipo.jpg" alt="Equipo Leufu MTB" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Nuestra Familia</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="/images/nahuelbuta.jpg" alt="Cordillera de Nahuelbuta" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Nahuelbuta Summit</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="/images/competicion.jpg" alt="Competición" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Día de Carrera</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2070" alt="Vista panorámica" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Vistas Épicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section id="contacto" class="py-20 bg-gradient-to-r from-leufu-black via-leufu-primary to-leufu-black text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            ¿Listo para Unirte a la Aventura?
          </h2>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            No importa tu nivel, tu edad o tu experiencia. En Leufu MTB hay un lugar para ti. 
            Da el primer paso y descubre por qué somos más que un club: <strong>somos un team</strong>.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/inscripcion" class="bg-white text-leufu-primary px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-gray-100">
              <i class="fas fa-user-plus mr-2"></i>
              Inscríbete Ahora
            </a>
            <a href="https://www.instagram.com/clubleufumtb/" target="_blank" class="btn-secondary px-8 py-4 rounded-full text-lg font-semibold inline-block text-white">
              <i class="fab fa-instagram mr-2"></i>
              Síguenos en Instagram
            </a>
          </div>
          <p class="mt-8 text-lg">
            <i class="fas fa-map-marker-alt mr-2"></i>
            Nos reunimos todos los fines de semana en Plaza de Lebu
          </p>
        </div>
      </section>

      {/* Sección Strava Club */}
      <section class="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <div class="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              <i class="fab fa-strava mr-2"></i>
              CONECTA CON NOSOTROS
            </div>
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-black mb-4">
              Síguenos en Strava
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Únete a nuestro club oficial en Strava y comparte tus rutas con <strong>23 miembros activos</strong>
            </p>
          </div>

          <div class="max-w-5xl mx-auto">
            {/* Stats del Club */}
            <div class="grid md:grid-cols-3 gap-6 mb-12">
              <div class="bg-white rounded-xl p-6 shadow-lg text-center">
                <div class="text-4xl font-bold text-orange-500 mb-2">23</div>
                <div class="text-gray-600 font-semibold">Miembros Activos</div>
              </div>
              <div class="bg-white rounded-xl p-6 shadow-lg text-center">
                <div class="text-4xl font-bold text-leufu-primary mb-2">
                  <i class="fas fa-route"></i>
                </div>
                <div class="text-gray-600 font-semibold">Rutas Compartidas</div>
              </div>
              <div class="bg-white rounded-xl p-6 shadow-lg text-center">
                <div class="text-4xl font-bold text-leufu-secondary mb-2">
                  <i class="fas fa-mountain"></i>
                </div>
                <div class="text-gray-600 font-semibold">Aventuras Épicas</div>
              </div>
            </div>

            {/* Botón Prominente */}
            <div class="text-center mb-12">
              <a 
                href="https://www.strava.com/clubs/1133016" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-orange-300 transition-all transform hover:scale-105"
              >
                <i class="fab fa-strava mr-3 text-2xl"></i>
                Únete al Club en Strava
              </a>
              <p class="mt-4 text-gray-600">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Gratis • Ver rutas en vivo • Competir con amigos
              </p>
            </div>

            {/* Tarjeta Visual de Strava */}
            <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl overflow-hidden p-12 text-white text-center">
              <div class="mb-8">
                <i class="fab fa-strava text-8xl mb-6 animate-pulse"></i>
                <h3 class="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                  ¡Únete a Nuestra Comunidad!
                </h3>
                <p class="text-xl mb-8 opacity-90">
                  Sigue nuestras rutas, comparte tus logros y conecta con 23 ciclistas como tú
                </p>
              </div>

              <div class="grid md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                  <i class="fas fa-users text-4xl mb-3"></i>
                  <div class="text-2xl font-bold">23+</div>
                  <div class="text-sm opacity-90">Ciclistas Activos</div>
                </div>
                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                  <i class="fas fa-map-marked-alt text-4xl mb-3"></i>
                  <div class="text-2xl font-bold">100+</div>
                  <div class="text-sm opacity-90">Rutas Registradas</div>
                </div>
                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                  <i class="fas fa-trophy text-4xl mb-3"></i>
                  <div class="text-2xl font-bold">∞</div>
                  <div class="text-sm opacity-90">Momentos Épicos</div>
                </div>
              </div>

              <a 
                href="https://www.strava.com/clubs/1133016" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-white text-orange-600 px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
              >
                <i class="fab fa-strava mr-2"></i>
                Ver Actividades en Vivo
              </a>
            </div>

            {/* Beneficios de unirse */}
            <div class="mt-12 grid md:grid-cols-2 gap-6">
              <div class="flex items-start space-x-4">
                <div class="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-map-marked-alt text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-leufu-black mb-1">Descubre Nuevas Rutas</h4>
                  <p class="text-gray-600 text-sm">Explora los recorridos de otros miembros y encuentra nuevas aventuras</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-trophy text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-leufu-black mb-1">Desafíos Mensuales</h4>
                  <p class="text-gray-600 text-sm">Participa en retos del club y gana reconocimientos</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-chart-line text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-leufu-black mb-1">Sigue tu Progreso</h4>
                  <p class="text-gray-600 text-sm">Registra tus entrenamientos y mejora cada día</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-users text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-leufu-black mb-1">Conecta con el Equipo</h4>
                  <p class="text-gray-600 text-sm">Comenta, apoya y motiva a tus compañeros de pedal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
})

// Página de Inscripción
app.get('/inscripcion', (c) => {
  return c.render(
    <div>
      <Navigation />
      
      {/* Hero Inscripción */}
      <section class="relative h-96 flex items-center justify-center text-white bg-gradient-to-br from-leufu-black to-leufu-primary">
        <div class="relative z-10 text-center px-4">
          <i class="fas fa-user-plus text-6xl mb-4"></i>
          <h1 class="text-5xl md:text-6xl font-montserrat font-bold mb-4">
            Únete a Leufu MTB
          </h1>
          <p class="text-xl md:text-2xl">
            Completa el formulario y sé parte de nuestro team
          </p>
        </div>
      </section>

      {/* Formulario de Inscripción */}
      <section class="py-20 bg-leufu-light">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div class="text-center mb-10">
              <img src="/images/logo.png" alt="Leufu MTB" class="h-24 w-24 mx-auto mb-4" />
              <h2 class="text-3xl font-montserrat font-bold text-leufu-black mb-4">
                Formulario de Inscripción
              </h2>
              <p class="text-gray-600">
                Completa tus datos y nos pondremos en contacto contigo para finalizar tu inscripción
              </p>
            </div>

            <form class="space-y-6">
              {/* Datos Personales */}
              <div class="border-l-4 border-leufu-primary pl-4 mb-8">
                <h3 class="text-2xl font-bold text-leufu-black mb-2">Datos Personales</h3>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Nombre Completo *</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required 
                    class="form-input" 
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label class="form-label">RUT *</label>
                  <input 
                    type="text" 
                    name="rut" 
                    required 
                    class="form-input" 
                    placeholder="12.345.678-9"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Fecha de Nacimiento *</label>
                  <input 
                    type="date" 
                    name="fecha_nacimiento" 
                    required 
                    class="form-input"
                  />
                </div>

                <div>
                  <label class="form-label">Género *</label>
                  <select name="genero" required class="form-select">
                    <option value="">Selecciona...</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Información de Contacto */}
              <div class="border-l-4 border-leufu-primary pl-4 mb-8 mt-10">
                <h3 class="text-2xl font-bold text-leufu-black mb-2">Información de Contacto</h3>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    class="form-input" 
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label class="form-label">Teléfono *</label>
                  <input 
                    type="tel" 
                    name="telefono" 
                    required 
                    class="form-input" 
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label class="form-label">Dirección</label>
                <input 
                  type="text" 
                  name="direccion" 
                  class="form-input" 
                  placeholder="Calle, número, ciudad"
                />
              </div>

              {/* Información Ciclística */}
              <div class="border-l-4 border-leufu-primary pl-4 mb-8 mt-10">
                <h3 class="text-2xl font-bold text-leufu-black mb-2">Información Ciclística</h3>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Nivel de Experiencia *</label>
                  <select name="nivel" required class="form-select">
                    <option value="">Selecciona...</option>
                    <option value="principiante">Principiante (Recién empiezo)</option>
                    <option value="intermedio">Intermedio (1-2 años de experiencia)</option>
                    <option value="avanzado">Avanzado (Más de 2 años)</option>
                    <option value="competitivo">Competitivo (Participo en carreras)</option>
                  </select>
                </div>

                <div>
                  <label class="form-label">Modalidad Preferida *</label>
                  <select name="modalidad" required class="form-select">
                    <option value="">Selecciona...</option>
                    <option value="xc">Cross Country (XC)</option>
                    <option value="ruta">Ciclismo de Ruta</option>
                    <option value="ambas">Ambas modalidades</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="form-label">¿Tienes bicicleta propia? *</label>
                <select name="tiene_bici" required class="form-select">
                  <option value="">Selecciona...</option>
                  <option value="si">Sí, tengo bicicleta</option>
                  <option value="no">No, pero planeo comprar pronto</option>
                  <option value="prestada">Uso una prestada</option>
                </select>
              </div>

              <div>
                <label class="form-label">Motivación para unirte al club</label>
                <textarea 
                  name="motivacion" 
                  class="form-textarea" 
                  placeholder="Cuéntanos por qué quieres ser parte de Leufu MTB..."
                ></textarea>
              </div>

              {/* Contacto de Emergencia */}
              <div class="border-l-4 border-leufu-primary pl-4 mb-8 mt-10">
                <h3 class="text-2xl font-bold text-leufu-black mb-2">Contacto de Emergencia</h3>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Nombre Contacto de Emergencia *</label>
                  <input 
                    type="text" 
                    name="emergencia_nombre" 
                    required 
                    class="form-input" 
                    placeholder="Nombre completo"
                  />
                </div>

                <div>
                  <label class="form-label">Teléfono de Emergencia *</label>
                  <input 
                    type="tel" 
                    name="emergencia_telefono" 
                    required 
                    class="form-input" 
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              {/* Términos y Condiciones */}
              <div class="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <label class="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" name="acepto" required class="mt-1 w-5 h-5 text-leufu-primary" />
                  <span class="text-gray-700 text-sm">
                    Acepto los términos y condiciones del club. Entiendo que debo usar casco y equipo de seguridad 
                    en todas las salidas, y que participo bajo mi propia responsabilidad. *
                  </span>
                </label>
              </div>

              {/* Botones */}
              <div class="flex flex-col md:flex-row gap-4 pt-6">
                <button 
                  type="submit" 
                  class="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-white w-full md:w-auto"
                >
                  <i class="fas fa-paper-plane mr-2"></i>
                  Enviar Inscripción
                </button>
                <a 
                  href="/" 
                  class="bg-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-gray-300 w-full md:w-auto"
                >
                  <i class="fas fa-arrow-left mr-2"></i>
                  Volver al Inicio
                </a>
              </div>

              <p class="text-sm text-gray-500 text-center mt-4">
                * Campos obligatorios
              </p>
            </form>

            {/* Información Adicional */}
            <div class="mt-12 pt-8 border-t-2 border-gray-200">
              <h3 class="text-xl font-bold text-leufu-black mb-4">¿Qué incluye la membresía?</h3>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-leufu-primary text-xl mt-1"></i>
                  <span>Participación en todas las rutas semanales</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-leufu-primary text-xl mt-1"></i>
                  <span>Acceso a talleres técnicos y clínicas de manejo</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-leufu-primary text-xl mt-1"></i>
                  <span>Apoyo y acompañamiento en carreras</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-leufu-primary text-xl mt-1"></i>
                  <span>Eventos sociales y actividades del club</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-leufu-primary text-xl mt-1"></i>
                  <span>Descuentos en tiendas asociadas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
})

// Página Nosotros - Actualizada con nuevos colores
app.get('/nosotros', (c) => {
  return c.render(
    <div>
      <Navigation />
      
      {/* Hero Nosotros */}
      <section class="hero-parallax relative h-96 flex items-center justify-center text-white" style="background-image: url('/images/equipo.jpg');">
        <div class="hero-overlay absolute inset-0"></div>
        <div class="relative z-10 text-center px-4">
          <h1 class="text-5xl md:text-6xl font-montserrat font-bold mb-4">
            Nuestra Historia
          </h1>
          <p class="text-xl md:text-2xl">
            Conoce más sobre Leufu MTB
          </p>
        </div>
      </section>

      {/* Historia del Club */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-montserrat font-bold text-leufu-black mb-4">
                ¿Quiénes Somos?
              </h2>
              <div class="section-divider mb-6"></div>
            </div>

            <div class="prose prose-lg max-w-none">
              <p class="text-xl text-gray-700 leading-relaxed mb-6">
                <strong class="text-leufu-primary">Leufu MTB</strong> nació del amor por el ciclismo y por nuestra tierra. 
                El nombre <em>"Leufu"</em> significa <strong>"río"</strong> en Mapudungún, un homenaje al <strong>Río Lebu</strong> 
                que atraviesa nuestra comuna y que, como nosotros, conecta la montaña con el mar.
              </p>

              <p class="text-xl text-gray-700 leading-relaxed mb-6">
                Somos un grupo de apasionados ciclistas que un día decidió convertir las salidas esporádicas en algo más grande: 
                <strong class="text-leufu-primary">una comunidad organizada, inclusiva y con propósito</strong>. Hoy, varios 
                años después, Leufu MTB es uno de los clubes de ciclismo más activos de la Provincia de Arauco.
              </p>

              <div class="bg-gradient-to-r from-red-50 to-gray-50 p-8 rounded-2xl my-8 border-l-4 border-leufu-primary">
                <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-4">
                  <i class="fas fa-quote-left text-leufu-accent mr-2"></i>
                  Nuestro Eslogan
                </h3>
                <p class="text-2xl italic text-center text-leufu-primary font-semibold">
                  "Donde el río, el mar y la montaña se unen pedaleando"
                </p>
                <p class="text-gray-700 mt-4 text-center">
                  Resume perfectamente nuestra esencia: somos el punto de encuentro entre la naturaleza y el deporte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section class="py-20 bg-leufu-light">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12">
            <div class="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-leufu-primary">
              <div class="flex items-center mb-6">
                <div class="bg-leufu-primary text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-bullseye text-3xl"></i>
                </div>
                <h3 class="text-3xl font-montserrat font-bold text-leufu-black">Nuestra Misión</h3>
              </div>
              <p class="text-gray-700 leading-relaxed text-lg">
                Fomentar el ciclismo en todas sus formas en la comuna de Lebu y la Provincia de Arauco, 
                <strong class="text-leufu-primary"> promoviendo el deporte</strong>, la vida saludable, el cuidado del medio 
                ambiente y la construcción de comunidad. Queremos que cada persona, sin importar su nivel, 
                pueda descubrir la magia de pedalear en nuestros senderos únicos.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-leufu-black">
              <div class="flex items-center mb-6">
                <div class="bg-leufu-black text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-eye text-3xl"></i>
                </div>
                <h3 class="text-3xl font-montserrat font-bold text-leufu-black">Nuestra Visión</h3>
              </div>
              <p class="text-gray-700 leading-relaxed text-lg">
                Convertirnos en el <strong class="text-leufu-primary">club de ciclismo de referencia en la Provincia de Arauco</strong>, 
                reconocido por nuestro espíritu inclusivo, por la calidad de nuestros senderos y por el impacto positivo que 
                generamos en la comunidad local. Queremos poner a Lebu en el mapa nacional del ciclismo de montaña.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lo Que Nos Define */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-montserrat font-bold text-leufu-black mb-4">
              Lo Que Nos Define
            </h2>
            <div class="section-divider mb-6"></div>
          </div>

          <div class="max-w-5xl mx-auto space-y-8">
            <div class="flex items-start space-x-6 bg-gradient-to-r from-red-50 to-transparent p-6 rounded-xl border-l-4 border-leufu-primary">
              <div class="bg-leufu-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-mountain text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-2">
                  Territorio Único
                </h3>
                <p class="text-gray-700 leading-relaxed text-lg">
                  Nuestros senderos que conectan el cerro con el mar son <strong>únicos en Chile</strong>. Trabajamos 
                  constantemente en su mantención y mejora, garantizando experiencias seguras y memorables.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-6 bg-gradient-to-r from-gray-50 to-transparent p-6 rounded-xl border-l-4 border-leufu-black">
              <div class="bg-leufu-black text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-users text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-2">
                  Comunidad Inclusiva
                </h3>
                <p class="text-gray-700 leading-relaxed text-lg">
                  Desde principiantes absolutos hasta competidores experimentados, <strong>todos tienen un lugar en Leufu MTB</strong>. 
                  Creemos en el ciclismo como herramienta de integración y desarrollo personal.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-6 bg-gradient-to-r from-red-50 to-transparent p-6 rounded-xl border-l-4 border-leufu-accent">
              <div class="bg-leufu-accent text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-heart text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-2">
                  Más que Deporte
                </h3>
                <p class="text-gray-700 leading-relaxed text-lg">
                  No solo pedaleamos juntos, también compartimos asados, celebramos cumpleaños, apoyamos en momentos difíciles 
                  y construimos <strong>amistades que trascienden el ciclismo</strong>. Somos un team sobre ruedas.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-6 bg-gradient-to-r from-gray-50 to-transparent p-6 rounded-xl border-l-4 border-leufu-black">
              <div class="bg-gray-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-tree text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-black mb-2">
                  Compromiso Ambiental
                </h3>
                <p class="text-gray-700 leading-relaxed text-lg">
                  Respetamos y cuidamos los espacios naturales donde rodamos. Organizamos jornadas de limpieza de senderos 
                  y promovemos prácticas responsables de ciclismo de montaña.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Historia */}
      <section class="py-20 bg-gradient-to-br from-leufu-black to-leufu-gray text-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-montserrat font-bold mb-4">
              Nuestro Recorrido
            </h2>
            <div class="section-divider mb-6 bg-white"></div>
            <p class="text-xl max-w-3xl mx-auto">
              Hitos importantes en la historia de Leufu MTB
            </p>
          </div>

          <div class="max-w-4xl mx-auto">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-white text-leufu-black p-6 rounded-xl">
                <h3 class="text-2xl font-bold mb-2">2019 - Los Inicios</h3>
                <p class="text-gray-700">
                  Un grupo de amigos decide formalizar las salidas y crear el club. Primeras rutas organizadas 
                  y trabajo inicial en senderos locales.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-white text-leufu-black p-6 rounded-xl">
                <h3 class="text-2xl font-bold mb-2">2020 - Crecimiento y Comunidad</h3>
                <p class="text-gray-700">
                  El club crece a más de 30 miembros activos. Primera participación organizada en carreras regionales. 
                  Inicio de mantención regular de senderos.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-white text-leufu-black p-6 rounded-xl">
                <h3 class="text-2xl font-bold mb-2">2021-2022 - Consolidación</h3>
                <p class="text-gray-700">
                  Establecimiento de rutas semanales regulares. Primeras expediciones a Cordillera de Nahuelbuta. 
                  Creación de categorías para principiantes y avanzados.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-white text-leufu-black p-6 rounded-xl">
                <h3 class="text-2xl font-bold mb-2">2023-2024 - Expansión y Reconocimiento</h3>
                <p class="text-gray-700">
                  Más de 50 miembros activos. Leufu MTB se posiciona como referente en la provincia. 
                  Organización de eventos propios y colaboraciones con otros clubes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades del Club */}
      <section class="py-20 bg-leufu-light">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-montserrat font-bold text-leufu-black mb-4">
              Lo Que Hacemos
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestras actividades regulares y eventos especiales
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-6 shadow-lg card-hover border-t-4 border-leufu-primary">
              <div class="text-center mb-4">
                <i class="fas fa-route text-leufu-primary text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-black">Rutas Semanales</h3>
              </div>
              <p class="text-gray-700 text-center">
                Salidas organizadas todos los fines de semana con diferentes niveles de dificultad.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg card-hover border-t-4 border-leufu-accent">
              <div class="text-center mb-4">
                <i class="fas fa-trophy text-leufu-accent text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-black">Participación en Carreras</h3>
              </div>
              <p class="text-gray-700 text-center">
                Representamos a Lebu en competencias XC y ruta a nivel regional.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg card-hover border-t-4 border-leufu-black">
              <div class="text-center mb-4">
                <i class="fas fa-tools text-leufu-black text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-black">Mantención de Senderos</h3>
              </div>
              <p class="text-gray-700 text-center">
                Jornadas mensuales de trabajo comunitario para mantener nuestros trails.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg card-hover border-t-4 border-leufu-primary">
              <div class="text-center mb-4">
                <i class="fas fa-chalkboard-teacher text-leufu-primary text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-black">Talleres Técnicos</h3>
              </div>
              <p class="text-gray-700 text-center">
                Clínicas de técnica de manejo, mecánica básica y primeros auxilios.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg card-hover border-t-4 border-leufu-accent">
              <div class="text-center mb-4">
                <i class="fas fa-users text-leufu-accent text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-black">Eventos Sociales</h3>
              </div>
              <p class="text-gray-700 text-center">
                Asados, celebraciones y actividades que fortalecen nuestra comunidad.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg card-hover border-t-4 border-leufu-black">
              <div class="text-center mb-4">
                <i class="fas fa-mountain text-leufu-black text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-black">Expediciones Especiales</h3>
              </div>
              <p class="text-gray-700 text-center">
                Viajes a Nahuelbuta y otros destinos para vivir aventuras épicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción Final */}
      <section class="py-20 bg-gradient-to-r from-leufu-primary to-leufu-black text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Sé Parte de Nuestra Historia
          </h2>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cada miembro de Leufu MTB escribe un capítulo de nuestra historia. 
            <strong>El tuyo puede comenzar hoy</strong>.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/inscripcion" class="bg-white text-leufu-primary px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-gray-100">
              <i class="fas fa-user-plus mr-2"></i>
              Inscríbete Ahora
            </a>
            <a href="https://www.instagram.com/clubleufumtb/" target="_blank" class="btn-secondary px-8 py-4 rounded-full text-lg font-semibold inline-block text-white">
              <i class="fab fa-instagram mr-2"></i>
              Contáctanos por Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
})

export default app
