# Novita Web

Sitio estático oficial de **NovitaBot**, creado con datos reales del bot.

## Abrir

Haz doble clic en `index.html` o abre la carpeta con cualquier navegador moderno.

## Contenido

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura y contenido de la página |
| `styles.css` | Diseño, animaciones y responsive |
| `script.js` | Buscador, filtros, favoritos, modal y orden |
| `data.js` | Datos reales: 222 plugins y 957 comandos |
| `assets/` | Logo, menú y bienvenida |

## Funciones

- Buscador de comandos con soporte para tildes y varias palabras.
- Filtros por 15 categorías y favoritos guardados en el navegador.
- Interruptor para mostrar los 735 alias además de los 222 comandos principales.
- Orden por nombre, categoría o cantidad de alias.
- Modal con descripción, uso, alias y enlace para probar el comando en WhatsApp.
- Comando aleatorio, copiado rápido y avisos visuales.
- Sección de categorías, preguntas frecuentes, barra de progreso y volver arriba.
- Diseño responsive para celular, tablet y escritorio.

## Datos del bot

- **222 plugins**
- **957 comandos** (222 principales + 735 alias)
- **15 categorías**
- **25 idiomas TTS**

Los datos se generan desde las carpetas reales de `plugins/` del bot. Si agregas o quitas plugins, hay que regenerar `data.js` para que la web refleje los cambios.

## Publicar

Puedes subir `index.html`, `styles.css`, `script.js`, `data.js` y la carpeta `assets/` a cualquier hosting estático, como GitHub Pages, Netlify o Vercel.

Los favoritos y el orden elegido se guardan en el almacenamiento local del navegador; no se envían a ningún servidor.
