# 🗺️ Mapa de Fotos - Dónde Aparece Cada Imagen

## 📍 UBICACIONES EXACTAS EN EL CÓDIGO

### **1. LOGO DEL CLUB** (`/images/logo.png`)

#### Navegación (Header) - Todas las páginas
```
Archivo: src/index.tsx
Línea: ~14

<img src="/images/logo.png" 
     alt="Leufu MTB Logo" 
     class="h-20 w-20 object-contain" />

📝 Tamaño: 20x20 (80px)
📝 Aparece: Esquina superior izquierda
```

#### Hero Página Principal
```
Archivo: src/index.tsx
Línea: ~110

<img src="/images/logo.png" 
     alt="Leufu MTB" 
     class="mx-auto mb-6 h-40 w-40 md:h-48 md:w-48 animate-fadeIn drop-shadow-2xl" />

📝 Tamaño: 40x40 móvil, 48x48 desktop (160px-192px)
📝 Aparece: Centro del hero principal, grande y prominente
```

#### Footer - Todas las páginas
```
Archivo: src/index.tsx
Línea: ~43

<img src="/images/logo.png" 
     alt="Leufu MTB" 
     class="h-12 w-12" />

📝 Tamaño: 12x12 (48px)
📝 Aparece: Footer, sección izquierda
```

#### Formulario de Inscripción
```
Archivo: src/index.tsx
Línea: ~640

<img src="/images/logo.png" 
     alt="Leufu MTB" 
     class="h-24 w-24 mx-auto mb-4" />

📝 Tamaño: 24x24 (96px)
📝 Aparece: Encabezado del formulario
```

---

### **2. FOTO DEL EQUIPO** (`/images/equipo.jpg`)

#### Sección "Nuestro Equipo" - Página Principal
```
Archivo: src/index.tsx
Línea: ~245

<img src="/images/equipo.jpg" 
     alt="Equipo Leufu MTB"
     class="rounded-2xl shadow-2xl border-4 border-leufu-accent" />

📝 Ubicación: Sección "Nuestro Equipo"
📝 Tamaño: Grande, con borde rojo
```

#### Galería - Página Principal
```
Archivo: src/index.tsx
Línea: ~557

<img src="/images/equipo.jpg" 
     alt="Equipo Leufu MTB" />

📝 Ubicación: Tercera foto de la galería
📝 Título: "Nuestra Familia"
```

#### Hero Página "Nosotros"
```
Archivo: src/index.tsx
Línea: ~892

<section style="background-image: url('/images/equipo.jpg');">

📝 Ubicación: Fondo del hero en página "Nosotros"
📝 Efecto: Parallax con overlay oscuro
```

---

### **3. FOTOS EXTERNAS ACTUALES** (De Unsplash - Para Reemplazar)

#### Hero Principal - Fondo
```
Archivo: src/index.tsx
Línea: ~107

ACTUAL:
background-image: url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070')

PARA REEMPLAZAR CON:
background-image: url('/images/hero-principal.jpg')

📝 Descripción: Foto principal de fondo del sitio
📝 Sugerencia: Grupo de ciclistas en ruta espectacular
📝 Tamaño ideal: 1920x1080px
```

#### Sección Rutas - Rutas Locales Lebu
```
Archivo: src/index.tsx
Línea: ~276

ACTUAL:
src="https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?q=80&w=2070"

PARA REEMPLAZAR CON:
src="/images/ruta-local.jpg"

📝 Descripción: Foto de rutas locales en Lebu
📝 Sugerencia: MTB en senderos de Lebu
📝 Tamaño ideal: 1200x800px
```

#### Sección Rutas - Cordillera Nahuelbuta
```
Archivo: src/index.tsx
Línea: ~298

ACTUAL:
src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2141"

PARA REEMPLAZAR CON:
src="/images/nahuelbuta.jpg"

📝 Descripción: Foto de expedición a Nahuelbuta
📝 Sugerencia: Paisaje de Nahuelbuta o Piedra del Águila
📝 Tamaño ideal: 1200x800px
```

#### Sección "Un Terreno Único"
```
Archivo: src/index.tsx
Línea: ~262

ACTUAL:
src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2070"

PARA REEMPLAZAR CON:
src="/images/vista-mar.jpg"

📝 Descripción: Vista al mar desde senderos
📝 Sugerencia: Foto de senderos con océano de fondo
📝 Tamaño ideal: 1200x800px
```

