#!/usr/bin/env node
/**
 * Genera data.js a partir de los plugins reales de NovitaBot.
 *
 * Uso:
 *   node scripts/generate-data.js [ruta-a-plugins] [archivo-salida]
 *
 * Por defecto lee ../Novita-bot/plugins y escribe data.js.
 */

const fs = require('fs');
const path = require('path');

const PLUGINS_DIR = path.resolve(
  process.argv[2] || process.env.NOVITA_PLUGINS || path.join(__dirname, '..', '..', 'Novita-bot', 'plugins'),
);
const OUTPUT = path.resolve(process.argv[3] || path.join(__dirname, '..', 'data.js'));

const CATEGORY_META = {
  admin: ['Administración', '🛡️', 'Moderación, permisos y control total del grupo.'],
  anime: ['Anime & Nekos', '🌸', 'Imágenes, reacciones y comandos kawaii.'],
  descargas: ['Descargas', '📥', 'Música, videos y contenido desde distintas plataformas.'],
  economia: ['Economía', '💰', 'Monedas, niveles, tienda, trabajos y recompensas.'],
  entretenimiento: ['Entretenimiento', '🎲', 'Juegos rápidos, retos y diversión para el grupo.'],
  ia: ['Inteligencia Artificial', '🧠', 'Conversación, imágenes y resúmenes con IA.'],
  info: ['Información', 'ℹ️', 'Datos, clima, noticias y consultas del día a día.'],
  jadibot: ['Sub-Bots', '🤖', 'Crea y administra tus propios bots secundarios.'],
  juegos: ['Juegos', '🎮', 'Competencias, apuestas y juegos por turnos.'],
  mascotas: ['Mascotas', '🐾', 'Adopta, cuida y haz crecer a tu mascota.'],
  multimedia: ['Multimedia', '🎨', 'Stickers, imágenes, audio, TTS y efectos de voz.'],
  perfil: ['Perfil', '👤', 'Tu tarjeta, logros, rango y progreso personal.'],
  pokemon: ['Pokémon', '⚡', 'Batallas, equipos y torneos con tus Pokémon.'],
  sistema: ['Sistema', '⚙️', 'Menú, estado, backups y herramientas internas.'],
  staff: ['Staff', '🎖️', 'Equipo, jerarquías y herramientas del staff.'],
  utilidades: ['Utilidades', '🧰', 'Calculadoras, conversores y generadores.'],
};

const BOT = {
  name: 'NovitaBot',
  creator: 'Manuel VG',
  prefix: '#',
  languages: 25,
  channel: 'https://whatsapp.com/channel/0029Vb94gAXEQIapCNyaZ844',
  group: 'https://chat.whatsapp.com/LkF1B22nqA72wBDioCMSZ6?s=sh&p=i&mlu=4&ilr=4&iam=2',
  channelName: 'Novita Updates',
  statusUrl:
    'https://gist.githubusercontent.com/natsu-dev01/96ebdd7b6f0c8faffa7f86ed01ac64bb/raw/status.json',
};

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

/** Devuelve el bloque balanceado desde el carácter de apertura. */
function readBalanced(src, start) {
  const open = src[start];
  const close = open === '[' ? ']' : open === '{' ? '}' : open === '(' ? ')' : null;
  if (!close) return src.slice(start).split('\n')[0];

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = start; i < src.length; i++) {
    const ch = src[i];

    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch;
      continue;
    }

    if (ch === '/' && src[i + 1] === '/') {
      const nl = src.indexOf('\n', i);
      i = nl < 0 ? src.length : nl;
      continue;
    }

    if (ch === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      i = end < 0 ? src.length : end + 1;
      continue;
    }

    if (ch === open) depth++;
    else if (ch === close) {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }

  return src.slice(start);
}

