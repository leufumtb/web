# 📦 Instrucciones para Subir Leufu MTB a GitHub

## 🔗 **ENLACE DE DESCARGA DEL PROYECTO:**

**URL:** https://page.gensparksite.com/project_backups/leufu-mtb-completo.tar.gz

**Tamaño:** 3.3 MB (comprimido)

---

## 📋 **OPCIÓN 1: SUBIR A GITHUB DESDE TU COMPUTADORA**

### **Paso 1: Descargar el Proyecto**

1. Haz clic en el enlace de arriba
2. Se descargará un archivo llamado `leufu-mtb-completo.tar.gz`
3. Guarda el archivo en tu computadora

### **Paso 2: Descomprimir el Archivo**

**En Windows:**
- Descarga [7-Zip](https://www.7-zip.org/) si no lo tienes
- Click derecho en el archivo → 7-Zip → Extraer aquí
- Se creará una carpeta `webapp/`

**En Mac/Linux:**
```bash
tar -xzf leufu-mtb-completo.tar.gz
cd webapp
```

### **Paso 3: Crear Repositorio en GitHub**

1. Ve a https://github.com
2. Click en "New repository" (botón verde)
3. **Nombre sugerido:** `leufu-mtb-website`
4. **Descripción:** "Sitio web oficial del Club Leufu MTB - Lebu, Chile"
5. Selecciona "Public" o "Private"
6. **NO** marques "Add a README file"
7. Click "Create repository"

### **Paso 4: Subir los Archivos**

**Opción A - Interfaz Web de GitHub (Más Fácil):**

1. En la página del repositorio nuevo, click "uploading an existing file"
2. Arrastra todos los archivos de la carpeta `webapp/` (NO la carpeta, solo su contenido)
3. Escribe un mensaje: "Initial commit - Sitio web Leufu MTB completo"
4. Click "Commit changes"

**Opción B - Línea de Comandos (Avanzado):**

```bash
cd webapp

# Inicializar git
git init
git add .
git commit -m "Initial commit - Sitio web Leufu MTB completo"

# Conectar con GitHub (reemplaza USUARIO y REPOSITORIO)
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git branch -M main
git push -u origin main
```

---

## 📋 **OPCIÓN 2: DAR ACCESO A ALGUIEN PARA QUE LO SUBA**

### **Compartir el enlace de descarga:**

Simplemente envía este enlace a la persona encargada:

```
https://page.gensparksite.com/project_backups/leufu-mtb-completo.tar.gz
```

### **Información que necesita:**

1. **Descomprimir el archivo**
2. **Crear repositorio en GitHub** con el nombre que prefieran
3. **Subir los archivos** usando cualquiera de los métodos anteriores

---

## 📋 **OPCIÓN 3: YO TE AYUDO CON MI ACCESO (SI TIENES GITHUB CONFIGURADO)**

Si me das acceso a un repositorio GitHub:

1. Crea un repositorio vacío en GitHub
2. Dame el nombre de usuario y nombre del repositorio
3. Yo subo todo automáticamente

---

## 📂 **ESTRUCTURA DEL PROYECTO:**

```
webapp/
├── src/
│   ├── index.tsx          # Código principal del sitio
│   └── renderer.tsx       # Layout y configuración
├── public/
│   ├── images/            # Fotos del club (6 archivos)
│   │   ├── logo.png       # Logo oficial (556KB)
│   │   ├── hero-equipo.jpg
│   │   ├── equipo.jpg
│   │   ├── nahuelbuta.jpg
│   │   ├── rutas-lebu.jpg
│   │   └── competicion.jpg
│   ├── static/
│   │   └── style.css      # Estilos personalizados
│   └── _routes.json       # Configuración de rutas
├── package.json           # Dependencias del proyecto
├── vite.config.ts         # Configuración de Vite
├── wrangler.jsonc         # Configuración Cloudflare
├── tsconfig.json          # Configuración TypeScript
├── ecosystem.config.cjs   # Configuración PM2 (desarrollo)
├── README.md              # Documentación
├── GUIA_FOTOS.md          # Guía de fotos
└── MAPA_FOTOS.md          # Mapa de ubicaciones de fotos
```

---

## ✅ **DESPUÉS DE SUBIR A GITHUB:**

### **Verificar que todo se subió correctamente:**

1. Entra al repositorio en GitHub
2. Deberías ver todos los archivos listados arriba
3. Verifica que la carpeta `public/images/` tenga 6 fotos

### **Próximo paso - Desplegar en Cloudflare Pages:**

Una vez en GitHub, puedes conectar el repositorio con Cloudflare Pages:

1. Ve a https://dash.cloudflare.com
2. Pages → Create a project → Connect to Git
3. Selecciona tu repositorio `leufu-mtb-website`
4. Configuración de build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click "Save and Deploy"

---

## 🆘 **¿NECESITAS AYUDA?**

Si tienes problemas con cualquier paso, puedo:

1. ✅ Crear un archivo ZIP en lugar de TAR.GZ (más fácil en Windows)
2. ✅ Darte comandos específicos para tu caso
3. ✅ Ayudarte a configurar Git si no lo tienes instalado
4. ✅ Subirlo directamente si me das acceso al repositorio

---

## 📝 **NOTAS IMPORTANTES:**

- ⚠️ El archivo **NO incluye** `node_modules` (se instalan con `npm install`)
- ⚠️ El archivo **NO incluye** `.git` (se crea nuevo en el destino)
- ⚠️ El archivo **NO incluye** `dist` (se genera con `npm run build`)
- ✅ **SÍ incluye** todas las fotos del club y configuraciones
- ✅ **Tamaño total:** 3.3 MB comprimido, ~6 MB descomprimido

---

## 🎯 **CONTENIDO DEL SITIO:**

- ✅ Diseño completo negro/rojo (colores oficiales)
- ✅ Logo oficial alta calidad (977x1024px)
- ✅ 6 fotos reales del club
- ✅ Calendario con 4 eventos actualizados
- ✅ Integración visual de Strava (23 miembros)
- ✅ Formulario de inscripción completo
- ✅ Secciones: Inicio, Nosotros, Rutas, Calendario, Contacto
- ✅ Responsive (móvil, tablet, desktop)

---

## 🚀 **COMANDOS ÚTILES DESPUÉS DE CLONAR:**

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run build
npm run dev:sandbox

# Desplegar a producción
npm run deploy:prod
```

---

**¿Con cuál opción te gustaría continuar?** 🤔
