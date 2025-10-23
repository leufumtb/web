import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Componente de Navegación
const Navigation = () => (
  <nav class="nav-sticky bg-leufu-dark text-white shadow-lg" id="navbar">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <i class="fas fa-mountain text-leufu-accent text-3xl"></i>
          <div>
            <h1 class="text-2xl font-montserrat font-bold">Leufu MTB</h1>
            <p class="text-xs text-gray-300">Lebu, Arauco - Chile</p>
          </div>
        </div>
        <div class="hidden md:flex space-x-6">
          <a href="/" class="hover:text-leufu-accent font-medium">Inicio</a>
          <a href="/nosotros" class="hover:text-leufu-accent font-medium">Nosotros</a>
          <a href="#rutas" class="hover:text-leufu-accent font-medium">Rutas</a>
          <a href="#eventos" class="hover:text-leufu-accent font-medium">Eventos</a>
          <a href="#contacto" class="hover:text-leufu-accent font-medium">Contacto</a>
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
  <footer class="bg-leufu-dark text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <i class="fas fa-mountain text-leufu-accent text-3xl"></i>
            <h3 class="text-2xl font-montserrat font-bold">Leufu MTB</h3>
          </div>
          <p class="text-gray-300 mb-4">
            Donde el río, el mar y la montaña se unen pedaleando.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/clubleufumtb/" target="_blank" class="text-2xl hover:text-leufu-accent">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/clubleufumtb" target="_blank" class="text-2xl hover:text-leufu-accent">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="mailto:contacto@leufumtb.cl" class="text-2xl hover:text-leufu-accent">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-xl font-montserrat font-bold mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li><a href="/" class="text-gray-300 hover:text-leufu-accent">Inicio</a></li>
            <li><a href="/nosotros" class="text-gray-300 hover:text-leufu-accent">Nosotros</a></li>
            <li><a href="#rutas" class="text-gray-300 hover:text-leufu-accent">Rutas</a></li>
            <li><a href="#eventos" class="text-gray-300 hover:text-leufu-accent">Eventos</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-xl font-montserrat font-bold mb-4">Contacto</h4>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center space-x-2">
              <i class="fas fa-map-marker-alt text-leufu-accent"></i>
              <span>Lebu, Provincia de Arauco, Chile</span>
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
        <p class="text-sm mt-2">Hecho con <i class="fas fa-heart text-red-500"></i> en Lebu, Chile</p>
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
      <section class="hero-parallax relative h-screen flex items-center justify-center text-white" style="background-image: url('https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=2070');">
        <div class="hero-overlay absolute inset-0"></div>
        <div class="relative z-10 text-center px-4 animate-fadeInUp">
          <h1 class="text-5xl md:text-7xl font-montserrat font-bold mb-6">
            Leufu MTB
          </h1>
          <p class="text-xl md:text-3xl font-light mb-4 italic">
            "Donde el río, el mar y la montaña se unen pedaleando"
          </p>
          <p class="text-lg md:text-xl mb-8">
            Club de Ciclismo - Lebu, Arauco, Chile
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/nosotros" class="btn-primary px-8 py-4 rounded-full text-lg font-semibold inline-block">
              <i class="fas fa-users mr-2"></i>
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
      <section class="py-16 bg-gradient-to-r from-leufu-primary to-leufu-secondary text-white">
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
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-dark mb-4">
              Nuestros Valores
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              En Leufu MTB, nos mueven tres pilares fundamentales que definen nuestra esencia como club
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="card-hover bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg text-center">
              <div class="bg-leufu-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-handshake text-4xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-4">Amistad</h3>
              <p class="text-gray-700 leading-relaxed">
                Creamos vínculos genuinos más allá del ciclismo. Cada ruta es una oportunidad para conocernos, 
                apoyarnos y construir una familia sobre ruedas.
              </p>
            </div>

            <div class="card-hover bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg text-center">
              <div class="bg-leufu-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-trophy text-4xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-4">Superación</h3>
              <p class="text-gray-700 leading-relaxed">
                Cada subida es un desafío, cada kilómetro una victoria personal. Te acompañamos a superar 
                tus límites y alcanzar metas que nunca imaginaste.
              </p>
            </div>

            <div class="card-hover bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg text-center">
              <div class="bg-leufu-accent text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-medal text-4xl"></i>
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-4">Competición</h3>
              <p class="text-gray-700 leading-relaxed">
                Para quienes buscan más, ofrecemos preparación y apoyo en carreras locales y regionales. 
                Tu podio te espera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Terreno Único */}
      <section class="py-20 bg-gradient-to-br from-leufu-dark to-gray-800 text-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="animate-slideInLeft">
              <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Un Terreno Único en Chile
              </h2>
              <p class="text-lg leading-relaxed mb-6">
                Lebu nos regala algo que pocos lugares en Chile pueden ofrecer: <strong class="text-leufu-accent">senderos 
                que conectan la montaña directamente con el mar</strong>. Desde las alturas de nuestros cerros hasta las 
                playas del Pacífico, cada ruta es un viaje épico.
              </p>
              <p class="text-lg leading-relaxed mb-6">
                Nuestros senderos exclusivos son el corazón del club. Trabajamos en su mantención constante para 
                garantizar experiencias seguras y memorables. <strong class="text-leufu-accent">Paisajes que 
                parecen sacados de una postal</strong> acompañan cada pedalada.
              </p>
              <div class="flex flex-wrap gap-4">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-check-circle text-leufu-accent text-2xl"></i>
                  <span>Senderos exclusivos</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="fas fa-check-circle text-leufu-accent text-2xl"></i>
                  <span>Cerro + Mar</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="fas fa-check-circle text-leufu-accent text-2xl"></i>
                  <span>Vistas únicas</span>
                </div>
              </div>
            </div>
            <div class="animate-slideInRight">
              <img 
                src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2070" 
                alt="Vista al mar desde senderos de Lebu"
                class="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Rutas */}
      <section id="rutas" class="py-20 bg-leufu-light">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 animate-fadeInUp">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-dark mb-4">
              Nuestras Rutas
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde Lebu hasta la majestuosa Cordillera de Nahuelbuta
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?q=80&w=2070" 
                alt="Rutas en Lebu"
                class="w-full h-64 object-cover"
              />
              <div class="p-8">
                <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-4">
                  <i class="fas fa-map-marked-alt text-leufu-primary mr-2"></i>
                  Rutas Locales - Lebu
                </h3>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Nuestro territorio principal. Senderos técnicos, subidas desafiantes y bajadas con vistas 
                  al océano. Perfectos para entrenar entre semana y descubrir rincones secretos de nuestra comuna.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i class="fas fa-mountain mr-1"></i> Cross Country
                  </span>
                  <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i class="fas fa-road mr-1"></i> Ruta
                  </span>
                  <span class="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i class="fas fa-star mr-1"></i> Todos los niveles
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2141" 
                alt="Cordillera de Nahuelbuta"
                class="w-full h-64 object-cover"
              />
              <div class="p-8">
                <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-4">
                  <i class="fas fa-mountain text-leufu-secondary mr-2"></i>
                  Cordillera de Nahuelbuta
                </h3>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Expediciones épicas a la Cordillera de Nahuelbuta, especialmente a la icónica <strong>Piedra del Águila</strong>. 
                  Rutas de mayor exigencia con bosques nativos, araucarias milenarias y paisajes de altura.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i class="fas fa-mountain mr-1"></i> XC Avanzado
                  </span>
                  <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i class="fas fa-hiking mr-1"></i> Expedición
                  </span>
                  <span class="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i class="fas fa-fire mr-1"></i> Nivel Alto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Para Quién es el Club */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 animate-fadeInUp">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-dark mb-4">
              ¿Para Quién es Leufu MTB?
            </h2>
            <div class="section-divider mb-6"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="mb-8">
                <div class="flex items-start space-x-4 mb-6">
                  <div class="bg-leufu-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-bicycle text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-2">
                      ¿Quieres Iniciarte en el Ciclismo?
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                      Este es tu lugar. No importa si nunca has pedaleado en montaña o si apenas estás pensando 
                      en comprar tu primera bici. <strong>Te enseñamos desde cero</strong>, con paciencia, técnica 
                      y rutas adaptadas a principiantes.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-8">
                <div class="flex items-start space-x-4 mb-6">
                  <div class="bg-leufu-secondary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-users text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-2">
                      ¿Buscas Comunidad y Diversión?
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                      Más que un club, somos una familia. Salidas recreacionales, eventos sociales, asados post-ruta 
                      y aventuras que crean amistades para toda la vida. <strong>Pedalear juntos nos hace más fuertes</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-8">
                <div class="flex items-start space-x-4 mb-6">
                  <div class="bg-leufu-accent text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-flag-checkered text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-2">
                      ¿Tienes Metas Competitivas?
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                      Si tu objetivo es competir, también estás en el lugar correcto. Participamos en carreras 
                      locales y regionales, con entrenamientos específicos y apoyo técnico. <strong>Tu próximo 
                      podio puede estar más cerca de lo que crees</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" 
                alt="Grupo de ciclistas"
                class="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Eventos Próximos */}
      <section id="eventos" class="py-20 bg-gradient-to-br from-leufu-primary to-leufu-secondary text-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Próximos Eventos
            </h2>
            <div class="section-divider mb-6 bg-white"></div>
            <p class="text-xl max-w-3xl mx-auto">
              Únete a nuestras actividades semanales y eventos especiales
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white text-leufu-dark rounded-2xl p-8 card-hover">
              <div class="text-center mb-6">
                <div class="bg-leufu-accent text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-calendar-day text-3xl"></i>
                </div>
                <h3 class="text-2xl font-montserrat font-bold mb-2">Rutas Semanales</h3>
                <p class="text-gray-600">Todos los Sábados y Domingos</p>
              </div>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center space-x-2">
                  <i class="fas fa-check text-leufu-secondary"></i>
                  <span>Sábados 8:00 AM - Ruta Local</span>
                </li>
                <li class="flex items-center space-x-2">
                  <i class="fas fa-check text-leufu-secondary"></i>
                  <span>Domingos 7:00 AM - Ruta Larga</span>
                </li>
                <li class="flex items-center space-x-2">
                  <i class="fas fa-check text-leufu-secondary"></i>
                  <span>Punto de encuentro: Plaza de Lebu</span>
                </li>
              </ul>
            </div>

            <div class="bg-white text-leufu-dark rounded-2xl p-8 card-hover">
              <div class="text-center mb-6">
                <div class="bg-leufu-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-trophy text-3xl"></i>
                </div>
                <h3 class="text-2xl font-montserrat font-bold mb-2">Carreras 2024</h3>
                <p class="text-gray-600">Calendario Competitivo</p>
              </div>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center space-x-2">
                  <i class="fas fa-medal text-leufu-accent"></i>
                  <span>XC Lebu - Marzo 2024</span>
                </li>
                <li class="flex items-center space-x-2">
                  <i class="fas fa-medal text-leufu-accent"></i>
                  <span>Desafío Nahuelbuta - Junio</span>
                </li>
                <li class="flex items-center space-x-2">
                  <i class="fas fa-medal text-leufu-accent"></i>
                  <span>Enduro Arauco - Octubre</span>
                </li>
              </ul>
            </div>

            <div class="bg-white text-leufu-dark rounded-2xl p-8 card-hover">
              <div class="text-center mb-6">
                <div class="bg-leufu-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-tools text-3xl"></i>
                </div>
                <h3 class="text-2xl font-montserrat font-bold mb-2">Mantención Senderos</h3>
                <p class="text-gray-600">Trabajo Comunitario</p>
              </div>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center space-x-2">
                  <i class="fas fa-hard-hat text-leufu-primary"></i>
                  <span>Primer domingo de cada mes</span>
                </li>
                <li class="flex items-center space-x-2">
                  <i class="fas fa-hard-hat text-leufu-primary"></i>
                  <span>Cuidamos nuestros trails</span>
                </li>
                <li class="flex items-center space-x-2">
                  <i class="fas fa-hard-hat text-leufu-primary"></i>
                  <span>Finalizamos con asado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section class="py-20 bg-leufu-light">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-leufu-dark mb-4">
              Galería
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Momentos que capturan la esencia de Leufu MTB
            </p>
          </div>

          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070" alt="MTB en sendero" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Senderos Técnicos</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070" alt="Vista al mar" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Descenso al Mar</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1606641954146-7b20c4816595?q=80&w=2070" alt="Grupo ciclistas" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Nuestra Familia</p>
              </div>
            </div>
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1563624438-436a3b710bbb?q=80&w=2070" alt="MTB bosque" />
              <div class="gallery-overlay">
                <p class="text-white font-semibold">Bosque Nativo</p>
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
      <section id="contacto" class="py-20 bg-gradient-to-r from-leufu-primary via-leufu-secondary to-leufu-primary text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            ¿Listo para Unirte a la Aventura?
          </h2>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            No importa tu nivel, tu edad o tu experiencia. En Leufu MTB hay un lugar para ti. 
            Da el primer paso y descubre por qué somos más que un club: <strong>somos familia</strong>.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/clubleufumtb/" target="_blank" class="bg-white text-leufu-primary px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-gray-100">
              <i class="fab fa-instagram mr-2"></i>
              Síguenos en Instagram
            </a>
            <a href="mailto:contacto@leufumtb.cl" class="bg-leufu-accent text-white px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-amber-600">
              <i class="fas fa-envelope mr-2"></i>
              Contáctanos
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

