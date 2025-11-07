# 🚴‍♂️ Leufu MTB - Sitio Web Oficial

> Sitio web del Club de Ciclismo Leufu MTB - Lebu, Región del Biobío, Chile

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com/)
[![Hono](https://img.shields.io/badge/Hono-Framework-red)](https://hono.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

## 📋 Descripción

Sitio web profesional para el Club Leufu MTB, construido con tecnologías modernas y optimizado para despliegue en Cloudflare Pages.

**Características principales:**
- 🎨 Diseño personalizado en colores oficiales (negro/rojo)
- 📸 Galería con fotos reales del club
- 📅 Calendario de eventos actualizado
- 🟠 Integración con Strava Club (23 miembros)
- 📝 Formulario de inscripción completo
- 📱 100% responsive (móvil, tablet, desktop)

## 🌐 URLs

- **Sitio en producción:** [Pendiente de desplegar]
- **Strava Club:** https://www.strava.com/clubs/1133016
- **Instagram:** https://www.instagram.com/clubleufumtb/

## 🛠️ Stack Tecnológico

- **Framework:** [Hono](https://hono.dev/) - Ultrarrápido para edge computing
- **Runtime:** Cloudflare Workers
- **Build Tool:** Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (CDN)
- **Deploy:** Cloudflare Pages

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/leufu-mtb-website.git
cd leufu-mtb-website

# Instalar dependencias
npm install

# Desarrollo local
npm run build
npm run dev:sandbox
```

## 🚀 Despliegue

### Desarrollo Local

```bash
# Compilar el proyecto
npm run build

# Iniciar servidor de desarrollo
npm run dev:sandbox

# El sitio estará disponible en http://localhost:3000
```

### Producción (Cloudflare Pages)

```bash
# Desplegar a Cloudflare Pages
npm run deploy:prod
```

**O conectar con GitHub:**
1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pages → Create a project → Connect to Git
3. Selecciona este repositorio
4. Configuración:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

## 📂 Estructura del Proyecto

```
leufu-mtb-website/
├── src/
│   ├── index.tsx          # Aplicación principal
│   └── renderer.tsx       # Layout y configuración
├── public/
│   ├── images/            # Fotos del club
│   │   ├── logo.png       # Logo oficial (556KB)
│   │   ├── hero-equipo.jpg
│   │   ├── equipo.jpg
│   │   ├── nahuelbuta.jpg
│   │   ├── rutas-lebu.jpg
│   │   └── competicion.jpg
│   ├── static/
│   │   └── style.css      # Estilos personalizados
│   └── _routes.json       # Configuración de rutas
├── package.json
├── vite.config.ts
├── wrangler.jsonc         # Config Cloudflare
└── README.md
```

## 🎨 Características del Sitio

### Secciones Principales

- **🏠 Inicio:** Hero con logo, slogan y llamadas a la acción
- **👥 Nosotros:** Historia, misión, valores del club
- **🗺️ Rutas:** Rutas locales de Lebu y expediciones a Nahuelbuta
- **📅 Calendario:** 4 eventos oficiales actualizados
- **📝 Inscripción:** Formulario completo de 7 secciones
- **🟠 Strava:** Integración visual con el club oficial
- **📞 Contacto:** Información de contacto e Instagram

### Eventos Actuales

1. **Salidas Semanales** - Miércoles 18:30 (Lebu)
2. **RAID** - 30 de Noviembre (Laraquete)
3. **LEUFU KID** - 13 de Diciembre (Cerro Amalia)
4. **RAID FECHA FINAL** - 21 de Diciembre (Curanilahue)

## 🖼️ Recursos Multimedia

### Fotos Incluidas (6 archivos)
- Logo oficial (alta resolución)
- Foto hero del equipo
- Foto grupal del equipo
- Expedición Nahuelbuta
- Rutas locales Lebu
- Día de competición

**Tamaño total de imágenes:** ~1.6 MB

## 🔧 Scripts Disponibles

```bash
npm run build          # Compilar para producción
npm run dev            # Servidor de desarrollo Vite
npm run dev:sandbox    # Servidor Wrangler (similar a producción)
npm run deploy         # Desplegar a Cloudflare
npm run deploy:prod    # Desplegar con nombre de proyecto
```

## 🌍 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Móviles iOS/Android

## 📄 Licencia

Este proyecto es propiedad del Club Leufu MTB.

## 👥 Créditos

- **Club:** Leufu MTB
- **Ubicación:** Lebu, Región del Biobío, Chile
- **Slogan:** "Donde el río, el mar y la montaña se unen pedaleando"
- **Miembros Strava:** 23 ciclistas activos

## 📞 Contacto

- **Instagram:** [@clubleufumtb](https://www.instagram.com/clubleufumtb/)
- **Strava Club:** [Leufu MTB](https://www.strava.com/clubs/1133016)
- **Ubicación:** Plaza de Lebu, Región del Biobío

---

**Desarrollado con ❤️ para la comunidad ciclista de Lebu**

🚴‍♂️ ¡Únete a Leufu MTB y pedalea con nosotros! 🚴‍♀️
