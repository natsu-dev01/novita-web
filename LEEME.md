# Novita Web

Sitio estático oficial de **NovitaBot**, creado con datos reales del bot.

- **Dominio final:** https://darkcore.xyz
- **Sitio temporal:** https://novita-web.vercel.app
- **Repositorio:** https://github.com/natsu-dev01/novita-web

## Abrir

Haz doble clic en `index.html` o abre la carpeta con cualquier navegador moderno.

> El modo offline y la instalación como app solo funcionan al abrir la web por `http://` o `https://`. Con `file://` la página se ve igual, pero el service worker no se registra (es el comportamiento correcto).

## Contenido

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura, SEO, metadatos iOS y PWA |
| `styles.css` | Diseño, animaciones, modo oscuro y responsive |
| `script.js` | Buscador, filtros, favoritos, modal, enlaces y service worker |
| `data.js` | Datos reales: 222 plugins y 957 comandos |
| `manifest.webmanifest` | Configuración de la app instalable |
| `sw.js` | Caché offline y actualización en segundo plano |
| `assets/` | Logo, capturas e iconos de la app |
| `robots.txt` / `sitemap.xml` | Indexación en buscadores |

## Funciones

- Buscador de comandos con soporte para tildes y varias palabras.
- Filtros por 15 categorías y favoritos guardados en el navegador.
- Interruptor para mostrar los 735 alias además de los 222 comandos principales.
- Orden por nombre, categoría o cantidad de alias.
- Modal con descripción, uso, alias, copiado y enlace para probar el comando en WhatsApp.
- Comando aleatorio, copiado rápido y avisos visuales.
- Sección de categorías, preguntas frecuentes, barra de progreso y volver arriba.
- Diseño responsive para celular, tablet y escritorio.
- Barra de accesos rápidos en celular: Inicio, Comandos, Favoritos y WhatsApp.
- Modal tipo *bottom sheet* en celular, con áreas seguras para iPhone con notch.
- Enlaces compartibles: `#comando=tts` abre un comando y `#comandos=juegos` abre una categoría.
- Botón **Compartir** en el modal (usa el menú nativo en iPhone y Android).
- Instalable como aplicación (PWA) con iconos, pantalla completa y modo offline.
- Respeta `prefers-reduced-motion` y evita el zoom automático al escribir en iPhone.

## Instalar como app

- **iPhone / iPad:** abre https://darkcore.xyz en Safari → botón **Compartir** → **Añadir a pantalla de inicio**.
- **Android:** abre la web en Chrome → menú de tres puntos → **Instalar aplicación** (o **Añadir a pantalla de inicio**).
- **PC:** abre la web en Chrome o Edge → icono de instalación en la barra de direcciones.

Después de la primera visita la web queda guardada en el dispositivo y puede abrirse sin conexión. Los enlaces a WhatsApp sí necesitan internet.

## Datos del bot

- **222 plugins**
- **957 comandos** (222 principales + 735 alias)
- **15 categorías**
- **25 idiomas TTS**

Los datos se generan desde las carpetas reales de `plugins/` del bot. Si agregas o quitas plugins, hay que regenerar `data.js` para que la web refleje los cambios.

## Publicar

El proyecto está conectado a Vercel: cada `git push` a la rama `main` publica automáticamente en producción.

```bash
git add .
git commit -m "Mejoras de la web"
git push
```

Para desplegar manualmente:

```bash
vercel deploy --prod --yes
```

## Dominio darkcore.xyz

El dominio y `www.darkcore.xyz` están vinculados al proyecto `novita-web` en Vercel. El DNS se administra en Cloudflare y deben existir estos registros, todos en modo **DNS only** (nube gris):

| Tipo | Nombre | Contenido |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| A | `@` | `64.29.17.1` |
| CNAME | `www` | `47587919f297b3a1.vercel-dns-017.com` |

El subdominio `natsu-api.darkcore.xyz` pertenece a otro proyecto y no debe modificarse.

## Notas

- Los favoritos y el orden elegido se guardan en el almacenamiento local del navegador; no se envían a ningún servidor.
- Si actualizas `styles.css`, `script.js` o las imágenes, cambia la versión de `CACHE_NAME` en `sw.js` para forzar la actualización en los dispositivos que ya instalaron la app.
