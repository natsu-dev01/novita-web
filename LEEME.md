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
| `data.js` | Datos reales: 234 plugins y 1014 comandos |
| `status.json` | Respaldo local del estado (la web lee el gist en vivo) |
| `manifest.webmanifest` | Configuración de la app instalable |
| `sw.js` | Caché offline y actualización en segundo plano |
| `assets/` | Logo, imagen para redes, banners de marca, capturas e iconos de la app |
| `logos/` | Archivos originales entregados por el diseñador (fuente de los assets) |
| `robots.txt` / `sitemap.xml` | Indexación en buscadores |

## Logos e imágenes

Los assets se generan a partir de `logos/logotipo-novita.jpeg` y se optimizan para cada uso:

| Archivo | Uso |
| --- | --- |
| `assets/logo-96.jpg` | Cabecera, chat del inicio y pie de página |
| `assets/logo-192.jpg` | Tarjeta de comunidad |
| `assets/logo.jpeg` | Logo principal para redes y datos estructurados |
| `assets/og-novita.jpg` | Vista previa al compartir la web (1200×630) |
| `assets/icon-*.png`, `favicon.*`, `apple-touch-icon.png` | App instalable y pestaña del navegador |
| `assets/novita-hosting.jpg`, `novita-eventos.jpg`, `novita-aviso.jpg` | Banners de marca usados como decoración sutil de fondo en la portada y la comunidad |

## Funciones

- Buscador de comandos con soporte para tildes y varias palabras.
- Filtros por 16 categorías y favoritos guardados en el navegador.
- Interruptor para mostrar los 780 alias además de los 234 comandos principales.
- Orden por nombre, categoría o cantidad de alias.
- Modal con descripción, uso, alias, copiado y enlace para probar el comando en WhatsApp.
- Comando aleatorio, copiado rápido y avisos visuales.
- Sección **Estado del bot** en vivo: señal del último latido, tiempo activo, versión, región y estado de cada servicio, con comprobación automática cada 30 segundos.
- **Comando del día**: un comando destacado que cambia cada día, con copiado y acceso a sus detalles.
- **Recientes**: los últimos comandos que abriste quedan guardados en el navegador para volver a ellos.
- Botón **Compartir web** en la comunidad (menú nativo en iPhone y Android; copia el enlace en escritorio).
- Aviso de **nueva versión disponible** para actualizar la app instalada sin salir de la página.
- Sección de categorías, preguntas frecuentes, barra de progreso y volver arriba.
- Diseño responsive para celular, tablet y escritorio.
- **Buscador fijo en celular:** al recorrer los comandos, el buscador, los filtros y el orden se quedan pegados bajo el header.
- Categorías en dos columnas compactas en el celular, con la descripción oculta para ahorrar espacio.
- Paginación adaptada: 12 comandos por tanda en celular y 24 en tablet/escritorio.
- Barra de accesos rápidos en celular: Inicio, Comandos, Estado, Favoritos y WhatsApp.
- La barra inferior se oculta al abrir el teclado o tocar un campo, y vuelve al salir.
- Modal tipo *bottom sheet* en celular, con áreas seguras para iPhone con notch y gesto de arrastre hacia abajo para cerrar.
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

- **234 plugins**
- **1014 comandos** (234 principales + 780 alias)
- **16 categorías**
- **25 idiomas TTS**

Los datos se generan desde las carpetas reales de `plugins/` del bot. Si agregas o quitas plugins, regenera `data.js` con:

```powershell
node scripts/generate-data.js "C:\ruta\a\Novita-bot\plugins"
```

El generador replica el comportamiento del bot: cuenta cada archivo `.js`, detecta comandos y alias, y omite los nombres duplicados (el bot los guarda en un `Map`, así que solo queda el primero). Al terminar imprime plugins, comandos y categorías.

## Estado del bot

La sección **Estado** (`#estado`) ya no usa un archivo estático: lee el latido real que el bot publica en un **gist secreto de GitHub**. Así la web sigue siendo estática (Vercel) y el bot no necesita abrir puertos ni exponer una API.

- **Gist de estado:** `96ebdd7b6f0c8faffa7f86ed01ac64bb`
- **URL que lee la web:** `https://gist.githubusercontent.com/natsu-dev01/96ebdd7b6f0c8faffa7f86ed01ac64bb/raw/status.json`
- **Frecuencia del latido:** cada 60 segundos (configurable en el bot). GitHub puede tardar cerca de un minuto en reflejar el último cambio en la URL `raw`.
- **Caducidad:** si el último latido tiene más de 4 minutos, la web marca el bot como **Sin conexión**, aunque el gist todavía diga `online: true`.
- **Contadores en vivo:** la píldora del hero y las estadísticas (comandos y plugins) se actualizan con los valores del latido real cuando están disponibles.

El bot publica datos reales de su proceso:

```json
{
  "name": "Novita Bot",
  "online": true,
  "connection": "online",
  "version": "1.0.0",
  "startedAt": "2026-11-08T13:53:30.541Z",
  "updatedAt": "2026-11-08T13:54:30.708Z",
  "uptimeMs": 60167,
  "region": "Perú",
  "commands": 1014,
  "plugins": 234,
  "messages": 12,
  "errors": 0,
  "lastMessageAt": "2026-11-08T13:54:20.000Z",
  "services": [
    { "name": "WhatsApp", "status": "online" }
  ]
}
```

- `updatedAt`: momento del último latido. La web muestra la métrica **Señal** con su antigüedad y, si supera los 4 minutos, pasa a **Sin conexión**.
- `startedAt`: arranque real del proceso. El **tiempo activo** se calcula en vivo desde ese valor.
- `connection`: estado real de Baileys (`online`, `connecting` u `offline`).
- `services`: WhatsApp, motor de comandos, base de datos y web. Si uno falla, la tarjeta pasa a **Servicio limitado**.
- `messages` y `errors`: actividad y errores desde el último arranque.
- `version`, `commands`, `plugins`, `region`: se muestran tal cual en las métricas.

### Configurar el publicador en el bot

El bot publica el estado desde `lib/integrations/status-publisher.js` y `lib/core/runtime-status.js`, arrancado desde `index.js`. Antes de iniciar el bot, el token de GitHub se resuelve en este orden:

1. `STATUS_TOKEN`
2. `BACKUP_TOKEN`
3. `GITHUB_TOKEN` / `GH_TOKEN`
4. `gh auth token` (si GitHub CLI está autenticado con scope `gist`)

Variables opcionales:

| Variable | Valor por defecto | Función |
| --- | --- | --- |
| `STATUS_ENABLED` | `1` | `0` desactiva el publicador |
| `STATUS_GIST_ID` | `96ebdd7b6f0c8faffa7f86ed01ac64bb` | Gist donde se publica |
| `STATUS_INTERVAL_SECONDS` | `60` | Segundos entre latidos (mínimo 15) |
| `STATUS_REGION` | `Perú` | Región mostrada en la web |

> El gist es **secreto**: no aparece en búsquedas, pero cualquiera con el enlace puede leerlo. No publiques tokens, sesiones ni datos privados en él.

Si el gist no responde, la web mantiene los últimos datos guardados en el navegador y avisa cuando no hay conexión. `status.json` queda solo como respaldo local y no se actualiza solo.

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
