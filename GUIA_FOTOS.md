# 📸 Guía para Agregar Fotos al Sitio Leufu MTB

## 📁 Ubicación de las Fotos
Todas las fotos deben estar en: `/home/user/webapp/public/images/`

## 🖼️ Fotos Recomendadas y sus Nombres

### **Fotos Esenciales** (Las que ya tienes)
```
✅ logo.png          - Logo oficial del club (87KB)
✅ equipo.jpg        - Foto del equipo completo (236KB)
```

### **Fotos Adicionales Sugeridas**
```
📸 hero-principal.jpg     - Foto principal para el hero (ciclistas en acción)
📸 ruta-local-1.jpg       - Ruta por cerros de Lebu
📸 ruta-local-2.jpg       - Ruta con vista al mar
📸 ruta-costa.jpg         - Bajada hacia la costa
📸 nahuelbuta.jpg         - Expedición a Nahuelbuta
📸 piedra-aguila.jpg      - En Piedra del Águila
📸 evento-1.jpg           - Evento o carrera del club
📸 evento-2.jpg           - Celebración o asado
📸 senderos-1.jpg         - Trabajo de mantención
📸 senderos-2.jpg         - Senderos técnicos
📸 grupo-social.jpg       - Foto grupal en reunión
📸 entrenamiento.jpg      - Sesión de entrenamiento
```

---

## 🔗 Dónde se Usan las Fotos Actualmente

### **Logo (`logo.png`)**
- ✅ Navegación (header) - Línea 14
- ✅ Footer - Línea 43
- ✅ Hero principal - Línea 110
- ✅ Formulario inscripción - Línea 640

### **Foto Equipo (`equipo.jpg`)**
- ✅ Sección "Nuestro Equipo" - Línea 245
- ✅ Galería - Línea 557
- ✅ Hero página "Nosotros" - Línea 892

### **Fotos de Unsplash (Actuales - Para Reemplazar)**
```javascript
// Hero principal
background-image: url('https://images.unsplash.com/photo-1517649763962...')

// Rutas locales
src="https://images.unsplash.com/photo-1511994477422..."

// Cordillera Nahuelbuta  
src="https://images.unsplash.com/photo-1473448912268..."

// Vista al mar
src="https://images.unsplash.com/photo-1541625602330..."

// Galería (6 fotos)
photo-1558618666-fcd25c85cd64  // Senderos técnicos
photo-1571068316344-75bc76f77890 // Vista al mar
photo-1563624438-436a3b710bbb  // MTB bosque
photo-1549391310-10c5e33b6f8e  // Competición
photo-1541625602330-2277a4c46182 // Vista panorámica
```

---

## 📝 Cómo Agregar una Foto Nueva

### **Método 1: Con URL**
Si tienes la foto en línea, envíame la URL y el nombre que quieres:
```
URL: https://page.gensparksite.com/v1/base64_upload/12345
Nombre: ruta-cerro-obligado.jpg
Usar en: Hero principal / Galería / Sección Rutas
```

### **Método 2: Comando Manual**
```bash
# 1. Descargar foto desde URL
cd /home/user/webapp/public/images
curl -o nombre-foto.jpg "URL_DE_TU_FOTO"

# 2. Verificar que se descargó
ls -lh nombre-foto.jpg

# 3. Rebuild del proyecto
cd /home/user/webapp
npm run build
pm2 restart leufu-mtb
```

---

## 🎨 Tamaños Recomendados

### **Logo**
- Formato: PNG con transparencia
- Tamaño: 512x512px (mínimo)
- Peso: < 200KB

### **Hero Principal**
- Formato: JPG
- Tamaño: 1920x1080px (Full HD)
- Peso: < 500KB
- Horizontal

### **Fotos de Rutas**
- Formato: JPG
- Tamaño: 1200x800px
- Peso: < 300KB cada una
- Horizontal

### **Galería**
- Formato: JPG
- Tamaño: 800x600px
- Peso: < 200KB cada una
- Horizontal o vertical

---

## ✅ Checklist para Agregar Fotos

1. ⬜ Preparar fotos con nombres descriptivos
2. ⬜ Optimizar tamaño (comprimir si es necesario)
3. ⬜ Subir a `/home/user/webapp/public/images/`
4. ⬜ Actualizar código en `src/index.tsx` (yo te ayudo)
5. ⬜ Rebuild: `npm run build`
6. ⬜ Restart: `pm2 restart leufu-mtb`
7. ⬜ Verificar en navegador

---

## 🚀 Ejemplo Completo

Si quieres reemplazar la foto del hero principal:

**Antes:**
```jsx
<section style="background-image: url('https://images.unsplash.com/photo-1517649763962...');">
```

**Después:**
```jsx
<section style="background-image: url('/images/hero-principal.jpg');">
```

---

## 📞 ¿Necesitas Ayuda?

Envíame:
1. **URLs de las fotos** que quieres agregar
2. **Nombres descriptivos** para cada foto
3. **Dónde quieres** que aparezcan (hero, galería, rutas, etc.)

¡Y yo las agrego automáticamente!

---

**Última actualización:** Diciembre 2024