/** Extrae y decodifica todos los literales de texto de una expresión. */
function stringLiterals(expr) {
  const re = /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g;
  const out = [];
  let match;

  while ((match = re.exec(expr))) {
    const literal = match[0];
    try {
      const value = Function(`"use strict"; return (${literal});`)();
      if (typeof value === 'string') out.push(value);
    } catch {
      out.push(literal.slice(1, -1));
    }
  }

  return out;
}

function joinStrings(expr) {
  return stringLiterals(expr).join('').trim();
}

/** Lee el valor de un campo de un objeto literal, a nivel raíz. */
function objectField(objSrc, field) {
  const re = new RegExp(`\\b${field}\\s*:`);
  const match = re.exec(objSrc);
  if (!match) return null;

  let i = match.index + match[0].length;
  while (i < objSrc.length && /\s/.test(objSrc[i])) i++;
  if (i >= objSrc.length) return null;

  const first = objSrc[i];
  if (first === '[' || first === '{' || first === '(') {
    return readBalanced(objSrc, i);
  }

  // Valor simple: hasta la coma de nivel raíz o el cierre.
  let depth = 0;
  let quote = null;
  let escaped = false;
  const start = i;

  for (; i < objSrc.length; i++) {
    const ch = objSrc[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === '[' || ch === '{' || ch === '(') depth++;
    else if (ch === ']' || ch === '}' || ch === ')') depth--;
    else if (ch === ',' && depth === 0) break;
  }

  return objSrc.slice(start, i).trim();
}

