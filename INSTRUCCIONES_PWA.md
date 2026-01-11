# 📱 AbrilResinart - PWA (Progressive Web App)

## 🎯 ¿Qué es una PWA?

Una Progressive Web App (PWA) te permite instalar esta aplicación en tu celular como si fuera una app nativa, con acceso directo desde la pantalla de inicio.

## ✨ Beneficios

- ✅ **Acceso rápido**: Icono en tu pantalla de inicio
- ✅ **Funciona offline**: Una vez cargada, funciona sin internet
- ✅ **Pantalla completa**: Se ve como una app nativa
- ✅ **Actualizaciones automáticas**: Siempre tendrás la última versión
- ✅ **Menos espacio**: No ocupa tanto como una app de la tienda

## 📲 Cómo Instalar en Android (Chrome)

1. **Abre Chrome** en tu celular
2. **Navega** al archivo `AbrilResinart.html` (súbelo a tu hosting o ábrelo localmente)
3. Toca el **menú de tres puntos** (⋮) en la esquina superior derecha
4. Selecciona **"Agregar a pantalla de inicio"** o **"Instalar app"**
5. Confirma tocando **"Agregar"** o **"Instalar"**
6. ¡Listo! La app aparecerá en tu pantalla de inicio

## 🍎 Cómo Instalar en iPhone/iPad (Safari)

1. **Abre Safari** en tu dispositivo
2. **Navega** al archivo `AbrilResinart.html`
3. Toca el **botón de compartir** (□↑) en la parte inferior
4. Desplázate y toca **"Agregar a pantalla de inicio"**
5. Dale un nombre si quieres (sugerencia: "AbrilResinart")
6. Toca **"Agregar"**
7. ¡Listo! La app aparecerá en tu pantalla de inicio

## 💻 Cómo Instalar en PC (Chrome/Edge)

1. **Abre Chrome o Edge** en tu computadora
2. **Navega** al archivo `AbrilResinart.html`
3. Verás un ícono de **instalación (+)** en la barra de direcciones
4. Haz clic en él y confirma **"Instalar"**
5. La app se abrirá en su propia ventana

## 📁 Archivos Necesarios

Para que la PWA funcione correctamente, asegúrate de tener estos archivos **en la misma carpeta**:

```
📁 Tu carpeta/
├── AbrilResinart.html      (tu aplicación)
├── manifest.json           (configuración de la PWA)
├── service-worker.js       (para funcionar offline)
├── icon-192.png           (ícono pequeño)
└── icon-512.png           (ícono grande)
```

## 🌐 Cómo Usar desde tu Celular

### Opción 1: Hosting en la Nube (Recomendado)

**Usando Google Drive:**
1. Sube todos los archivos a Google Drive
2. Haz clic derecho en `AbrilResinart.html`
3. Selecciona "Obtener enlace" → "Cualquiera con el enlace"
4. Copia el enlace y ábrelo en Chrome/Safari
5. Instala como PWA siguiendo los pasos anteriores

**Usando GitHub Pages (Gratis):**
1. Crea una cuenta en GitHub
2. Crea un nuevo repositorio
3. Sube todos los archivos
4. Activa GitHub Pages en Settings
5. Accede desde `https://tu-usuario.github.io/tu-repositorio/AbrilResinart.html`
6. Instala como PWA

**Usando Netlify/Vercel (Gratis y Fácil):**
1. Crea una cuenta en Netlify.com o Vercel.com
2. Arrastra la carpeta con todos los archivos
3. Te darán una URL pública
4. Accede desde tu celular e instala

### Opción 2: Servidor Local (Para Desarrollo)

Si tienes conocimientos técnicos:
```bash
# Con Python
python3 -m http.server 8000

# Con Node.js
npx http-server
```
Luego accede desde `http://tu-ip-local:8000/AbrilResinart.html`

## 🔧 Verificar que Funcione

Después de instalar, verifica:

- ✅ El ícono aparece en tu pantalla de inicio
- ✅ Al abrir, se ve en pantalla completa (sin barra del navegador)
- ✅ Los datos se guardan correctamente
- ✅ Funciona sin internet (después de la primera carga)

## 🆘 Solución de Problemas

### "No aparece la opción de instalar"

- Asegúrate de que todos los archivos estén en la misma carpeta
- Verifica que estés usando HTTPS o localhost
- Intenta desde Chrome (es el navegador con mejor soporte)

### "No funciona offline"

- Espera unos segundos después de la primera carga
- Recarga la página una vez
- Verifica que el service worker esté registrado (abre la consola del navegador)

### "Los datos no se guardan"

- La PWA usa localStorage, funciona normalmente
- Asegúrate de no limpiar los datos del navegador
- Haz respaldos periódicos usando el botón de exportar

## 📝 Notas Importantes

1. **Todos los datos se guardan en tu dispositivo** (no en la nube)
2. **Haz respaldos periódicos** usando la función de exportar
3. **No desinstales el navegador** o perderás los datos
4. **La primera vez necesitas internet** para cargar la app
5. **Después funciona 100% offline**

## 🔒 Privacidad y Seguridad

- ✅ Todos tus datos quedan en tu dispositivo
- ✅ No se envía información a ningún servidor
- ✅ No requiere permisos especiales
- ✅ No tiene publicidad ni rastreadores

## 💡 Recomendación Final

Para el mejor rendimiento:
1. Sube los archivos a un hosting gratuito (GitHub Pages o Netlify)
2. Accede desde tu celular usando el enlace
3. Instala como PWA
4. ¡Disfruta de tu app profesional!

---

**Creado con ❤️ para AbrilResinart**
**Versión PWA 1.0**
