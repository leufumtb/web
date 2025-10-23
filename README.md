# Leufu MTB - Sitio Web Oficial

## 🚴‍♂️ Descripción del Proyecto

Sitio web oficial del Club de Ciclismo **Leufu MTB**, ubicado en Lebu, Provincia de Arauco, Chile. Una plataforma moderna y motivadora diseñada para mostrar la esencia del club, sus valores, rutas y comunidad.

### Significado de "Leufu"
**"Leufu"** significa **"Río"** en Mapudungún, en honor al **Río Lebu** que atraviesa nuestra comuna y que, como nosotros, conecta la montaña con el mar.

### Eslogan
> **"Donde el río, el mar y la montaña se unen pedaleando"**

---

## 🌐 URLs del Proyecto

- **Desarrollo (Sandbox)**: https://3000-io3iori8thgdpku06u2kw-c81df28e.sandbox.novita.ai
- **Instagram**: [@clubleufumtb](https://www.instagram.com/clubleufumtb/)
- **Email**: contacto@leufumtb.cl

---

## ✨ Características Implementadas

### Página Principal (Home) ✅
- **Hero Section**: Banner principal con imagen parallax y eslogan motivador
- **Contador de Estadísticas**: Miembros activos, rutas exploradas, eventos y años de historia
- **Sección Valores**: Presentación de los tres pilares fundamentales:
  - 🤝 **Amistad**: Construcción de comunidad y vínculos genuinos
  - 🏆 **Superación**: Desafíos personales y crecimiento continuo
  - 🥇 **Competición**: Apoyo para competidores y aspirantes
- **Terreno Único**: Destacado de los senderos exclusivos que conectan cerro y mar
- **Rutas**: Dos categorías principales:
  - Rutas Locales en Lebu (XC y Ruta)
  - Expediciones a Cordillera de Nahuelbuta (Piedra del Águila)
- **Para Quién es el Club**: Dirigido a principiantes, recreacionales y competitivos
- **Próximos Eventos**: Calendario de actividades semanales y especiales
- **Galería de Imágenes**: Showcasing de momentos épicos del club
- **Llamado a la Acción**: Invitación clara a unirse al club

### Página "Nosotros" ✅
- **Historia del Club**: Origen, significado y evolución
- **Misión y Visión**: Objetivos claros del club
- **Lo Que Nos Define**: Características distintivas y valores
- **Timeline**: Hitos importantes desde 2019 hasta la actualidad
- **Actividades del Club**: 6 categorías de actividades regulares
- **Llamado a la Acción**: Invitación a ser parte de la historia

### Diseño y Experiencia de Usuario ✅
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Paleta de Colores**:
  - Azul Primario: `#1e40af` (confianza, profesionalismo)
  - Verde Secundario: `#059669` (naturaleza, crecimiento)
  - Naranja Acento: `#f59e0b` (energía, motivación)
  - Gris Oscuro: `#1f2937` (elegancia)
  - Gris Claro: `#f3f4f6` (limpieza)
- **Tipografías**:
  - **Montserrat**: Títulos y encabezados (Bold, Semibold)
  - **Roboto**: Texto del cuerpo (Regular, Medium)
- **Animaciones**: FadeIn, SlideIn, Parallax, Hover effects
- **Navegación Sticky**: Menú fijo al hacer scroll
- **Iconografía**: FontAwesome para íconos profesionales

---

## 🎯 Audiencia Objetivo

1. **Principiantes Absolutos**: Personas que desean iniciarse en el ciclismo de montaña o ruta
2. **Recreacionales**: Ciclistas que buscan comunidad, diversión y conexión con la naturaleza
3. **Competitivos**: Deportistas con aspiraciones de participar en carreras locales y regionales

---

## 🏔️ Rutas y Territorio

### Rutas Locales - Lebu
- Senderos técnicos y desafiantes
- Bajadas con vistas al océano Pacífico
- Cross Country (XC) y Ciclismo de Ruta
- Todos los niveles de dificultad

### Cordillera de Nahuelbuta
- Expediciones de mayor exigencia
- Bosques nativos y araucarias milenarias
- Piedra del Águila (icónica)
- XC Avanzado y rutas de altura

### Punto de Venta Único (PVU)
**Senderos exclusivos que conectan directamente el cerro con el mar** - Una característica única en Chile que ofrece paisajes espectaculares para fotografía y carreras memorables.

---

## 📅 Actividades del Club

### Regulares
- **Rutas Semanales**: Sábados 8:00 AM (local) y Domingos 7:00 AM (larga)
- **Punto de Encuentro**: Plaza de Lebu
- **Mantención de Senderos**: Primer domingo de cada mes

### Eventos Especiales
- Participación en carreras XC locales y regionales
- Expediciones a Nahuelbuta
- Talleres técnicos (manejo, mecánica, primeros auxilios)
- Eventos sociales y asados post-ruta

---

## 🛠️ Stack Tecnológico

### Frontend
- **Tailwind CSS**: Framework de utilidades CSS
- **FontAwesome**: Biblioteca de íconos
- **Google Fonts**: Montserrat y Roboto
- **HTML5 Semántico**: Estructura accesible

### Backend
- **Hono Framework**: Framework web ultraligero para Cloudflare Workers
- **TypeScript**: Lenguaje tipado para mayor robustez
- **JSX**: Renderizado de componentes del lado del servidor

### Deployment
- **Cloudflare Pages**: Plataforma edge para despliegue global
- **Vite**: Build tool rápido y moderno
- **Wrangler**: CLI de Cloudflare

### DevOps
- **PM2**: Process manager para Node.js (desarrollo local)
- **Git**: Control de versiones
- **npm**: Gestor de paquetes

---

## 🚀 Instalación y Desarrollo Local

### Prerequisitos
- Node.js 18+ 
- npm o pnpm
- Git

### Pasos

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd webapp

# 2. Instalar dependencias
npm install

# 3. Construir el proyecto
npm run build

# 4. Iniciar servidor de desarrollo (con PM2)
pm2 start ecosystem.config.cjs

# 5. Acceder al sitio
# http://localhost:3000

# 6. Ver logs (sin bloquear terminal)
pm2 logs leufu-mtb --nostream

# 7. Detener servidor
pm2 delete leufu-mtb
```

---

## 📦 Scripts Disponibles

```json
{
  "dev": "vite",                                          // Desarrollo con Vite
  "dev:sandbox": "wrangler pages dev dist --ip 0.0.0.0 --port 3000",  // Desarrollo con Wrangler
  "build": "vite build",                                  // Construir para producción
  "preview": "wrangler pages dev dist",                   // Preview local
  "deploy": "npm run build && wrangler pages deploy dist", // Desplegar a Cloudflare
  "deploy:prod": "npm run build && wrangler pages deploy dist --project-name leufu-mtb",
  "clean-port": "fuser -k 3000/tcp 2>/dev/null || true", // Limpiar puerto 3000
  "test": "curl http://localhost:3000",                   // Test rápido
  "git:commit": "git add . && git commit -m",             // Commit rápido
  "git:status": "git status",                             // Estado de Git
  "git:log": "git log --oneline"                          // Historial Git
}
```

---

## 🎨 Estructura del Proyecto

```
webapp/
├── src/
│   ├── index.tsx           # Aplicación principal Hono (rutas y páginas)
│   └── renderer.tsx        # Configuración del renderizador JSX
├── public/
│   └── static/
│       └── style.css       # Estilos CSS personalizados
├── dist/                   # Build output (generado)
├── .git/                   # Repositorio Git
├── .gitignore              # Archivos ignorados por Git
├── ecosystem.config.cjs    # Configuración PM2
├── wrangler.jsonc          # Configuración Cloudflare
├── vite.config.ts          # Configuración Vite
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración TypeScript
└── README.md               # Este archivo
```

---

## 📊 Arquitectura de Datos

### No se utiliza base de datos actualmente
El sitio es completamente estático con contenido generado en el servidor. No hay almacenamiento de datos de usuarios ni formularios interactivos en esta versión.

### Futuras Mejoras Potenciales
- **Cloudflare D1**: Base de datos SQLite para almacenar eventos, rutas y miembros
- **Cloudflare KV**: Para configuración dinámica
- **Formulario de Contacto**: Integración con email o Telegram

---

## 🎓 Guía de Usuario

### Navegación del Sitio
1. **Inicio**: Página principal con toda la información clave del club
2. **Nosotros**: Historia detallada, misión, visión y timeline
3. **Rutas**: Ancla a sección de rutas en página principal
4. **Eventos**: Ancla a sección de eventos próximos
5. **Contacto**: Enlaces a Instagram y email

### Llamados a la Acción (CTAs)
- **Únete al Club**: Botón en Hero que lleva a página "Nosotros"
- **Explora Rutas**: Botón que lleva a sección de rutas
- **Síguenos en Instagram**: Link directo al perfil oficial
- **Contáctanos**: Email directo para consultas

---

## 🚀 Estado de Despliegue

### Desarrollo Local ✅
- **Status**: Activo
- **URL**: http://localhost:3000
- **Process Manager**: PM2

### Sandbox (Desarrollo) ✅
- **Status**: Activo
- **URL**: https://3000-io3iori8thgdpku06u2kw-c81df28e.sandbox.novita.ai
- **Plataforma**: Cloudflare Pages Dev

### Producción ⏳
- **Status**: Pendiente
- **Plataforma**: Cloudflare Pages
- **Comando**: `npm run deploy:prod`

---

## 📝 Próximos Pasos Recomendados

### Funcionalidades Pendientes
1. **Formulario de Contacto**: Integración con servicio de email o Telegram
2. **Sección de Galería Dinámica**: Integrar con Instagram API para mostrar últimas fotos
3. **Calendario de Eventos**: Sistema dinámico de eventos con fechas actualizables
4. **Blog/Noticias**: Sección para compartir crónicas de rutas y eventos
5. **Sistema de Registro de Miembros**: Formulario para que nuevos ciclistas se inscriban
6. **Mapa Interactivo**: Mostrar ubicaciones de rutas y puntos de encuentro
7. **Página de Sponsors**: Reconocimiento a colaboradores y patrocinadores
8. **Tienda Online**: Venta de merchandising del club (opcional)
9. **Menú móvil funcional**: Implementar hamburger menu interactivo

### Mejoras de SEO
- [ ] Implementar meta tags Open Graph para redes sociales
- [ ] Añadir Schema.org markup para organization y events
- [ ] Crear sitemap.xml
- [ ] Configurar robots.txt
- [ ] Optimizar imágenes con lazy loading
- [ ] Añadir analytics (Cloudflare Web Analytics o Google Analytics)

### Optimizaciones de Performance
- [ ] Lazy loading de imágenes de galería
- [ ] Minificación de CSS inline
- [ ] Implementar Service Worker para PWA
- [ ] Optimizar carga de fuentes con font-display: swap

---

## 🤝 Contribuciones

Este proyecto está en desarrollo activo. Si eres miembro del club y deseas contribuir:

1. **Contenido**: Propón cambios de texto o nuevas secciones
2. **Fotografías**: Comparte fotos del club para la galería
3. **Funcionalidades**: Sugiere nuevas características
4. **Testing**: Reporta errores o problemas de usabilidad

Contacto: contacto@leufumtb.cl

---

## 📄 Licencia

© 2024 Leufu MTB. Todos los derechos reservados.

---

## 💪 Valores del Club

- **Amistad**: Creamos vínculos genuinos más allá del ciclismo
- **Superación**: Cada subida es un desafío, cada kilómetro una victoria
- **Competición**: Preparación y apoyo para quienes buscan el podio

---

## 📍 Ubicación

**Lebu, Provincia de Arauco, Región del Biobío, Chile**

Punto de encuentro: **Plaza de Lebu**  
Horarios:
- Sábados 8:00 AM - Ruta Local
- Domingos 7:00 AM - Ruta Larga

---

## 📱 Redes Sociales

- Instagram: [@clubleufumtb](https://www.instagram.com/clubleufumtb/)
- Facebook: [Club Leufu MTB](https://www.facebook.com/clubleufumtb)
- Email: contacto@leufumtb.cl

---

**Hecho con ❤️ en Lebu, Chile**

*"Donde el río, el mar y la montaña se unen pedaleando"*