// Página Nosotros
app.get('/nosotros', (c) => {
  return c.render(
    <div>
      <Navigation />
      
      {/* Hero Nosotros */}
      <section class="hero-parallax relative h-96 flex items-center justify-center text-white" style="background-image: url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070');">
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
              <h2 class="text-4xl font-montserrat font-bold text-leufu-dark mb-4">
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
                <strong class="text-leufu-secondary">una comunidad organizada, inclusiva y con propósito</strong>. Hoy, varios 
                años después, Leufu MTB es uno de los clubes de ciclismo más activos de la Provincia de Arauco.
              </p>

              <div class="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl my-8">
                <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-4">
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
            <div class="bg-white rounded-2xl p-8 shadow-xl">
              <div class="flex items-center mb-6">
                <div class="bg-leufu-primary text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-bullseye text-3xl"></i>
                </div>
                <h3 class="text-3xl font-montserrat font-bold text-leufu-dark">Nuestra Misión</h3>
              </div>
              <p class="text-gray-700 leading-relaxed text-lg">
                Fomentar el ciclismo en todas sus formas en la comuna de Lebu y la Provincia de Arauco, 
                <strong class="text-leufu-primary"> promoviendo el deporte</strong>, la vida saludable, el cuidado del medio 
                ambiente y la construcción de comunidad. Queremos que cada persona, sin importar su nivel, 
                pueda descubrir la magia de pedalear en nuestros senderos únicos.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl">
              <div class="flex items-center mb-6">
                <div class="bg-leufu-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-eye text-3xl"></i>
                </div>
                <h3 class="text-3xl font-montserrat font-bold text-leufu-dark">Nuestra Visión</h3>
              </div>
              <p class="text-gray-700 leading-relaxed text-lg">
                Convertirnos en el <strong class="text-leufu-secondary">club de ciclismo de referencia en la Provincia de Arauco</strong>, 
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
            <h2 class="text-4xl font-montserrat font-bold text-leufu-dark mb-4">
              Lo Que Nos Define
            </h2>
            <div class="section-divider mb-6"></div>
          </div>

          <div class="max-w-5xl mx-auto space-y-8">
            <div class="flex items-start space-x-6 bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl">
              <div class="bg-leufu-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-mountain text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-2">
                  Territorio Único
                </h3>
                <p class="text-gray-700 leading-relaxed text-lg">
                  Nuestros senderos que conectan el cerro con el mar son <strong>únicos en Chile</strong>. Trabajamos 
                  constantemente en su mantención y mejora, garantizando experiencias seguras y memorables.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-6 bg-gradient-to-r from-green-50 to-transparent p-6 rounded-xl">
              <div class="bg-leufu-secondary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-users text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-2">
                  Comunidad Inclusiva
                </h3>
                <p class="text-gray-700 leading-relaxed text-lg">
                  Desde principiantes absolutos hasta competidores experimentados, <strong>todos tienen un lugar en Leufu MTB</strong>. 
                  Creemos en el ciclismo como herramienta de integración y desarrollo personal.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-6 bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-xl">
              <div class="bg-leufu-accent text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-heart text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-2">
                  Más que Deporte
                </h3>
                <p class="text-gray-700 leading-relaxed text-lg">
                  No solo pedaleamos juntos, también compartimos asados, celebramos cumpleaños, apoyamos en momentos difíciles 
                  y construimos <strong>amistades que trascienden el ciclismo</strong>. Somos una familia sobre ruedas.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-6 bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-xl">
              <div class="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-tree text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-montserrat font-bold text-leufu-dark mb-2">
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
      <section class="py-20 bg-gradient-to-br from-leufu-dark to-gray-800 text-white">
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
              <div class="bg-white text-leufu-dark p-6 rounded-xl">
                <h3 class="text-2xl font-bold mb-2">2019 - Los Inicios</h3>
                <p class="text-gray-700">
                  Un grupo de amigos decide formalizar las salidas y crear el club. Primeras rutas organizadas 
                  y trabajo inicial en senderos locales.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-white text-leufu-dark p-6 rounded-xl">
                <h3 class="text-2xl font-bold mb-2">2020 - Crecimiento y Comunidad</h3>
                <p class="text-gray-700">
                  El club crece a más de 30 miembros activos. Primera participación organizada en carreras regionales. 
                  Inicio de mantención regular de senderos.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-white text-leufu-dark p-6 rounded-xl">
                <h3 class="text-2xl font-bold mb-2">2021-2022 - Consolidación</h3>
                <p class="text-gray-700">
                  Establecimiento de rutas semanales regulares. Primeras expediciones a Cordillera de Nahuelbuta. 
                  Creación de categorías para principiantes y avanzados.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-white text-leufu-dark p-6 rounded-xl">
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
            <h2 class="text-4xl font-montserrat font-bold text-leufu-dark mb-4">
              Lo Que Hacemos
            </h2>
            <div class="section-divider mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestras actividades regulares y eventos especiales
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-center mb-4">
                <i class="fas fa-route text-leufu-primary text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-dark">Rutas Semanales</h3>
              </div>
              <p class="text-gray-700 text-center">
                Salidas organizadas todos los fines de semana con diferentes niveles de dificultad.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-center mb-4">
                <i class="fas fa-trophy text-leufu-accent text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-dark">Participación en Carreras</h3>
              </div>
              <p class="text-gray-700 text-center">
                Representamos a Lebu en competencias XC y ruta a nivel regional.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-center mb-4">
                <i class="fas fa-tools text-leufu-secondary text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-dark">Mantención de Senderos</h3>
              </div>
              <p class="text-gray-700 text-center">
                Jornadas mensuales de trabajo comunitario para mantener nuestros trails.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-center mb-4">
                <i class="fas fa-chalkboard-teacher text-purple-600 text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-dark">Talleres Técnicos</h3>
              </div>
              <p class="text-gray-700 text-center">
                Clínicas de técnica de manejo, mecánica básica y primeros auxilios.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-center mb-4">
                <i class="fas fa-users text-pink-600 text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-dark">Eventos Sociales</h3>
              </div>
              <p class="text-gray-700 text-center">
                Asados, celebraciones y actividades que fortalecen nuestra comunidad.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-center mb-4">
                <i class="fas fa-mountain text-indigo-600 text-5xl mb-4"></i>
                <h3 class="text-xl font-bold text-leufu-dark">Expediciones Especiales</h3>
              </div>
              <p class="text-gray-700 text-center">
                Viajes a Nahuelbuta y otros destinos para vivir aventuras épicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción Final */}
      <section class="py-20 bg-gradient-to-r from-leufu-primary to-leufu-secondary text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Sé Parte de Nuestra Historia
          </h2>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cada miembro de Leufu MTB escribe un capítulo de nuestra historia. 
            <strong>El tuyo puede comenzar hoy</strong>.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/clubleufumtb/" target="_blank" class="bg-white text-leufu-primary px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-gray-100">
              <i class="fab fa-instagram mr-2"></i>
              Contáctanos por Instagram
            </a>
            <a href="mailto:contacto@leufumtb.cl" class="bg-leufu-accent text-white px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-amber-600">
              <i class="fas fa-envelope mr-2"></i>
              Escríbenos un Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
})

export default app