function findHandlerCommand(src) {
  const match = /handler\.command\s*=\s*/.exec(src);
  if (!match) return null;

  const start = match.index + match[0].length;
  const first = src[start];

  if (first === '[') {
    const expr = readBalanced(src, start);
    const commands = stringLiterals(expr);
    // Detecta spreads de variables que no podamos resolver.
    const dynamic = /\.\.\.\s*(?!\[)/.test(expr);
    return { commands, dynamic };
  }

  const tail = src.slice(start).split('\n')[0].trim();

  if (/Object\.keys\s*\(\s*(\w+)\s*\)/.test(tail)) {
    const name = tail.match(/Object\.keys\s*\(\s*(\w+)\s*\)/)[1];
    const def = new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*\\{`).exec(src);
    if (def) {
      const objStart = src.indexOf('{', def.index + def[0].length - 1);
      const obj = readBalanced(src, objStart);
      const keys = [...obj.matchAll(/^\s*([A-Za-z0-9_$]+)\s*:/gm)].map((m) => m[1]);
      return { commands: keys, dynamic: false };
    }
  }

  return { commands: stringLiterals(tail), dynamic: true };
}

function findHandlerText(src, field) {
  const match = new RegExp(`handler\\.${field}\\s*=\\s*`).exec(src);
  if (!match) return '';

  const start = match.index + match[0].length;
  const first = src[start];

  if (first === '[' || first === '{' || first === '(') {
    return joinStrings(readBalanced(src, start));
  }

  // Toma la expresión hasta el punto y coma o salto de línea real.
  let i = start;
  let quote = null;
  let escaped = false;

  for (; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === ';' || ch === '\n') break;
  }

  return joinStrings(src.slice(start, i));
}

function findFactory(src) {
  const match = /=\s*(create\w+)\s*\(\s*\{/.exec(src);
  if (!match) return null;

  const open = src.indexOf('{', match.index + match[0].length - 1);
  const obj = readBalanced(src, open);

  const nameExpr = objectField(obj, 'name');
  const aliasesExpr = objectField(obj, 'aliases');
  const descriptionExpr = objectField(obj, 'description');
  const usageExpr = objectField(obj, 'usage');

  const name = nameExpr ? joinStrings(nameExpr) : '';
  if (!name) return null;

  return {
    commands: [name, ...(aliasesExpr ? stringLiterals(aliasesExpr) : [])],
    description: descriptionExpr ? joinStrings(descriptionExpr) : '',
    usage: usageExpr ? joinStrings(usageExpr) : '',
    dynamic: false,
  };
}

function cleanText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function main() {
  if (!fs.existsSync(PLUGINS_DIR)) {
    console.error(`No existe la carpeta de plugins: ${PLUGINS_DIR}`);
    process.exit(1);
  }

  const categories = [];
  const commands = [];
  const warnings = [];
  const usedNames = new Set();
  let pluginCount = 0;

  for (const entry of fs.readdirSync(PLUGINS_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;

    const category = entry.name;
    const meta = CATEGORY_META[category];
    if (!meta) {
      warnings.push(`Categoría sin metadatos: ${category}`);
    }

    const dir = path.join(PLUGINS_DIR, category);
    const files = fs
      .readdirSync(dir)
      .filter((file) => file.endsWith('.js'))
      .sort((a, b) => a.localeCompare(b, 'es'));

    if (meta) {
      categories.push({
        id: category,
        title: meta[0],
        icon: meta[1],
        description: meta[2],
        count: 0,
      });
    }

    for (const file of files) {
      pluginCount++;

      const src = fs.readFileSync(path.join(dir, file), 'utf8');
      const relative = path.relative(PLUGINS_DIR, path.join(dir, file));

      let info = null;
      const handler = findHandlerCommand(src);

      if (handler && handler.commands.length) {
        info = {
          commands: handler.commands,
          description: findHandlerText(src, 'description'),
          usage: findHandlerText(src, 'usage'),
          dynamic: handler.dynamic,
        };
      } else {
        info = findFactory(src);
        if (!info) {
          warnings.push(`Sin comando detectado: ${relative}`);
          continue;
        }
      }

      if (info.dynamic) warnings.push(`Comando dinámico: ${relative}`);

      const seen = new Set();
      const list = info.commands
        .map((command) => String(command || '').trim())
        .filter((command) => {
          if (!command || seen.has(command)) return false;
          seen.add(command);
          return true;
        });

      if (!list.length) {
        warnings.push(`Lista vacía: ${relative}`);
        continue;
      }

      const base = list[0];
      const key = base.toLowerCase();

      // El bot guarda los comandos en un Map por nombre: si dos plugins
      // comparten un comando, solo queda uno. Replicamos ese comportamiento.
      if (usedNames.has(key)) {
        warnings.push(`Comando duplicado, se omite: ${relative} (#${base})`);
        continue;
      }

      const aliases = list.slice(1).filter((alias) => !usedNames.has(alias.toLowerCase()));
      usedNames.add(key);
      aliases.forEach((alias) => usedNames.add(alias.toLowerCase()));
      const description = cleanText(info.description) || `Comando ${BOT.prefix}${base}`;
      const usage = cleanText(info.usage);
      const categoryMeta = categories.find((item) => item.id === category);

      commands.push({
        name: base,
        base,
        primary: true,
        aliases,
        description,
        usage,
        category,
      });

      if (categoryMeta) categoryMeta.count++;

      for (const alias of aliases) {
        commands.push({
          name: alias,
          base,
          primary: false,
          aliases: [],
          description,
          usage,
          category,
        });
        if (categoryMeta) categoryMeta.count++;
      }
    }
  }

  commands.sort((a, b) => a.name.localeCompare(b.name, 'es'));

  const data = {
    bot: {
      ...BOT,
      plugins: pluginCount,
      commands: commands.length,
    },
    categories,
    commands,
  };

  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(OUTPUT, `window.NOVITA_DATA = ${json};\n`, 'utf8');

  const primaries = commands.filter((command) => command.primary).length;
  const aliases = commands.length - primaries;

  console.log(`Plugins:    ${pluginCount}`);
  console.log(`Comandos:   ${commands.length} (${primaries} principales + ${aliases} alias)`);
  console.log(`Categorías: ${categories.length}`);
  console.log(`Archivo:    ${OUTPUT}`);
  if (warnings.length) {
    console.log(`\nAvisos (${warnings.length}):`);
    warnings.forEach((warning) => console.log(`  - ${warning}`));
  }
}

main();