#### Galería - 6 Fotos
```
Archivo: src/index.tsx
Líneas: ~546-572

FOTO 1:
ACTUAL: https://images.unsplash.com/photo-1558618666-fcd25c85cd64
REEMPLAZAR: /images/galeria-1.jpg
TÍTULO: "Senderos Técnicos"

FOTO 2:
ACTUAL: https://images.unsplash.com/photo-1571068316344-75bc76f77890
REEMPLAZAR: /images/galeria-2.jpg
TÍTULO: "Descenso al Mar"

FOTO 3:
ACTUAL: /images/equipo.jpg (YA ES TUYA ✅)
TÍTULO: "Nuestra Familia"

FOTO 4:
ACTUAL: https://images.unsplash.com/photo-1563624438-436a3b710bbb
REEMPLAZAR: /images/galeria-4.jpg
TÍTULO: "Bosque Nativo"

FOTO 5:
ACTUAL: https://images.unsplash.com/photo-1549391310-10c5e33b6f8e
REEMPLAZAR: /images/galeria-5.jpg
TÍTULO: "Día de Carrera"

FOTO 6:
ACTUAL: https://images.unsplash.com/photo-1541625602330-2277a4c46182
REEMPLAZAR: /images/galeria-6.jpg
TÍTULO: "Vistas Épicas"

📝 Tamaño ideal: 800x600px cada una
```

---

## 🎯 RESUMEN DE FOTOS NECESARIAS

### **Fotos que YA TIENES ✅**
```
✅ /images/logo.png       (Logo oficial)
✅ /images/equipo.jpg     (Foto del equipo)
```

### **Fotos que PUEDES AGREGAR 📸**
```
📸 /images/hero-principal.jpg    (Hero principal - PRIORIDAD ALTA)
📸 /images/ruta-local.jpg        (Rutas locales Lebu)
📸 /images/nahuelbuta.jpg        (Cordillera de Nahuelbuta)
📸 /images/vista-mar.jpg         (Vista al mar)
📸 /images/galeria-1.jpg         (Senderos técnicos)
📸 /images/galeria-2.jpg         (Descenso al mar)
📸 /images/galeria-4.jpg         (Bosque nativo)
📸 /images/galeria-5.jpg         (Día de carrera)
📸 /images/galeria-6.jpg         (Vistas épicas)
```

---

## 🚀 PASOS PARA AGREGAR TUS FOTOS

### **OPCIÓN 1: Dame las URLs** (MÁS FÁCIL)
```
1. Sube tus fotos a algún servicio (como hiciste con el logo)
2. Dame las URLs en este formato:

Hero principal: https://url-de-tu-foto.com/foto1.jpg
Ruta local: https://url-de-tu-foto.com/foto2.jpg
Nahuelbuta: https://url-de-tu-foto.com/foto3.jpg
...

3. Yo las descargo y actualizo el código automáticamente
```

### **OPCIÓN 2: Comandos para Descargar**
```bash
# Ir a la carpeta de imágenes
cd /home/user/webapp/public/images

# Descargar cada foto (reemplaza URL por la tuya)
curl -o hero-principal.jpg "https://TU_URL_AQUI"
curl -o ruta-local.jpg "https://TU_URL_AQUI"
curl -o nahuelbuta.jpg "https://TU_URL_AQUI"

# Verificar
ls -lh

# Reconstruir
cd /home/user/webapp
npm run build
pm2 restart leufu-mtb
```

---

## 📋 CHECKLIST DE FOTOS

**Esenciales (Mínimo):**
- [ ] Hero principal (fondo página inicio)
- [ ] Ruta local Lebu
- [ ] Cordillera de Nahuelbuta
- [ ] Vista al mar

**Galería (Opcional pero recomendado):**
- [ ] 5 fotos adicionales para galería

**Total mínimo:** 4 fotos
**Total recomendado:** 9 fotos

---

## ⚡ ¿LISTO PARA EMPEZAR?

**Dime cuál de estas opciones prefieres:**

1. 📤 **"Dame las URLs de mis fotos y tú las agregas"** (Más rápido)
2. 💻 **"Enséñame los comandos exactos para cada foto"** (Más control)
3. 📝 **"Solo quiero cambiar algunas fotos específicas"** (Dime cuáles)

**¡Estoy listo para ayudarte! 🚀**
