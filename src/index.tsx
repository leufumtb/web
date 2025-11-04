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
        <div class="hidden md:flex space-x-6">
          <a href="/" class="hover:text-leufu-accent font-medium transition-colors">Inicio</a>
          <a href="/nosotros" class="hover:text-leufu-accent font-medium transition-colors">Nosotros</a>
          <a href="/#rutas" class="hover:text-leufu-accent font-medium transition-colors">Rutas</a>
          <a href="/#calendario" class="hover:text-leufu-accent font-medium transition-colors">Calendario</a>
          <a href="/inscripcion" class="hover:text-leufu-accent font-medium transition-colors">Inscripción</a>
          <a href="/#contacto" class="hover:text-leufu-accent font-medium transition-colors">Contacto</a>
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
                apoyarnos y construir una familia sobre ruedas.
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
                Somos más que un club, <strong class="text-leufu-accent">somos una familia unida por la pasión del ciclismo</strong>. 
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
                src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2070" 
                alt="Vista al mar desde senderos de Lebu"
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

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-primary text-white px-4 py-2 rounded-lg font-bold">
                  SÁBADO
                </div>
                <div class="text-2xl font-bold text-leufu-primary">8:00 AM</div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">Ruta Cerro Obligado</h3>
              <p class="text-gray-600 mb-4">Salida técnica por senderos locales. Nivel: Intermedio</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-map-marker-alt text-leufu-primary mr-2"></i>
                <span>Punto de encuentro: Plaza de Lebu</span>
              </div>
            </div>

            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-primary text-white px-4 py-2 rounded-lg font-bold">
                  DOMINGO
                </div>
                <div class="text-2xl font-bold text-leufu-primary">7:00 AM</div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">Ruta Larga Costa</h3>
              <p class="text-gray-600 mb-4">70km por la costa. Vistas al mar. Nivel: Avanzado</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-map-marker-alt text-leufu-primary mr-2"></i>
                <span>Punto de encuentro: Plaza de Lebu</span>
              </div>
            </div>

            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-secondary text-white px-4 py-2 rounded-lg font-bold">
                  15 DIC
                </div>
                <div class="text-2xl font-bold text-leufu-secondary">6:00 AM</div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">Piedra del Águila</h3>
              <p class="text-gray-600 mb-4">Expedición a Nahuelbuta. Nivel: Experto</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-map-marker-alt text-leufu-primary mr-2"></i>
                <span>Salida desde Lebu (transporte coordinado)</span>
              </div>
            </div>

            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-accent text-white px-4 py-2 rounded-lg font-bold">
                  SÁBADO
                </div>
                <div class="text-2xl font-bold text-leufu-accent">9:00 AM</div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">Ruta Familiar Playa</h3>
              <p class="text-gray-600 mb-4">25km suave para toda la familia. Nivel: Principiante</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-map-marker-alt text-leufu-primary mr-2"></i>
                <span>Punto de encuentro: Plaza de Lebu</span>
              </div>
            </div>

            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-primary text-white px-4 py-2 rounded-lg font-bold">
                  DOM 1
                </div>
                <div class="text-2xl font-bold text-leufu-primary">8:00 AM</div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">Mantención de Senderos</h3>
              <p class="text-gray-600 mb-4">Jornada comunitaria + asado final</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-tools text-leufu-primary mr-2"></i>
                <span>Primer domingo de cada mes</span>
              </div>
            </div>

            <div class="bg-white text-leufu-black rounded-xl p-6 shadow-xl card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="bg-leufu-secondary text-white px-4 py-2 rounded-lg font-bold">
                  22 DIC
                </div>
                <div class="text-2xl font-bold text-leufu-secondary">8:00 AM</div>
              </div>
              <h3 class="text-xl font-montserrat font-bold mb-2">Cierre de Temporada</h3>
              <p class="text-gray-600 mb-4">Ruta especial + celebración del club</p>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-star text-leufu-accent mr-2"></i>
                <span>Evento especial del club</span>
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
              <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070" alt="Vista al mar" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Descenso al Mar</p>
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
              <img src="https://images.unsplash.com/photo-1549391310-10c5e33b6f8e?q=80&w=2070" alt="Competición" />
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
            Da el primer paso y descubre por qué somos más que un club: <strong>somos familia</strong>.
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
            Completa el formulario y sé parte de nuestra familia
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
                  y construimos <strong>amistades que trascienden el ciclismo</strong>. Somos una familia sobre ruedas.
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
