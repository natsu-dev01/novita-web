# Novita Web

Sitio estático oficial de **NovitaBot**, creado con datos reales del bot.

- **Dominio final:** https://darkcore.xyz (pendiente de los registros DNS en Cloudflare)
- **Producción actual:** https://novita-web.darkcore.xyz
- **Alternativa:** https://novita-web.vercel.app
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
| `status.json` | Estado del bot: online, versión, tiempo activo y servicios |
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
- Sección **Estado del bot** en vivo: latencia real, tiempo activo, versión, región y estado de cada servicio, con comprobación automática cada 60 segundos.
- **Comando del día**: un comando destacado que cambia cada día, con copiado y acceso a sus detalles.
- **Recientes**: los últimos comandos que abriste quedan guardados en el navegador para volver a ellos.
- Botón **Compartir web** en la comunidad (menú nativo en iPhone y Android; copia el enlace en escritorio).
- Aviso de **nueva versión disponible** para actualizar la app instalada sin salir de la página.
- Sección de categorías, preguntas frecuentes, barra de progreso y volver arriba.
- Diseño responsive para celular, tablet y escritorio.
- Barra de accesos rápidos en celular: Inicio, Comandos, Estado, Favoritos y WhatsApp.
- Modal tipo *bottom sheet* en celular, con áreas seguras para iPhone con notch.
- Enlaces compartibles: `#comando=tts` abre un comando y `#comandos=juegos` abre una categoría.
- Botón **Compartir** en el modal (usa el menú nativo en iPhone y Android).
- Instalable como aplicación (PWA) con iconos, pantalla completa y modo offline.
- Botón **Instalar app** en el inicio: usa el instalador del navegador en Android, Chrome y Edge, y muestra las instrucciones de Safari en iPhone e iPad.
- Aviso automático cuando el dispositivo pierde o recupera la conexión.
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

## Estado del bot

La sección **Estado** (`#estado`) obtiene los datos de `status.json` y mide la latencia real desde el dispositivo del visitante.

```json
{
  "online": true,
  "version": "3.2.0",
  "startedAt": "2026-11-08T06:00:00.000Z",
  "region": "Global",
  "services": [
    { "name": "WhatsApp", "status": "online" }
  ]
}
```

- `online`: `true` o `false`. Si es `false`, la web muestra el bot fuera de línea.
- `startedAt`: fecha y hora del último reinicio. El **tiempo activo** se calcula en vivo desde ese valor.
- `services`: cada servicio con `status` `online`, `degraded` u `offline`. Si uno falla, la tarjeta pasa a **Servicio limitado**.
- `maintenanceNote`: texto opcional para explicar una mantención.
- `version` y `region`: se muestran tal cual en las métricas.

Actualiza `startedAt` cuando reinicies el bot para que el tiempo activo sea correcto. Si más adelante tienes una API real, cambia `statusUrl` dentro del bloque `bot` de `data.js`; el resto funciona igual. Si `status.json` no responde, la web muestra los últimos datos guardados en el navegador y avisa cuando no hay conexión.

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
- Los comandos recientes y el último estado del bot también se guardan en el navegador para funcionar sin conexión.
- Si actualizas `styles.css`, `script.js` o las imágenes, cambia la versión de `CACHE_NAME` en `sw.js` para forzar la actualización en los dispositivos que ya instalaron la app.
