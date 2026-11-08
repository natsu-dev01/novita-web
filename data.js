window.NOVITA_DATA = {
  "bot": {
    "name": "NovitaBot",
    "creator": "Manuel VG",
    "prefix": "#",
    "plugins": 222,
    "commands": 957,
    "languages": 25,
    "channel": "https://whatsapp.com/channel/0029Vb94gAXEQIapCNyaZ844",
    "group": "https://chat.whatsapp.com/LkF1B22nqA72wBDioCMSZ6?s=sh&p=i&mlu=4&ilr=4&iam=2",
    "channelName": "Novita Updates",
    "statusUrl": "https://gist.githubusercontent.com/natsu-dev01/96ebdd7b6f0c8faffa7f86ed01ac64bb/raw/status.json"
  },
  "categories": [
    {
      "id": "admin",
      "title": "Administración",
      "icon": "🛡️",
      "description": "Moderación, permisos y control total del grupo.",
      "count": 158
    },
    {
      "id": "anime",
      "title": "Anime & Nekos",
      "icon": "🌸",
      "description": "Imágenes, reacciones y comandos kawaii.",
      "count": 23
    },
    {
      "id": "descargas",
      "title": "Descargas",
      "icon": "📥",
      "description": "Música, videos y contenido desde distintas plataformas.",
      "count": 96
    },
    {
      "id": "economia",
      "title": "Economía",
      "icon": "💰",
      "description": "Monedas, niveles, tienda, trabajos y recompensas.",
      "count": 126
    },
    {
      "id": "entretenimiento",
      "title": "Entretenimiento",
      "icon": "🎲",
      "description": "Juegos rápidos, retos y diversión para el grupo.",
      "count": 54
    },
    {
      "id": "ia",
      "title": "Inteligencia Artificial",
      "icon": "🧠",
      "description": "Conversación, imágenes y resúmenes con IA.",
      "count": 16
    },
    {
      "id": "info",
      "title": "Información",
      "icon": "ℹ️",
      "description": "Datos, clima, noticias y consultas del día a día.",
      "count": 96
    },
    {
      "id": "jadibot",
      "title": "Sub-Bots",
      "icon": "🤖",
      "description": "Crea y administra tus propios bots secundarios.",
      "count": 18
    },
    {
      "id": "juegos",
      "title": "Juegos",
      "icon": "🎮",
      "description": "Competencias, apuestas y juegos por turnos.",
      "count": 71
    },
    {
      "id": "mascotas",
      "title": "Mascotas",
      "icon": "🐾",
      "description": "Adopta, cuida y haz crecer a tu mascota.",
      "count": 43
    },
    {
      "id": "multimedia",
      "title": "Multimedia",
      "icon": "🎨",
      "description": "Stickers, imágenes, audio, TTS y efectos de voz.",
      "count": 96
    },
    {
      "id": "perfil",
      "title": "Perfil",
      "icon": "👤",
      "description": "Tu tarjeta, logros, rango y progreso personal.",
      "count": 33
    },
    {
      "id": "sistema",
      "title": "Sistema",
      "icon": "⚙️",
      "description": "Menú, estado, backups y herramientas internas.",
      "count": 42
    },
    {
      "id": "staff",
      "title": "Staff",
      "icon": "🎖️",
      "description": "Equipo, jerarquías y herramientas del staff.",
      "count": 19
    },
    {
      "id": "utilidades",
      "title": "Utilidades",
      "icon": "🧰",
      "description": "Calculadoras, conversores y generadores.",
      "count": 66
    }
  ],
  "commands": [
    {
      "name": "8ball",
      "base": "8ball",
      "primary": true,
      "aliases": [
        "bola8",
        "oraculo",
        "oráculo"
      ],
      "description": "Hazle una pregunta a la bola mágica 8",
      "usage": "<pregunta>",
      "category": "juegos"
    },
    {
      "name": "bola8",
      "base": "8ball",
      "primary": false,
      "aliases": [],
      "description": "Hazle una pregunta a la bola mágica 8",
      "usage": "<pregunta>",
      "category": "juegos"
    },
    {
      "name": "oraculo",
      "base": "8ball",
      "primary": false,
      "aliases": [],
      "description": "Hazle una pregunta a la bola mágica 8",
      "usage": "<pregunta>",
      "category": "juegos"
    },
    {
      "name": "oráculo",
      "base": "8ball",
      "primary": false,
      "aliases": [],
      "description": "Hazle una pregunta a la bola mágica 8",
      "usage": "<pregunta>",
      "category": "juegos"
    },
    {
      "name": "abrir",
      "base": "abrir",
      "primary": true,
      "aliases": [
        "abrirgrupo",
        "groupopen",
        "open"
      ],
      "description": "Abre el grupo para que todos los miembros puedan escribir",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "abrirgrupo",
      "base": "abrir",
      "primary": false,
      "aliases": [],
      "description": "Abre el grupo para que todos los miembros puedan escribir",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "groupopen",
      "base": "abrir",
      "primary": false,
      "aliases": [],
      "description": "Abre el grupo para que todos los miembros puedan escribir",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "open",
      "base": "abrir",
      "primary": false,
      "aliases": [],
      "description": "Abre el grupo para que todos los miembros puedan escribir",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "activarmascota",
      "base": "activarmascota",
      "primary": true,
      "aliases": [
        "usarmascota",
        "setpet",
        "mascotaactiva",
        "cambiarmascota"
      ],
      "description": "Elige cuál de tus mascotas está activa",
      "usage": "<número o nombre>",
      "category": "mascotas"
    },
    {
      "name": "usarmascota",
      "base": "activarmascota",
      "primary": false,
      "aliases": [],
      "description": "Elige cuál de tus mascotas está activa",
      "usage": "<número o nombre>",
      "category": "mascotas"
    },
    {
      "name": "setpet",
      "base": "activarmascota",
      "primary": false,
      "aliases": [],
      "description": "Elige cuál de tus mascotas está activa",
      "usage": "<número o nombre>",
      "category": "mascotas"
    },
    {
      "name": "mascotaactiva",
      "base": "activarmascota",
      "primary": false,
      "aliases": [],
      "description": "Elige cuál de tus mascotas está activa",
      "usage": "<número o nombre>",
      "category": "mascotas"
    },
    {
      "name": "cambiarmascota",
      "base": "activarmascota",
      "primary": false,
      "aliases": [],
      "description": "Elige cuál de tus mascotas está activa",
      "usage": "<número o nombre>",
      "category": "mascotas"
    },
    {
      "name": "actualizar",
      "base": "actualizar",
      "primary": true,
      "aliases": [
        "update"
      ],
      "description": "Aplica una actualización a los jadibots (solo creador)",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "update",
      "base": "actualizar",
      "primary": false,
      "aliases": [],
      "description": "Aplica una actualización a los jadibots (solo creador)",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "adivina",
      "base": "adivina",
      "primary": true,
      "aliases": [
        "guess",
        "adivinarnumero"
      ],
      "description": "Adivina un número del 1 al 100 y gana monedas",
      "usage": "[número|cancelar]",
      "category": "juegos"
    },
    {
      "name": "guess",
      "base": "adivina",
      "primary": false,
      "aliases": [],
      "description": "Adivina un número del 1 al 100 y gana monedas",
      "usage": "[número|cancelar]",
      "category": "juegos"
    },
    {
      "name": "adivinarnumero",
      "base": "adivina",
      "primary": false,
      "aliases": [],
      "description": "Adivina un número del 1 al 100 y gana monedas",
      "usage": "[número|cancelar]",
      "category": "juegos"
    },
    {
      "name": "admin",
      "base": "admin",
      "primary": true,
      "aliases": [
        "moderacion",
        "moderación",
        "unban",
        "desbanear",
        "banlist",
        "baneados",
        "bot",
        "boton",
        "botoff",
        "on",
        "off",
        "encender",
        "apagar"
      ],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "moderacion",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "moderación",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "unban",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "desbanear",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "banlist",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "baneados",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "bot",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "boton",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "botoff",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "on",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "off",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "encender",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "apagar",
      "base": "admin",
      "primary": false,
      "aliases": [],
      "description": "Panel de administración: bot on/off, ban, unban y lista de baneados",
      "usage": "<on|off|ban|unban|list>",
      "category": "admin"
    },
    {
      "name": "adoptar",
      "base": "adoptar",
      "primary": true,
      "aliases": [
        "comprarmascota",
        "adoptmascota",
        "comprarpet",
        "adoptpet"
      ],
      "description": "Adopta una mascota de la tienda",
      "usage": "<id> [nombre]",
      "category": "mascotas"
    },
    {
      "name": "comprarmascota",
      "base": "adoptar",
      "primary": false,
      "aliases": [],
      "description": "Adopta una mascota de la tienda",
      "usage": "<id> [nombre]",
      "category": "mascotas"
    },
    {
      "name": "adoptmascota",
      "base": "adoptar",
      "primary": false,
      "aliases": [],
      "description": "Adopta una mascota de la tienda",
      "usage": "<id> [nombre]",
      "category": "mascotas"
    },
    {
      "name": "comprarpet",
      "base": "adoptar",
      "primary": false,
      "aliases": [],
      "description": "Adopta una mascota de la tienda",
      "usage": "<id> [nombre]",
      "category": "mascotas"
    },
    {
      "name": "adoptpet",
      "base": "adoptar",
      "primary": false,
      "aliases": [],
      "description": "Adopta una mascota de la tienda",
      "usage": "<id> [nombre]",
      "category": "mascotas"
    },
    {
      "name": "ahorcado",
      "base": "ahorcado",
      "primary": true,
      "aliases": [
        "hangman"
      ],
      "description": "Juega al ahorcado y gana monedas",
      "usage": "[letra|palabra|cancelar]",
      "category": "juegos"
    },
    {
      "name": "hangman",
      "base": "ahorcado",
      "primary": false,
      "aliases": [],
      "description": "Juega al ahorcado y gana monedas",
      "usage": "[letra|palabra|cancelar]",
      "category": "juegos"
    },
    {
      "name": "aire",
      "base": "aire",
      "primary": true,
      "aliases": [
        "calidadaire",
        "aqi",
        "calidad-aire"
      ],
      "description": "Consulta la calidad del aire de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "calidadaire",
      "base": "aire",
      "primary": false,
      "aliases": [],
      "description": "Consulta la calidad del aire de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "aqi",
      "base": "aire",
      "primary": false,
      "aliases": [],
      "description": "Consulta la calidad del aire de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "calidad-aire",
      "base": "aire",
      "primary": false,
      "aliases": [],
      "description": "Consulta la calidad del aire de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "alimentar",
      "base": "alimentar",
      "primary": true,
      "aliases": [
        "feed",
        "alimentarmascota",
        "darcomida",
        "comidamascota"
      ],
      "description": "Alimenta a tu mascota para subir su comida y felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "feed",
      "base": "alimentar",
      "primary": false,
      "aliases": [],
      "description": "Alimenta a tu mascota para subir su comida y felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "alimentarmascota",
      "base": "alimentar",
      "primary": false,
      "aliases": [],
      "description": "Alimenta a tu mascota para subir su comida y felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "darcomida",
      "base": "alimentar",
      "primary": false,
      "aliases": [],
      "description": "Alimenta a tu mascota para subir su comida y felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "comidamascota",
      "base": "alimentar",
      "primary": false,
      "aliases": [],
      "description": "Alimenta a tu mascota para subir su comida y felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "amor",
      "base": "amor",
      "primary": true,
      "aliases": [
        "love",
        "ship"
      ],
      "description": "Calcula la compatibilidad amorosa con otro usuario",
      "usage": "@usuario",
      "category": "entretenimiento"
    },
    {
      "name": "love",
      "base": "amor",
      "primary": false,
      "aliases": [],
      "description": "Calcula la compatibilidad amorosa con otro usuario",
      "usage": "@usuario",
      "category": "entretenimiento"
    },
    {
      "name": "ship",
      "base": "amor",
      "primary": false,
      "aliases": [],
      "description": "Calcula la compatibilidad amorosa con otro usuario",
      "usage": "@usuario",
      "category": "entretenimiento"
    },
    {
      "name": "animeinfo",
      "base": "animeinfo",
      "primary": true,
      "aliases": [
        "animebuscar",
        "animeficha",
        "animetv"
      ],
      "description": "Busca información de un anime con portada y sinopsis",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "animebuscar",
      "base": "animeinfo",
      "primary": false,
      "aliases": [],
      "description": "Busca información de un anime con portada y sinopsis",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "animeficha",
      "base": "animeinfo",
      "primary": false,
      "aliases": [],
      "description": "Busca información de un anime con portada y sinopsis",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "animetv",
      "base": "animeinfo",
      "primary": false,
      "aliases": [],
      "description": "Busca información de un anime con portada y sinopsis",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "antibot",
      "base": "antibot",
      "primary": true,
      "aliases": [
        "antirobot",
        "antibots",
        "setantibot"
      ],
      "description": "Expulsa bots externos y revisa los grupos principales",
      "usage": "on|off|on all|scan|scan all|scan force|add|remove|list",
      "category": "admin"
    },
    {
      "name": "antirobot",
      "base": "antibot",
      "primary": false,
      "aliases": [],
      "description": "Expulsa bots externos y revisa los grupos principales",
      "usage": "on|off|on all|scan|scan all|scan force|add|remove|list",
      "category": "admin"
    },
    {
      "name": "antibots",
      "base": "antibot",
      "primary": false,
      "aliases": [],
      "description": "Expulsa bots externos y revisa los grupos principales",
      "usage": "on|off|on all|scan|scan all|scan force|add|remove|list",
      "category": "admin"
    },
    {
      "name": "setantibot",
      "base": "antibot",
      "primary": false,
      "aliases": [],
      "description": "Expulsa bots externos y revisa los grupos principales",
      "usage": "on|off|on all|scan|scan all|scan force|add|remove|list",
      "category": "admin"
    },
    {
      "name": "antilink",
      "base": "antilink",
      "primary": true,
      "aliases": [
        "antienlaces",
        "antilinks",
        "setantilink"
      ],
      "description": "Activa o desactiva el borrado de enlaces de WhatsApp, Telegram y generales",
      "usage": "on|off|test|tipos|status",
      "category": "admin"
    },
    {
      "name": "antienlaces",
      "base": "antilink",
      "primary": false,
      "aliases": [],
      "description": "Activa o desactiva el borrado de enlaces de WhatsApp, Telegram y generales",
      "usage": "on|off|test|tipos|status",
      "category": "admin"
    },
    {
      "name": "antilinks",
      "base": "antilink",
      "primary": false,
      "aliases": [],
      "description": "Activa o desactiva el borrado de enlaces de WhatsApp, Telegram y generales",
      "usage": "on|off|test|tipos|status",
      "category": "admin"
    },
    {
      "name": "setantilink",
      "base": "antilink",
      "primary": false,
      "aliases": [],
      "description": "Activa o desactiva el borrado de enlaces de WhatsApp, Telegram y generales",
      "usage": "on|off|test|tipos|status",
      "category": "admin"
    },
    {
      "name": "antirobo",
      "base": "antirobo",
      "primary": true,
      "aliases": [
        "seguridad",
        "proteccion",
        "protección",
        "autoadmin",
        "setantirobo"
      ],
      "description": "Protege el grupo contra robos y activa el auto-admin",
      "usage": "on|off|autoadmin|status",
      "category": "admin"
    },
    {
      "name": "seguridad",
      "base": "antirobo",
      "primary": false,
      "aliases": [],
      "description": "Protege el grupo contra robos y activa el auto-admin",
      "usage": "on|off|autoadmin|status",
      "category": "admin"
    },
    {
      "name": "proteccion",
      "base": "antirobo",
      "primary": false,
      "aliases": [],
      "description": "Protege el grupo contra robos y activa el auto-admin",
      "usage": "on|off|autoadmin|status",
      "category": "admin"
    },
    {
      "name": "protección",
      "base": "antirobo",
      "primary": false,
      "aliases": [],
      "description": "Protege el grupo contra robos y activa el auto-admin",
      "usage": "on|off|autoadmin|status",
      "category": "admin"
    },
    {
      "name": "autoadmin",
      "base": "antirobo",
      "primary": false,
      "aliases": [],
      "description": "Protege el grupo contra robos y activa el auto-admin",
      "usage": "on|off|autoadmin|status",
      "category": "admin"
    },
    {
      "name": "setantirobo",
      "base": "antirobo",
      "primary": false,
      "aliases": [],
      "description": "Protege el grupo contra robos y activa el auto-admin",
      "usage": "on|off|autoadmin|status",
      "category": "admin"
    },
    {
      "name": "antispam",
      "base": "antispam",
      "primary": true,
      "aliases": [
        "antiflood",
        "anti-spam",
        "setantispam"
      ],
      "description": "Activa el control de spam: flood, repeticiones, menciones y fraudes",
      "usage": "on|off|kick|reset|status",
      "category": "admin"
    },
    {
      "name": "antiflood",
      "base": "antispam",
      "primary": false,
      "aliases": [],
      "description": "Activa el control de spam: flood, repeticiones, menciones y fraudes",
      "usage": "on|off|kick|reset|status",
      "category": "admin"
    },
    {
      "name": "anti-spam",
      "base": "antispam",
      "primary": false,
      "aliases": [],
      "description": "Activa el control de spam: flood, repeticiones, menciones y fraudes",
      "usage": "on|off|kick|reset|status",
      "category": "admin"
    },
    {
      "name": "setantispam",
      "base": "antispam",
      "primary": false,
      "aliases": [],
      "description": "Activa el control de spam: flood, repeticiones, menciones y fraudes",
      "usage": "on|off|kick|reset|status",
      "category": "admin"
    },
    {
      "name": "archiveorg",
      "base": "archiveorg",
      "primary": true,
      "aliases": [
        "archive",
        "internetarchive"
      ],
      "description": "Descarga un video de Internet Archive",
      "usage": "🗄️ *DESCARGA DE INTERNET ARCHIVE*\n\n🔗 Uso: */archiveorg <enlace>*\n✨ Ejemplo: */archiveorg https://archive.org/details/BigBuckBunny_124*",
      "category": "descargas"
    },
    {
      "name": "archive",
      "base": "archiveorg",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Internet Archive",
      "usage": "🗄️ *DESCARGA DE INTERNET ARCHIVE*\n\n🔗 Uso: */archiveorg <enlace>*\n✨ Ejemplo: */archiveorg https://archive.org/details/BigBuckBunny_124*",
      "category": "descargas"
    },
    {
      "name": "internetarchive",
      "base": "archiveorg",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Internet Archive",
      "usage": "🗄️ *DESCARGA DE INTERNET ARCHIVE*\n\n🔗 Uso: */archiveorg <enlace>*\n✨ Ejemplo: */archiveorg https://archive.org/details/BigBuckBunny_124*",
      "category": "descargas"
    },
    {
      "name": "backup",
      "base": "backup",
      "primary": true,
      "aliases": [
        "respaldar",
        "respaldobot",
        "backupbot"
      ],
      "description": "Crea y sube un backup consolidado del bot al repositorio privado",
      "usage": "[estado|forzar]",
      "category": "sistema"
    },
    {
      "name": "respaldar",
      "base": "backup",
      "primary": false,
      "aliases": [],
      "description": "Crea y sube un backup consolidado del bot al repositorio privado",
      "usage": "[estado|forzar]",
      "category": "sistema"
    },
    {
      "name": "respaldobot",
      "base": "backup",
      "primary": false,
      "aliases": [],
      "description": "Crea y sube un backup consolidado del bot al repositorio privado",
      "usage": "[estado|forzar]",
      "category": "sistema"
    },
    {
      "name": "backupbot",
      "base": "backup",
      "primary": false,
      "aliases": [],
      "description": "Crea y sube un backup consolidado del bot al repositorio privado",
      "usage": "[estado|forzar]",
      "category": "sistema"
    },
    {
      "name": "backupinfo",
      "base": "backupinfo",
      "primary": true,
      "aliases": [
        "infobackup",
        "inforespaldo",
        "backupdetalle",
        "estadobackup"
      ],
      "description": "Muestra información detallada del backup local y remoto",
      "usage": "[archivos]",
      "category": "sistema"
    },
    {
      "name": "infobackup",
      "base": "backupinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información detallada del backup local y remoto",
      "usage": "[archivos]",
      "category": "sistema"
    },
    {
      "name": "inforespaldo",
      "base": "backupinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información detallada del backup local y remoto",
      "usage": "[archivos]",
      "category": "sistema"
    },
    {
      "name": "backupdetalle",
      "base": "backupinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información detallada del backup local y remoto",
      "usage": "[archivos]",
      "category": "sistema"
    },
    {
      "name": "estadobackup",
      "base": "backupinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información detallada del backup local y remoto",
      "usage": "[archivos]",
      "category": "sistema"
    },
    {
      "name": "ban",
      "base": "ban",
      "primary": true,
      "aliases": [
        "banear",
        "banuser",
        "banearusuario"
      ],
      "description": "Banea a un usuario del bot (dueños, staff admin y administradores de grupo)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "banear",
      "base": "ban",
      "primary": false,
      "aliases": [],
      "description": "Banea a un usuario del bot (dueños, staff admin y administradores de grupo)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "banuser",
      "base": "ban",
      "primary": false,
      "aliases": [],
      "description": "Banea a un usuario del bot (dueños, staff admin y administradores de grupo)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "banearusuario",
      "base": "ban",
      "primary": false,
      "aliases": [],
      "description": "Banea a un usuario del bot (dueños, staff admin y administradores de grupo)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "bank",
      "base": "bank",
      "primary": true,
      "aliases": [
        "banco",
        "banca"
      ],
      "description": "Consulta tu cuenta, deposita o retira monedas del banco",
      "usage": "[depositar|retirar] [cantidad]",
      "category": "economia"
    },
    {
      "name": "banco",
      "base": "bank",
      "primary": false,
      "aliases": [],
      "description": "Consulta tu cuenta, deposita o retira monedas del banco",
      "usage": "[depositar|retirar] [cantidad]",
      "category": "economia"
    },
    {
      "name": "banca",
      "base": "bank",
      "primary": false,
      "aliases": [],
      "description": "Consulta tu cuenta, deposita o retira monedas del banco",
      "usage": "[depositar|retirar] [cantidad]",
      "category": "economia"
    },
    {
      "name": "base64",
      "base": "base64",
      "primary": true,
      "aliases": [
        "b64",
        "codificar"
      ],
      "description": "Codifica o decodifica texto en Base64",
      "usage": "[d|e] <texto>",
      "category": "utilidades"
    },
    {
      "name": "b64",
      "base": "base64",
      "primary": false,
      "aliases": [],
      "description": "Codifica o decodifica texto en Base64",
      "usage": "[d|e] <texto>",
      "category": "utilidades"
    },
    {
      "name": "codificar",
      "base": "base64",
      "primary": false,
      "aliases": [],
      "description": "Codifica o decodifica texto en Base64",
      "usage": "[d|e] <texto>",
      "category": "utilidades"
    },
    {
      "name": "bingo",
      "base": "bingo",
      "primary": true,
      "aliases": [
        "cartonbingo"
      ],
      "description": "Genera un cartón de bingo aleatorio",
      "usage": "[cantidad]",
      "category": "juegos"
    },
    {
      "name": "cartonbingo",
      "base": "bingo",
      "primary": false,
      "aliases": [],
      "description": "Genera un cartón de bingo aleatorio",
      "usage": "[cantidad]",
      "category": "juegos"
    },
    {
      "name": "blackjack",
      "base": "blackjack",
      "primary": true,
      "aliases": [
        "bj",
        "21",
        "veintiuno"
      ],
      "description": "Juega al blackjack contra la casa",
      "usage": "<cantidad|todo> [pedir]",
      "category": "juegos"
    },
    {
      "name": "bj",
      "base": "blackjack",
      "primary": false,
      "aliases": [],
      "description": "Juega al blackjack contra la casa",
      "usage": "<cantidad|todo> [pedir]",
      "category": "juegos"
    },
    {
      "name": "21",
      "base": "blackjack",
      "primary": false,
      "aliases": [],
      "description": "Juega al blackjack contra la casa",
      "usage": "<cantidad|todo> [pedir]",
      "category": "juegos"
    },
    {
      "name": "veintiuno",
      "base": "blackjack",
      "primary": false,
      "aliases": [],
      "description": "Juega al blackjack contra la casa",
      "usage": "<cantidad|todo> [pedir]",
      "category": "juegos"
    },
    {
      "name": "botconfig",
      "base": "botconfig",
      "primary": true,
      "aliases": [
        "config",
        "ajustes",
        "settings",
        "configuracion",
        "configuración"
      ],
      "description": "Muestra la configuración editable de este bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "config",
      "base": "botconfig",
      "primary": false,
      "aliases": [],
      "description": "Muestra la configuración editable de este bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "ajustes",
      "base": "botconfig",
      "primary": false,
      "aliases": [],
      "description": "Muestra la configuración editable de este bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "settings",
      "base": "botconfig",
      "primary": false,
      "aliases": [],
      "description": "Muestra la configuración editable de este bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "configuracion",
      "base": "botconfig",
      "primary": false,
      "aliases": [],
      "description": "Muestra la configuración editable de este bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "configuración",
      "base": "botconfig",
      "primary": false,
      "aliases": [],
      "description": "Muestra la configuración editable de este bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "botones",
      "base": "botones",
      "primary": true,
      "aliases": [
        "buttons",
        "opciones"
      ],
      "description": "Muestra un mensaje con botones interactivos",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "buttons",
      "base": "botones",
      "primary": false,
      "aliases": [],
      "description": "Muestra un mensaje con botones interactivos",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "opciones",
      "base": "botones",
      "primary": false,
      "aliases": [],
      "description": "Muestra un mensaje con botones interactivos",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "bots",
      "base": "bots",
      "primary": true,
      "aliases": [
        "jadibots",
        "subbots",
        "misbots",
        "misjadibots",
        "listajadibots",
        "verbots",
        "listabots"
      ],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "jadibots",
      "base": "bots",
      "primary": false,
      "aliases": [],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "subbots",
      "base": "bots",
      "primary": false,
      "aliases": [],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "misbots",
      "base": "bots",
      "primary": false,
      "aliases": [],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "misjadibots",
      "base": "bots",
      "primary": false,
      "aliases": [],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "listajadibots",
      "base": "bots",
      "primary": false,
      "aliases": [],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "verbots",
      "base": "bots",
      "primary": false,
      "aliases": [],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "listabots",
      "base": "bots",
      "primary": false,
      "aliases": [],
      "description": "Lista los jadibots premium y normales que puedes ver",
      "usage": "[premium|normal|todos]",
      "category": "jadibot"
    },
    {
      "name": "brat",
      "base": "brat",
      "primary": true,
      "aliases": [
        "bratsticker",
        "stickerbrat"
      ],
      "description": "Crea un sticker estilo brat con el texto que envíes o respondas",
      "usage": "<texto>",
      "category": "multimedia"
    },
    {
      "name": "bratsticker",
      "base": "brat",
      "primary": false,
      "aliases": [],
      "description": "Crea un sticker estilo brat con el texto que envíes o respondas",
      "usage": "<texto>",
      "category": "multimedia"
    },
    {
      "name": "stickerbrat",
      "base": "brat",
      "primary": false,
      "aliases": [],
      "description": "Crea un sticker estilo brat con el texto que envíes o respondas",
      "usage": "<texto>",
      "category": "multimedia"
    },
    {
      "name": "buscar",
      "base": "buscar",
      "primary": true,
      "aliases": [
        "search",
        "google",
        "ddg"
      ],
      "description": "Busca información y enlaces en internet",
      "usage": "<texto>",
      "category": "info"
    },
    {
      "name": "search",
      "base": "buscar",
      "primary": false,
      "aliases": [],
      "description": "Busca información y enlaces en internet",
      "usage": "<texto>",
      "category": "info"
    },
    {
      "name": "google",
      "base": "buscar",
      "primary": false,
      "aliases": [],
      "description": "Busca información y enlaces en internet",
      "usage": "<texto>",
      "category": "info"
    },
    {
      "name": "ddg",
      "base": "buscar",
      "primary": false,
      "aliases": [],
      "description": "Busca información y enlaces en internet",
      "usage": "<texto>",
      "category": "info"
    },
    {
      "name": "calc",
      "base": "calc",
      "primary": true,
      "aliases": [
        "calculadora",
        "math",
        "matematica",
        "matemática"
      ],
      "description": "Calcula operaciones matemáticas",
      "usage": "<operación>",
      "category": "utilidades"
    },
    {
      "name": "calculadora",
      "base": "calc",
      "primary": false,
      "aliases": [],
      "description": "Calcula operaciones matemáticas",
      "usage": "<operación>",
      "category": "utilidades"
    },
    {
      "name": "math",
      "base": "calc",
      "primary": false,
      "aliases": [],
      "description": "Calcula operaciones matemáticas",
      "usage": "<operación>",
      "category": "utilidades"
    },
    {
      "name": "matematica",
      "base": "calc",
      "primary": false,
      "aliases": [],
      "description": "Calcula operaciones matemáticas",
      "usage": "<operación>",
      "category": "utilidades"
    },
    {
      "name": "matemática",
      "base": "calc",
      "primary": false,
      "aliases": [],
      "description": "Calcula operaciones matemáticas",
      "usage": "<operación>",
      "category": "utilidades"
    },
    {
      "name": "carrera",
      "base": "carrera",
      "primary": true,
      "aliases": [
        "race",
        "caballos",
        "apuesta",
        "hipodromo",
        "hipódromo"
      ],
      "description": "Apuesta por un caballo y gana 3 veces tu apuesta",
      "usage": "<1-4> <cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "race",
      "base": "carrera",
      "primary": false,
      "aliases": [],
      "description": "Apuesta por un caballo y gana 3 veces tu apuesta",
      "usage": "<1-4> <cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "caballos",
      "base": "carrera",
      "primary": false,
      "aliases": [],
      "description": "Apuesta por un caballo y gana 3 veces tu apuesta",
      "usage": "<1-4> <cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "apuesta",
      "base": "carrera",
      "primary": false,
      "aliases": [],
      "description": "Apuesta por un caballo y gana 3 veces tu apuesta",
      "usage": "<1-4> <cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "hipodromo",
      "base": "carrera",
      "primary": false,
      "aliases": [],
      "description": "Apuesta por un caballo y gana 3 veces tu apuesta",
      "usage": "<1-4> <cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "hipódromo",
      "base": "carrera",
      "primary": false,
      "aliases": [],
      "description": "Apuesta por un caballo y gana 3 veces tu apuesta",
      "usage": "<1-4> <cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "carrusel",
      "base": "carrusel",
      "primary": true,
      "aliases": [
        "carousel",
        "cards"
      ],
      "description": "Muestra un carrusel de tarjetas interactivas",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "carousel",
      "base": "carrusel",
      "primary": false,
      "aliases": [],
      "description": "Muestra un carrusel de tarjetas interactivas",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "cards",
      "base": "carrusel",
      "primary": false,
      "aliases": [],
      "description": "Muestra un carrusel de tarjetas interactivas",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "cartera",
      "base": "cartera",
      "primary": true,
      "aliases": [
        "coins",
        "saldo",
        "balance",
        "wallet"
      ],
      "description": "Muestra tu saldo de NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "coins",
      "base": "cartera",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu saldo de NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "saldo",
      "base": "cartera",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu saldo de NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "balance",
      "base": "cartera",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu saldo de NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "wallet",
      "base": "cartera",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu saldo de NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "cazar",
      "base": "cazar",
      "primary": true,
      "aliases": [
        "caza",
        "hunt",
        "cazador"
      ],
      "description": "Caza animales para ganar NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "caza",
      "base": "cazar",
      "primary": false,
      "aliases": [],
      "description": "Caza animales para ganar NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "hunt",
      "base": "cazar",
      "primary": false,
      "aliases": [],
      "description": "Caza animales para ganar NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "cazador",
      "base": "cazar",
      "primary": false,
      "aliases": [],
      "description": "Caza animales para ganar NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "cerrar",
      "base": "cerrar",
      "primary": true,
      "aliases": [
        "cerrargrupo",
        "groupclose",
        "close"
      ],
      "description": "Cierra el grupo para que solo los administradores escriban",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "cerrargrupo",
      "base": "cerrar",
      "primary": false,
      "aliases": [],
      "description": "Cierra el grupo para que solo los administradores escriban",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "groupclose",
      "base": "cerrar",
      "primary": false,
      "aliases": [],
      "description": "Cierra el grupo para que solo los administradores escriban",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "close",
      "base": "cerrar",
      "primary": false,
      "aliases": [],
      "description": "Cierra el grupo para que solo los administradores escriban",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "chiste",
      "base": "chiste",
      "primary": true,
      "aliases": [
        "joke",
        "broma"
      ],
      "description": "Cuenta un chiste aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "joke",
      "base": "chiste",
      "primary": false,
      "aliases": [],
      "description": "Cuenta un chiste aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "broma",
      "base": "chiste",
      "primary": false,
      "aliases": [],
      "description": "Cuenta un chiste aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "claim",
      "base": "claim",
      "primary": true,
      "aliases": [
        "daily",
        "diario",
        "reclamar"
      ],
      "description": "Reclama tu recompensa diaria y las recompensas pendientes de nekos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "daily",
      "base": "claim",
      "primary": false,
      "aliases": [],
      "description": "Reclama tu recompensa diaria y las recompensas pendientes de nekos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "diario",
      "base": "claim",
      "primary": false,
      "aliases": [],
      "description": "Reclama tu recompensa diaria y las recompensas pendientes de nekos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "reclamar",
      "base": "claim",
      "primary": false,
      "aliases": [],
      "description": "Reclama tu recompensa diaria y las recompensas pendientes de nekos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "clima",
      "base": "clima",
      "primary": true,
      "aliases": [
        "weather",
        "tiempo"
      ],
      "description": "Muestra el clima actual y el pronóstico de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "weather",
      "base": "clima",
      "primary": false,
      "aliases": [],
      "description": "Muestra el clima actual y el pronóstico de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "tiempo",
      "base": "clima",
      "primary": false,
      "aliases": [],
      "description": "Muestra el clima actual y el pronóstico de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "cocinar",
      "base": "cocinar",
      "primary": true,
      "aliases": [
        "cocina",
        "chef",
        "cocinero",
        "cocinarcomida"
      ],
      "description": "Cocina platos y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "cocina",
      "base": "cocinar",
      "primary": false,
      "aliases": [],
      "description": "Cocina platos y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "chef",
      "base": "cocinar",
      "primary": false,
      "aliases": [],
      "description": "Cocina platos y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "cocinero",
      "base": "cocinar",
      "primary": false,
      "aliases": [],
      "description": "Cocina platos y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "cocinarcomida",
      "base": "cocinar",
      "primary": false,
      "aliases": [],
      "description": "Cocina platos y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "code",
      "base": "code",
      "primary": true,
      "aliases": [
        "pairing"
      ],
      "description": "Conecta un jadibot normal o premium con código de emparejamiento",
      "usage": "[normal|premium] <número>",
      "category": "jadibot"
    },
    {
      "name": "pairing",
      "base": "code",
      "primary": false,
      "aliases": [],
      "description": "Conecta un jadibot normal o premium con código de emparejamiento",
      "usage": "[normal|premium] <número>",
      "category": "jadibot"
    },
    {
      "name": "cofre",
      "base": "cofre",
      "primary": true,
      "aliases": [
        "chest",
        "tesoro",
        "abrircofre",
        "bau"
      ],
      "description": "Abre un cofre misterioso cada 6 horas",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "chest",
      "base": "cofre",
      "primary": false,
      "aliases": [],
      "description": "Abre un cofre misterioso cada 6 horas",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "tesoro",
      "base": "cofre",
      "primary": false,
      "aliases": [],
      "description": "Abre un cofre misterioso cada 6 horas",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "abrircofre",
      "base": "cofre",
      "primary": false,
      "aliases": [],
      "description": "Abre un cofre misterioso cada 6 horas",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "bau",
      "base": "cofre",
      "primary": false,
      "aliases": [],
      "description": "Abre un cofre misterioso cada 6 horas",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "color",
      "base": "color",
      "primary": true,
      "aliases": [
        "colour",
        "rgb",
        "hex"
      ],
      "description": "Convierte colores entre HEX, RGB y HSL",
      "usage": "<hex o rgb>",
      "category": "utilidades"
    },
    {
      "name": "colour",
      "base": "color",
      "primary": false,
      "aliases": [],
      "description": "Convierte colores entre HEX, RGB y HSL",
      "usage": "<hex o rgb>",
      "category": "utilidades"
    },
    {
      "name": "rgb",
      "base": "color",
      "primary": false,
      "aliases": [],
      "description": "Convierte colores entre HEX, RGB y HSL",
      "usage": "<hex o rgb>",
      "category": "utilidades"
    },
    {
      "name": "hex",
      "base": "color",
      "primary": false,
      "aliases": [],
      "description": "Convierte colores entre HEX, RGB y HSL",
      "usage": "<hex o rgb>",
      "category": "utilidades"
    },
    {
      "name": "comprar",
      "base": "comprar",
      "primary": true,
      "aliases": [
        "buy",
        "purchase"
      ],
      "description": "Compra un producto de la tienda con NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "buy",
      "base": "comprar",
      "primary": false,
      "aliases": [],
      "description": "Compra un producto de la tienda con NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "purchase",
      "base": "comprar",
      "primary": false,
      "aliases": [],
      "description": "Compra un producto de la tienda con NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "contar",
      "base": "contar",
      "primary": true,
      "aliases": [
        "palabras",
        "wordcount",
        "caracteres"
      ],
      "description": "Cuenta caracteres, palabras y líneas de un texto",
      "usage": "<texto>",
      "category": "utilidades"
    },
    {
      "name": "palabras",
      "base": "contar",
      "primary": false,
      "aliases": [],
      "description": "Cuenta caracteres, palabras y líneas de un texto",
      "usage": "<texto>",
      "category": "utilidades"
    },
    {
      "name": "wordcount",
      "base": "contar",
      "primary": false,
      "aliases": [],
      "description": "Cuenta caracteres, palabras y líneas de un texto",
      "usage": "<texto>",
      "category": "utilidades"
    },
    {
      "name": "caracteres",
      "base": "contar",
      "primary": false,
      "aliases": [],
      "description": "Cuenta caracteres, palabras y líneas de un texto",
      "usage": "<texto>",
      "category": "utilidades"
    },
    {
      "name": "coub",
      "base": "coub",
      "primary": true,
      "aliases": [
        "coubdl"
      ],
      "description": "Descarga un video de Coub",
      "usage": "🔁 *DESCARGA DE COUB*\n\n🔗 Uso: */coub <enlace>*\n✨ Ejemplo: */coub https://coub.com/view/vgtde37vzg*",
      "category": "descargas"
    },
    {
      "name": "coubdl",
      "base": "coub",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Coub",
      "usage": "🔁 *DESCARGA DE COUB*\n\n🔗 Uso: */coub <enlace>*\n✨ Ejemplo: */coub https://coub.com/view/vgtde37vzg*",
      "category": "descargas"
    },
    {
      "name": "creditos",
      "base": "creditos",
      "primary": true,
      "aliases": [
        "créditos",
        "credits",
        "autores",
        "creadores",
        "staffcreditos"
      ],
      "description": "Muestra los créditos, el creador y el equipo del bot",
      "usage": "",
      "category": "staff"
    },
    {
      "name": "créditos",
      "base": "creditos",
      "primary": false,
      "aliases": [],
      "description": "Muestra los créditos, el creador y el equipo del bot",
      "usage": "",
      "category": "staff"
    },
    {
      "name": "credits",
      "base": "creditos",
      "primary": false,
      "aliases": [],
      "description": "Muestra los créditos, el creador y el equipo del bot",
      "usage": "",
      "category": "staff"
    },
    {
      "name": "autores",
      "base": "creditos",
      "primary": false,
      "aliases": [],
      "description": "Muestra los créditos, el creador y el equipo del bot",
      "usage": "",
      "category": "staff"
    },
    {
      "name": "creadores",
      "base": "creditos",
      "primary": false,
      "aliases": [],
      "description": "Muestra los créditos, el creador y el equipo del bot",
      "usage": "",
      "category": "staff"
    },
    {
      "name": "staffcreditos",
      "base": "creditos",
      "primary": false,
      "aliases": [],
      "description": "Muestra los créditos, el creador y el equipo del bot",
      "usage": "",
      "category": "staff"
    },
    {
      "name": "crimen",
      "base": "crimen",
      "primary": true,
      "aliases": [
        "crime",
        "delito",
        "atraco"
      ],
      "description": "Comete un crimen: gana mucho o paga la multa",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "crime",
      "base": "crimen",
      "primary": false,
      "aliases": [],
      "description": "Comete un crimen: gana mucho o paga la multa",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "delito",
      "base": "crimen",
      "primary": false,
      "aliases": [],
      "description": "Comete un crimen: gana mucho o paga la multa",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "atraco",
      "base": "crimen",
      "primary": false,
      "aliases": [],
      "description": "Comete un crimen: gana mucho o paga la multa",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "cripto",
      "base": "cripto",
      "primary": true,
      "aliases": [
        "crypto",
        "criptomoneda",
        "bitcoin",
        "btc",
        "eth",
        "coin"
      ],
      "description": "Consulta precios y variación de criptomonedas en dólares y soles",
      "usage": "[moneda]",
      "category": "info"
    },
    {
      "name": "crypto",
      "base": "cripto",
      "primary": false,
      "aliases": [],
      "description": "Consulta precios y variación de criptomonedas en dólares y soles",
      "usage": "[moneda]",
      "category": "info"
    },
    {
      "name": "criptomoneda",
      "base": "cripto",
      "primary": false,
      "aliases": [],
      "description": "Consulta precios y variación de criptomonedas en dólares y soles",
      "usage": "[moneda]",
      "category": "info"
    },
    {
      "name": "bitcoin",
      "base": "cripto",
      "primary": false,
      "aliases": [],
      "description": "Consulta precios y variación de criptomonedas en dólares y soles",
      "usage": "[moneda]",
      "category": "info"
    },
    {
      "name": "btc",
      "base": "cripto",
      "primary": false,
      "aliases": [],
      "description": "Consulta precios y variación de criptomonedas en dólares y soles",
      "usage": "[moneda]",
      "category": "info"
    },
    {
      "name": "eth",
      "base": "cripto",
      "primary": false,
      "aliases": [],
      "description": "Consulta precios y variación de criptomonedas en dólares y soles",
      "usage": "[moneda]",
      "category": "info"
    },
    {
      "name": "coin",
      "base": "cripto",
      "primary": false,
      "aliases": [],
      "description": "Consulta precios y variación de criptomonedas en dólares y soles",
      "usage": "[moneda]",
      "category": "info"
    },
    {
      "name": "curiosidad",
      "base": "curiosidad",
      "primary": true,
      "aliases": [
        "dato",
        "sabias",
        "sabías",
        "curiosidades",
        "fact",
        "datocurioso"
      ],
      "description": "Comparte un dato curioso aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "dato",
      "base": "curiosidad",
      "primary": false,
      "aliases": [],
      "description": "Comparte un dato curioso aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "sabias",
      "base": "curiosidad",
      "primary": false,
      "aliases": [],
      "description": "Comparte un dato curioso aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "sabías",
      "base": "curiosidad",
      "primary": false,
      "aliases": [],
      "description": "Comparte un dato curioso aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "curiosidades",
      "base": "curiosidad",
      "primary": false,
      "aliases": [],
      "description": "Comparte un dato curioso aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "fact",
      "base": "curiosidad",
      "primary": false,
      "aliases": [],
      "description": "Comparte un dato curioso aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "datocurioso",
      "base": "curiosidad",
      "primary": false,
      "aliases": [],
      "description": "Comparte un dato curioso aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "dado",
      "base": "dado",
      "primary": true,
      "aliases": [
        "dice",
        "dados"
      ],
      "description": "Lanza un dado y apuesta monedas si quieres",
      "usage": "[apuesta]",
      "category": "juegos"
    },
    {
      "name": "dice",
      "base": "dado",
      "primary": false,
      "aliases": [],
      "description": "Lanza un dado y apuesta monedas si quieres",
      "usage": "[apuesta]",
      "category": "juegos"
    },
    {
      "name": "dados",
      "base": "dado",
      "primary": false,
      "aliases": [],
      "description": "Lanza un dado y apuesta monedas si quieres",
      "usage": "[apuesta]",
      "category": "juegos"
    },
    {
      "name": "dailymotion",
      "base": "dailymotion",
      "primary": true,
      "aliases": [
        "dm",
        "dailymotiondl",
        "dai"
      ],
      "description": "Descarga un video de Dailymotion",
      "usage": "🎥 *DESCARGA DE DAILYMOTION*\n\n🔗 Uso: */dailymotion <enlace>*\n✨ Ejemplo: */dailymotion https://www.dailymotion.com/video/xbucbr2*",
      "category": "descargas"
    },
    {
      "name": "dm",
      "base": "dailymotion",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Dailymotion",
      "usage": "🎥 *DESCARGA DE DAILYMOTION*\n\n🔗 Uso: */dailymotion <enlace>*\n✨ Ejemplo: */dailymotion https://www.dailymotion.com/video/xbucbr2*",
      "category": "descargas"
    },
    {
      "name": "dailymotiondl",
      "base": "dailymotion",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Dailymotion",
      "usage": "🎥 *DESCARGA DE DAILYMOTION*\n\n🔗 Uso: */dailymotion <enlace>*\n✨ Ejemplo: */dailymotion https://www.dailymotion.com/video/xbucbr2*",
      "category": "descargas"
    },
    {
      "name": "dai",
      "base": "dailymotion",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Dailymotion",
      "usage": "🎥 *DESCARGA DE DAILYMOTION*\n\n🔗 Uso: */dailymotion <enlace>*\n✨ Ejemplo: */dailymotion https://www.dailymotion.com/video/xbucbr2*",
      "category": "descargas"
    },
    {
      "name": "darmonedas",
      "base": "darmonedas",
      "primary": true,
      "aliases": [
        "addcoins",
        "darcoins",
        "dardinero",
        "regalarmonedas"
      ],
      "description": "Entrega monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "addcoins",
      "base": "darmonedas",
      "primary": false,
      "aliases": [],
      "description": "Entrega monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "darcoins",
      "base": "darmonedas",
      "primary": false,
      "aliases": [],
      "description": "Entrega monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "dardinero",
      "base": "darmonedas",
      "primary": false,
      "aliases": [],
      "description": "Entrega monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "regalarmonedas",
      "base": "darmonedas",
      "primary": false,
      "aliases": [],
      "description": "Entrega monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "del",
      "base": "del",
      "primary": true,
      "aliases": [
        "borrar",
        "eliminar",
        "delete",
        "rm",
        "delmsg"
      ],
      "description": "Borra un mensaje respondido (solo dueño o administradores)",
      "usage": "[responde al mensaje]",
      "category": "admin"
    },
    {
      "name": "borrar",
      "base": "del",
      "primary": false,
      "aliases": [],
      "description": "Borra un mensaje respondido (solo dueño o administradores)",
      "usage": "[responde al mensaje]",
      "category": "admin"
    },
    {
      "name": "eliminar",
      "base": "del",
      "primary": false,
      "aliases": [],
      "description": "Borra un mensaje respondido (solo dueño o administradores)",
      "usage": "[responde al mensaje]",
      "category": "admin"
    },
    {
      "name": "delete",
      "base": "del",
      "primary": false,
      "aliases": [],
      "description": "Borra un mensaje respondido (solo dueño o administradores)",
      "usage": "[responde al mensaje]",
      "category": "admin"
    },
    {
      "name": "rm",
      "base": "del",
      "primary": false,
      "aliases": [],
      "description": "Borra un mensaje respondido (solo dueño o administradores)",
      "usage": "[responde al mensaje]",
      "category": "admin"
    },
    {
      "name": "delmsg",
      "base": "del",
      "primary": false,
      "aliases": [],
      "description": "Borra un mensaje respondido (solo dueño o administradores)",
      "usage": "[responde al mensaje]",
      "category": "admin"
    },
    {
      "name": "demote",
      "base": "demote",
      "primary": true,
      "aliases": [
        "degradar",
        "quitaradmin"
      ],
      "description": "Quita el administrador a un usuario mencionado",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "degradar",
      "base": "demote",
      "primary": false,
      "aliases": [],
      "description": "Quita el administrador a un usuario mencionado",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "quitaradmin",
      "base": "demote",
      "primary": false,
      "aliases": [],
      "description": "Quita el administrador a un usuario mencionado",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "dep",
      "base": "dep",
      "primary": true,
      "aliases": [
        "depositar",
        "deposito",
        "depósito"
      ],
      "description": "Deposita monedas en tu cuenta del banco",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "depositar",
      "base": "dep",
      "primary": false,
      "aliases": [],
      "description": "Deposita monedas en tu cuenta del banco",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "deposito",
      "base": "dep",
      "primary": false,
      "aliases": [],
      "description": "Deposita monedas en tu cuenta del banco",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "depósito",
      "base": "dep",
      "primary": false,
      "aliases": [],
      "description": "Deposita monedas en tu cuenta del banco",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "dns",
      "base": "dns",
      "primary": true,
      "aliases": [
        "resolver",
        "registrosdns"
      ],
      "description": "Consulta los registros DNS de un dominio",
      "usage": "<dominio> [tipo]",
      "category": "info"
    },
    {
      "name": "resolver",
      "base": "dns",
      "primary": false,
      "aliases": [],
      "description": "Consulta los registros DNS de un dominio",
      "usage": "<dominio> [tipo]",
      "category": "info"
    },
    {
      "name": "registrosdns",
      "base": "dns",
      "primary": false,
      "aliases": [],
      "description": "Consulta los registros DNS de un dominio",
      "usage": "<dominio> [tipo]",
      "category": "info"
    },
    {
      "name": "dolar",
      "base": "dolar",
      "primary": true,
      "aliases": [
        "dólar",
        "cambio",
        "divisas",
        "tipo"
      ],
      "description": "Consulta el tipo de cambio actual entre monedas",
      "usage": "[moneda base]",
      "category": "info"
    },
    {
      "name": "dólar",
      "base": "dolar",
      "primary": false,
      "aliases": [],
      "description": "Consulta el tipo de cambio actual entre monedas",
      "usage": "[moneda base]",
      "category": "info"
    },
    {
      "name": "cambio",
      "base": "dolar",
      "primary": false,
      "aliases": [],
      "description": "Consulta el tipo de cambio actual entre monedas",
      "usage": "[moneda base]",
      "category": "info"
    },
    {
      "name": "divisas",
      "base": "dolar",
      "primary": false,
      "aliases": [],
      "description": "Consulta el tipo de cambio actual entre monedas",
      "usage": "[moneda base]",
      "category": "info"
    },
    {
      "name": "tipo",
      "base": "dolar",
      "primary": false,
      "aliases": [],
      "description": "Consulta el tipo de cambio actual entre monedas",
      "usage": "[moneda base]",
      "category": "info"
    },
    {
      "name": "dominio",
      "base": "dominio",
      "primary": true,
      "aliases": [
        "whois",
        "rdap",
        "domain"
      ],
      "description": "Consulta la información WHOIS/RDAP de un dominio",
      "usage": "<dominio>",
      "category": "info"
    },
    {
      "name": "whois",
      "base": "dominio",
      "primary": false,
      "aliases": [],
      "description": "Consulta la información WHOIS/RDAP de un dominio",
      "usage": "<dominio>",
      "category": "info"
    },
    {
      "name": "rdap",
      "base": "dominio",
      "primary": false,
      "aliases": [],
      "description": "Consulta la información WHOIS/RDAP de un dominio",
      "usage": "<dominio>",
      "category": "info"
    },
    {
      "name": "domain",
      "base": "dominio",
      "primary": false,
      "aliases": [],
      "description": "Consulta la información WHOIS/RDAP de un dominio",
      "usage": "<dominio>",
      "category": "info"
    },
    {
      "name": "edad",
      "base": "edad",
      "primary": true,
      "aliases": [
        "cumple",
        "nacimiento"
      ],
      "description": "Calcula tu edad exacta y tu próximo cumpleaños",
      "usage": "<dd/mm/aaaa>",
      "category": "utilidades"
    },
    {
      "name": "cumple",
      "base": "edad",
      "primary": false,
      "aliases": [],
      "description": "Calcula tu edad exacta y tu próximo cumpleaños",
      "usage": "<dd/mm/aaaa>",
      "category": "utilidades"
    },
    {
      "name": "nacimiento",
      "base": "edad",
      "primary": false,
      "aliases": [],
      "description": "Calcula tu edad exacta y tu próximo cumpleaños",
      "usage": "<dd/mm/aaaa>",
      "category": "utilidades"
    },
    {
      "name": "encuesta",
      "base": "encuesta",
      "primary": true,
      "aliases": [
        "poll",
        "votacion",
        "votación",
        "crearencuesta"
      ],
      "description": "Crea una encuesta rápida en el chat",
      "usage": "<pregunta> | <opción 1> | <opción 2> ...",
      "category": "utilidades"
    },
    {
      "name": "poll",
      "base": "encuesta",
      "primary": false,
      "aliases": [],
      "description": "Crea una encuesta rápida en el chat",
      "usage": "<pregunta> | <opción 1> | <opción 2> ...",
      "category": "utilidades"
    },
    {
      "name": "votacion",
      "base": "encuesta",
      "primary": false,
      "aliases": [],
      "description": "Crea una encuesta rápida en el chat",
      "usage": "<pregunta> | <opción 1> | <opción 2> ...",
      "category": "utilidades"
    },
    {
      "name": "votación",
      "base": "encuesta",
      "primary": false,
      "aliases": [],
      "description": "Crea una encuesta rápida en el chat",
      "usage": "<pregunta> | <opción 1> | <opción 2> ...",
      "category": "utilidades"
    },
    {
      "name": "crearencuesta",
      "base": "encuesta",
      "primary": false,
      "aliases": [],
      "description": "Crea una encuesta rápida en el chat",
      "usage": "<pregunta> | <opción 1> | <opción 2> ...",
      "category": "utilidades"
    },
    {
      "name": "estadogrupo",
      "base": "estadogrupo",
      "primary": true,
      "aliases": [
        "statusgrupo",
        "vergrupo",
        "panelgrupo",
        "seguridadgrupo",
        "configgrupo"
      ],
      "description": "Muestra si antibot, antilink y otras protecciones están ON u OFF",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "statusgrupo",
      "base": "estadogrupo",
      "primary": false,
      "aliases": [],
      "description": "Muestra si antibot, antilink y otras protecciones están ON u OFF",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "vergrupo",
      "base": "estadogrupo",
      "primary": false,
      "aliases": [],
      "description": "Muestra si antibot, antilink y otras protecciones están ON u OFF",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "panelgrupo",
      "base": "estadogrupo",
      "primary": false,
      "aliases": [],
      "description": "Muestra si antibot, antilink y otras protecciones están ON u OFF",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "seguridadgrupo",
      "base": "estadogrupo",
      "primary": false,
      "aliases": [],
      "description": "Muestra si antibot, antilink y otras protecciones están ON u OFF",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "configgrupo",
      "base": "estadogrupo",
      "primary": false,
      "aliases": [],
      "description": "Muestra si antibot, antilink y otras protecciones están ON u OFF",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "fbdl",
      "base": "fbdl",
      "primary": true,
      "aliases": [
        "facebook",
        "fb",
        "fbvideo"
      ],
      "description": "Descarga un video de Facebook",
      "usage": "<enlace de Facebook>",
      "category": "descargas"
    },
    {
      "name": "facebook",
      "base": "fbdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Facebook",
      "usage": "<enlace de Facebook>",
      "category": "descargas"
    },
    {
      "name": "fb",
      "base": "fbdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Facebook",
      "usage": "<enlace de Facebook>",
      "category": "descargas"
    },
    {
      "name": "fbvideo",
      "base": "fbdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Facebook",
      "usage": "<enlace de Facebook>",
      "category": "descargas"
    },
    {
      "name": "feriados",
      "base": "feriados",
      "primary": true,
      "aliases": [
        "feriado",
        "holiday",
        "holidays"
      ],
      "description": "Muestra los próximos feriados de un país",
      "usage": "[código de país]",
      "category": "info"
    },
    {
      "name": "feriado",
      "base": "feriados",
      "primary": false,
      "aliases": [],
      "description": "Muestra los próximos feriados de un país",
      "usage": "[código de país]",
      "category": "info"
    },
    {
      "name": "holiday",
      "base": "feriados",
      "primary": false,
      "aliases": [],
      "description": "Muestra los próximos feriados de un país",
      "usage": "[código de país]",
      "category": "info"
    },
    {
      "name": "holidays",
      "base": "feriados",
      "primary": false,
      "aliases": [],
      "description": "Muestra los próximos feriados de un país",
      "usage": "[código de país]",
      "category": "info"
    },
    {
      "name": "frase",
      "base": "frase",
      "primary": true,
      "aliases": [
        "consejo",
        "motivacion",
        "motivación"
      ],
      "description": "Envía una frase motivacional aleatoria",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "consejo",
      "base": "frase",
      "primary": false,
      "aliases": [],
      "description": "Envía una frase motivacional aleatoria",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "motivacion",
      "base": "frase",
      "primary": false,
      "aliases": [],
      "description": "Envía una frase motivacional aleatoria",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "motivación",
      "base": "frase",
      "primary": false,
      "aliases": [],
      "description": "Envía una frase motivacional aleatoria",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "gato",
      "base": "gato",
      "primary": true,
      "aliases": [
        "cat",
        "gatos",
        "meow",
        "kitty"
      ],
      "description": "Envía una foto de un gato aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "cat",
      "base": "gato",
      "primary": false,
      "aliases": [],
      "description": "Envía una foto de un gato aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "gatos",
      "base": "gato",
      "primary": false,
      "aliases": [],
      "description": "Envía una foto de un gato aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "meow",
      "base": "gato",
      "primary": false,
      "aliases": [],
      "description": "Envía una foto de un gato aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "kitty",
      "base": "gato",
      "primary": false,
      "aliases": [],
      "description": "Envía una foto de un gato aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "github",
      "base": "github",
      "primary": true,
      "aliases": [
        "git",
        "gh"
      ],
      "description": "Muestra información de un usuario o repositorio de GitHub",
      "usage": "<usuario> o <usuario/repositorio>",
      "category": "info"
    },
    {
      "name": "git",
      "base": "github",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un usuario o repositorio de GitHub",
      "usage": "<usuario> o <usuario/repositorio>",
      "category": "info"
    },
    {
      "name": "gh",
      "base": "github",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un usuario o repositorio de GitHub",
      "usage": "<usuario> o <usuario/repositorio>",
      "category": "info"
    },
    {
      "name": "hash",
      "base": "hash",
      "primary": true,
      "aliases": [
        "md5",
        "sha1",
        "sha256",
        "sha512"
      ],
      "description": "Genera el hash MD5, SHA-1, SHA-256 o SHA-512 de un texto",
      "usage": "[algoritmo] <texto>",
      "category": "utilidades"
    },
    {
      "name": "md5",
      "base": "hash",
      "primary": false,
      "aliases": [],
      "description": "Genera el hash MD5, SHA-1, SHA-256 o SHA-512 de un texto",
      "usage": "[algoritmo] <texto>",
      "category": "utilidades"
    },
    {
      "name": "sha1",
      "base": "hash",
      "primary": false,
      "aliases": [],
      "description": "Genera el hash MD5, SHA-1, SHA-256 o SHA-512 de un texto",
      "usage": "[algoritmo] <texto>",
      "category": "utilidades"
    },
    {
      "name": "sha256",
      "base": "hash",
      "primary": false,
      "aliases": [],
      "description": "Genera el hash MD5, SHA-1, SHA-256 o SHA-512 de un texto",
      "usage": "[algoritmo] <texto>",
      "category": "utilidades"
    },
    {
      "name": "sha512",
      "base": "hash",
      "primary": false,
      "aliases": [],
      "description": "Genera el hash MD5, SHA-1, SHA-256 o SHA-512 de un texto",
      "usage": "[algoritmo] <texto>",
      "category": "utilidades"
    },
    {
      "name": "hola",
      "base": "hola",
      "primary": true,
      "aliases": [
        "hello",
        "hi",
        "holaa"
      ],
      "description": "Te saluda de forma sencilla, sin usar inteligencia artificial",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "hello",
      "base": "hola",
      "primary": false,
      "aliases": [],
      "description": "Te saluda de forma sencilla, sin usar inteligencia artificial",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "hi",
      "base": "hola",
      "primary": false,
      "aliases": [],
      "description": "Te saluda de forma sencilla, sin usar inteligencia artificial",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "holaa",
      "base": "hola",
      "primary": false,
      "aliases": [],
      "description": "Te saluda de forma sencilla, sin usar inteligencia artificial",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "hora",
      "base": "hora",
      "primary": true,
      "aliases": [
        "time",
        "reloj",
        "horamundial",
        "worldtime"
      ],
      "description": "Muestra la hora y fecha actuales en cualquier ciudad del mundo",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "time",
      "base": "hora",
      "primary": false,
      "aliases": [],
      "description": "Muestra la hora y fecha actuales en cualquier ciudad del mundo",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "reloj",
      "base": "hora",
      "primary": false,
      "aliases": [],
      "description": "Muestra la hora y fecha actuales en cualquier ciudad del mundo",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "horamundial",
      "base": "hora",
      "primary": false,
      "aliases": [],
      "description": "Muestra la hora y fecha actuales en cualquier ciudad del mundo",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "worldtime",
      "base": "hora",
      "primary": false,
      "aliases": [],
      "description": "Muestra la hora y fecha actuales en cualquier ciudad del mundo",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "horario",
      "base": "horario",
      "primary": true,
      "aliases": [
        "horarios",
        "horariogrupo",
        "grupoauto",
        "autogrupo"
      ],
      "description": "Programa la apertura y el cierre automático del grupo",
      "usage": "<cerrar|abrir HH:MM|off|on|borrar>",
      "category": "admin"
    },
    {
      "name": "horarios",
      "base": "horario",
      "primary": false,
      "aliases": [],
      "description": "Programa la apertura y el cierre automático del grupo",
      "usage": "<cerrar|abrir HH:MM|off|on|borrar>",
      "category": "admin"
    },
    {
      "name": "horariogrupo",
      "base": "horario",
      "primary": false,
      "aliases": [],
      "description": "Programa la apertura y el cierre automático del grupo",
      "usage": "<cerrar|abrir HH:MM|off|on|borrar>",
      "category": "admin"
    },
    {
      "name": "grupoauto",
      "base": "horario",
      "primary": false,
      "aliases": [],
      "description": "Programa la apertura y el cierre automático del grupo",
      "usage": "<cerrar|abrir HH:MM|off|on|borrar>",
      "category": "admin"
    },
    {
      "name": "autogrupo",
      "base": "horario",
      "primary": false,
      "aliases": [],
      "description": "Programa la apertura y el cierre automático del grupo",
      "usage": "<cerrar|abrir HH:MM|off|on|borrar>",
      "category": "admin"
    },
    {
      "name": "horoscopo",
      "base": "horoscopo",
      "primary": true,
      "aliases": [
        "horóscopo",
        "zodiaco",
        "zodíaco",
        "signo"
      ],
      "description": "Muestra tu horóscopo diario según tu signo o fecha de nacimiento",
      "usage": "<signo o dd/mm>",
      "category": "entretenimiento"
    },
    {
      "name": "horóscopo",
      "base": "horoscopo",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu horóscopo diario según tu signo o fecha de nacimiento",
      "usage": "<signo o dd/mm>",
      "category": "entretenimiento"
    },
    {
      "name": "zodiaco",
      "base": "horoscopo",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu horóscopo diario según tu signo o fecha de nacimiento",
      "usage": "<signo o dd/mm>",
      "category": "entretenimiento"
    },
    {
      "name": "zodíaco",
      "base": "horoscopo",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu horóscopo diario según tu signo o fecha de nacimiento",
      "usage": "<signo o dd/mm>",
      "category": "entretenimiento"
    },
    {
      "name": "signo",
      "base": "horoscopo",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu horóscopo diario según tu signo o fecha de nacimiento",
      "usage": "<signo o dd/mm>",
      "category": "entretenimiento"
    },
    {
      "name": "ia",
      "base": "ia",
      "primary": true,
      "aliases": [
        "ai",
        "gemini",
        "chatgpt",
        "gpt"
      ],
      "description": "Conversa con la IA, descarga música, videos y enlaces",
      "usage": "<mensaje|descarga ...>",
      "category": "ia"
    },
    {
      "name": "ai",
      "base": "ia",
      "primary": false,
      "aliases": [],
      "description": "Conversa con la IA, descarga música, videos y enlaces",
      "usage": "<mensaje|descarga ...>",
      "category": "ia"
    },
    {
      "name": "gemini",
      "base": "ia",
      "primary": false,
      "aliases": [],
      "description": "Conversa con la IA, descarga música, videos y enlaces",
      "usage": "<mensaje|descarga ...>",
      "category": "ia"
    },
    {
      "name": "chatgpt",
      "base": "ia",
      "primary": false,
      "aliases": [],
      "description": "Conversa con la IA, descarga música, videos y enlaces",
      "usage": "<mensaje|descarga ...>",
      "category": "ia"
    },
    {
      "name": "gpt",
      "base": "ia",
      "primary": false,
      "aliases": [],
      "description": "Conversa con la IA, descarga música, videos y enlaces",
      "usage": "<mensaje|descarga ...>",
      "category": "ia"
    },
    {
      "name": "igdl",
      "base": "igdl",
      "primary": true,
      "aliases": [
        "instagram",
        "ig",
        "reels",
        "insta"
      ],
      "description": "Descarga un video o reel de Instagram",
      "usage": "<enlace de Instagram>",
      "category": "descargas"
    },
    {
      "name": "instagram",
      "base": "igdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video o reel de Instagram",
      "usage": "<enlace de Instagram>",
      "category": "descargas"
    },
    {
      "name": "ig",
      "base": "igdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video o reel de Instagram",
      "usage": "<enlace de Instagram>",
      "category": "descargas"
    },
    {
      "name": "reels",
      "base": "igdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video o reel de Instagram",
      "usage": "<enlace de Instagram>",
      "category": "descargas"
    },
    {
      "name": "insta",
      "base": "igdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video o reel de Instagram",
      "usage": "<enlace de Instagram>",
      "category": "descargas"
    },
    {
      "name": "imagine",
      "base": "imagine",
      "primary": true,
      "aliases": [
        "imagen",
        "imgai",
        "dibuja",
        "pintar",
        "generar",
        "flux"
      ],
      "description": "Genera imágenes con inteligencia artificial a partir de una descripción",
      "usage": "<descripción>",
      "category": "ia"
    },
    {
      "name": "imagen",
      "base": "imagine",
      "primary": false,
      "aliases": [],
      "description": "Genera imágenes con inteligencia artificial a partir de una descripción",
      "usage": "<descripción>",
      "category": "ia"
    },
    {
      "name": "imgai",
      "base": "imagine",
      "primary": false,
      "aliases": [],
      "description": "Genera imágenes con inteligencia artificial a partir de una descripción",
      "usage": "<descripción>",
      "category": "ia"
    },
    {
      "name": "dibuja",
      "base": "imagine",
      "primary": false,
      "aliases": [],
      "description": "Genera imágenes con inteligencia artificial a partir de una descripción",
      "usage": "<descripción>",
      "category": "ia"
    },
    {
      "name": "pintar",
      "base": "imagine",
      "primary": false,
      "aliases": [],
      "description": "Genera imágenes con inteligencia artificial a partir de una descripción",
      "usage": "<descripción>",
      "category": "ia"
    },
    {
      "name": "generar",
      "base": "imagine",
      "primary": false,
      "aliases": [],
      "description": "Genera imágenes con inteligencia artificial a partir de una descripción",
      "usage": "<descripción>",
      "category": "ia"
    },
    {
      "name": "flux",
      "base": "imagine",
      "primary": false,
      "aliases": [],
      "description": "Genera imágenes con inteligencia artificial a partir de una descripción",
      "usage": "<descripción>",
      "category": "ia"
    },
    {
      "name": "imc",
      "base": "imc",
      "primary": true,
      "aliases": [
        "masa",
        "peso"
      ],
      "description": "Calcula tu índice de masa corporal (IMC)",
      "usage": "<peso> <altura>",
      "category": "utilidades"
    },
    {
      "name": "masa",
      "base": "imc",
      "primary": false,
      "aliases": [],
      "description": "Calcula tu índice de masa corporal (IMC)",
      "usage": "<peso> <altura>",
      "category": "utilidades"
    },
    {
      "name": "peso",
      "base": "imc",
      "primary": false,
      "aliases": [],
      "description": "Calcula tu índice de masa corporal (IMC)",
      "usage": "<peso> <altura>",
      "category": "utilidades"
    },
    {
      "name": "imgur",
      "base": "imgur",
      "primary": true,
      "aliases": [
        "imgurdl"
      ],
      "description": "Descarga imágenes y videos de Imgur",
      "usage": "<enlace de Imgur>",
      "category": "descargas"
    },
    {
      "name": "imgurdl",
      "base": "imgur",
      "primary": false,
      "aliases": [],
      "description": "Descarga imágenes y videos de Imgur",
      "usage": "<enlace de Imgur>",
      "category": "descargas"
    },
    {
      "name": "info",
      "base": "info",
      "primary": true,
      "aliases": [
        "infobot",
        "botinfo",
        "acerca",
        "about",
        "creador"
      ],
      "description": "Muestra información, estado y estadísticas del bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "infobot",
      "base": "info",
      "primary": false,
      "aliases": [],
      "description": "Muestra información, estado y estadísticas del bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "botinfo",
      "base": "info",
      "primary": false,
      "aliases": [],
      "description": "Muestra información, estado y estadísticas del bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "acerca",
      "base": "info",
      "primary": false,
      "aliases": [],
      "description": "Muestra información, estado y estadísticas del bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "about",
      "base": "info",
      "primary": false,
      "aliases": [],
      "description": "Muestra información, estado y estadísticas del bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "creador",
      "base": "info",
      "primary": false,
      "aliases": [],
      "description": "Muestra información, estado y estadísticas del bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "infopremium",
      "base": "infopremium",
      "primary": true,
      "aliases": [
        "premiuminfo",
        "infoprem",
        "beneficiospremium"
      ],
      "description": "Muestra qué incluye un jadibot premium, novedades, precios y comandos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "premiuminfo",
      "base": "infopremium",
      "primary": false,
      "aliases": [],
      "description": "Muestra qué incluye un jadibot premium, novedades, precios y comandos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "infoprem",
      "base": "infopremium",
      "primary": false,
      "aliases": [],
      "description": "Muestra qué incluye un jadibot premium, novedades, precios y comandos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "beneficiospremium",
      "base": "infopremium",
      "primary": false,
      "aliases": [],
      "description": "Muestra qué incluye un jadibot premium, novedades, precios y comandos",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "interes",
      "base": "interes",
      "primary": true,
      "aliases": [
        "interés",
        "interest",
        "intereses"
      ],
      "description": "Reclama el interés diario de tu saldo en el banco",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "interés",
      "base": "interes",
      "primary": false,
      "aliases": [],
      "description": "Reclama el interés diario de tu saldo en el banco",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "interest",
      "base": "interes",
      "primary": false,
      "aliases": [],
      "description": "Reclama el interés diario de tu saldo en el banco",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "intereses",
      "base": "interes",
      "primary": false,
      "aliases": [],
      "description": "Reclama el interés diario de tu saldo en el banco",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "invertir",
      "base": "invertir",
      "primary": true,
      "aliases": [
        "invest",
        "inversion",
        "inversión",
        "bolsa"
      ],
      "description": "Invierte monedas con riesgo de ganar o perder",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "invest",
      "base": "invertir",
      "primary": false,
      "aliases": [],
      "description": "Invierte monedas con riesgo de ganar o perder",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "inversion",
      "base": "invertir",
      "primary": false,
      "aliases": [],
      "description": "Invierte monedas con riesgo de ganar o perder",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "inversión",
      "base": "invertir",
      "primary": false,
      "aliases": [],
      "description": "Invierte monedas con riesgo de ganar o perder",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "bolsa",
      "base": "invertir",
      "primary": false,
      "aliases": [],
      "description": "Invierte monedas con riesgo de ganar o perder",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "invitar",
      "base": "invitar",
      "primary": true,
      "aliases": [
        "invite",
        "promo",
        "reclutar",
        "compartir",
        "publicidad"
      ],
      "description": "Genera un mensaje listo para invitar gente a Novita Bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "invite",
      "base": "invitar",
      "primary": false,
      "aliases": [],
      "description": "Genera un mensaje listo para invitar gente a Novita Bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "promo",
      "base": "invitar",
      "primary": false,
      "aliases": [],
      "description": "Genera un mensaje listo para invitar gente a Novita Bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "reclutar",
      "base": "invitar",
      "primary": false,
      "aliases": [],
      "description": "Genera un mensaje listo para invitar gente a Novita Bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "compartir",
      "base": "invitar",
      "primary": false,
      "aliases": [],
      "description": "Genera un mensaje listo para invitar gente a Novita Bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "publicidad",
      "base": "invitar",
      "primary": false,
      "aliases": [],
      "description": "Genera un mensaje listo para invitar gente a Novita Bot",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "ip",
      "base": "ip",
      "primary": true,
      "aliases": [
        "ipinfo",
        "miip",
        "geoip"
      ],
      "description": "Muestra información pública de una dirección IP",
      "usage": "[dirección ip]",
      "category": "info"
    },
    {
      "name": "ipinfo",
      "base": "ip",
      "primary": false,
      "aliases": [],
      "description": "Muestra información pública de una dirección IP",
      "usage": "[dirección ip]",
      "category": "info"
    },
    {
      "name": "miip",
      "base": "ip",
      "primary": false,
      "aliases": [],
      "description": "Muestra información pública de una dirección IP",
      "usage": "[dirección ip]",
      "category": "info"
    },
    {
      "name": "geoip",
      "base": "ip",
      "primary": false,
      "aliases": [],
      "description": "Muestra información pública de una dirección IP",
      "usage": "[dirección ip]",
      "category": "info"
    },
    {
      "name": "isbn",
      "base": "isbn",
      "primary": true,
      "aliases": [
        "libroisbn"
      ],
      "description": "Busca un libro por su código ISBN",
      "usage": "<ISBN>",
      "category": "info"
    },
    {
      "name": "libroisbn",
      "base": "isbn",
      "primary": false,
      "aliases": [],
      "description": "Busca un libro por su código ISBN",
      "usage": "<ISBN>",
      "category": "info"
    },
    {
      "name": "iss",
      "base": "iss",
      "primary": true,
      "aliases": [
        "estacionespacial",
        "satelite",
        "satélite",
        "station"
      ],
      "description": "Muestra la ubicación actual de la Estación Espacial Internacional",
      "usage": "",
      "category": "info"
    },
    {
      "name": "estacionespacial",
      "base": "iss",
      "primary": false,
      "aliases": [],
      "description": "Muestra la ubicación actual de la Estación Espacial Internacional",
      "usage": "",
      "category": "info"
    },
    {
      "name": "satelite",
      "base": "iss",
      "primary": false,
      "aliases": [],
      "description": "Muestra la ubicación actual de la Estación Espacial Internacional",
      "usage": "",
      "category": "info"
    },
    {
      "name": "satélite",
      "base": "iss",
      "primary": false,
      "aliases": [],
      "description": "Muestra la ubicación actual de la Estación Espacial Internacional",
      "usage": "",
      "category": "info"
    },
    {
      "name": "station",
      "base": "iss",
      "primary": false,
      "aliases": [],
      "description": "Muestra la ubicación actual de la Estación Espacial Internacional",
      "usage": "",
      "category": "info"
    },
    {
      "name": "jadibot",
      "base": "jadibot",
      "primary": true,
      "aliases": [],
      "description": "Gestiona los jadibots (qr, code, list, stop)",
      "usage": "",
      "category": "jadibot"
    },
    {
      "name": "kick",
      "base": "kick",
      "primary": true,
      "aliases": [
        "expulsar",
        "sacar",
        "remove"
      ],
      "description": "Expulsa a un usuario mencionado del grupo",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "expulsar",
      "base": "kick",
      "primary": false,
      "aliases": [],
      "description": "Expulsa a un usuario mencionado del grupo",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "sacar",
      "base": "kick",
      "primary": false,
      "aliases": [],
      "description": "Expulsa a un usuario mencionado del grupo",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "remove",
      "base": "kick",
      "primary": false,
      "aliases": [],
      "description": "Expulsa a un usuario mencionado del grupo",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "letra",
      "base": "letra",
      "primary": true,
      "aliases": [
        "lyrics",
        "lyric"
      ],
      "description": "Busca la letra de una canción",
      "usage": "<artista> - <canción>",
      "category": "descargas"
    },
    {
      "name": "lyrics",
      "base": "letra",
      "primary": false,
      "aliases": [],
      "description": "Busca la letra de una canción",
      "usage": "<artista> - <canción>",
      "category": "descargas"
    },
    {
      "name": "lyric",
      "base": "letra",
      "primary": false,
      "aliases": [],
      "description": "Busca la letra de una canción",
      "usage": "<artista> - <canción>",
      "category": "descargas"
    },
    {
      "name": "liberar",
      "base": "liberar",
      "primary": true,
      "aliases": [
        "abandonarmascota",
        "soltarmascota",
        "releasepet",
        "liberarmascota"
      ],
      "description": "Libera una mascota de tu colección",
      "usage": "<número o nombre> confirmar",
      "category": "mascotas"
    },
    {
      "name": "abandonarmascota",
      "base": "liberar",
      "primary": false,
      "aliases": [],
      "description": "Libera una mascota de tu colección",
      "usage": "<número o nombre> confirmar",
      "category": "mascotas"
    },
    {
      "name": "soltarmascota",
      "base": "liberar",
      "primary": false,
      "aliases": [],
      "description": "Libera una mascota de tu colección",
      "usage": "<número o nombre> confirmar",
      "category": "mascotas"
    },
    {
      "name": "releasepet",
      "base": "liberar",
      "primary": false,
      "aliases": [],
      "description": "Libera una mascota de tu colección",
      "usage": "<número o nombre> confirmar",
      "category": "mascotas"
    },
    {
      "name": "liberarmascota",
      "base": "liberar",
      "primary": false,
      "aliases": [],
      "description": "Libera una mascota de tu colección",
      "usage": "<número o nombre> confirmar",
      "category": "mascotas"
    },
    {
      "name": "libro",
      "base": "libro",
      "primary": true,
      "aliases": [
        "books",
        "book",
        "libros",
        "openlibrary"
      ],
      "description": "Busca libros y muestra portada, autor y año",
      "usage": "<título o autor>",
      "category": "info"
    },
    {
      "name": "books",
      "base": "libro",
      "primary": false,
      "aliases": [],
      "description": "Busca libros y muestra portada, autor y año",
      "usage": "<título o autor>",
      "category": "info"
    },
    {
      "name": "book",
      "base": "libro",
      "primary": false,
      "aliases": [],
      "description": "Busca libros y muestra portada, autor y año",
      "usage": "<título o autor>",
      "category": "info"
    },
    {
      "name": "libros",
      "base": "libro",
      "primary": false,
      "aliases": [],
      "description": "Busca libros y muestra portada, autor y año",
      "usage": "<título o autor>",
      "category": "info"
    },
    {
      "name": "openlibrary",
      "base": "libro",
      "primary": false,
      "aliases": [],
      "description": "Busca libros y muestra portada, autor y año",
      "usage": "<título o autor>",
      "category": "info"
    },
    {
      "name": "link",
      "base": "link",
      "primary": true,
      "aliases": [
        "enlace",
        "linkgrupo",
        "enlacegrupo",
        "invitelink",
        "linkdelgrupo"
      ],
      "description": "Obtiene el enlace de invitación del grupo actual",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "enlace",
      "base": "link",
      "primary": false,
      "aliases": [],
      "description": "Obtiene el enlace de invitación del grupo actual",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "linkgrupo",
      "base": "link",
      "primary": false,
      "aliases": [],
      "description": "Obtiene el enlace de invitación del grupo actual",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "enlacegrupo",
      "base": "link",
      "primary": false,
      "aliases": [],
      "description": "Obtiene el enlace de invitación del grupo actual",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "invitelink",
      "base": "link",
      "primary": false,
      "aliases": [],
      "description": "Obtiene el enlace de invitación del grupo actual",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "linkdelgrupo",
      "base": "link",
      "primary": false,
      "aliases": [],
      "description": "Obtiene el enlace de invitación del grupo actual",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "logros",
      "base": "logros",
      "primary": true,
      "aliases": [
        "achievements",
        "achievement",
        "mislogros",
        "medallas"
      ],
      "description": "Muestra tus logros y el progreso de cada uno",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "achievements",
      "base": "logros",
      "primary": false,
      "aliases": [],
      "description": "Muestra tus logros y el progreso de cada uno",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "achievement",
      "base": "logros",
      "primary": false,
      "aliases": [],
      "description": "Muestra tus logros y el progreso de cada uno",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "mislogros",
      "base": "logros",
      "primary": false,
      "aliases": [],
      "description": "Muestra tus logros y el progreso de cada uno",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "medallas",
      "base": "logros",
      "primary": false,
      "aliases": [],
      "description": "Muestra tus logros y el progreso de cada uno",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "manga",
      "base": "manga",
      "primary": true,
      "aliases": [
        "mangainfo",
        "manhwa",
        "manhua",
        "mangabuscar"
      ],
      "description": "Busca información de un manga, manhwa o manhua",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "mangainfo",
      "base": "manga",
      "primary": false,
      "aliases": [],
      "description": "Busca información de un manga, manhwa o manhua",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "manhwa",
      "base": "manga",
      "primary": false,
      "aliases": [],
      "description": "Busca información de un manga, manhwa o manhua",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "manhua",
      "base": "manga",
      "primary": false,
      "aliases": [],
      "description": "Busca información de un manga, manhwa o manhua",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "mangabuscar",
      "base": "manga",
      "primary": false,
      "aliases": [],
      "description": "Busca información de un manga, manhwa o manhua",
      "usage": "<título>",
      "category": "anime"
    },
    {
      "name": "mascota",
      "base": "mascota",
      "primary": true,
      "aliases": [
        "pet",
        "mipet",
        "mimascota"
      ],
      "description": "Muestra el estado de tu mascota activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "pet",
      "base": "mascota",
      "primary": false,
      "aliases": [],
      "description": "Muestra el estado de tu mascota activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "mipet",
      "base": "mascota",
      "primary": false,
      "aliases": [],
      "description": "Muestra el estado de tu mascota activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "mimascota",
      "base": "mascota",
      "primary": false,
      "aliases": [],
      "description": "Muestra el estado de tu mascota activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "mascotas",
      "base": "mascotas",
      "primary": true,
      "aliases": [
        "mispets",
        "mypets",
        "mismascotas",
        "pets"
      ],
      "description": "Lista todas tus mascotas y cuál está activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "mispets",
      "base": "mascotas",
      "primary": false,
      "aliases": [],
      "description": "Lista todas tus mascotas y cuál está activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "mypets",
      "base": "mascotas",
      "primary": false,
      "aliases": [],
      "description": "Lista todas tus mascotas y cuál está activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "mismascotas",
      "base": "mascotas",
      "primary": false,
      "aliases": [],
      "description": "Lista todas tus mascotas y cuál está activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "pets",
      "base": "mascotas",
      "primary": false,
      "aliases": [],
      "description": "Lista todas tus mascotas y cuál está activa",
      "usage": "",
      "category": "mascotas"
    },
    {
      "name": "mate",
      "base": "mate",
      "primary": true,
      "aliases": [
        "matematicas",
        "matemáticas",
        "calcula",
        "operaciones"
      ],
      "description": "Resuelve operaciones matemáticas y gana monedas",
      "usage": "[resultado|cancelar]",
      "category": "utilidades"
    },
    {
      "name": "matematicas",
      "base": "mate",
      "primary": false,
      "aliases": [],
      "description": "Resuelve operaciones matemáticas y gana monedas",
      "usage": "[resultado|cancelar]",
      "category": "utilidades"
    },
    {
      "name": "matemáticas",
      "base": "mate",
      "primary": false,
      "aliases": [],
      "description": "Resuelve operaciones matemáticas y gana monedas",
      "usage": "[resultado|cancelar]",
      "category": "utilidades"
    },
    {
      "name": "calcula",
      "base": "mate",
      "primary": false,
      "aliases": [],
      "description": "Resuelve operaciones matemáticas y gana monedas",
      "usage": "[resultado|cancelar]",
      "category": "utilidades"
    },
    {
      "name": "operaciones",
      "base": "mate",
      "primary": false,
      "aliases": [],
      "description": "Resuelve operaciones matemáticas y gana monedas",
      "usage": "[resultado|cancelar]",
      "category": "utilidades"
    },
    {
      "name": "meme",
      "base": "meme",
      "primary": true,
      "aliases": [
        "memes",
        "randommeme"
      ],
      "description": "Envía un meme aleatorio de Reddit",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "memes",
      "base": "meme",
      "primary": false,
      "aliases": [],
      "description": "Envía un meme aleatorio de Reddit",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "randommeme",
      "base": "meme",
      "primary": false,
      "aliases": [],
      "description": "Envía un meme aleatorio de Reddit",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "memoria",
      "base": "memoria",
      "primary": true,
      "aliases": [
        "secuencia",
        "memorizar",
        "memoriaemoji"
      ],
      "description": "Memoriza una secuencia de emojis y gana monedas",
      "usage": "[secuencia|cancelar]",
      "category": "juegos"
    },
    {
      "name": "secuencia",
      "base": "memoria",
      "primary": false,
      "aliases": [],
      "description": "Memoriza una secuencia de emojis y gana monedas",
      "usage": "[secuencia|cancelar]",
      "category": "juegos"
    },
    {
      "name": "memorizar",
      "base": "memoria",
      "primary": false,
      "aliases": [],
      "description": "Memoriza una secuencia de emojis y gana monedas",
      "usage": "[secuencia|cancelar]",
      "category": "juegos"
    },
    {
      "name": "memoriaemoji",
      "base": "memoria",
      "primary": false,
      "aliases": [],
      "description": "Memoriza una secuencia de emojis y gana monedas",
      "usage": "[secuencia|cancelar]",
      "category": "juegos"
    },
    {
      "name": "mendigar",
      "base": "mendigar",
      "primary": true,
      "aliases": [
        "beg",
        "pedir",
        "limosna",
        "mendigo"
      ],
      "description": "Pide monedas en la calle con un pequeño tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "beg",
      "base": "mendigar",
      "primary": false,
      "aliases": [],
      "description": "Pide monedas en la calle con un pequeño tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "pedir",
      "base": "mendigar",
      "primary": false,
      "aliases": [],
      "description": "Pide monedas en la calle con un pequeño tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "limosna",
      "base": "mendigar",
      "primary": false,
      "aliases": [],
      "description": "Pide monedas en la calle con un pequeño tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "mendigo",
      "base": "mendigar",
      "primary": false,
      "aliases": [],
      "description": "Pide monedas en la calle con un pequeño tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "menu",
      "base": "menu",
      "primary": true,
      "aliases": [
        "menú",
        "menucompleto",
        "help",
        "ayuda",
        "comandos"
      ],
      "description": "Muestra el menú completo con todos los comandos, sin resumen y sin recortar el contenido",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "menú",
      "base": "menu",
      "primary": false,
      "aliases": [],
      "description": "Muestra el menú completo con todos los comandos, sin resumen y sin recortar el contenido",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "menucompleto",
      "base": "menu",
      "primary": false,
      "aliases": [],
      "description": "Muestra el menú completo con todos los comandos, sin resumen y sin recortar el contenido",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "help",
      "base": "menu",
      "primary": false,
      "aliases": [],
      "description": "Muestra el menú completo con todos los comandos, sin resumen y sin recortar el contenido",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "ayuda",
      "base": "menu",
      "primary": false,
      "aliases": [],
      "description": "Muestra el menú completo con todos los comandos, sin resumen y sin recortar el contenido",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "comandos",
      "base": "menu",
      "primary": false,
      "aliases": [],
      "description": "Muestra el menú completo con todos los comandos, sin resumen y sin recortar el contenido",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "mimarmascota",
      "base": "mimarmascota",
      "primary": true,
      "aliases": [
        "jugarconmascota",
        "acariciar",
        "petplay",
        "mimar"
      ],
      "description": "Juega con tu mascota para subir su felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "jugarconmascota",
      "base": "mimarmascota",
      "primary": false,
      "aliases": [],
      "description": "Juega con tu mascota para subir su felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "acariciar",
      "base": "mimarmascota",
      "primary": false,
      "aliases": [],
      "description": "Juega con tu mascota para subir su felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "petplay",
      "base": "mimarmascota",
      "primary": false,
      "aliases": [],
      "description": "Juega con tu mascota para subir su felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "mimar",
      "base": "mimarmascota",
      "primary": false,
      "aliases": [],
      "description": "Juega con tu mascota para subir su felicidad",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "minar",
      "base": "minar",
      "primary": true,
      "aliases": [
        "mine",
        "mina",
        "mineria",
        "minería"
      ],
      "description": "Mina minerales y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "mine",
      "base": "minar",
      "primary": false,
      "aliases": [],
      "description": "Mina minerales y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "mina",
      "base": "minar",
      "primary": false,
      "aliases": [],
      "description": "Mina minerales y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "mineria",
      "base": "minar",
      "primary": false,
      "aliases": [],
      "description": "Mina minerales y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "minería",
      "base": "minar",
      "primary": false,
      "aliases": [],
      "description": "Mina minerales y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "misiones",
      "base": "misiones",
      "primary": true,
      "aliases": [
        "mision",
        "missions",
        "misionesdiarias"
      ],
      "description": "Muestra y reclama tus misiones diarias",
      "usage": "[reclamar <número|todo>]",
      "category": "perfil"
    },
    {
      "name": "mision",
      "base": "misiones",
      "primary": false,
      "aliases": [],
      "description": "Muestra y reclama tus misiones diarias",
      "usage": "[reclamar <número|todo>]",
      "category": "perfil"
    },
    {
      "name": "missions",
      "base": "misiones",
      "primary": false,
      "aliases": [],
      "description": "Muestra y reclama tus misiones diarias",
      "usage": "[reclamar <número|todo>]",
      "category": "perfil"
    },
    {
      "name": "misionesdiarias",
      "base": "misiones",
      "primary": false,
      "aliases": [],
      "description": "Muestra y reclama tus misiones diarias",
      "usage": "[reclamar <número|todo>]",
      "category": "perfil"
    },
    {
      "name": "moneda",
      "base": "moneda",
      "primary": true,
      "aliases": [
        "flip",
        "coinflip"
      ],
      "description": "Lanza una moneda y apuesta a cara o cruz",
      "usage": "[cara|cruz] [apuesta]",
      "category": "juegos"
    },
    {
      "name": "flip",
      "base": "moneda",
      "primary": false,
      "aliases": [],
      "description": "Lanza una moneda y apuesta a cara o cruz",
      "usage": "[cara|cruz] [apuesta]",
      "category": "juegos"
    },
    {
      "name": "coinflip",
      "base": "moneda",
      "primary": false,
      "aliases": [],
      "description": "Lanza una moneda y apuesta a cara o cruz",
      "usage": "[cara|cruz] [apuesta]",
      "category": "juegos"
    },
    {
      "name": "morse",
      "base": "morse",
      "primary": true,
      "aliases": [
        "codigomorse"
      ],
      "description": "Traduce texto a código Morse y viceversa",
      "usage": "<texto o morse>",
      "category": "utilidades"
    },
    {
      "name": "codigomorse",
      "base": "morse",
      "primary": false,
      "aliases": [],
      "description": "Traduce texto a código Morse y viceversa",
      "usage": "<texto o morse>",
      "category": "utilidades"
    },
    {
      "name": "musica",
      "base": "musica",
      "primary": true,
      "aliases": [
        "song",
        "cancion",
        "música",
        "music"
      ],
      "description": "Busca una canción y muestra artista, álbum y portada",
      "usage": "<canción o artista>",
      "category": "descargas"
    },
    {
      "name": "song",
      "base": "musica",
      "primary": false,
      "aliases": [],
      "description": "Busca una canción y muestra artista, álbum y portada",
      "usage": "<canción o artista>",
      "category": "descargas"
    },
    {
      "name": "cancion",
      "base": "musica",
      "primary": false,
      "aliases": [],
      "description": "Busca una canción y muestra artista, álbum y portada",
      "usage": "<canción o artista>",
      "category": "descargas"
    },
    {
      "name": "música",
      "base": "musica",
      "primary": false,
      "aliases": [],
      "description": "Busca una canción y muestra artista, álbum y portada",
      "usage": "<canción o artista>",
      "category": "descargas"
    },
    {
      "name": "music",
      "base": "musica",
      "primary": false,
      "aliases": [],
      "description": "Busca una canción y muestra artista, álbum y portada",
      "usage": "<canción o artista>",
      "category": "descargas"
    },
    {
      "name": "nasa",
      "base": "nasa",
      "primary": true,
      "aliases": [
        "nasaimagen",
        "espacio"
      ],
      "description": "Busca imágenes del archivo de la NASA",
      "usage": "<búsqueda>",
      "category": "info"
    },
    {
      "name": "nasaimagen",
      "base": "nasa",
      "primary": false,
      "aliases": [],
      "description": "Busca imágenes del archivo de la NASA",
      "usage": "<búsqueda>",
      "category": "info"
    },
    {
      "name": "espacio",
      "base": "nasa",
      "primary": false,
      "aliases": [],
      "description": "Busca imágenes del archivo de la NASA",
      "usage": "<búsqueda>",
      "category": "info"
    },
    {
      "name": "navidad",
      "base": "navidad",
      "primary": true,
      "aliases": [
        "christmas",
        "xmas",
        "navideño"
      ],
      "description": "Muestra un mensaje navideño y la cuenta regresiva",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "christmas",
      "base": "navidad",
      "primary": false,
      "aliases": [],
      "description": "Muestra un mensaje navideño y la cuenta regresiva",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "xmas",
      "base": "navidad",
      "primary": false,
      "aliases": [],
      "description": "Muestra un mensaje navideño y la cuenta regresiva",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "navideño",
      "base": "navidad",
      "primary": false,
      "aliases": [],
      "description": "Muestra un mensaje navideño y la cuenta regresiva",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "negocio",
      "base": "negocio",
      "primary": true,
      "aliases": [
        "negocios",
        "empresa",
        "business",
        "miempresa"
      ],
      "description": "Compra un negocio y cobra ingresos cada cierto tiempo",
      "usage": "[comprar <id>|cobrar|lista]",
      "category": "economia"
    },
    {
      "name": "negocios",
      "base": "negocio",
      "primary": false,
      "aliases": [],
      "description": "Compra un negocio y cobra ingresos cada cierto tiempo",
      "usage": "[comprar <id>|cobrar|lista]",
      "category": "economia"
    },
    {
      "name": "empresa",
      "base": "negocio",
      "primary": false,
      "aliases": [],
      "description": "Compra un negocio y cobra ingresos cada cierto tiempo",
      "usage": "[comprar <id>|cobrar|lista]",
      "category": "economia"
    },
    {
      "name": "business",
      "base": "negocio",
      "primary": false,
      "aliases": [],
      "description": "Compra un negocio y cobra ingresos cada cierto tiempo",
      "usage": "[comprar <id>|cobrar|lista]",
      "category": "economia"
    },
    {
      "name": "miempresa",
      "base": "negocio",
      "primary": false,
      "aliases": [],
      "description": "Compra un negocio y cobra ingresos cada cierto tiempo",
      "usage": "[comprar <id>|cobrar|lista]",
      "category": "economia"
    },
    {
      "name": "neko",
      "base": "neko",
      "primary": true,
      "aliases": [
        "anime",
        "waifu",
        "nekoimg",
        "husbando"
      ],
      "description": "Envía imágenes neko aleatorias y gana NovitaCoins",
      "usage": "[categoría] [cantidad]",
      "category": "anime"
    },
    {
      "name": "anime",
      "base": "neko",
      "primary": false,
      "aliases": [],
      "description": "Envía imágenes neko aleatorias y gana NovitaCoins",
      "usage": "[categoría] [cantidad]",
      "category": "anime"
    },
    {
      "name": "waifu",
      "base": "neko",
      "primary": false,
      "aliases": [],
      "description": "Envía imágenes neko aleatorias y gana NovitaCoins",
      "usage": "[categoría] [cantidad]",
      "category": "anime"
    },
    {
      "name": "nekoimg",
      "base": "neko",
      "primary": false,
      "aliases": [],
      "description": "Envía imágenes neko aleatorias y gana NovitaCoins",
      "usage": "[categoría] [cantidad]",
      "category": "anime"
    },
    {
      "name": "husbando",
      "base": "neko",
      "primary": false,
      "aliases": [],
      "description": "Envía imágenes neko aleatorias y gana NovitaCoins",
      "usage": "[categoría] [cantidad]",
      "category": "anime"
    },
    {
      "name": "nekos",
      "base": "nekos",
      "primary": true,
      "aliases": [
        "nekoinfo",
        "minekos",
        "nekostats"
      ],
      "description": "Muestra tu colección de nekos, premios y ranking",
      "usage": "",
      "category": "anime"
    },
    {
      "name": "nekoinfo",
      "base": "nekos",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu colección de nekos, premios y ranking",
      "usage": "",
      "category": "anime"
    },
    {
      "name": "minekos",
      "base": "nekos",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu colección de nekos, premios y ranking",
      "usage": "",
      "category": "anime"
    },
    {
      "name": "nekostats",
      "base": "nekos",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu colección de nekos, premios y ranking",
      "usage": "",
      "category": "anime"
    },
    {
      "name": "nivel",
      "base": "nivel",
      "primary": true,
      "aliases": [
        "ranknivel",
        "level",
        "lvl",
        "minivel"
      ],
      "description": "Muestra tu nivel, tu progreso y el ranking",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "ranknivel",
      "base": "nivel",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu nivel, tu progreso y el ranking",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "level",
      "base": "nivel",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu nivel, tu progreso y el ranking",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "lvl",
      "base": "nivel",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu nivel, tu progreso y el ranking",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "minivel",
      "base": "nivel",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu nivel, tu progreso y el ranking",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "noticias",
      "base": "noticias",
      "primary": true,
      "aliases": [
        "news",
        "actualidad",
        "titulares",
        "periodico"
      ],
      "description": "Muestra los titulares de noticias más recientes en español",
      "usage": "[tema]",
      "category": "info"
    },
    {
      "name": "news",
      "base": "noticias",
      "primary": false,
      "aliases": [],
      "description": "Muestra los titulares de noticias más recientes en español",
      "usage": "[tema]",
      "category": "info"
    },
    {
      "name": "actualidad",
      "base": "noticias",
      "primary": false,
      "aliases": [],
      "description": "Muestra los titulares de noticias más recientes en español",
      "usage": "[tema]",
      "category": "info"
    },
    {
      "name": "titulares",
      "base": "noticias",
      "primary": false,
      "aliases": [],
      "description": "Muestra los titulares de noticias más recientes en español",
      "usage": "[tema]",
      "category": "info"
    },
    {
      "name": "periodico",
      "base": "noticias",
      "primary": false,
      "aliases": [],
      "description": "Muestra los titulares de noticias más recientes en español",
      "usage": "[tema]",
      "category": "info"
    },
    {
      "name": "npm",
      "base": "npm",
      "primary": true,
      "aliases": [
        "npmjs",
        "paquete"
      ],
      "description": "Muestra información de un paquete publicado en npm",
      "usage": "<paquete>",
      "category": "info"
    },
    {
      "name": "npmjs",
      "base": "npm",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un paquete publicado en npm",
      "usage": "<paquete>",
      "category": "info"
    },
    {
      "name": "paquete",
      "base": "npm",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un paquete publicado en npm",
      "usage": "<paquete>",
      "category": "info"
    },
    {
      "name": "ordena",
      "base": "ordena",
      "primary": true,
      "aliases": [
        "scramble",
        "desordena",
        "ordenapalabra",
        "anagrama"
      ],
      "description": "Ordena la palabra desordenada y gana monedas",
      "usage": "[palabra|cancelar]",
      "category": "juegos"
    },
    {
      "name": "scramble",
      "base": "ordena",
      "primary": false,
      "aliases": [],
      "description": "Ordena la palabra desordenada y gana monedas",
      "usage": "[palabra|cancelar]",
      "category": "juegos"
    },
    {
      "name": "desordena",
      "base": "ordena",
      "primary": false,
      "aliases": [],
      "description": "Ordena la palabra desordenada y gana monedas",
      "usage": "[palabra|cancelar]",
      "category": "juegos"
    },
    {
      "name": "ordenapalabra",
      "base": "ordena",
      "primary": false,
      "aliases": [],
      "description": "Ordena la palabra desordenada y gana monedas",
      "usage": "[palabra|cancelar]",
      "category": "juegos"
    },
    {
      "name": "anagrama",
      "base": "ordena",
      "primary": false,
      "aliases": [],
      "description": "Ordena la palabra desordenada y gana monedas",
      "usage": "[palabra|cancelar]",
      "category": "juegos"
    },
    {
      "name": "owner",
      "base": "owner",
      "primary": true,
      "aliases": [
        "id"
      ],
      "description": "Muestra tu JID/número y si estás registrado como dueño",
      "usage": "",
      "category": "info"
    },
    {
      "name": "id",
      "base": "owner",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu JID/número y si estás registrado como dueño",
      "usage": "",
      "category": "info"
    },
    {
      "name": "pais",
      "base": "pais",
      "primary": true,
      "aliases": [
        "país",
        "country",
        "currency",
        "setpais",
        "setcountry",
        "setmoneda"
      ],
      "description": "Elige tu país para ver tu dinero en tu moneda local",
      "usage": "[código o nombre] | lista",
      "category": "info"
    },
    {
      "name": "país",
      "base": "pais",
      "primary": false,
      "aliases": [],
      "description": "Elige tu país para ver tu dinero en tu moneda local",
      "usage": "[código o nombre] | lista",
      "category": "info"
    },
    {
      "name": "country",
      "base": "pais",
      "primary": false,
      "aliases": [],
      "description": "Elige tu país para ver tu dinero en tu moneda local",
      "usage": "[código o nombre] | lista",
      "category": "info"
    },
    {
      "name": "currency",
      "base": "pais",
      "primary": false,
      "aliases": [],
      "description": "Elige tu país para ver tu dinero en tu moneda local",
      "usage": "[código o nombre] | lista",
      "category": "info"
    },
    {
      "name": "setpais",
      "base": "pais",
      "primary": false,
      "aliases": [],
      "description": "Elige tu país para ver tu dinero en tu moneda local",
      "usage": "[código o nombre] | lista",
      "category": "info"
    },
    {
      "name": "setcountry",
      "base": "pais",
      "primary": false,
      "aliases": [],
      "description": "Elige tu país para ver tu dinero en tu moneda local",
      "usage": "[código o nombre] | lista",
      "category": "info"
    },
    {
      "name": "setmoneda",
      "base": "pais",
      "primary": false,
      "aliases": [],
      "description": "Elige tu país para ver tu dinero en tu moneda local",
      "usage": "[código o nombre] | lista",
      "category": "info"
    },
    {
      "name": "paseo",
      "base": "paseo",
      "primary": true,
      "aliases": [
        "pasear",
        "walkpet",
        "sacarmascota",
        "paseomascota"
      ],
      "description": "Pasea a tu mascota para ganar NovitaCoins",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "pasear",
      "base": "paseo",
      "primary": false,
      "aliases": [],
      "description": "Pasea a tu mascota para ganar NovitaCoins",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "walkpet",
      "base": "paseo",
      "primary": false,
      "aliases": [],
      "description": "Pasea a tu mascota para ganar NovitaCoins",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "sacarmascota",
      "base": "paseo",
      "primary": false,
      "aliases": [],
      "description": "Pasea a tu mascota para ganar NovitaCoins",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "paseomascota",
      "base": "paseo",
      "primary": false,
      "aliases": [],
      "description": "Pasea a tu mascota para ganar NovitaCoins",
      "usage": "[número o nombre]",
      "category": "mascotas"
    },
    {
      "name": "password",
      "base": "password",
      "primary": true,
      "aliases": [
        "clave",
        "contrasena",
        "contraseña",
        "pass",
        "passwd"
      ],
      "description": "Genera una contraseña segura y aleatoria",
      "usage": "[longitud]",
      "category": "utilidades"
    },
    {
      "name": "clave",
      "base": "password",
      "primary": false,
      "aliases": [],
      "description": "Genera una contraseña segura y aleatoria",
      "usage": "[longitud]",
      "category": "utilidades"
    },
    {
      "name": "contrasena",
      "base": "password",
      "primary": false,
      "aliases": [],
      "description": "Genera una contraseña segura y aleatoria",
      "usage": "[longitud]",
      "category": "utilidades"
    },
    {
      "name": "contraseña",
      "base": "password",
      "primary": false,
      "aliases": [],
      "description": "Genera una contraseña segura y aleatoria",
      "usage": "[longitud]",
      "category": "utilidades"
    },
    {
      "name": "pass",
      "base": "password",
      "primary": false,
      "aliases": [],
      "description": "Genera una contraseña segura y aleatoria",
      "usage": "[longitud]",
      "category": "utilidades"
    },
    {
      "name": "passwd",
      "base": "password",
      "primary": false,
      "aliases": [],
      "description": "Genera una contraseña segura y aleatoria",
      "usage": "[longitud]",
      "category": "utilidades"
    },
    {
      "name": "pelea",
      "base": "pelea",
      "primary": true,
      "aliases": [
        "fight",
        "pelear",
        "combate",
        "batalla"
      ],
      "description": "Pelea contra un rival y apuesta monedas",
      "usage": "<cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "fight",
      "base": "pelea",
      "primary": false,
      "aliases": [],
      "description": "Pelea contra un rival y apuesta monedas",
      "usage": "<cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "pelear",
      "base": "pelea",
      "primary": false,
      "aliases": [],
      "description": "Pelea contra un rival y apuesta monedas",
      "usage": "<cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "combate",
      "base": "pelea",
      "primary": false,
      "aliases": [],
      "description": "Pelea contra un rival y apuesta monedas",
      "usage": "<cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "batalla",
      "base": "pelea",
      "primary": false,
      "aliases": [],
      "description": "Pelea contra un rival y apuesta monedas",
      "usage": "<cantidad|todo>",
      "category": "juegos"
    },
    {
      "name": "perfil",
      "base": "perfil",
      "primary": true,
      "aliases": [
        "profile",
        "yo",
        "cuenta"
      ],
      "description": "Muestra tu perfil, nivel y economía",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "profile",
      "base": "perfil",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu perfil, nivel y economía",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "yo",
      "base": "perfil",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu perfil, nivel y economía",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "cuenta",
      "base": "perfil",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu perfil, nivel y economía",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "perro",
      "base": "perro",
      "primary": true,
      "aliases": [
        "dog",
        "perrito",
        "dogs"
      ],
      "description": "Envía una foto aleatoria de un perro",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "dog",
      "base": "perro",
      "primary": false,
      "aliases": [],
      "description": "Envía una foto aleatoria de un perro",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "perrito",
      "base": "perro",
      "primary": false,
      "aliases": [],
      "description": "Envía una foto aleatoria de un perro",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "dogs",
      "base": "perro",
      "primary": false,
      "aliases": [],
      "description": "Envía una foto aleatoria de un perro",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "pescar",
      "base": "pescar",
      "primary": true,
      "aliases": [
        "fish",
        "pesca",
        "pescado"
      ],
      "description": "Pesca y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "fish",
      "base": "pescar",
      "primary": false,
      "aliases": [],
      "description": "Pesca y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "pesca",
      "base": "pescar",
      "primary": false,
      "aliases": [],
      "description": "Pesca y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "pescado",
      "base": "pescar",
      "primary": false,
      "aliases": [],
      "description": "Pesca y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "petshop",
      "base": "petshop",
      "primary": true,
      "aliases": [
        "tiendamascotas",
        "petstore",
        "mascotastienda"
      ],
      "description": "Muestra la tienda de mascotas y sus precios",
      "usage": "[raro|épico|legendario]",
      "category": "mascotas"
    },
    {
      "name": "tiendamascotas",
      "base": "petshop",
      "primary": false,
      "aliases": [],
      "description": "Muestra la tienda de mascotas y sus precios",
      "usage": "[raro|épico|legendario]",
      "category": "mascotas"
    },
    {
      "name": "petstore",
      "base": "petshop",
      "primary": false,
      "aliases": [],
      "description": "Muestra la tienda de mascotas y sus precios",
      "usage": "[raro|épico|legendario]",
      "category": "mascotas"
    },
    {
      "name": "mascotastienda",
      "base": "petshop",
      "primary": false,
      "aliases": [],
      "description": "Muestra la tienda de mascotas y sus precios",
      "usage": "[raro|épico|legendario]",
      "category": "mascotas"
    },
    {
      "name": "ping",
      "base": "ping",
      "primary": true,
      "aliases": [
        "p"
      ],
      "description": "Mide la latencia real del bot contra los servidores de WhatsApp",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "p",
      "base": "ping",
      "primary": false,
      "aliases": [],
      "description": "Mide la latencia real del bot contra los servidores de WhatsApp",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "pinterest",
      "base": "pinterest",
      "primary": true,
      "aliases": [
        "pin",
        "pint",
        "pinterestimg",
        "pinimg"
      ],
      "description": "Busca y envía un carrusel de imágenes de Pinterest",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "pin",
      "base": "pinterest",
      "primary": false,
      "aliases": [],
      "description": "Busca y envía un carrusel de imágenes de Pinterest",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "pint",
      "base": "pinterest",
      "primary": false,
      "aliases": [],
      "description": "Busca y envía un carrusel de imágenes de Pinterest",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "pinterestimg",
      "base": "pinterest",
      "primary": false,
      "aliases": [],
      "description": "Busca y envía un carrusel de imágenes de Pinterest",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "pinimg",
      "base": "pinterest",
      "primary": false,
      "aliases": [],
      "description": "Busca y envía un carrusel de imágenes de Pinterest",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "piropo",
      "base": "piropo",
      "primary": true,
      "aliases": [
        "halago",
        "flirt",
        "piropear"
      ],
      "description": "Envía un piropo aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "halago",
      "base": "piropo",
      "primary": false,
      "aliases": [],
      "description": "Envía un piropo aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "flirt",
      "base": "piropo",
      "primary": false,
      "aliases": [],
      "description": "Envía un piropo aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "piropear",
      "base": "piropo",
      "primary": false,
      "aliases": [],
      "description": "Envía un piropo aleatorio",
      "usage": "",
      "category": "entretenimiento"
    },
    {
      "name": "play",
      "base": "play",
      "primary": true,
      "aliases": [
        "mp3",
        "ytmp3",
        "audio"
      ],
      "description": "Descarga y envía audio de YouTube en M4A",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "mp3",
      "base": "play",
      "primary": false,
      "aliases": [],
      "description": "Descarga y envía audio de YouTube en M4A",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "ytmp3",
      "base": "play",
      "primary": false,
      "aliases": [],
      "description": "Descarga y envía audio de YouTube en M4A",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "audio",
      "base": "play",
      "primary": false,
      "aliases": [],
      "description": "Descarga y envía audio de YouTube en M4A",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "play2",
      "base": "play2",
      "primary": true,
      "aliases": [
        "ytmp4",
        "video",
        "playvideo",
        "mp4"
      ],
      "description": "Descarga y envía video de YouTube en MP4",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "ytmp4",
      "base": "play2",
      "primary": false,
      "aliases": [],
      "description": "Descarga y envía video de YouTube en MP4",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "video",
      "base": "play2",
      "primary": false,
      "aliases": [],
      "description": "Descarga y envía video de YouTube en MP4",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "playvideo",
      "base": "play2",
      "primary": false,
      "aliases": [],
      "description": "Descarga y envía video de YouTube en MP4",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "mp4",
      "base": "play2",
      "primary": false,
      "aliases": [],
      "description": "Descarga y envía video de YouTube en MP4",
      "usage": "",
      "category": "descargas"
    },
    {
      "name": "pokemon",
      "base": "pokemon",
      "primary": true,
      "aliases": [
        "poke",
        "pokedex",
        "pokémon"
      ],
      "description": "Muestra información y una imagen de un Pokémon",
      "usage": "<nombre o número>",
      "category": "entretenimiento"
    },
    {
      "name": "poke",
      "base": "pokemon",
      "primary": false,
      "aliases": [],
      "description": "Muestra información y una imagen de un Pokémon",
      "usage": "<nombre o número>",
      "category": "entretenimiento"
    },
    {
      "name": "pokedex",
      "base": "pokemon",
      "primary": false,
      "aliases": [],
      "description": "Muestra información y una imagen de un Pokémon",
      "usage": "<nombre o número>",
      "category": "entretenimiento"
    },
    {
      "name": "pokémon",
      "base": "pokemon",
      "primary": false,
      "aliases": [],
      "description": "Muestra información y una imagen de un Pokémon",
      "usage": "<nombre o número>",
      "category": "entretenimiento"
    },
    {
      "name": "ppt",
      "base": "ppt",
      "primary": true,
      "aliases": [
        "piedrapapeltijera",
        "rps"
      ],
      "description": "Juega piedra, papel o tijera contra el bot",
      "usage": "<piedra|papel|tijera> [apuesta]",
      "category": "juegos"
    },
    {
      "name": "piedrapapeltijera",
      "base": "ppt",
      "primary": false,
      "aliases": [],
      "description": "Juega piedra, papel o tijera contra el bot",
      "usage": "<piedra|papel|tijera> [apuesta]",
      "category": "juegos"
    },
    {
      "name": "rps",
      "base": "ppt",
      "primary": false,
      "aliases": [],
      "description": "Juega piedra, papel o tijera contra el bot",
      "usage": "<piedra|papel|tijera> [apuesta]",
      "category": "juegos"
    },
    {
      "name": "premium",
      "base": "premium",
      "primary": true,
      "aliases": [
        "prem"
      ],
      "description": "Consulta y administra los jadibots premium",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "prem",
      "base": "premium",
      "primary": false,
      "aliases": [],
      "description": "Consulta y administra los jadibots premium",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "programar",
      "base": "programar",
      "primary": true,
      "aliases": [
        "freelance",
        "freelancer",
        "programador",
        "devjob"
      ],
      "description": "Trabaja como programador freelance y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "freelance",
      "base": "programar",
      "primary": false,
      "aliases": [],
      "description": "Trabaja como programador freelance y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "freelancer",
      "base": "programar",
      "primary": false,
      "aliases": [],
      "description": "Trabaja como programador freelance y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "programador",
      "base": "programar",
      "primary": false,
      "aliases": [],
      "description": "Trabaja como programador freelance y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "devjob",
      "base": "programar",
      "primary": false,
      "aliases": [],
      "description": "Trabaja como programador freelance y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "promote",
      "base": "promote",
      "primary": true,
      "aliases": [
        "promover",
        "daradmin"
      ],
      "description": "Da administrador a un usuario mencionado",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "promover",
      "base": "promote",
      "primary": false,
      "aliases": [],
      "description": "Da administrador a un usuario mencionado",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "daradmin",
      "base": "promote",
      "primary": false,
      "aliases": [],
      "description": "Da administrador a un usuario mencionado",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "qr",
      "base": "qr",
      "primary": true,
      "aliases": [],
      "description": "Conecta un jadibot normal o premium escaneando un código QR",
      "usage": "[normal|premium] [id]",
      "category": "jadibot"
    },
    {
      "name": "qrgen",
      "base": "qrgen",
      "primary": true,
      "aliases": [
        "codigoqr",
        "generarqr",
        "qrcode"
      ],
      "description": "Genera un código QR a partir de un texto o enlace",
      "usage": "<texto o enlace>",
      "category": "utilidades"
    },
    {
      "name": "codigoqr",
      "base": "qrgen",
      "primary": false,
      "aliases": [],
      "description": "Genera un código QR a partir de un texto o enlace",
      "usage": "<texto o enlace>",
      "category": "utilidades"
    },
    {
      "name": "generarqr",
      "base": "qrgen",
      "primary": false,
      "aliases": [],
      "description": "Genera un código QR a partir de un texto o enlace",
      "usage": "<texto o enlace>",
      "category": "utilidades"
    },
    {
      "name": "qrcode",
      "base": "qrgen",
      "primary": false,
      "aliases": [],
      "description": "Genera un código QR a partir de un texto o enlace",
      "usage": "<texto o enlace>",
      "category": "utilidades"
    },
    {
      "name": "quitarmonedas",
      "base": "quitarmonedas",
      "primary": true,
      "aliases": [
        "removecoins",
        "quitarcoins",
        "quitardinero",
        "removermonedas"
      ],
      "description": "Quita monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "removecoins",
      "base": "quitarmonedas",
      "primary": false,
      "aliases": [],
      "description": "Quita monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "quitarcoins",
      "base": "quitarmonedas",
      "primary": false,
      "aliases": [],
      "description": "Quita monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "quitardinero",
      "base": "quitarmonedas",
      "primary": false,
      "aliases": [],
      "description": "Quita monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "removermonedas",
      "base": "quitarmonedas",
      "primary": false,
      "aliases": [],
      "description": "Quita monedas a un usuario (solo dueño)",
      "usage": "@usuario <cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "racha",
      "base": "racha",
      "primary": true,
      "aliases": [
        "streak",
        "mi-racha",
        "miracha",
        "dias"
      ],
      "description": "Muestra cuántos días llevas usando el bot y tu racha",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "streak",
      "base": "racha",
      "primary": false,
      "aliases": [],
      "description": "Muestra cuántos días llevas usando el bot y tu racha",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "mi-racha",
      "base": "racha",
      "primary": false,
      "aliases": [],
      "description": "Muestra cuántos días llevas usando el bot y tu racha",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "miracha",
      "base": "racha",
      "primary": false,
      "aliases": [],
      "description": "Muestra cuántos días llevas usando el bot y tu racha",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "dias",
      "base": "racha",
      "primary": false,
      "aliases": [],
      "description": "Muestra cuántos días llevas usando el bot y tu racha",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "rango",
      "base": "rango",
      "primary": true,
      "aliases": [
        "rank",
        "mirango",
        "mirank",
        "prestigio"
      ],
      "description": "Muestra tu rango, prestigio y progreso al siguiente nivel",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "rank",
      "base": "rango",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu rango, prestigio y progreso al siguiente nivel",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "mirango",
      "base": "rango",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu rango, prestigio y progreso al siguiente nivel",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "mirank",
      "base": "rango",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu rango, prestigio y progreso al siguiente nivel",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "prestigio",
      "base": "rango",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu rango, prestigio y progreso al siguiente nivel",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "rangos",
      "base": "rangos",
      "primary": true,
      "aliases": [
        "tierlist",
        "listarangos",
        "nivelesrango",
        "tablarangos"
      ],
      "description": "Muestra todos los rangos y lo que necesitas para subir",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "tierlist",
      "base": "rangos",
      "primary": false,
      "aliases": [],
      "description": "Muestra todos los rangos y lo que necesitas para subir",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "listarangos",
      "base": "rangos",
      "primary": false,
      "aliases": [],
      "description": "Muestra todos los rangos y lo que necesitas para subir",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "nivelesrango",
      "base": "rangos",
      "primary": false,
      "aliases": [],
      "description": "Muestra todos los rangos y lo que necesitas para subir",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "tablarangos",
      "base": "rangos",
      "primary": false,
      "aliases": [],
      "description": "Muestra todos los rangos y lo que necesitas para subir",
      "usage": "",
      "category": "perfil"
    },
    {
      "name": "rankcoins",
      "base": "rankcoins",
      "primary": true,
      "aliases": [
        "topcoins",
        "rankrico",
        "ranking"
      ],
      "description": "Muestra el ranking de usuarios con más NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "topcoins",
      "base": "rankcoins",
      "primary": false,
      "aliases": [],
      "description": "Muestra el ranking de usuarios con más NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "rankrico",
      "base": "rankcoins",
      "primary": false,
      "aliases": [],
      "description": "Muestra el ranking de usuarios con más NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "ranking",
      "base": "rankcoins",
      "primary": false,
      "aliases": [],
      "description": "Muestra el ranking de usuarios con más NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "rasca",
      "base": "rasca",
      "primary": true,
      "aliases": [
        "rascaygana",
        "scratch",
        "raspar"
      ],
      "description": "Rasca una tarjeta y gana NovitaCoins cada 4 horas",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "rascaygana",
      "base": "rasca",
      "primary": false,
      "aliases": [],
      "description": "Rasca una tarjeta y gana NovitaCoins cada 4 horas",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "scratch",
      "base": "rasca",
      "primary": false,
      "aliases": [],
      "description": "Rasca una tarjeta y gana NovitaCoins cada 4 horas",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "raspar",
      "base": "rasca",
      "primary": false,
      "aliases": [],
      "description": "Rasca una tarjeta y gana NovitaCoins cada 4 horas",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "reiniciar",
      "base": "reiniciar",
      "primary": true,
      "aliases": [
        "restart",
        "reboot"
      ],
      "description": "Reinicia el bot (solo dueño)",
      "usage": "confirmar",
      "category": "sistema"
    },
    {
      "name": "restart",
      "base": "reiniciar",
      "primary": false,
      "aliases": [],
      "description": "Reinicia el bot (solo dueño)",
      "usage": "confirmar",
      "category": "sistema"
    },
    {
      "name": "reboot",
      "base": "reiniciar",
      "primary": false,
      "aliases": [],
      "description": "Reinicia el bot (solo dueño)",
      "usage": "confirmar",
      "category": "sistema"
    },
    {
      "name": "repartir",
      "base": "repartir",
      "primary": true,
      "aliases": [
        "delivery",
        "reparto",
        "mensajero",
        "domicilio"
      ],
      "description": "Haz entregas a domicilio y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "delivery",
      "base": "repartir",
      "primary": false,
      "aliases": [],
      "description": "Haz entregas a domicilio y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "reparto",
      "base": "repartir",
      "primary": false,
      "aliases": [],
      "description": "Haz entregas a domicilio y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "mensajero",
      "base": "repartir",
      "primary": false,
      "aliases": [],
      "description": "Haz entregas a domicilio y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "domicilio",
      "base": "repartir",
      "primary": false,
      "aliases": [],
      "description": "Haz entregas a domicilio y gana NovitaCoins",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "repo",
      "base": "repo",
      "primary": true,
      "aliases": [
        "backups",
        "respaldos",
        "avances",
        "actividad",
        "historial",
        "devs"
      ],
      "description": "Muestra los cambios de los backups y el acceso del staff al repositorio",
      "usage": "[cambios|staff|commits] [cantidad]",
      "category": "sistema"
    },
    {
      "name": "backups",
      "base": "repo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los cambios de los backups y el acceso del staff al repositorio",
      "usage": "[cambios|staff|commits] [cantidad]",
      "category": "sistema"
    },
    {
      "name": "respaldos",
      "base": "repo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los cambios de los backups y el acceso del staff al repositorio",
      "usage": "[cambios|staff|commits] [cantidad]",
      "category": "sistema"
    },
    {
      "name": "avances",
      "base": "repo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los cambios de los backups y el acceso del staff al repositorio",
      "usage": "[cambios|staff|commits] [cantidad]",
      "category": "sistema"
    },
    {
      "name": "actividad",
      "base": "repo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los cambios de los backups y el acceso del staff al repositorio",
      "usage": "[cambios|staff|commits] [cantidad]",
      "category": "sistema"
    },
    {
      "name": "historial",
      "base": "repo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los cambios de los backups y el acceso del staff al repositorio",
      "usage": "[cambios|staff|commits] [cantidad]",
      "category": "sistema"
    },
    {
      "name": "devs",
      "base": "repo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los cambios de los backups y el acceso del staff al repositorio",
      "usage": "[cambios|staff|commits] [cantidad]",
      "category": "sistema"
    },
    {
      "name": "report",
      "base": "report",
      "primary": true,
      "aliases": [
        "reporte",
        "reportar",
        "soporte",
        "bug"
      ],
      "description": "Envía un reporte al creador (verificado por IA) o revisa los reportes (dueño)",
      "usage": "[texto] | list | close <id>",
      "category": "admin"
    },
    {
      "name": "reporte",
      "base": "report",
      "primary": false,
      "aliases": [],
      "description": "Envía un reporte al creador (verificado por IA) o revisa los reportes (dueño)",
      "usage": "[texto] | list | close <id>",
      "category": "admin"
    },
    {
      "name": "reportar",
      "base": "report",
      "primary": false,
      "aliases": [],
      "description": "Envía un reporte al creador (verificado por IA) o revisa los reportes (dueño)",
      "usage": "[texto] | list | close <id>",
      "category": "admin"
    },
    {
      "name": "soporte",
      "base": "report",
      "primary": false,
      "aliases": [],
      "description": "Envía un reporte al creador (verificado por IA) o revisa los reportes (dueño)",
      "usage": "[texto] | list | close <id>",
      "category": "admin"
    },
    {
      "name": "bug",
      "base": "report",
      "primary": false,
      "aliases": [],
      "description": "Envía un reporte al creador (verificado por IA) o revisa los reportes (dueño)",
      "usage": "[texto] | list | close <id>",
      "category": "admin"
    },
    {
      "name": "resetbot",
      "base": "resetbot",
      "primary": true,
      "aliases": [
        "resetconfig",
        "restablecer"
      ],
      "description": "Restablece la configuración de este bot",
      "usage": "confirmar",
      "category": "sistema"
    },
    {
      "name": "resetconfig",
      "base": "resetbot",
      "primary": false,
      "aliases": [],
      "description": "Restablece la configuración de este bot",
      "usage": "confirmar",
      "category": "sistema"
    },
    {
      "name": "restablecer",
      "base": "resetbot",
      "primary": false,
      "aliases": [],
      "description": "Restablece la configuración de este bot",
      "usage": "confirmar",
      "category": "sistema"
    },
    {
      "name": "resumir",
      "base": "resumir",
      "primary": true,
      "aliases": [
        "resume",
        "resumen",
        "sintetizar"
      ],
      "description": "Resume un texto largo o el contenido de un enlace usando IA",
      "usage": "<texto o enlace>",
      "category": "ia"
    },
    {
      "name": "resume",
      "base": "resumir",
      "primary": false,
      "aliases": [],
      "description": "Resume un texto largo o el contenido de un enlace usando IA",
      "usage": "<texto o enlace>",
      "category": "ia"
    },
    {
      "name": "resumen",
      "base": "resumir",
      "primary": false,
      "aliases": [],
      "description": "Resume un texto largo o el contenido de un enlace usando IA",
      "usage": "<texto o enlace>",
      "category": "ia"
    },
    {
      "name": "sintetizar",
      "base": "resumir",
      "primary": false,
      "aliases": [],
      "description": "Resume un texto largo o el contenido de un enlace usando IA",
      "usage": "<texto o enlace>",
      "category": "ia"
    },
    {
      "name": "ret",
      "base": "ret",
      "primary": true,
      "aliases": [
        "retirar",
        "retiro"
      ],
      "description": "Retira monedas de tu cuenta del banco",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "retirar",
      "base": "ret",
      "primary": false,
      "aliases": [],
      "description": "Retira monedas de tu cuenta del banco",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "retiro",
      "base": "ret",
      "primary": false,
      "aliases": [],
      "description": "Retira monedas de tu cuenta del banco",
      "usage": "<cantidad|todo>",
      "category": "economia"
    },
    {
      "name": "rickmorty",
      "base": "rickmorty",
      "primary": true,
      "aliases": [
        "rick",
        "morty"
      ],
      "description": "Busca un personaje de Rick y Morty",
      "usage": "<personaje>",
      "category": "entretenimiento"
    },
    {
      "name": "rick",
      "base": "rickmorty",
      "primary": false,
      "aliases": [],
      "description": "Busca un personaje de Rick y Morty",
      "usage": "<personaje>",
      "category": "entretenimiento"
    },
    {
      "name": "morty",
      "base": "rickmorty",
      "primary": false,
      "aliases": [],
      "description": "Busca un personaje de Rick y Morty",
      "usage": "<personaje>",
      "category": "entretenimiento"
    },
    {
      "name": "robar",
      "base": "robar",
      "primary": true,
      "aliases": [
        "rob",
        "steal",
        "robo"
      ],
      "description": "Intenta robar monedas a otro usuario (puedes ser atrapado)",
      "usage": "[@usuario]",
      "category": "economia"
    },
    {
      "name": "rob",
      "base": "robar",
      "primary": false,
      "aliases": [],
      "description": "Intenta robar monedas a otro usuario (puedes ser atrapado)",
      "usage": "[@usuario]",
      "category": "economia"
    },
    {
      "name": "steal",
      "base": "robar",
      "primary": false,
      "aliases": [],
      "description": "Intenta robar monedas a otro usuario (puedes ser atrapado)",
      "usage": "[@usuario]",
      "category": "economia"
    },
    {
      "name": "robo",
      "base": "robar",
      "primary": false,
      "aliases": [],
      "description": "Intenta robar monedas a otro usuario (puedes ser atrapado)",
      "usage": "[@usuario]",
      "category": "economia"
    },
    {
      "name": "romano",
      "base": "romano",
      "primary": true,
      "aliases": [
        "roman",
        "numerosromanos"
      ],
      "description": "Convierte números romanos y arábigos",
      "usage": "<número o romano>",
      "category": "utilidades"
    },
    {
      "name": "roman",
      "base": "romano",
      "primary": false,
      "aliases": [],
      "description": "Convierte números romanos y arábigos",
      "usage": "<número o romano>",
      "category": "utilidades"
    },
    {
      "name": "numerosromanos",
      "base": "romano",
      "primary": false,
      "aliases": [],
      "description": "Convierte números romanos y arábigos",
      "usage": "<número o romano>",
      "category": "utilidades"
    },
    {
      "name": "ruleta",
      "base": "ruleta",
      "primary": true,
      "aliases": [
        "roulette"
      ],
      "description": "Juega a la ruleta apostando a color o número",
      "usage": "<rojo|negro|verde|número> [apuesta]",
      "category": "juegos"
    },
    {
      "name": "roulette",
      "base": "ruleta",
      "primary": false,
      "aliases": [],
      "description": "Juega a la ruleta apostando a color o número",
      "usage": "<rojo|negro|verde|número> [apuesta]",
      "category": "juegos"
    },
    {
      "name": "rw",
      "base": "rw",
      "primary": true,
      "aliases": [
        "recompensaneko",
        "claimneko",
        "rewardneko",
        "reclamarnekos"
      ],
      "description": "Da una neko al instante con su info y precio, y reclama tus recompensas",
      "usage": "[categoría]",
      "category": "anime"
    },
    {
      "name": "recompensaneko",
      "base": "rw",
      "primary": false,
      "aliases": [],
      "description": "Da una neko al instante con su info y precio, y reclama tus recompensas",
      "usage": "[categoría]",
      "category": "anime"
    },
    {
      "name": "claimneko",
      "base": "rw",
      "primary": false,
      "aliases": [],
      "description": "Da una neko al instante con su info y precio, y reclama tus recompensas",
      "usage": "[categoría]",
      "category": "anime"
    },
    {
      "name": "rewardneko",
      "base": "rw",
      "primary": false,
      "aliases": [],
      "description": "Da una neko al instante con su info y precio, y reclama tus recompensas",
      "usage": "[categoría]",
      "category": "anime"
    },
    {
      "name": "reclamarnekos",
      "base": "rw",
      "primary": false,
      "aliases": [],
      "description": "Da una neko al instante con su info y precio, y reclama tus recompensas",
      "usage": "[categoría]",
      "category": "anime"
    },
    {
      "name": "serie",
      "base": "serie",
      "primary": true,
      "aliases": [
        "series",
        "tvshow",
        "tv"
      ],
      "description": "Busca información de una serie de televisión",
      "usage": "<título>",
      "category": "info"
    },
    {
      "name": "series",
      "base": "serie",
      "primary": false,
      "aliases": [],
      "description": "Busca información de una serie de televisión",
      "usage": "<título>",
      "category": "info"
    },
    {
      "name": "tvshow",
      "base": "serie",
      "primary": false,
      "aliases": [],
      "description": "Busca información de una serie de televisión",
      "usage": "<título>",
      "category": "info"
    },
    {
      "name": "tv",
      "base": "serie",
      "primary": false,
      "aliases": [],
      "description": "Busca información de una serie de televisión",
      "usage": "<título>",
      "category": "info"
    },
    {
      "name": "setdesc",
      "base": "setdesc",
      "primary": true,
      "aliases": [
        "setdescripcion",
        "setdescripción",
        "setdescription",
        "descripciongrupo"
      ],
      "description": "Cambia la descripción del grupo",
      "usage": "<texto>",
      "category": "admin"
    },
    {
      "name": "setdescripcion",
      "base": "setdesc",
      "primary": false,
      "aliases": [],
      "description": "Cambia la descripción del grupo",
      "usage": "<texto>",
      "category": "admin"
    },
    {
      "name": "setdescripción",
      "base": "setdesc",
      "primary": false,
      "aliases": [],
      "description": "Cambia la descripción del grupo",
      "usage": "<texto>",
      "category": "admin"
    },
    {
      "name": "setdescription",
      "base": "setdesc",
      "primary": false,
      "aliases": [],
      "description": "Cambia la descripción del grupo",
      "usage": "<texto>",
      "category": "admin"
    },
    {
      "name": "descripciongrupo",
      "base": "setdesc",
      "primary": false,
      "aliases": [],
      "description": "Cambia la descripción del grupo",
      "usage": "<texto>",
      "category": "admin"
    },
    {
      "name": "setgroupname",
      "base": "setgroupname",
      "primary": true,
      "aliases": [
        "setnombregrupo",
        "setgname",
        "setgruponame"
      ],
      "description": "Cambia el nombre del grupo",
      "usage": "<nombre>",
      "category": "admin"
    },
    {
      "name": "setnombregrupo",
      "base": "setgroupname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre del grupo",
      "usage": "<nombre>",
      "category": "admin"
    },
    {
      "name": "setgname",
      "base": "setgroupname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre del grupo",
      "usage": "<nombre>",
      "category": "admin"
    },
    {
      "name": "setgruponame",
      "base": "setgroupname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre del grupo",
      "usage": "<nombre>",
      "category": "admin"
    },
    {
      "name": "setgroupphoto",
      "base": "setgroupphoto",
      "primary": true,
      "aliases": [
        "setfotogrupo",
        "setfotogrupal",
        "setgrouppic"
      ],
      "description": "Cambia la foto del grupo respondiendo a una imagen",
      "usage": "[responde a una imagen]",
      "category": "admin"
    },
    {
      "name": "setfotogrupo",
      "base": "setgroupphoto",
      "primary": false,
      "aliases": [],
      "description": "Cambia la foto del grupo respondiendo a una imagen",
      "usage": "[responde a una imagen]",
      "category": "admin"
    },
    {
      "name": "setfotogrupal",
      "base": "setgroupphoto",
      "primary": false,
      "aliases": [],
      "description": "Cambia la foto del grupo respondiendo a una imagen",
      "usage": "[responde a una imagen]",
      "category": "admin"
    },
    {
      "name": "setgrouppic",
      "base": "setgroupphoto",
      "primary": false,
      "aliases": [],
      "description": "Cambia la foto del grupo respondiendo a una imagen",
      "usage": "[responde a una imagen]",
      "category": "admin"
    },
    {
      "name": "setjadibot",
      "base": "setjadibot",
      "primary": true,
      "aliases": [
        "configjadibot",
        "jadibotsettings",
        "setjadibots"
      ],
      "description": "Permite o bloquea que los usuarios conecten jadibots",
      "usage": "public|premium on|off",
      "category": "jadibot"
    },
    {
      "name": "configjadibot",
      "base": "setjadibot",
      "primary": false,
      "aliases": [],
      "description": "Permite o bloquea que los usuarios conecten jadibots",
      "usage": "public|premium on|off",
      "category": "jadibot"
    },
    {
      "name": "jadibotsettings",
      "base": "setjadibot",
      "primary": false,
      "aliases": [],
      "description": "Permite o bloquea que los usuarios conecten jadibots",
      "usage": "public|premium on|off",
      "category": "jadibot"
    },
    {
      "name": "setjadibots",
      "base": "setjadibot",
      "primary": false,
      "aliases": [],
      "description": "Permite o bloquea que los usuarios conecten jadibots",
      "usage": "public|premium on|off",
      "category": "jadibot"
    },
    {
      "name": "setlang",
      "base": "setlang",
      "primary": true,
      "aliases": [
        "idioma",
        "setidioma",
        "lang",
        "language"
      ],
      "description": "Cambia el idioma de este bot (es, en o pt)",
      "usage": "<es|en|pt>",
      "category": "admin"
    },
    {
      "name": "idioma",
      "base": "setlang",
      "primary": false,
      "aliases": [],
      "description": "Cambia el idioma de este bot (es, en o pt)",
      "usage": "<es|en|pt>",
      "category": "admin"
    },
    {
      "name": "setidioma",
      "base": "setlang",
      "primary": false,
      "aliases": [],
      "description": "Cambia el idioma de este bot (es, en o pt)",
      "usage": "<es|en|pt>",
      "category": "admin"
    },
    {
      "name": "lang",
      "base": "setlang",
      "primary": false,
      "aliases": [],
      "description": "Cambia el idioma de este bot (es, en o pt)",
      "usage": "<es|en|pt>",
      "category": "admin"
    },
    {
      "name": "language",
      "base": "setlang",
      "primary": false,
      "aliases": [],
      "description": "Cambia el idioma de este bot (es, en o pt)",
      "usage": "<es|en|pt>",
      "category": "admin"
    },
    {
      "name": "setlogo",
      "base": "setlogo",
      "primary": true,
      "aliases": [
        "logo",
        "setlogotipo"
      ],
      "description": "Cambia el logo del menú usando una imagen, un enlace o un archivo",
      "usage": "[imagen|enlace|novita|neko|reset]",
      "category": "admin"
    },
    {
      "name": "logo",
      "base": "setlogo",
      "primary": false,
      "aliases": [],
      "description": "Cambia el logo del menú usando una imagen, un enlace o un archivo",
      "usage": "[imagen|enlace|novita|neko|reset]",
      "category": "admin"
    },
    {
      "name": "setlogotipo",
      "base": "setlogo",
      "primary": false,
      "aliases": [],
      "description": "Cambia el logo del menú usando una imagen, un enlace o un archivo",
      "usage": "[imagen|enlace|novita|neko|reset]",
      "category": "admin"
    },
    {
      "name": "setmenu",
      "base": "setmenu",
      "primary": true,
      "aliases": [
        "setmenutipo",
        "menutipo"
      ],
      "description": "Confirma el menú completo; el modo resumen ya no está disponible",
      "usage": "detallado|reset",
      "category": "admin"
    },
    {
      "name": "setmenutipo",
      "base": "setmenu",
      "primary": false,
      "aliases": [],
      "description": "Confirma el menú completo; el modo resumen ya no está disponible",
      "usage": "detallado|reset",
      "category": "admin"
    },
    {
      "name": "menutipo",
      "base": "setmenu",
      "primary": false,
      "aliases": [],
      "description": "Confirma el menú completo; el modo resumen ya no está disponible",
      "usage": "detallado|reset",
      "category": "admin"
    },
    {
      "name": "setmode",
      "base": "setmode",
      "primary": true,
      "aliases": [
        "modo",
        "setmodo"
      ],
      "description": "Cambia el modo público o privado de este bot",
      "usage": "<public|private>",
      "category": "admin"
    },
    {
      "name": "modo",
      "base": "setmode",
      "primary": false,
      "aliases": [],
      "description": "Cambia el modo público o privado de este bot",
      "usage": "<public|private>",
      "category": "admin"
    },
    {
      "name": "setmodo",
      "base": "setmode",
      "primary": false,
      "aliases": [],
      "description": "Cambia el modo público o privado de este bot",
      "usage": "<public|private>",
      "category": "admin"
    },
    {
      "name": "setname",
      "base": "setname",
      "primary": true,
      "aliases": [
        "setnombre",
        "nombrebot",
        "botname",
        "setnamebot",
        "setbotname",
        "renombrarbot",
        "cambiarnombre"
      ],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "setnombre",
      "base": "setname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "nombrebot",
      "base": "setname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "botname",
      "base": "setname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "setnamebot",
      "base": "setname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "setbotname",
      "base": "setname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "renombrarbot",
      "base": "setname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "cambiarnombre",
      "base": "setname",
      "primary": false,
      "aliases": [],
      "description": "Cambia el nombre visible de este bot",
      "usage": "<nombre|reset>",
      "category": "admin"
    },
    {
      "name": "setowner",
      "base": "setowner",
      "primary": true,
      "aliases": [
        "cambiardueño",
        "cambiardueno",
        "dueñobot",
        "ownerbot",
        "transferirbot"
      ],
      "description": "Cambia el dueño de tu jadibot (el principal no se puede transferir)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "cambiardueño",
      "base": "setowner",
      "primary": false,
      "aliases": [],
      "description": "Cambia el dueño de tu jadibot (el principal no se puede transferir)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "cambiardueno",
      "base": "setowner",
      "primary": false,
      "aliases": [],
      "description": "Cambia el dueño de tu jadibot (el principal no se puede transferir)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "dueñobot",
      "base": "setowner",
      "primary": false,
      "aliases": [],
      "description": "Cambia el dueño de tu jadibot (el principal no se puede transferir)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "ownerbot",
      "base": "setowner",
      "primary": false,
      "aliases": [],
      "description": "Cambia el dueño de tu jadibot (el principal no se puede transferir)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "transferirbot",
      "base": "setowner",
      "primary": false,
      "aliases": [],
      "description": "Cambia el dueño de tu jadibot (el principal no se puede transferir)",
      "usage": "@usuario",
      "category": "admin"
    },
    {
      "name": "setprefix",
      "base": "setprefix",
      "primary": true,
      "aliases": [
        "prefijo",
        "setprefijo",
        "prefix"
      ],
      "description": "Cambia los prefijos de este bot (owner o dueño del jadibot)",
      "usage": "<prefijos|reset>",
      "category": "admin"
    },
    {
      "name": "prefijo",
      "base": "setprefix",
      "primary": false,
      "aliases": [],
      "description": "Cambia los prefijos de este bot (owner o dueño del jadibot)",
      "usage": "<prefijos|reset>",
      "category": "admin"
    },
    {
      "name": "setprefijo",
      "base": "setprefix",
      "primary": false,
      "aliases": [],
      "description": "Cambia los prefijos de este bot (owner o dueño del jadibot)",
      "usage": "<prefijos|reset>",
      "category": "admin"
    },
    {
      "name": "prefix",
      "base": "setprefix",
      "primary": false,
      "aliases": [],
      "description": "Cambia los prefijos de este bot (owner o dueño del jadibot)",
      "usage": "<prefijos|reset>",
      "category": "admin"
    },
    {
      "name": "setstyle",
      "base": "setstyle",
      "primary": true,
      "aliases": [
        "setestilo",
        "estilo"
      ],
      "description": "Activa o desactiva el marco visual de las respuestas",
      "usage": "on|off|reset",
      "category": "admin"
    },
    {
      "name": "setestilo",
      "base": "setstyle",
      "primary": false,
      "aliases": [],
      "description": "Activa o desactiva el marco visual de las respuestas",
      "usage": "on|off|reset",
      "category": "admin"
    },
    {
      "name": "estilo",
      "base": "setstyle",
      "primary": false,
      "aliases": [],
      "description": "Activa o desactiva el marco visual de las respuestas",
      "usage": "on|off|reset",
      "category": "admin"
    },
    {
      "name": "shorturl",
      "base": "shorturl",
      "primary": true,
      "aliases": [
        "acortar",
        "tinyurl",
        "short"
      ],
      "description": "Acorta un enlace largo",
      "usage": "<enlace>",
      "category": "utilidades"
    },
    {
      "name": "acortar",
      "base": "shorturl",
      "primary": false,
      "aliases": [],
      "description": "Acorta un enlace largo",
      "usage": "<enlace>",
      "category": "utilidades"
    },
    {
      "name": "tinyurl",
      "base": "shorturl",
      "primary": false,
      "aliases": [],
      "description": "Acorta un enlace largo",
      "usage": "<enlace>",
      "category": "utilidades"
    },
    {
      "name": "short",
      "base": "shorturl",
      "primary": false,
      "aliases": [],
      "description": "Acorta un enlace largo",
      "usage": "<enlace>",
      "category": "utilidades"
    },
    {
      "name": "silencio",
      "base": "silencio",
      "primary": true,
      "aliases": [
        "silence"
      ],
      "description": "Controla si los jadibots hablan cuando el principal está en el grupo",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "silence",
      "base": "silencio",
      "primary": false,
      "aliases": [],
      "description": "Controla si los jadibots hablan cuando el principal está en el grupo",
      "usage": "",
      "category": "admin"
    },
    {
      "name": "sismo",
      "base": "sismo",
      "primary": true,
      "aliases": [
        "terremoto",
        "temblor",
        "earthquake",
        "sismos"
      ],
      "description": "Muestra los sismos más recientes del mundo en tiempo real",
      "usage": "[magnitud] [lugar]",
      "category": "info"
    },
    {
      "name": "terremoto",
      "base": "sismo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los sismos más recientes del mundo en tiempo real",
      "usage": "[magnitud] [lugar]",
      "category": "info"
    },
    {
      "name": "temblor",
      "base": "sismo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los sismos más recientes del mundo en tiempo real",
      "usage": "[magnitud] [lugar]",
      "category": "info"
    },
    {
      "name": "earthquake",
      "base": "sismo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los sismos más recientes del mundo en tiempo real",
      "usage": "[magnitud] [lugar]",
      "category": "info"
    },
    {
      "name": "sismos",
      "base": "sismo",
      "primary": false,
      "aliases": [],
      "description": "Muestra los sismos más recientes del mundo en tiempo real",
      "usage": "[magnitud] [lugar]",
      "category": "info"
    },
    {
      "name": "slot",
      "base": "slot",
      "primary": true,
      "aliases": [
        "slots",
        "tragamonedas",
        "tragaperras"
      ],
      "description": "Juega a la tragaperras y apuesta NovitaCoins",
      "usage": "[apuesta]",
      "category": "juegos"
    },
    {
      "name": "slots",
      "base": "slot",
      "primary": false,
      "aliases": [],
      "description": "Juega a la tragaperras y apuesta NovitaCoins",
      "usage": "[apuesta]",
      "category": "juegos"
    },
    {
      "name": "tragamonedas",
      "base": "slot",
      "primary": false,
      "aliases": [],
      "description": "Juega a la tragaperras y apuesta NovitaCoins",
      "usage": "[apuesta]",
      "category": "juegos"
    },
    {
      "name": "tragaperras",
      "base": "slot",
      "primary": false,
      "aliases": [],
      "description": "Juega a la tragaperras y apuesta NovitaCoins",
      "usage": "[apuesta]",
      "category": "juegos"
    },
    {
      "name": "sol",
      "base": "sol",
      "primary": true,
      "aliases": [
        "amanecer",
        "atardecer",
        "sunrise",
        "sunset",
        "solar"
      ],
      "description": "Muestra el amanecer y atardecer de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "amanecer",
      "base": "sol",
      "primary": false,
      "aliases": [],
      "description": "Muestra el amanecer y atardecer de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "atardecer",
      "base": "sol",
      "primary": false,
      "aliases": [],
      "description": "Muestra el amanecer y atardecer de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "sunrise",
      "base": "sol",
      "primary": false,
      "aliases": [],
      "description": "Muestra el amanecer y atardecer de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "sunset",
      "base": "sol",
      "primary": false,
      "aliases": [],
      "description": "Muestra el amanecer y atardecer de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "solar",
      "base": "sol",
      "primary": false,
      "aliases": [],
      "description": "Muestra el amanecer y atardecer de una ciudad",
      "usage": "<ciudad>",
      "category": "info"
    },
    {
      "name": "sorteo",
      "base": "sorteo",
      "primary": true,
      "aliases": [
        "sortear",
        "rifa"
      ],
      "description": "Elige un ganador al azar entre varias opciones",
      "usage": "<opción1, opción2...> | <número-número>",
      "category": "juegos"
    },
    {
      "name": "sortear",
      "base": "sorteo",
      "primary": false,
      "aliases": [],
      "description": "Elige un ganador al azar entre varias opciones",
      "usage": "<opción1, opción2...> | <número-número>",
      "category": "juegos"
    },
    {
      "name": "rifa",
      "base": "sorteo",
      "primary": false,
      "aliases": [],
      "description": "Elige un ganador al azar entre varias opciones",
      "usage": "<opción1, opción2...> | <número-número>",
      "category": "juegos"
    },
    {
      "name": "soundcloud",
      "base": "soundcloud",
      "primary": true,
      "aliases": [
        "sc",
        "scdl",
        "sound"
      ],
      "description": "Descarga o busca audio completo en SoundCloud",
      "usage": "🎧 *DESCARGA DE SOUNDCLOUD*\n\n🔗 Uso: */soundcloud <enlace o búsqueda>*\n\n✨ *EJEMPLOS*\n• */soundcloud https://soundcloud.com/forss/flickermood*\n• */soundcloud lofi hip hop*\n\n📥 Si SoundCloud solo tiene una vista previa de 30 s, busco la canción completa.",
      "category": "descargas"
    },
    {
      "name": "sc",
      "base": "soundcloud",
      "primary": false,
      "aliases": [],
      "description": "Descarga o busca audio completo en SoundCloud",
      "usage": "🎧 *DESCARGA DE SOUNDCLOUD*\n\n🔗 Uso: */soundcloud <enlace o búsqueda>*\n\n✨ *EJEMPLOS*\n• */soundcloud https://soundcloud.com/forss/flickermood*\n• */soundcloud lofi hip hop*\n\n📥 Si SoundCloud solo tiene una vista previa de 30 s, busco la canción completa.",
      "category": "descargas"
    },
    {
      "name": "scdl",
      "base": "soundcloud",
      "primary": false,
      "aliases": [],
      "description": "Descarga o busca audio completo en SoundCloud",
      "usage": "🎧 *DESCARGA DE SOUNDCLOUD*\n\n🔗 Uso: */soundcloud <enlace o búsqueda>*\n\n✨ *EJEMPLOS*\n• */soundcloud https://soundcloud.com/forss/flickermood*\n• */soundcloud lofi hip hop*\n\n📥 Si SoundCloud solo tiene una vista previa de 30 s, busco la canción completa.",
      "category": "descargas"
    },
    {
      "name": "sound",
      "base": "soundcloud",
      "primary": false,
      "aliases": [],
      "description": "Descarga o busca audio completo en SoundCloud",
      "usage": "🎧 *DESCARGA DE SOUNDCLOUD*\n\n🔗 Uso: */soundcloud <enlace o búsqueda>*\n\n✨ *EJEMPLOS*\n• */soundcloud https://soundcloud.com/forss/flickermood*\n• */soundcloud lofi hip hop*\n\n📥 Si SoundCloud solo tiene una vista previa de 30 s, busco la canción completa.",
      "category": "descargas"
    },
    {
      "name": "spotify",
      "base": "spotify",
      "primary": true,
      "aliases": [
        "spoti",
        "spotifydl",
        "spotifydown"
      ],
      "description": "Muestra info y vista previa de 30 s de Spotify",
      "usage": "<enlace de Spotify>",
      "category": "descargas"
    },
    {
      "name": "spoti",
      "base": "spotify",
      "primary": false,
      "aliases": [],
      "description": "Muestra info y vista previa de 30 s de Spotify",
      "usage": "<enlace de Spotify>",
      "category": "descargas"
    },
    {
      "name": "spotifydl",
      "base": "spotify",
      "primary": false,
      "aliases": [],
      "description": "Muestra info y vista previa de 30 s de Spotify",
      "usage": "<enlace de Spotify>",
      "category": "descargas"
    },
    {
      "name": "spotifydown",
      "base": "spotify",
      "primary": false,
      "aliases": [],
      "description": "Muestra info y vista previa de 30 s de Spotify",
      "usage": "<enlace de Spotify>",
      "category": "descargas"
    },
    {
      "name": "st",
      "base": "st",
      "primary": true,
      "aliases": [
        "staffpanel",
        "panelstaff",
        "staffstatus",
        "estadostaff",
        "stafftools",
        "reinicios"
      ],
      "description": "Panel del staff: últimos reinicios, rangos y estado del bot",
      "usage": "[reinicios|rangos|menu|ver|revisiones|ayuda]",
      "category": "staff"
    },
    {
      "name": "staffpanel",
      "base": "st",
      "primary": false,
      "aliases": [],
      "description": "Panel del staff: últimos reinicios, rangos y estado del bot",
      "usage": "[reinicios|rangos|menu|ver|revisiones|ayuda]",
      "category": "staff"
    },
    {
      "name": "panelstaff",
      "base": "st",
      "primary": false,
      "aliases": [],
      "description": "Panel del staff: últimos reinicios, rangos y estado del bot",
      "usage": "[reinicios|rangos|menu|ver|revisiones|ayuda]",
      "category": "staff"
    },
    {
      "name": "staffstatus",
      "base": "st",
      "primary": false,
      "aliases": [],
      "description": "Panel del staff: últimos reinicios, rangos y estado del bot",
      "usage": "[reinicios|rangos|menu|ver|revisiones|ayuda]",
      "category": "staff"
    },
    {
      "name": "estadostaff",
      "base": "st",
      "primary": false,
      "aliases": [],
      "description": "Panel del staff: últimos reinicios, rangos y estado del bot",
      "usage": "[reinicios|rangos|menu|ver|revisiones|ayuda]",
      "category": "staff"
    },
    {
      "name": "stafftools",
      "base": "st",
      "primary": false,
      "aliases": [],
      "description": "Panel del staff: últimos reinicios, rangos y estado del bot",
      "usage": "[reinicios|rangos|menu|ver|revisiones|ayuda]",
      "category": "staff"
    },
    {
      "name": "reinicios",
      "base": "st",
      "primary": false,
      "aliases": [],
      "description": "Panel del staff: últimos reinicios, rangos y estado del bot",
      "usage": "[reinicios|rangos|menu|ver|revisiones|ayuda]",
      "category": "staff"
    },
    {
      "name": "staff",
      "base": "staff",
      "primary": true,
      "aliases": [
        "equipo",
        "setstaff",
        "staffrango",
        "rangostaff",
        "darrango"
      ],
      "description": "Gestiona el staff, sus rangos y el acceso al repositorio de plugins",
      "usage": "[dar|ver|quitar|github|acceso|menu|roles]",
      "category": "staff"
    },
    {
      "name": "equipo",
      "base": "staff",
      "primary": false,
      "aliases": [],
      "description": "Gestiona el staff, sus rangos y el acceso al repositorio de plugins",
      "usage": "[dar|ver|quitar|github|acceso|menu|roles]",
      "category": "staff"
    },
    {
      "name": "setstaff",
      "base": "staff",
      "primary": false,
      "aliases": [],
      "description": "Gestiona el staff, sus rangos y el acceso al repositorio de plugins",
      "usage": "[dar|ver|quitar|github|acceso|menu|roles]",
      "category": "staff"
    },
    {
      "name": "staffrango",
      "base": "staff",
      "primary": false,
      "aliases": [],
      "description": "Gestiona el staff, sus rangos y el acceso al repositorio de plugins",
      "usage": "[dar|ver|quitar|github|acceso|menu|roles]",
      "category": "staff"
    },
    {
      "name": "rangostaff",
      "base": "staff",
      "primary": false,
      "aliases": [],
      "description": "Gestiona el staff, sus rangos y el acceso al repositorio de plugins",
      "usage": "[dar|ver|quitar|github|acceso|menu|roles]",
      "category": "staff"
    },
    {
      "name": "darrango",
      "base": "staff",
      "primary": false,
      "aliases": [],
      "description": "Gestiona el staff, sus rangos y el acceso al repositorio de plugins",
      "usage": "[dar|ver|quitar|github|acceso|menu|roles]",
      "category": "staff"
    },
    {
      "name": "starwars",
      "base": "starwars",
      "primary": true,
      "aliases": [
        "sw",
        "jedi",
        "sith"
      ],
      "description": "Busca un personaje de Star Wars",
      "usage": "<personaje>",
      "category": "entretenimiento"
    },
    {
      "name": "sw",
      "base": "starwars",
      "primary": false,
      "aliases": [],
      "description": "Busca un personaje de Star Wars",
      "usage": "<personaje>",
      "category": "entretenimiento"
    },
    {
      "name": "jedi",
      "base": "starwars",
      "primary": false,
      "aliases": [],
      "description": "Busca un personaje de Star Wars",
      "usage": "<personaje>",
      "category": "entretenimiento"
    },
    {
      "name": "sith",
      "base": "starwars",
      "primary": false,
      "aliases": [],
      "description": "Busca un personaje de Star Wars",
      "usage": "<personaje>",
      "category": "entretenimiento"
    },
    {
      "name": "sticker",
      "base": "sticker",
      "primary": true,
      "aliases": [
        "s",
        "stiker",
        "figu",
        "tosticker",
        "tofigu"
      ],
      "description": "Convierte una imagen en sticker respondiendo a ella o con el comando en el pie de foto",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "s",
      "base": "sticker",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen en sticker respondiendo a ella o con el comando en el pie de foto",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "stiker",
      "base": "sticker",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen en sticker respondiendo a ella o con el comando en el pie de foto",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "figu",
      "base": "sticker",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen en sticker respondiendo a ella o con el comando en el pie de foto",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "tosticker",
      "base": "sticker",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen en sticker respondiendo a ella o con el comando en el pie de foto",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "tofigu",
      "base": "sticker",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen en sticker respondiendo a ella o con el comando en el pie de foto",
      "usage": "",
      "category": "multimedia"
    },
    {
      "name": "stopjadibot",
      "base": "stopjadibot",
      "primary": true,
      "aliases": [
        "deljadibot"
      ],
      "description": "Detiene un jadibot activo",
      "usage": "",
      "category": "jadibot"
    },
    {
      "name": "deljadibot",
      "base": "stopjadibot",
      "primary": false,
      "aliases": [],
      "description": "Detiene un jadibot activo",
      "usage": "",
      "category": "jadibot"
    },
    {
      "name": "streamable",
      "base": "streamable",
      "primary": true,
      "aliases": [
        "strdl",
        "streamabledl"
      ],
      "description": "Descarga un video de Streamable",
      "usage": "📹 *DESCARGA DE STREAMABLE*\n\n🔗 Uso: */streamable <enlace>*\n✨ Ejemplo: */streamable https://streamable.com/moo*",
      "category": "descargas"
    },
    {
      "name": "strdl",
      "base": "streamable",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Streamable",
      "usage": "📹 *DESCARGA DE STREAMABLE*\n\n🔗 Uso: */streamable <enlace>*\n✨ Ejemplo: */streamable https://streamable.com/moo*",
      "category": "descargas"
    },
    {
      "name": "streamabledl",
      "base": "streamable",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de Streamable",
      "usage": "📹 *DESCARGA DE STREAMABLE*\n\n🔗 Uso: */streamable <enlace>*\n✨ Ejemplo: */streamable https://streamable.com/moo*",
      "category": "descargas"
    },
    {
      "name": "suerte",
      "base": "suerte",
      "primary": true,
      "aliases": [
        "fortuna",
        "luck",
        "destino",
        "prediccion",
        "predicción"
      ],
      "description": "Consulta tu fortuna diaria y recibe una pequeña recompensa",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "fortuna",
      "base": "suerte",
      "primary": false,
      "aliases": [],
      "description": "Consulta tu fortuna diaria y recibe una pequeña recompensa",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "luck",
      "base": "suerte",
      "primary": false,
      "aliases": [],
      "description": "Consulta tu fortuna diaria y recibe una pequeña recompensa",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "destino",
      "base": "suerte",
      "primary": false,
      "aliases": [],
      "description": "Consulta tu fortuna diaria y recibe una pequeña recompensa",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "prediccion",
      "base": "suerte",
      "primary": false,
      "aliases": [],
      "description": "Consulta tu fortuna diaria y recibe una pequeña recompensa",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "predicción",
      "base": "suerte",
      "primary": false,
      "aliases": [],
      "description": "Consulta tu fortuna diaria y recibe una pequeña recompensa",
      "usage": "",
      "category": "juegos"
    },
    {
      "name": "tagall",
      "base": "tagall",
      "primary": true,
      "aliases": [
        "todos",
        "mencionartodos",
        "mentionall"
      ],
      "description": "Menciona a todos los miembros del grupo",
      "usage": "[mensaje]",
      "category": "admin"
    },
    {
      "name": "todos",
      "base": "tagall",
      "primary": false,
      "aliases": [],
      "description": "Menciona a todos los miembros del grupo",
      "usage": "[mensaje]",
      "category": "admin"
    },
    {
      "name": "mencionartodos",
      "base": "tagall",
      "primary": false,
      "aliases": [],
      "description": "Menciona a todos los miembros del grupo",
      "usage": "[mensaje]",
      "category": "admin"
    },
    {
      "name": "mentionall",
      "base": "tagall",
      "primary": false,
      "aliases": [],
      "description": "Menciona a todos los miembros del grupo",
      "usage": "[mensaje]",
      "category": "admin"
    },
    {
      "name": "talar",
      "base": "talar",
      "primary": true,
      "aliases": [
        "lenar",
        "leñador",
        "lenador",
        "madera",
        "hachazo"
      ],
      "description": "Tala árboles y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "lenar",
      "base": "talar",
      "primary": false,
      "aliases": [],
      "description": "Tala árboles y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "leñador",
      "base": "talar",
      "primary": false,
      "aliases": [],
      "description": "Tala árboles y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "lenador",
      "base": "talar",
      "primary": false,
      "aliases": [],
      "description": "Tala árboles y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "madera",
      "base": "talar",
      "primary": false,
      "aliases": [],
      "description": "Tala árboles y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "hachazo",
      "base": "talar",
      "primary": false,
      "aliases": [],
      "description": "Tala árboles y gana NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "tarjeta",
      "base": "tarjeta",
      "primary": true,
      "aliases": [
        "card",
        "tarjetas",
        "mitarjeta",
        "creditcard",
        "tarjetacredito"
      ],
      "description": "Muestra tu tarjeta fake y permite retirar dinero de tu propio banco",
      "usage": "[ver|nueva|borrar|retirar] [cantidad|@usuario]",
      "category": "economia"
    },
    {
      "name": "card",
      "base": "tarjeta",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu tarjeta fake y permite retirar dinero de tu propio banco",
      "usage": "[ver|nueva|borrar|retirar] [cantidad|@usuario]",
      "category": "economia"
    },
    {
      "name": "tarjetas",
      "base": "tarjeta",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu tarjeta fake y permite retirar dinero de tu propio banco",
      "usage": "[ver|nueva|borrar|retirar] [cantidad|@usuario]",
      "category": "economia"
    },
    {
      "name": "mitarjeta",
      "base": "tarjeta",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu tarjeta fake y permite retirar dinero de tu propio banco",
      "usage": "[ver|nueva|borrar|retirar] [cantidad|@usuario]",
      "category": "economia"
    },
    {
      "name": "creditcard",
      "base": "tarjeta",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu tarjeta fake y permite retirar dinero de tu propio banco",
      "usage": "[ver|nueva|borrar|retirar] [cantidad|@usuario]",
      "category": "economia"
    },
    {
      "name": "tarjetacredito",
      "base": "tarjeta",
      "primary": false,
      "aliases": [],
      "description": "Muestra tu tarjeta fake y permite retirar dinero de tu propio banco",
      "usage": "[ver|nueva|borrar|retirar] [cantidad|@usuario]",
      "category": "economia"
    },
    {
      "name": "tienda",
      "base": "tienda",
      "primary": true,
      "aliases": [
        "shop",
        "store",
        "precios"
      ],
      "description": "Muestra la tienda y los precios de NovitaBot",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "shop",
      "base": "tienda",
      "primary": false,
      "aliases": [],
      "description": "Muestra la tienda y los precios de NovitaBot",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "store",
      "base": "tienda",
      "primary": false,
      "aliases": [],
      "description": "Muestra la tienda y los precios de NovitaBot",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "precios",
      "base": "tienda",
      "primary": false,
      "aliases": [],
      "description": "Muestra la tienda y los precios de NovitaBot",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "tiktok",
      "base": "tiktok",
      "primary": true,
      "aliases": [
        "tt",
        "ttdl",
        "tik"
      ],
      "description": "Descarga un video de TikTok sin marca de agua",
      "usage": "<enlace de TikTok>",
      "category": "descargas"
    },
    {
      "name": "tt",
      "base": "tiktok",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de TikTok sin marca de agua",
      "usage": "<enlace de TikTok>",
      "category": "descargas"
    },
    {
      "name": "ttdl",
      "base": "tiktok",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de TikTok sin marca de agua",
      "usage": "<enlace de TikTok>",
      "category": "descargas"
    },
    {
      "name": "tik",
      "base": "tiktok",
      "primary": false,
      "aliases": [],
      "description": "Descarga un video de TikTok sin marca de agua",
      "usage": "<enlace de TikTok>",
      "category": "descargas"
    },
    {
      "name": "toblur",
      "base": "toblur",
      "primary": true,
      "aliases": [
        "todesenfoque",
        "toborroso"
      ],
      "description": "Aplica un desenfoque a una imagen o sticker",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "todesenfoque",
      "base": "toblur",
      "primary": false,
      "aliases": [],
      "description": "Aplica un desenfoque a una imagen o sticker",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "toborroso",
      "base": "toblur",
      "primary": false,
      "aliases": [],
      "description": "Aplica un desenfoque a una imagen o sticker",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "tobn",
      "base": "tobn",
      "primary": true,
      "aliases": [
        "tograyscale",
        "togris",
        "blancoynegro"
      ],
      "description": "Convierte una imagen o sticker a blanco y negro",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "tograyscale",
      "base": "tobn",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a blanco y negro",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "togris",
      "base": "tobn",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a blanco y negro",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "blancoynegro",
      "base": "tobn",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a blanco y negro",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "tocomprimir",
      "base": "tocomprimir",
      "primary": true,
      "aliases": [
        "tocompress",
        "comprimir",
        "comprimirimagen",
        "reducir"
      ],
      "description": "Comprime una imagen para que ocupe menos espacio",
      "usage": "[calidad 1-100]",
      "category": "multimedia"
    },
    {
      "name": "tocompress",
      "base": "tocomprimir",
      "primary": false,
      "aliases": [],
      "description": "Comprime una imagen para que ocupe menos espacio",
      "usage": "[calidad 1-100]",
      "category": "multimedia"
    },
    {
      "name": "comprimir",
      "base": "tocomprimir",
      "primary": false,
      "aliases": [],
      "description": "Comprime una imagen para que ocupe menos espacio",
      "usage": "[calidad 1-100]",
      "category": "multimedia"
    },
    {
      "name": "comprimirimagen",
      "base": "tocomprimir",
      "primary": false,
      "aliases": [],
      "description": "Comprime una imagen para que ocupe menos espacio",
      "usage": "[calidad 1-100]",
      "category": "multimedia"
    },
    {
      "name": "reducir",
      "base": "tocomprimir",
      "primary": false,
      "aliases": [],
      "description": "Comprime una imagen para que ocupe menos espacio",
      "usage": "[calidad 1-100]",
      "category": "multimedia"
    },
    {
      "name": "toflac",
      "base": "toflac",
      "primary": true,
      "aliases": [
        "toaudioflac",
        "tolossless"
      ],
      "description": "Convierte un audio o video a FLAC sin pérdida",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toaudioflac",
      "base": "toflac",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a FLAC sin pérdida",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tolossless",
      "base": "toflac",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a FLAC sin pérdida",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "togif",
      "base": "togif",
      "primary": true,
      "aliases": [
        "togifsticker",
        "togifanimado"
      ],
      "description": "Convierte un sticker animado o video en GIF reproducible",
      "usage": "[responde a un sticker animado o video]",
      "category": "multimedia"
    },
    {
      "name": "togifsticker",
      "base": "togif",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker animado o video en GIF reproducible",
      "usage": "[responde a un sticker animado o video]",
      "category": "multimedia"
    },
    {
      "name": "togifanimado",
      "base": "togif",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker animado o video en GIF reproducible",
      "usage": "[responde a un sticker animado o video]",
      "category": "multimedia"
    },
    {
      "name": "toimg",
      "base": "toimg",
      "primary": true,
      "aliases": [
        "toimage",
        "tofoto",
        "topng",
        "tojpg"
      ],
      "description": "Convierte un sticker en una imagen PNG",
      "usage": "[responde a un sticker]",
      "category": "multimedia"
    },
    {
      "name": "toimage",
      "base": "toimg",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker en una imagen PNG",
      "usage": "[responde a un sticker]",
      "category": "multimedia"
    },
    {
      "name": "tofoto",
      "base": "toimg",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker en una imagen PNG",
      "usage": "[responde a un sticker]",
      "category": "multimedia"
    },
    {
      "name": "topng",
      "base": "toimg",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker en una imagen PNG",
      "usage": "[responde a un sticker]",
      "category": "multimedia"
    },
    {
      "name": "tojpg",
      "base": "toimg",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker en una imagen PNG",
      "usage": "[responde a un sticker]",
      "category": "multimedia"
    },
    {
      "name": "tojpeg",
      "base": "tojpeg",
      "primary": true,
      "aliases": [
        "tojpegimage",
        "tojpg2",
        "ajpg"
      ],
      "description": "Convierte una imagen o sticker a JPG",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "tojpegimage",
      "base": "tojpeg",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a JPG",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "tojpg2",
      "base": "tojpeg",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a JPG",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "ajpg",
      "base": "tojpeg",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a JPG",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "tom4a",
      "base": "tom4a",
      "primary": true,
      "aliases": [
        "toaac",
        "toaudioaac",
        "tom4aaudio"
      ],
      "description": "Convierte un audio o video a M4A/AAC",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toaac",
      "base": "tom4a",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a M4A/AAC",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toaudioaac",
      "base": "tom4a",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a M4A/AAC",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tom4aaudio",
      "base": "tom4a",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a M4A/AAC",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tomp3",
      "base": "tomp3",
      "primary": true,
      "aliases": [
        "toaudio",
        "tomp3audio",
        "toaudio3"
      ],
      "description": "Convierte un video, audio o nota de voz a MP3",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toaudio",
      "base": "tomp3",
      "primary": false,
      "aliases": [],
      "description": "Convierte un video, audio o nota de voz a MP3",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tomp3audio",
      "base": "tomp3",
      "primary": false,
      "aliases": [],
      "description": "Convierte un video, audio o nota de voz a MP3",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toaudio3",
      "base": "tomp3",
      "primary": false,
      "aliases": [],
      "description": "Convierte un video, audio o nota de voz a MP3",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tomp4",
      "base": "tomp4",
      "primary": true,
      "aliases": [
        "tovideo",
        "tomp4video"
      ],
      "description": "Convierte un sticker animado o un video a MP4",
      "usage": "[responde a un sticker o video]",
      "category": "multimedia"
    },
    {
      "name": "tovideo",
      "base": "tomp4",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker animado o un video a MP4",
      "usage": "[responde a un sticker o video]",
      "category": "multimedia"
    },
    {
      "name": "tomp4video",
      "base": "tomp4",
      "primary": false,
      "aliases": [],
      "description": "Convierte un sticker animado o un video a MP4",
      "usage": "[responde a un sticker o video]",
      "category": "multimedia"
    },
    {
      "name": "toogg",
      "base": "toogg",
      "primary": true,
      "aliases": [
        "toaudioogg",
        "tovorbis"
      ],
      "description": "Convierte un audio o video a OGG",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toaudioogg",
      "base": "toogg",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a OGG",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tovorbis",
      "base": "toogg",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a OGG",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "topt",
      "base": "topt",
      "primary": true,
      "aliases": [
        "tovoz",
        "tonota",
        "toptt",
        "tovoice"
      ],
      "description": "Convierte audio o video en nota de voz",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tovoz",
      "base": "topt",
      "primary": false,
      "aliases": [],
      "description": "Convierte audio o video en nota de voz",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tonota",
      "base": "topt",
      "primary": false,
      "aliases": [],
      "description": "Convierte audio o video en nota de voz",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toptt",
      "base": "topt",
      "primary": false,
      "aliases": [],
      "description": "Convierte audio o video en nota de voz",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "tovoice",
      "base": "topt",
      "primary": false,
      "aliases": [],
      "description": "Convierte audio o video en nota de voz",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toresize",
      "base": "toresize",
      "primary": true,
      "aliases": [
        "redimensionar",
        "tamanio",
        "tamano",
        "tamaño",
        "resize"
      ],
      "description": "Redimensiona una imagen o sticker al tamaño que indiques",
      "usage": "<ancho> <alto>",
      "category": "multimedia"
    },
    {
      "name": "redimensionar",
      "base": "toresize",
      "primary": false,
      "aliases": [],
      "description": "Redimensiona una imagen o sticker al tamaño que indiques",
      "usage": "<ancho> <alto>",
      "category": "multimedia"
    },
    {
      "name": "tamanio",
      "base": "toresize",
      "primary": false,
      "aliases": [],
      "description": "Redimensiona una imagen o sticker al tamaño que indiques",
      "usage": "<ancho> <alto>",
      "category": "multimedia"
    },
    {
      "name": "tamano",
      "base": "toresize",
      "primary": false,
      "aliases": [],
      "description": "Redimensiona una imagen o sticker al tamaño que indiques",
      "usage": "<ancho> <alto>",
      "category": "multimedia"
    },
    {
      "name": "tamaño",
      "base": "toresize",
      "primary": false,
      "aliases": [],
      "description": "Redimensiona una imagen o sticker al tamaño que indiques",
      "usage": "<ancho> <alto>",
      "category": "multimedia"
    },
    {
      "name": "resize",
      "base": "toresize",
      "primary": false,
      "aliases": [],
      "description": "Redimensiona una imagen o sticker al tamaño que indiques",
      "usage": "<ancho> <alto>",
      "category": "multimedia"
    },
    {
      "name": "tosquare",
      "base": "tosquare",
      "primary": true,
      "aliases": [
        "tocuadrado",
        "toavatar",
        "tofotoperfil"
      ],
      "description": "Recorta una imagen o sticker en formato cuadrado",
      "usage": "[tamaño]",
      "category": "multimedia"
    },
    {
      "name": "tocuadrado",
      "base": "tosquare",
      "primary": false,
      "aliases": [],
      "description": "Recorta una imagen o sticker en formato cuadrado",
      "usage": "[tamaño]",
      "category": "multimedia"
    },
    {
      "name": "toavatar",
      "base": "tosquare",
      "primary": false,
      "aliases": [],
      "description": "Recorta una imagen o sticker en formato cuadrado",
      "usage": "[tamaño]",
      "category": "multimedia"
    },
    {
      "name": "tofotoperfil",
      "base": "tosquare",
      "primary": false,
      "aliases": [],
      "description": "Recorta una imagen o sticker en formato cuadrado",
      "usage": "[tamaño]",
      "category": "multimedia"
    },
    {
      "name": "totiff",
      "base": "totiff",
      "primary": true,
      "aliases": [
        "totif",
        "totiffimage"
      ],
      "description": "Convierte una imagen o sticker a TIFF",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "totif",
      "base": "totiff",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a TIFF",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "totiffimage",
      "base": "totiff",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a TIFF",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "towav",
      "base": "towav",
      "primary": true,
      "aliases": [
        "towavaudio",
        "toaudiowav"
      ],
      "description": "Convierte un audio o video a WAV",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "towavaudio",
      "base": "towav",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a WAV",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "toaudiowav",
      "base": "towav",
      "primary": false,
      "aliases": [],
      "description": "Convierte un audio o video a WAV",
      "usage": "[responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "towebp",
      "base": "towebp",
      "primary": true,
      "aliases": [
        "toweb",
        "towebpimage"
      ],
      "description": "Convierte una imagen o sticker a WebP",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "toweb",
      "base": "towebp",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a WebP",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "towebpimage",
      "base": "towebp",
      "primary": false,
      "aliases": [],
      "description": "Convierte una imagen o sticker a WebP",
      "usage": "[responde a una imagen o sticker]",
      "category": "multimedia"
    },
    {
      "name": "traducir",
      "base": "traducir",
      "primary": true,
      "aliases": [
        "translate",
        "tr"
      ],
      "description": "Traduce un texto del español a otro idioma",
      "usage": "<idioma> <texto>",
      "category": "utilidades"
    },
    {
      "name": "translate",
      "base": "traducir",
      "primary": false,
      "aliases": [],
      "description": "Traduce un texto del español a otro idioma",
      "usage": "<idioma> <texto>",
      "category": "utilidades"
    },
    {
      "name": "tr",
      "base": "traducir",
      "primary": false,
      "aliases": [],
      "description": "Traduce un texto del español a otro idioma",
      "usage": "<idioma> <texto>",
      "category": "utilidades"
    },
    {
      "name": "transferir",
      "base": "transferir",
      "primary": true,
      "aliases": [
        "pay",
        "pagar",
        "enviar"
      ],
      "description": "Transfiere monedas a otro usuario (comisión del 2%)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "pay",
      "base": "transferir",
      "primary": false,
      "aliases": [],
      "description": "Transfiere monedas a otro usuario (comisión del 2%)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "pagar",
      "base": "transferir",
      "primary": false,
      "aliases": [],
      "description": "Transfiere monedas a otro usuario (comisión del 2%)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "enviar",
      "base": "transferir",
      "primary": false,
      "aliases": [],
      "description": "Transfiere monedas a otro usuario (comisión del 2%)",
      "usage": "@usuario <cantidad>",
      "category": "economia"
    },
    {
      "name": "trivia",
      "base": "trivia",
      "primary": true,
      "aliases": [
        "quiz",
        "pregunta"
      ],
      "description": "Responde preguntas de trivia y gana monedas",
      "usage": "[nueva|respuesta]",
      "category": "juegos"
    },
    {
      "name": "quiz",
      "base": "trivia",
      "primary": false,
      "aliases": [],
      "description": "Responde preguntas de trivia y gana monedas",
      "usage": "[nueva|respuesta]",
      "category": "juegos"
    },
    {
      "name": "pregunta",
      "base": "trivia",
      "primary": false,
      "aliases": [],
      "description": "Responde preguntas de trivia y gana monedas",
      "usage": "[nueva|respuesta]",
      "category": "juegos"
    },
    {
      "name": "tts",
      "base": "tts",
      "primary": true,
      "aliases": [
        "decir",
        "hablar",
        "voz",
        "textoavoz",
        "ttsvoz"
      ],
      "description": "Convierte texto en audio o nota de voz, con idiomas y velocidad",
      "usage": "[idioma|nota|lento|rápido|traducir <idioma>] <texto>",
      "category": "multimedia"
    },
    {
      "name": "decir",
      "base": "tts",
      "primary": false,
      "aliases": [],
      "description": "Convierte texto en audio o nota de voz, con idiomas y velocidad",
      "usage": "[idioma|nota|lento|rápido|traducir <idioma>] <texto>",
      "category": "multimedia"
    },
    {
      "name": "hablar",
      "base": "tts",
      "primary": false,
      "aliases": [],
      "description": "Convierte texto en audio o nota de voz, con idiomas y velocidad",
      "usage": "[idioma|nota|lento|rápido|traducir <idioma>] <texto>",
      "category": "multimedia"
    },
    {
      "name": "voz",
      "base": "tts",
      "primary": false,
      "aliases": [],
      "description": "Convierte texto en audio o nota de voz, con idiomas y velocidad",
      "usage": "[idioma|nota|lento|rápido|traducir <idioma>] <texto>",
      "category": "multimedia"
    },
    {
      "name": "textoavoz",
      "base": "tts",
      "primary": false,
      "aliases": [],
      "description": "Convierte texto en audio o nota de voz, con idiomas y velocidad",
      "usage": "[idioma|nota|lento|rápido|traducir <idioma>] <texto>",
      "category": "multimedia"
    },
    {
      "name": "ttsvoz",
      "base": "tts",
      "primary": false,
      "aliases": [],
      "description": "Convierte texto en audio o nota de voz, con idiomas y velocidad",
      "usage": "[idioma|nota|lento|rápido|traducir <idioma>] <texto>",
      "category": "multimedia"
    },
    {
      "name": "unidades",
      "base": "unidades",
      "primary": true,
      "aliases": [
        "convertir",
        "unit",
        "units"
      ],
      "description": "Convierte unidades de medida",
      "usage": "<valor> <unidad> <destino>",
      "category": "utilidades"
    },
    {
      "name": "convertir",
      "base": "unidades",
      "primary": false,
      "aliases": [],
      "description": "Convierte unidades de medida",
      "usage": "<valor> <unidad> <destino>",
      "category": "utilidades"
    },
    {
      "name": "unit",
      "base": "unidades",
      "primary": false,
      "aliases": [],
      "description": "Convierte unidades de medida",
      "usage": "<valor> <unidad> <destino>",
      "category": "utilidades"
    },
    {
      "name": "units",
      "base": "unidades",
      "primary": false,
      "aliases": [],
      "description": "Convierte unidades de medida",
      "usage": "<valor> <unidad> <destino>",
      "category": "utilidades"
    },
    {
      "name": "uptime",
      "base": "uptime",
      "primary": true,
      "aliases": [
        "activo",
        "encendido",
        "tiempoactivo"
      ],
      "description": "Muestra cuánto tiempo lleva activo el bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "activo",
      "base": "uptime",
      "primary": false,
      "aliases": [],
      "description": "Muestra cuánto tiempo lleva activo el bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "encendido",
      "base": "uptime",
      "primary": false,
      "aliases": [],
      "description": "Muestra cuánto tiempo lleva activo el bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "tiempoactivo",
      "base": "uptime",
      "primary": false,
      "aliases": [],
      "description": "Muestra cuánto tiempo lleva activo el bot",
      "usage": "",
      "category": "sistema"
    },
    {
      "name": "verdadreto",
      "base": "verdadreto",
      "primary": true,
      "aliases": [
        "verdad",
        "reto",
        "truth",
        "dare"
      ],
      "description": "Lanza una verdad o un reto aleatorio",
      "usage": "[verdad|reto]",
      "category": "juegos"
    },
    {
      "name": "verdad",
      "base": "verdadreto",
      "primary": false,
      "aliases": [],
      "description": "Lanza una verdad o un reto aleatorio",
      "usage": "[verdad|reto]",
      "category": "juegos"
    },
    {
      "name": "reto",
      "base": "verdadreto",
      "primary": false,
      "aliases": [],
      "description": "Lanza una verdad o un reto aleatorio",
      "usage": "[verdad|reto]",
      "category": "juegos"
    },
    {
      "name": "truth",
      "base": "verdadreto",
      "primary": false,
      "aliases": [],
      "description": "Lanza una verdad o un reto aleatorio",
      "usage": "[verdad|reto]",
      "category": "juegos"
    },
    {
      "name": "dare",
      "base": "verdadreto",
      "primary": false,
      "aliases": [],
      "description": "Lanza una verdad o un reto aleatorio",
      "usage": "[verdad|reto]",
      "category": "juegos"
    },
    {
      "name": "videodl",
      "base": "videodl",
      "primary": true,
      "aliases": [
        "vdl",
        "dlvideo",
        "descargar"
      ],
      "description": "Descarga video de cualquier sitio compatible con yt-dlp",
      "usage": "🎬 *DESCARGA UNIVERSAL*\n\n🔗 Uso: */videodl <enlace>*\n✨ Ejemplo: */videodl https://www.dailymotion.com/video/xbucbr2*\n\n_Funciona con YouTube, Dailymotion, Streamable, Archive, Coub y cientos de sitios más._",
      "category": "descargas"
    },
    {
      "name": "vdl",
      "base": "videodl",
      "primary": false,
      "aliases": [],
      "description": "Descarga video de cualquier sitio compatible con yt-dlp",
      "usage": "🎬 *DESCARGA UNIVERSAL*\n\n🔗 Uso: */videodl <enlace>*\n✨ Ejemplo: */videodl https://www.dailymotion.com/video/xbucbr2*\n\n_Funciona con YouTube, Dailymotion, Streamable, Archive, Coub y cientos de sitios más._",
      "category": "descargas"
    },
    {
      "name": "dlvideo",
      "base": "videodl",
      "primary": false,
      "aliases": [],
      "description": "Descarga video de cualquier sitio compatible con yt-dlp",
      "usage": "🎬 *DESCARGA UNIVERSAL*\n\n🔗 Uso: */videodl <enlace>*\n✨ Ejemplo: */videodl https://www.dailymotion.com/video/xbucbr2*\n\n_Funciona con YouTube, Dailymotion, Streamable, Archive, Coub y cientos de sitios más._",
      "category": "descargas"
    },
    {
      "name": "descargar",
      "base": "videodl",
      "primary": false,
      "aliases": [],
      "description": "Descarga video de cualquier sitio compatible con yt-dlp",
      "usage": "🎬 *DESCARGA UNIVERSAL*\n\n🔗 Uso: */videodl <enlace>*\n✨ Ejemplo: */videodl https://www.dailymotion.com/video/xbucbr2*\n\n_Funciona con YouTube, Dailymotion, Streamable, Archive, Coub y cientos de sitios más._",
      "category": "descargas"
    },
    {
      "name": "vozefecto",
      "base": "vozefecto",
      "primary": true,
      "aliases": [
        "efectovoz",
        "cambiarvoz",
        "vozgrave",
        "vozaguda",
        "vozrobot",
        "vozeco",
        "vozradio",
        "vozlenta",
        "vozrapida"
      ],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "efectovoz",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "cambiarvoz",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "vozgrave",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "vozaguda",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "vozrobot",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "vozeco",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "vozradio",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "vozlenta",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "vozrapida",
      "base": "vozefecto",
      "primary": false,
      "aliases": [],
      "description": "Aplica efectos de voz a un audio o video (grave, aguda, robot, eco y más)",
      "usage": "<efecto> [responde a un audio o video]",
      "category": "multimedia"
    },
    {
      "name": "welcome",
      "base": "welcome",
      "primary": true,
      "aliases": [
        "bienvenida",
        "bienvenido",
        "setwelcome",
        "setbienvenida",
        "setbye",
        "setdespedida"
      ],
      "description": "Activa, desactiva y personaliza la bienvenida del grupo",
      "usage": "on|off|texto|bye|textobye",
      "category": "admin"
    },
    {
      "name": "bienvenida",
      "base": "welcome",
      "primary": false,
      "aliases": [],
      "description": "Activa, desactiva y personaliza la bienvenida del grupo",
      "usage": "on|off|texto|bye|textobye",
      "category": "admin"
    },
    {
      "name": "bienvenido",
      "base": "welcome",
      "primary": false,
      "aliases": [],
      "description": "Activa, desactiva y personaliza la bienvenida del grupo",
      "usage": "on|off|texto|bye|textobye",
      "category": "admin"
    },
    {
      "name": "setwelcome",
      "base": "welcome",
      "primary": false,
      "aliases": [],
      "description": "Activa, desactiva y personaliza la bienvenida del grupo",
      "usage": "on|off|texto|bye|textobye",
      "category": "admin"
    },
    {
      "name": "setbienvenida",
      "base": "welcome",
      "primary": false,
      "aliases": [],
      "description": "Activa, desactiva y personaliza la bienvenida del grupo",
      "usage": "on|off|texto|bye|textobye",
      "category": "admin"
    },
    {
      "name": "setbye",
      "base": "welcome",
      "primary": false,
      "aliases": [],
      "description": "Activa, desactiva y personaliza la bienvenida del grupo",
      "usage": "on|off|texto|bye|textobye",
      "category": "admin"
    },
    {
      "name": "setdespedida",
      "base": "welcome",
      "primary": false,
      "aliases": [],
      "description": "Activa, desactiva y personaliza la bienvenida del grupo",
      "usage": "on|off|texto|bye|textobye",
      "category": "admin"
    },
    {
      "name": "wiki",
      "base": "wiki",
      "primary": true,
      "aliases": [
        "wikipedia",
        "wikisearch"
      ],
      "description": "Busca información en Wikipedia en español",
      "usage": "<tema>",
      "category": "info"
    },
    {
      "name": "wikipedia",
      "base": "wiki",
      "primary": false,
      "aliases": [],
      "description": "Busca información en Wikipedia en español",
      "usage": "<tema>",
      "category": "info"
    },
    {
      "name": "wikisearch",
      "base": "wiki",
      "primary": false,
      "aliases": [],
      "description": "Busca información en Wikipedia en español",
      "usage": "<tema>",
      "category": "info"
    },
    {
      "name": "word",
      "base": "word",
      "primary": true,
      "aliases": [
        "docx",
        "documento"
      ],
      "description": "Crea un documento Word (.docx) con tu texto",
      "usage": "",
      "category": "utilidades"
    },
    {
      "name": "docx",
      "base": "word",
      "primary": false,
      "aliases": [],
      "description": "Crea un documento Word (.docx) con tu texto",
      "usage": "",
      "category": "utilidades"
    },
    {
      "name": "documento",
      "base": "word",
      "primary": false,
      "aliases": [],
      "description": "Crea un documento Word (.docx) con tu texto",
      "usage": "",
      "category": "utilidades"
    },
    {
      "name": "work",
      "base": "work",
      "primary": true,
      "aliases": [
        "w",
        "trabajar",
        "trabajo"
      ],
      "description": "Trabaja para ganar NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "w",
      "base": "work",
      "primary": false,
      "aliases": [],
      "description": "Trabaja para ganar NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "trabajar",
      "base": "work",
      "primary": false,
      "aliases": [],
      "description": "Trabaja para ganar NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "trabajo",
      "base": "work",
      "primary": false,
      "aliases": [],
      "description": "Trabaja para ganar NovitaCoins con un tiempo de espera",
      "usage": "",
      "category": "economia"
    },
    {
      "name": "xdl",
      "base": "xdl",
      "primary": true,
      "aliases": [
        "twitter",
        "x",
        "tw",
        "twitterdl"
      ],
      "description": "Descarga videos e imágenes de X (Twitter)",
      "usage": "<enlace de X o Twitter>",
      "category": "descargas"
    },
    {
      "name": "twitter",
      "base": "xdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga videos e imágenes de X (Twitter)",
      "usage": "<enlace de X o Twitter>",
      "category": "descargas"
    },
    {
      "name": "x",
      "base": "xdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga videos e imágenes de X (Twitter)",
      "usage": "<enlace de X o Twitter>",
      "category": "descargas"
    },
    {
      "name": "tw",
      "base": "xdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga videos e imágenes de X (Twitter)",
      "usage": "<enlace de X o Twitter>",
      "category": "descargas"
    },
    {
      "name": "twitterdl",
      "base": "xdl",
      "primary": false,
      "aliases": [],
      "description": "Descarga videos e imágenes de X (Twitter)",
      "usage": "<enlace de X o Twitter>",
      "category": "descargas"
    },
    {
      "name": "ytchannel",
      "base": "ytchannel",
      "primary": true,
      "aliases": [
        "ytcanal",
        "canalyt",
        "ytchannels",
        "buscarcanal",
        "canalesyt"
      ],
      "description": "Busca canales de YouTube y muestra seguidores y enlace",
      "usage": "<nombre del canal>",
      "category": "descargas"
    },
    {
      "name": "ytcanal",
      "base": "ytchannel",
      "primary": false,
      "aliases": [],
      "description": "Busca canales de YouTube y muestra seguidores y enlace",
      "usage": "<nombre del canal>",
      "category": "descargas"
    },
    {
      "name": "canalyt",
      "base": "ytchannel",
      "primary": false,
      "aliases": [],
      "description": "Busca canales de YouTube y muestra seguidores y enlace",
      "usage": "<nombre del canal>",
      "category": "descargas"
    },
    {
      "name": "ytchannels",
      "base": "ytchannel",
      "primary": false,
      "aliases": [],
      "description": "Busca canales de YouTube y muestra seguidores y enlace",
      "usage": "<nombre del canal>",
      "category": "descargas"
    },
    {
      "name": "buscarcanal",
      "base": "ytchannel",
      "primary": false,
      "aliases": [],
      "description": "Busca canales de YouTube y muestra seguidores y enlace",
      "usage": "<nombre del canal>",
      "category": "descargas"
    },
    {
      "name": "canalesyt",
      "base": "ytchannel",
      "primary": false,
      "aliases": [],
      "description": "Busca canales de YouTube y muestra seguidores y enlace",
      "usage": "<nombre del canal>",
      "category": "descargas"
    },
    {
      "name": "ytinfo",
      "base": "ytinfo",
      "primary": true,
      "aliases": [
        "infoyt",
        "videoinfo",
        "ytvideoinfo",
        "infovideo"
      ],
      "description": "Muestra información de un video de YouTube",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "infoyt",
      "base": "ytinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un video de YouTube",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "videoinfo",
      "base": "ytinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un video de YouTube",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytvideoinfo",
      "base": "ytinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un video de YouTube",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "infovideo",
      "base": "ytinfo",
      "primary": false,
      "aliases": [],
      "description": "Muestra información de un video de YouTube",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytplaylist",
      "base": "ytplaylist",
      "primary": true,
      "aliases": [
        "ytlista",
        "listayt",
        "ytlistas",
        "playlistsyt",
        "buscarplaylist"
      ],
      "description": "Busca listas de reproducción de YouTube",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytlista",
      "base": "ytplaylist",
      "primary": false,
      "aliases": [],
      "description": "Busca listas de reproducción de YouTube",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "listayt",
      "base": "ytplaylist",
      "primary": false,
      "aliases": [],
      "description": "Busca listas de reproducción de YouTube",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytlistas",
      "base": "ytplaylist",
      "primary": false,
      "aliases": [],
      "description": "Busca listas de reproducción de YouTube",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "playlistsyt",
      "base": "ytplaylist",
      "primary": false,
      "aliases": [],
      "description": "Busca listas de reproducción de YouTube",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "buscarplaylist",
      "base": "ytplaylist",
      "primary": false,
      "aliases": [],
      "description": "Busca listas de reproducción de YouTube",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytsearch",
      "base": "ytsearch",
      "primary": true,
      "aliases": [
        "yts",
        "ytbuscar",
        "buscarvideo",
        "buscarvideos",
        "yt",
        "youtube"
      ],
      "description": "Busca videos en YouTube y muestra título, canal, duración y enlace",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "yts",
      "base": "ytsearch",
      "primary": false,
      "aliases": [],
      "description": "Busca videos en YouTube y muestra título, canal, duración y enlace",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytbuscar",
      "base": "ytsearch",
      "primary": false,
      "aliases": [],
      "description": "Busca videos en YouTube y muestra título, canal, duración y enlace",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "buscarvideo",
      "base": "ytsearch",
      "primary": false,
      "aliases": [],
      "description": "Busca videos en YouTube y muestra título, canal, duración y enlace",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "buscarvideos",
      "base": "ytsearch",
      "primary": false,
      "aliases": [],
      "description": "Busca videos en YouTube y muestra título, canal, duración y enlace",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "yt",
      "base": "ytsearch",
      "primary": false,
      "aliases": [],
      "description": "Busca videos en YouTube y muestra título, canal, duración y enlace",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "youtube",
      "base": "ytsearch",
      "primary": false,
      "aliases": [],
      "description": "Busca videos en YouTube y muestra título, canal, duración y enlace",
      "usage": "<búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytvip",
      "base": "ytvip",
      "primary": true,
      "aliases": [
        "vipdl",
        "ytpremiun",
        "vipvideo",
        "vipmp3",
        "vipaudio"
      ],
      "description": "Descarga video o audio de YouTube con ytpremiun-vip (plugin independiente)",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "vipdl",
      "base": "ytvip",
      "primary": false,
      "aliases": [],
      "description": "Descarga video o audio de YouTube con ytpremiun-vip (plugin independiente)",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "ytpremiun",
      "base": "ytvip",
      "primary": false,
      "aliases": [],
      "description": "Descarga video o audio de YouTube con ytpremiun-vip (plugin independiente)",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "vipvideo",
      "base": "ytvip",
      "primary": false,
      "aliases": [],
      "description": "Descarga video o audio de YouTube con ytpremiun-vip (plugin independiente)",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "vipmp3",
      "base": "ytvip",
      "primary": false,
      "aliases": [],
      "description": "Descarga video o audio de YouTube con ytpremiun-vip (plugin independiente)",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    },
    {
      "name": "vipaudio",
      "base": "ytvip",
      "primary": false,
      "aliases": [],
      "description": "Descarga video o audio de YouTube con ytpremiun-vip (plugin independiente)",
      "usage": "<enlace o búsqueda>",
      "category": "descargas"
    }
  ]
}
