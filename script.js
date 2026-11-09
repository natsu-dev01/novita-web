(function () {
  'use strict';

  const DATA = window.NOVITA_DATA || { bot: {}, categories: [], commands: [] };
  const BOT = DATA.bot || {};
  const CATEGORIES = Array.isArray(DATA.categories) ? DATA.categories : [];
  const COMMANDS = Array.isArray(DATA.commands) ? DATA.commands : [];
  const PREFIX = BOT.prefix || '#';

  const MOBILE_QUERY = window.matchMedia ? window.matchMedia('(max-width: 640px)') : null;
  const PAGE_SIZE = MOBILE_QUERY && MOBILE_QUERY.matches ? 12 : 24;
  const FAVORITES_KEY = 'novita:favorites';
  const SORT_KEY = 'novita:sort';
  const RECENT_KEY = 'novita:recent';
  const STATUS_KEY = 'novita:last-status';
  const STATUS_REFRESH_MS = 30 * 1000;
  const STATUS_TIMEOUT_MS = 8000;
  // El gist puede tardar ~1 minuto en reflejar el último latido, así que se
  // toleran 4 minutos sin señal antes de considerar el bot caído.
  const STATUS_STALE_MS = 4 * 60 * 1000;
  const STATUS_LIVE_REFRESH_MS = 10 * 1000;
  const MAX_RECENT = 12;

  const $ = (selector, scope) => (scope || document).querySelector(selector);
  const $$ = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

  // ---------- Almacenamiento local ----------

  function readFavorites() {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed.filter((name) => typeof name === 'string') : []);
    } catch {
      return new Set();
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...state.favorites]));
    } catch {
      /* almacenamiento no disponible */
    }
  }

  function readSort() {
    try {
      const value = localStorage.getItem(SORT_KEY);
      return ['az', 'category', 'aliases'].includes(value) ? value : 'az';
    } catch {
      return 'az';
    }
  }

  function saveSort() {
    try {
      localStorage.setItem(SORT_KEY, state.sort);
    } catch {
      /* almacenamiento no disponible */
    }
  }

  function readRecent() {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];

      const valid = new Set(COMMANDS.map((command) => command.name));
      return parsed
        .filter((name) => typeof name === 'string' && valid.has(name))
        .slice(0, MAX_RECENT);
    } catch {
      return [];
    }
  }

  function saveRecent() {
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(state.recent));
    } catch {
      /* almacenamiento no disponible */
    }
  }

  function readStatusCache() {
    try {
      const raw = localStorage.getItem(STATUS_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch {
      return null;
    }
  }

  function saveStatusCache(payload) {
    try {
      localStorage.setItem(STATUS_KEY, JSON.stringify(payload));
    } catch {
      /* almacenamiento no disponible */
    }
  }

  const state = {
    query: '',
    category: 'all',
    visible: PAGE_SIZE,
    showAliases: false,
    sort: readSort(),
    favorites: readFavorites(),
    recent: readRecent(),
    modalCommand: null,
    lastFocused: null,
    previousHash: '',
  };

  const categoryById = new Map(CATEGORIES.map((category) => [category.id, category]));

  const els = {
    header: $('#site-header'),
    navToggle: $('#nav-toggle'),
    nav: $('#main-nav'),
    search: $('#command-search'),
    searchClear: $('#search-clear'),
    commandSticky: $('#command-sticky'),
    chips: $('#category-chips'),
    grid: $('#command-grid'),
    countLabel: $('#command-count-label'),
    clear: $('#clear-filters'),
    showAliases: $('#show-aliases'),
    aliasCount: $('#alias-count'),
    loadMore: $('#load-more'),
    toast: $('#toast'),
    year: $('#year'),
    heroCount: $('#hero-command-count'),
    heroStatusPill: $('#hero-status-pill'),
    heroStatusText: $('#hero-status-text'),
    commandsTotal: $('#commands-total'),
    categoryGrid: $('#category-grid'),
    sort: $('#command-sort'),
    random: $('#random-command'),
    progress: $('#reading-progress'),
    backToTop: $('#back-to-top'),
    modal: $('#command-modal'),
    modalClose: $('#modal-close'),
    modalCat: $('#modal-cat'),
    modalTitle: $('#modal-title'),
    modalDesc: $('#modal-desc'),
    modalUsage: $('#modal-usage'),
    modalAliasesWrap: $('#modal-aliases-wrap'),
    modalAliases: $('#modal-aliases'),
    modalCopy: $('#modal-copy'),
    modalCopyAliases: $('#modal-copy-aliases'),
    modalShare: $('#modal-share'),
    modalWhatsapp: $('#modal-whatsapp'),
    install: $('#install-app'),
    installLabel: $('#install-app-label'),
    hint: $('.command-hint'),
    mobileBar: $('#mobile-bar'),
    mobileFavorites: $('#mobile-favorites'),
    mobileFavCount: $('#mobile-fav-count'),
    headerStatus: $('#header-status'),
    headerStatusText: $('#header-status-text'),
    statusCard: $('#status-card'),
    statusStateLabel: $('#status-state-label'),
    statusTitle: $('#status-title'),
    statusDetail: $('#status-detail'),
    statusRefresh: $('#status-refresh'),
    statusSignal: $('#status-signal'),
    statusUptime: $('#status-uptime'),
    statusVersion: $('#status-version'),
    statusRegion: $('#status-region'),
    statusCommands: $('#status-commands'),
    statusPlugins: $('#status-plugins'),
    statusServices: $('#status-services'),
    statusChecked: $('#status-checked'),
    dailyName: $('#daily-name'),
    dailyCat: $('#daily-cat'),
    dailyDesc: $('#daily-desc'),
    dailyCopy: $('#daily-copy'),
    dailyOpen: $('#daily-open'),
    shareSite: $('#share-site'),
    updateBanner: $('#update-banner'),
    updateAccept: $('#update-accept'),
    updateDismiss: $('#update-dismiss'),
  };

  // ---------- Utilidades ----------

  function normalize(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function formatNumber(value) {
    return Number(value || 0).toLocaleString('es-ES');
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function capitalize(value) {
    const text = String(value || '');
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
  }

  function commandName(name) {
    return PREFIX + name;
  }

  function explorerScrollOffset() {
    const header = els.header ? els.header.offsetHeight : 0;
    const sticky = els.commandSticky ? els.commandSticky.offsetHeight : 0;
    return header + sticky + 14;
  }

  function tapFeedback(duration) {
    if (!navigator.vibrate) return;
    try {
      navigator.vibrate(duration || 8);
    } catch {
      /* vibración no disponible */
    }
  }

  let toastTimer = null;

  function showToast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2200);
  }

  function copyText(text) {
    const value = String(text || '');

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value).catch(() => fallbackCopy(value));
    }

    return Promise.resolve(fallbackCopy(value));
  }

  function fallbackCopy(value) {
    const area = document.createElement('textarea');
    area.value = value;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '-1000px';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();

    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch {
      copied = false;
    }

    document.body.removeChild(area);

    if (!copied) showToast('No se pudo copiar. Copia manualmente: ' + value);
    return copied;
  }

  // ---------- Bloqueo de scroll (iOS incluido) ----------

  let lockedScrollY = 0;
  let lockedPadding = '';

  function lockScroll() {
    if (document.body.classList.contains('scroll-locked')) return;

    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    lockedPadding = document.body.style.paddingRight;

    const gap = window.innerWidth - document.documentElement.clientWidth;
    if (gap > 0) document.body.style.paddingRight = gap + 'px';

    document.body.style.top = '-' + lockedScrollY + 'px';
    document.body.classList.add('scroll-locked', 'modal-open');
  }

  function unlockScroll() {
    if (!document.body.classList.contains('scroll-locked')) return;

    document.body.classList.remove('scroll-locked', 'modal-open');
    document.body.style.top = '';
    document.body.style.paddingRight = lockedPadding;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, lockedScrollY);
    root.style.scrollBehavior = previous;
  }

  // ---------- Barra móvil, buscador y enlaces ----------

  let mobileBarItems = null;
  let commandsSection = null;
  let statusSectionEl = null;

  function updateMobileFavorites() {
    if (!els.mobileFavCount) return;

    const total = state.favorites.size;
    els.mobileFavCount.textContent = total > 99 ? '99+' : String(total);
    els.mobileFavCount.hidden = total === 0;
  }

  function syncSearchClear() {
    if (!els.searchClear || !els.search) return;
    els.searchClear.hidden = !els.search.value;
  }

  function centerActiveChip() {
    if (!els.chips || els.chips.scrollWidth <= els.chips.clientWidth + 2) return;

    const active = els.chips.querySelector('.chip.active');
    if (!active) return;

    const target = active.offsetLeft - (els.chips.clientWidth - active.offsetWidth) / 2;
    els.chips.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }

  function updateMobileBar() {
    if (!els.mobileBar) return;
    if (window.innerWidth > 900) return;

    if (!mobileBarItems) mobileBarItems = $$('.mobile-bar-item', els.mobileBar);
    if (!commandsSection) commandsSection = document.getElementById('comandos');
    if (!statusSectionEl) statusSectionEl = document.getElementById('estado');

    const section = commandsSection;
    const statusSection = statusSectionEl;
    const marker = window.scrollY + window.innerHeight * 0.45;
    const inCommands = section ? marker >= section.offsetTop : false;
    const inStatus =
      statusSection && !inCommands
        ? marker >= statusSection.offsetTop && marker < statusSection.offsetTop + statusSection.offsetHeight
        : false;
    const current =
      state.category === 'favorites'
        ? 'favoritos'
        : inCommands
          ? 'comandos'
          : inStatus
            ? 'estado'
            : 'inicio';

    mobileBarItems.forEach((item) => {
      const active = item.dataset.mobileSection === current;
      item.classList.toggle('active', active);
      if (active) item.setAttribute('aria-current', 'true');
      else item.removeAttribute('aria-current');
    });
  }

  function setHash(hash) {
    if (!window.history || !history.replaceState) return;

    const base = location.pathname + location.search;
    try {
      history.replaceState(null, '', hash ? base + hash : base);
    } catch {
      /* historial no disponible */
    }
  }

  function comandoHash(name) {
    return '#comando=' + encodeURIComponent(name);
  }

  function applyHash() {
    const raw = String(location.hash || '').replace(/^#/, '');
    if (!raw) return;

    if (raw === 'faq-instalar') {
      const faq = document.getElementById('faq-instalar');
      if (faq) {
        faq.open = true;
        faq.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const equal = raw.indexOf('=');
    const key = equal >= 0 ? raw.slice(0, equal) : raw;
    const value = equal >= 0 ? decodeURIComponent(raw.slice(equal + 1)) : '';

    if (key === 'comando' && value) {
      openModal(value);
      return;
    }

    if (key === 'comandos') {
      let target = value || 'all';
      if (target === 'favoritos') target = 'favorites';
      if (target === 'recientes') target = 'recent';

      const valid =
        target === 'all' ||
        target === 'favorites' ||
        target === 'recent' ||
        CATEGORIES.some((category) => category.id === target);

      if (valid) setCategory(target, false);

      const section = document.getElementById('comandos');
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  // ---------- Datos derivados ----------

  function commandText(command) {
    return normalize(
      [
        command.name,
        command.base,
        ...(Array.isArray(command.aliases) ? command.aliases : []),
        command.description,
        command.usage,
        command.category,
      ].join(' ')
    );
  }

  COMMANDS.forEach((command) => {
    command.__haystack = commandText(command);
    command.__category = categoryById.get(command.category);
  });

  function matchesQuery(command, query) {
    if (!query) return true;
    if (command.__haystack.includes(query)) return true;

    return query
      .split(/\s+/)
      .filter(Boolean)
      .every((word) => command.__haystack.includes(word));
  }

  function filteredCommands() {
    const query = normalize(state.query).trim();

    return COMMANDS.filter((command) => {
      if (!state.showAliases && command.primary === false) return false;

      if (state.category === 'favorites') {
        if (!state.favorites.has(command.name)) return false;
      } else if (state.category === 'recent') {
        if (!state.recent.includes(command.name)) return false;
      } else if (state.category !== 'all' && command.category !== state.category) {
        return false;
      }

      return matchesQuery(command, query);
    });
  }

  function sortedResults(list) {
    const items = list.slice();

    if (state.category === 'recent') {
      return items.sort((a, b) => state.recent.indexOf(a.name) - state.recent.indexOf(b.name));
    }

    switch (state.sort) {
      case 'category':
        return items.sort((a, b) => {
          const left = a.__category ? a.__category.title : a.category;
          const right = b.__category ? b.__category.title : b.category;
          return left.localeCompare(right, 'es') || a.name.localeCompare(b.name, 'es');
        });
      case 'aliases':
        return items.sort((a, b) => {
          const left = Array.isArray(a.aliases) ? a.aliases.length : 0;
          const right = Array.isArray(b.aliases) ? b.aliases.length : 0;
          return right - left || a.name.localeCompare(b.name, 'es');
        });
      default:
        return items.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    }
  }

  function hiddenAliasMatches() {
    if (state.showAliases) return 0;

    const query = normalize(state.query).trim();
    if (!query) return 0;

    return COMMANDS.filter(
      (command) =>
        command.primary === false &&
        (state.category === 'all' || command.category === state.category) &&
        matchesQuery(command, query)
    ).length;
  }

  // ---------- Categorías ----------

  function renderCategoryGrid() {
    if (!els.categoryGrid) return;

    const primaries = COMMANDS.filter((command) => command.primary !== false);

    els.categoryGrid.innerHTML = CATEGORIES.map((category) => {
      const count = primaries.filter((command) => command.category === category.id).length;

      return (
        '<button type="button" class="category-card" data-category="' +
        escapeHtml(category.id) +
        '">' +
        '<span class="category-card-top">' +
        '<span class="category-card-icon">' +
        escapeHtml(category.icon || '✨') +
        '</span>' +
        '<span class="category-card-count" aria-label="' +
        formatNumber(count) +
        (count === 1 ? ' comando' : ' comandos') +
        '">' +
        '<b>' +
        formatNumber(count) +
        '</b>' +
        '<span class="count-label">' +
        (count === 1 ? ' comando' : ' comandos') +
        '</span>' +
        '</span>' +
        '</span>' +
        '<h3>' +
        escapeHtml(category.title) +
        '</h3>' +
        '<p>' +
        escapeHtml(category.description || 'Comandos de ' + category.title) +
        '</p>' +
        '</button>'
      );
    }).join('');
  }

  // ---------- Chips de filtro ----------

  function renderChips(center) {
    if (!els.chips) return;

    const source = state.showAliases
      ? COMMANDS
      : COMMANDS.filter((command) => command.primary !== false);

    const favoriteCount = COMMANDS.filter(
      (command) =>
        state.favorites.has(command.name) && (state.showAliases || command.primary !== false)
    ).length;

    const commandByName = new Map(COMMANDS.map((command) => [command.name, command]));
    const recentCount = state.recent.filter((name) => {
      const command = commandByName.get(name);
      return command && (state.showAliases || command.primary !== false);
    }).length;

    const items = [
      { id: 'all', icon: '✨', title: 'Todos', count: source.length },
      { id: 'favorites', icon: '⭐', title: 'Favoritos', count: favoriteCount },
      ...(recentCount || state.category === 'recent'
        ? [{ id: 'recent', icon: '🕘', title: 'Recientes', count: recentCount }]
        : []),
      ...CATEGORIES.map((category) => ({
        ...category,
        count: source.filter((command) => command.category === category.id).length,
      })),
    ];

    els.chips.innerHTML = items
      .map((category) => {
        const active = state.category === category.id ? ' active' : '';
        return (
          '<button type="button" class="chip' +
          active +
          '" data-category="' +
          escapeHtml(category.id) +
          '" aria-pressed="' +
          String(state.category === category.id) +
          '">' +
          (category.icon ? '<span class="chip-icon">' + escapeHtml(category.icon) + '</span>' : '') +
          '<span>' +
          escapeHtml(category.title) +
          '</span>' +
          '<span class="chip-count">' +
          formatNumber(category.count || 0) +
          '</span>' +
          '</button>'
        );
      })
      .join('');

    updateMobileFavorites();
    if (center) centerActiveChip();
  }

  // ---------- Tarjetas de comando ----------

  function commandCard(command) {
    const category = command.__category;
    const categoryTitle = category ? category.title : capitalize(command.category);
    const icon = category && category.icon ? category.icon + ' ' : '';
    const aliases = Array.isArray(command.aliases) ? command.aliases : [];
    const isAlias = command.primary === false;
    const favorite = state.favorites.has(command.name);
    const name = commandName(command.name);
    const aliasText = isAlias
      ? 'alias de ' + (command.base || command.name)
      : aliases.length > 0
        ? aliases.length === 1
          ? '1 alias'
          : aliases.length + ' alias'
        : 'Comando';

    return (
      '<article class="command-card' +
      (isAlias ? ' is-alias' : '') +
      '" data-command="' +
      escapeHtml(command.name) +
      '">' +
      '<div class="command-top">' +
      '<span class="command-name">' +
      escapeHtml(name) +
      '</span>' +
      '<button type="button" class="favorite-btn' +
      (favorite ? ' active' : '') +
      '" data-action="favorite" aria-pressed="' +
      String(favorite) +
      '" aria-label="' +
      (favorite ? 'Quitar de favoritos: ' : 'Añadir a favoritos: ') +
      escapeHtml(name) +
      '">' +
      (favorite ? '★' : '☆') +
      '</button>' +
      '</div>' +
      '<span class="command-cat">' +
      escapeHtml(icon + categoryTitle) +
      '</span>' +
      '<p class="command-desc">' +
      escapeHtml(command.description || 'Comando de NovitaBot') +
      '</p>' +
      '<div class="command-foot">' +
      '<span class="command-alias-info">' +
      escapeHtml(aliasText) +
      '</span>' +
      '<div class="command-actions">' +
      '<button type="button" class="command-copy" data-action="copy">Copiar</button>' +
      '<button type="button" class="command-detail" data-action="details">Ver más</button>' +
      '</div>' +
      '</div>' +
      '</article>'
    );
  }

  function emptyState(hiddenAliases) {
    if (state.category === 'recent' && !state.query) {
      return (
        '<div class="empty-state">' +
        '<strong>Aún no has visto comandos</strong>' +
        'Abre cualquier comando y aparecerá aquí para volver a él rápidamente.' +
        '</div>'
      );
    }

    if (state.category === 'favorites' && !state.query) {
      return (
        '<div class="empty-state">' +
        '<strong>Aún no tienes favoritos</strong>' +
        'Toca la estrella ☆ en cualquier comando para guardarlo aquí.' +
        '</div>'
      );
    }

    const hint = hiddenAliases
      ? ' Hay ' +
        formatNumber(hiddenAliases) +
        (hiddenAliases === 1 ? ' alias que coincide' : ' alias que coinciden') +
        '. Activa «Mostrar alias» para verlo' +
        (hiddenAliases === 1 ? '.' : 's.')
      : '';

    return (
      '<div class="empty-state">' +
      '<strong>Sin resultados</strong>' +
      'No encontramos comandos para “' +
      escapeHtml(state.query) +
      '”.' +
      escapeHtml(hint) +
      ' Prueba con otra palabra o cambia de categoría.' +
      '</div>'
    );
  }

  function renderCommands() {
    if (!els.grid) return;

    const results = sortedResults(filteredCommands());
    const slice = results.slice(0, state.visible);
    const hiddenAliases = hiddenAliasMatches();

    els.grid.innerHTML = results.length
      ? slice.map(commandCard).join('')
      : emptyState(hiddenAliases);

    if (els.countLabel) {
      const suffix = state.showAliases ? ' comandos' : ' comandos principales';

      if (!results.length) {
        els.countLabel.textContent = 'Sin resultados';
      } else if (results.length === 1) {
        els.countLabel.textContent =
          state.showAliases ? 'Mostrando 1 comando' : 'Mostrando 1 comando principal';
      } else {
        els.countLabel.textContent =
          'Mostrando ' +
          formatNumber(Math.min(slice.length, results.length)) +
          ' de ' +
          formatNumber(results.length) +
          suffix;
      }
    }

    if (els.loadMore) {
      const hasMore = results.length > slice.length;
      els.loadMore.hidden = !hasMore;
      els.loadMore.textContent = hasMore
        ? 'Ver más comandos (' + formatNumber(results.length - slice.length) + ')'
        : 'Ver más comandos';
    }
  }

  function setCategory(id, scroll) {
    state.category = id || 'all';
    state.visible = PAGE_SIZE;
    tapFeedback(6);
    renderChips(true);
    renderCommands();
    updateMobileBar();

    if (scroll !== false) {
      const linkId =
        state.category === 'favorites'
          ? 'favoritos'
          : state.category === 'recent'
            ? 'recientes'
            : state.category;
      setHash('#comandos=' + encodeURIComponent(linkId));
    }

    if (scroll !== false && els.grid) {
      const top = els.grid.getBoundingClientRect().top + window.scrollY - explorerScrollOffset();
      if (Math.abs(window.scrollY - top) > 140) {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  function setQuery(value) {
    state.query = String(value || '');
    state.visible = PAGE_SIZE;
    renderCommands();
    syncSearchClear();
  }

  // ---------- Favoritos ----------

  function toggleFavorite(name) {
    if (!name) return;

    if (state.favorites.has(name)) {
      state.favorites.delete(name);
      showToast('Eliminado de favoritos');
    } else {
      state.favorites.add(name);
      showToast('Añadido a favoritos');
    }

    tapFeedback(8);
    saveFavorites();
    renderChips();
    renderCommands();

    const rendered = Array.from(els.grid ? els.grid.querySelectorAll('.command-card') : []).find(
      (card) => card.dataset.command === name
    );
    const target = rendered
      ? rendered.querySelector('.favorite-btn')
      : els.grid
        ? els.grid.querySelector('.favorite-btn')
        : null;

    if (target) target.focus();
  }

  // ---------- Modal ----------

  function findCommand(name) {
    return COMMANDS.find((command) => command.name === name) || null;
  }

  function recordRecent(name) {
    if (!name) return;

    state.recent = [name, ...state.recent.filter((item) => item !== name)].slice(0, MAX_RECENT);
    saveRecent();
    renderChips();
  }

  function openModal(name) {
    const command = findCommand(name);
    if (!command || !els.modal) return;

    state.modalCommand = command;
    state.lastFocused = document.activeElement;
    state.previousHash =
      location.hash && location.hash.indexOf('#comando=') === 0 ? '' : location.hash || '';

    recordRecent(command.name);

    const category = command.__category;
    const base =
      command.primary === false
        ? COMMANDS.find((item) => item.primary !== false && item.name === command.base)
        : command;
    const aliases = base && Array.isArray(base.aliases) ? base.aliases : [];
    const usage = String(command.usage || '').trim();

    if (els.modalCat) {
      els.modalCat.textContent = category
        ? (category.icon ? category.icon + ' ' : '') + category.title
        : capitalize(command.category);
    }

    if (els.modalTitle) els.modalTitle.textContent = commandName(command.name);
    if (els.modalDesc) els.modalDesc.textContent = command.description || 'Comando de NovitaBot';

    if (els.modalUsage) {
      if (usage) {
        els.modalUsage.innerHTML =
          '<strong>Uso</strong><code>' +
          escapeHtml(commandName(command.name) + ' ' + usage) +
          '</code>';
        els.modalUsage.hidden = false;
      } else {
        els.modalUsage.hidden = true;
        els.modalUsage.textContent = '';
      }
    }

    if (els.modalAliasesWrap && els.modalAliases) {
      if (aliases.length) {
        els.modalAliases.innerHTML = aliases
          .map(
            (alias) =>
              '<button type="button" class="alias-chip" data-copy="' +
              escapeHtml(commandName(alias)) +
              '" aria-label="Copiar alias ' +
              escapeHtml(commandName(alias)) +
              '">' +
              escapeHtml(commandName(alias)) +
              '</button>'
          )
          .join('');
        els.modalAliasesWrap.hidden = false;
      } else {
        els.modalAliases.innerHTML = '';
        els.modalAliasesWrap.hidden = true;
      }
    }

    if (els.modalCopyAliases) els.modalCopyAliases.hidden = aliases.length === 0;

    els.modal.hidden = false;
    lockScroll();
    setHash(comandoHash(command.name));

    if (els.modalClose) els.modalClose.focus();
  }

  function closeModal() {
    if (!els.modal || els.modal.hidden) return;

    const command = state.modalCommand;
    const lastFocused = state.lastFocused;

    els.modal.hidden = true;
    unlockScroll();
    state.modalCommand = null;
    setHash(state.previousHash || '');

    if (state.category === 'recent') {
      renderChips();
      renderCommands();
    }

    let target = lastFocused;
    if (target && !document.contains(target) && command && els.grid) {
      target =
        Array.from(els.grid.querySelectorAll('.command-card')).find(
          (card) => card.dataset.command === command.name
        ) || null;
    }

    if (target && typeof target.focus === 'function') {
      target.focus();
    }
  }

  function modalAliasesText() {
    const command = state.modalCommand;
    if (!command) return '';

    const base =
      command.primary === false
        ? COMMANDS.find((item) => item.primary !== false && item.name === command.base)
        : command;
    const aliases = base && Array.isArray(base.aliases) ? base.aliases : [];

    return aliases.map(commandName).join(', ');
  }

  function trapModalFocus(event) {
    if (!els.modal || els.modal.hidden || event.key !== 'Tab') return;

    const focusable = $$(
      'button:not([hidden]), a[href], input:not([hidden]), select:not([hidden]), textarea, [tabindex]:not([tabindex="-1"])',
      els.modal
    ).filter((element) => !element.disabled && element.offsetParent !== null);

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  // ---------- Eventos ----------

  function bindEvents() {
    if (els.chips) {
      els.chips.addEventListener('click', (event) => {
        const chip = event.target.closest('.chip');
        if (!chip) return;
        setCategory(chip.dataset.category);
      });
    }

    if (els.categoryGrid) {
      els.categoryGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.category-card');
        if (!card) return;
        setCategory(card.dataset.category);
      });
    }

    if (els.search) {
      let debounce = null;

      syncSearchClear();

      els.search.addEventListener('input', (event) => {
        const value = event.target.value;
        syncSearchClear();
        clearTimeout(debounce);
        debounce = setTimeout(() => setQuery(value), 120);
      });

      els.search.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          els.search.value = '';
          setQuery('');
          els.search.blur();
        }
      });
    }

    if (els.searchClear) {
      els.searchClear.addEventListener('click', () => {
        if (!els.search) return;
        els.search.value = '';
        setQuery('');
        els.search.focus();
      });
    }

    if (els.showAliases) {
      els.showAliases.addEventListener('change', () => {
        state.showAliases = els.showAliases.checked;
        state.visible = PAGE_SIZE;
        renderChips();
        renderCommands();
        showToast(
          state.showAliases
            ? 'Mostrando comandos y alias'
            : 'Mostrando solo comandos principales'
        );
      });
    }

    if (els.clear) {
      els.clear.addEventListener('click', () => {
        if (els.search) els.search.value = '';
        if (els.showAliases) els.showAliases.checked = false;
        if (els.sort) els.sort.value = 'az';
        state.category = 'all';
        state.query = '';
        state.visible = PAGE_SIZE;
        state.showAliases = false;
        state.sort = 'az';
        saveSort();
        syncSearchClear();
        renderChips();
        renderCommands();
        updateMobileBar();
        showToast('Filtros restablecidos');
      });
    }

    if (els.sort) {
      els.sort.value = state.sort;
      els.sort.addEventListener('change', () => {
        state.sort = els.sort.value;
        state.visible = PAGE_SIZE;
        saveSort();
        renderCommands();
        const label = els.sort.options[els.sort.selectedIndex].textContent;
        showToast('Ordenado por: ' + label);
      });
    }

    if (els.random) {
      els.random.addEventListener('click', () => {
        let pool = filteredCommands();
        if (!pool.length) {
          pool = COMMANDS.filter((command) => command.primary !== false);
        }
        if (!pool.length) return;

        const random = pool[Math.floor(Math.random() * pool.length)];
        openModal(random.name);
      });
    }

    if (els.loadMore) {
      els.loadMore.addEventListener('click', () => {
        state.visible += PAGE_SIZE;
        renderCommands();
      });
    }

    if (els.grid) {
      els.grid.addEventListener('click', (event) => {
        const card = event.target.closest('.command-card');
        if (!card) return;

        const name = card.dataset.command;
        const action = event.target.closest('[data-action]');

        if (!action) {
          openModal(name);
          return;
        }

        if (action.dataset.action === 'favorite') {
          toggleFavorite(name);
          return;
        }

        if (action.dataset.action === 'copy') {
          copyCommand(action, name);
          return;
        }

        if (action.dataset.action === 'details') {
          openModal(name);
        }
      });
    }

    // Atajo "/" para buscar.
    document.addEventListener('keydown', (event) => {
      if (els.modal && !els.modal.hidden) return;

      const tag = (event.target && event.target.tagName) || '';
      const typing = tag === 'INPUT' || tag === 'TEXTAREA' || event.target.isContentEditable;

      if (event.key === '/' && !typing && els.search) {
        event.preventDefault();
        els.search.focus();
        els.search.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    bindNav();
    bindModal();
    bindModalSwipe();
    bindFaq();
    bindMobileBar();
    bindKeyboardHints();
    bindDailyCommand();
    bindShareSite();
    bindUpdateBanner();
  }

  function copyCommand(button, name) {
    const value = commandName(name);

    copyText(value).then((ok) => {
      if (ok === false) return;

      tapFeedback(8);
      showToast('Copiado: ' + value);

      if (!button) return;

      const original = button.textContent;
      button.textContent = '¡Copiado!';
      button.classList.add('copied');
      clearTimeout(button.__copyTimer);
      button.__copyTimer = setTimeout(() => {
        button.textContent = original;
        button.classList.remove('copied');
      }, 1600);
    });
  }

  function bindNav() {
    if (els.navToggle) {
      els.navToggle.addEventListener('click', () => {
        const open = document.body.classList.toggle('nav-open');
        els.navToggle.setAttribute('aria-expanded', String(open));
        els.navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      });
    }

    if (els.nav) {
      els.nav.addEventListener('click', (event) => {
        if (!event.target.closest('a')) return;
        document.body.classList.remove('nav-open');
        if (els.navToggle) {
          els.navToggle.setAttribute('aria-expanded', 'false');
          els.navToggle.setAttribute('aria-label', 'Abrir menú');
        }
      });
    }

    document.addEventListener('click', (event) => {
      if (!document.body.classList.contains('nav-open')) return;
      if (els.navToggle && els.navToggle.contains(event.target)) return;
      if (els.nav && els.nav.contains(event.target)) return;
      document.body.classList.remove('nav-open');
      if (els.navToggle) {
        els.navToggle.setAttribute('aria-expanded', 'false');
        els.navToggle.setAttribute('aria-label', 'Abrir menú');
      }
    });
  }

  function bindModal() {
    if (!els.modal) return;

    els.modal.addEventListener('click', (event) => {
      if (event.target.closest('[data-modal-close]')) closeModal();
    });

    if (els.modalCopy) {
      els.modalCopy.addEventListener('click', () => {
        if (!state.modalCommand) return;
        const value = commandName(state.modalCommand.name);

        copyText(value).then((ok) => {
          if (ok === false) return;
          showToast('Copiado: ' + value);
          els.modalCopy.textContent = '¡Copiado!';
          setTimeout(() => {
            els.modalCopy.textContent = 'Copiar comando';
          }, 1600);
        });
      });
    }

    if (els.modalCopyAliases) {
      els.modalCopyAliases.addEventListener('click', () => {
        const value = modalAliasesText();
        if (!value) return;

        copyText(value).then((ok) => {
          if (ok === false) return;
          showToast('Alias copiados');
        });
      });
    }

    if (els.modalAliases) {
      els.modalAliases.addEventListener('click', (event) => {
        const chip = event.target.closest('.alias-chip');
        if (!chip) return;
        const value = chip.dataset.copy;
        if (!value) return;

        copyText(value).then((ok) => {
          if (ok === false) return;
          showToast('Copiado: ' + value);
        });
      });
    }

    if (els.modalWhatsapp) {
      els.modalWhatsapp.addEventListener('click', () => {
        if (!state.modalCommand) return;
        const value = commandName(state.modalCommand.name);
        window.open('https://wa.me/?text=' + encodeURIComponent(value), '_blank', 'noopener');
      });
    }

    if (els.modalShare) {
      els.modalShare.addEventListener('click', shareCommand);
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && els.modal && !els.modal.hidden) {
        closeModal();
        return;
      }

      if (event.key === 'Escape') {
        document.body.classList.remove('nav-open');
        if (els.navToggle) {
          els.navToggle.setAttribute('aria-expanded', 'false');
          els.navToggle.setAttribute('aria-label', 'Abrir menú');
        }
      }

      trapModalFocus(event);
    });
  }

  function bindModalSwipe() {
    if (!els.modal) return;

    const card = $('.modal-card', els.modal);
    if (!card) return;

    let startY = 0;
    let delta = 0;
    let tracking = false;
    let resetTimer = null;

    const reset = (close) => {
      clearTimeout(resetTimer);
      card.classList.remove('is-dragging');
      card.style.transition = 'transform 0.22s ease';
      card.style.transform = '';
      resetTimer = setTimeout(() => {
        card.style.transition = '';
      }, 240);
      if (close) closeModal();
    };

    card.addEventListener(
      'touchstart',
      (event) => {
        if (event.touches.length !== 1 || card.scrollTop > 0) return;
        clearTimeout(resetTimer);
        startY = event.touches[0].clientY;
        delta = 0;
        tracking = true;
        card.classList.add('is-dragging');
      },
      { passive: true }
    );

    card.addEventListener(
      'touchmove',
      (event) => {
        if (!tracking || event.touches.length !== 1) return;

        delta = event.touches[0].clientY - startY;

        if (delta <= 0 || card.scrollTop > 0) {
          card.style.transform = '';
          return;
        }

        if (event.cancelable) event.preventDefault();
        card.style.transform = 'translateY(' + delta + 'px)';
      },
      { passive: false }
    );

    const finish = () => {
      if (!tracking) return;
      tracking = false;
      reset(delta > 96);
      delta = 0;
    };

    card.addEventListener('touchend', finish, { passive: true });
    card.addEventListener('touchcancel', finish, { passive: true });
  }

  function bindKeyboardHints() {
    const viewport = window.visualViewport;

    const update = () => {
      const keyboard = viewport ? viewport.height < window.innerHeight * 0.75 : false;
      document.body.classList.toggle('keyboard-open', keyboard);
    };

    if (viewport) {
      viewport.addEventListener('resize', update, { passive: true });
      viewport.addEventListener('scroll', update, { passive: true });
    }

    document.addEventListener('focusin', (event) => {
      const tag = event.target && event.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
        document.body.classList.add('keyboard-open');
      }
    });

    document.addEventListener('focusout', (event) => {
      const tag = event.target && event.target.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') return;

      setTimeout(() => {
        const active = document.activeElement && document.activeElement.tagName;
        if (active !== 'INPUT' && active !== 'TEXTAREA' && active !== 'SELECT') update();
      }, 120);
    });

    update();
  }

  function bindFaq() {
    const items = $$('.faq-item');
    if (!items.length) return;

    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  function shareCommand() {
    const command = state.modalCommand;
    if (!command) return;

    const name = commandName(command.name);
    const url = new URL(location.href);
    url.hash = comandoHash(command.name);

    const data = {
      title: name + ' — NovitaBot',
      text: 'Prueba el comando ' + name + ' en NovitaBot',
      url: url.toString(),
    };

    if (navigator.share && location.protocol === 'https:') {
      navigator.share(data).catch(() => {
        /* el usuario cerró el menú de compartir */
      });
      return;
    }

    copyText(data.url).then((ok) => {
      if (ok === false) return;
      showToast('Enlace copiado');
    });
  }

  function bindMobileBar() {
    if (els.mobileFavorites) {
      els.mobileFavorites.addEventListener('click', () => {
        setCategory('favorites');
        updateMobileBar();
        tapFeedback(6);
        showToast(
          state.favorites.size ? 'Mostrando tus favoritos' : 'Aún no tienes favoritos'
        );
      });
    }

    window.addEventListener('hashchange', applyHash);
    updateMobileFavorites();
  }

  // ---------- Header, progreso y scroll ----------

  function bindScroll() {
    let scrollFrame = 0;

    const updateScrollUI = () => {
      if (els.header) {
        els.header.classList.toggle('scrolled', window.scrollY > 12);
      }

      if (window.scrollY > 30 && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        if (els.navToggle) {
          els.navToggle.setAttribute('aria-expanded', 'false');
          els.navToggle.setAttribute('aria-label', 'Abrir menú');
        }
      }

      if (els.progress && els.progress.firstElementChild) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        els.progress.firstElementChild.style.transform = 'scaleX(' + ratio + ')';
      }

      if (els.backToTop) {
        els.backToTop.classList.toggle('show', window.scrollY > 700);
      }

      updateMobileBar();
    };

    // Un solo cálculo por frame: evita tirones al desplazarse en iPhone.
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        updateScrollUI();
      });
    };

    updateScrollUI();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (els.backToTop) {
      els.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.addEventListener('resize', updateMobileBar, { passive: true });

    const links = $$('.main-nav a');
    if (!links.length) return;

    const sections = links
      .map((link) => {
        const id = link.getAttribute('href');
        if (!id || id.charAt(0) !== '#') return null;
        const section = document.querySelector(id);
        return section ? { link, section } : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    const setActive = () => {
      const offset = window.scrollY + 140;
      let current = sections[0];

      sections.forEach((item) => {
        if (item.section.offsetTop <= offset) current = item;
      });

      links.forEach((link) => link.classList.toggle('active', link === current.link));
    };

    let navFrame = 0;
    const onNavScroll = () => {
      if (navFrame) return;
      navFrame = window.requestAnimationFrame(() => {
        navFrame = 0;
        setActive();
      });
    };

    setActive();
    window.addEventListener('scroll', onNavScroll, { passive: true });
  }

  // ---------- Animaciones de aparición ----------

  function bindReveal() {
    const items = $$('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = Math.min(index % 6, 5) * 60 + 'ms';
      observer.observe(item);
    });
  }

  // ---------- Contadores ----------

  function animateCounter(element, target) {
    const duration = 1400;
    const start = performance.now();
    const value = Number(target) || 0;

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = formatNumber(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function bindCounters() {
    const counters = $$('[data-count]');
    if (!counters.length) return;

    const run = (element) => {
      if (element.dataset.done === '1') return;
      element.dataset.done = '1';
      animateCounter(element, element.dataset.count || element.textContent);
    };

    if (!('IntersectionObserver' in window)) {
      counters.forEach(run);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          run(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  // ---------- Sincronizar textos con los datos ----------

  function syncStats(live = {}) {
    const totalCommands = Number(live.commands) || Number(BOT.commands) || COMMANDS.length;
    const totalPlugins = Number(live.plugins) || Number(BOT.plugins) || COMMANDS.length;
    const totalCategories = CATEGORIES.length || 16;

    if (els.heroCount) els.heroCount.textContent = formatNumber(totalCommands);
    if (els.commandsTotal) els.commandsTotal.textContent = formatNumber(totalCommands);
    if (els.statusCommands) els.statusCommands.textContent = formatNumber(totalCommands);
    if (els.statusPlugins) els.statusPlugins.textContent = formatNumber(totalPlugins);
    if (els.aliasCount) {
      els.aliasCount.textContent = formatNumber(
        COMMANDS.filter((command) => command.primary === false).length
      );
    }

    const map = new Map([
      ['plugins', totalPlugins],
      ['comandos', totalCommands],
      ['commands', totalCommands],
      ['categorías', totalCategories],
      ['categorias', totalCategories],
    ]);

    $$('.stat').forEach((stat) => {
      const label = normalize($('span', stat)?.textContent || '');
      const value = $('strong[data-count]', stat);
      if (!value || !map.has(label)) return;
      value.dataset.count = String(map.get(label));
      value.textContent = formatNumber(map.get(label));
    });
  }

  // ---------- Estado del bot ----------

  const STATUS_FALLBACK = {
    online: true,
    version: '—',
    region: 'Global',
    services: [
      { name: 'WhatsApp', status: 'online' },
      { name: 'Motor de comandos', status: 'online' },
      { name: 'Base de datos', status: 'online' },
      { name: 'Web / PWA', status: 'online' },
    ],
  };

  const statusInfo = {
    payload: null,
    state: 'checking',
    checkedAt: 0,
    busy: false,
    timer: null,
    liveTimer: null,
  };

  function statusEndpoint() {
    const base = String(BOT.statusUrl || 'status.json');

    try {
      const url = new URL(base, location.href);
      url.searchParams.set('t', String(Date.now()));
      return url.toString();
    } catch {
      return base;
    }
  }

  function statusAge(payload) {
    const raw = payload && payload.updatedAt ? Date.parse(payload.updatedAt) : NaN;
    if (!Number.isFinite(raw)) return null;
    return Math.max(0, Date.now() - raw);
  }

  function computeStatusState(payload) {
    if (!payload) return 'error';

    const age = statusAge(payload);

    // Un latido viejo significa que el bot dejó de publicar: está caído,
    // aunque el último gist guardado todavía diga "online".
    if (age !== null && age > STATUS_STALE_MS) return 'offline';
    if (payload.online === false) return 'offline';

    const services = Array.isArray(payload.services) ? payload.services : [];
    const degraded =
      payload.degraded === true ||
      payload.maintenance === true ||
      services.some((service) => service && service.status && service.status !== 'online');

    return degraded ? 'degraded' : 'operational';
  }

  function formatUptime(ms) {
    if (!Number.isFinite(ms) || ms < 0) return '—';

    const totalMinutes = Math.floor(ms / 60000);
    if (totalMinutes < 1) return '< 1 min';

    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    if (days) return days + 'd ' + hours + 'h';
    if (hours) return hours + 'h ' + minutes + 'm';
    return minutes + ' min';
  }

  function formatClock(timestamp) {
    if (!timestamp) return '—';

    try {
      return new Date(timestamp).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '—';
    }
  }

  function formatSignalAge(ms) {
    if (!Number.isFinite(ms)) return '—';

    const seconds = Math.max(0, Math.round(ms / 1000));
    if (seconds < 5) return 'ahora';
    if (seconds < 60) return 'hace ' + seconds + ' s';

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return 'hace ' + minutes + ' min';

    const hours = Math.floor(minutes / 60);
    return 'hace ' + hours + ' h';
  }

  function signalQuality(ms) {
    if (!Number.isFinite(ms)) return '';
    if (ms < 150 * 1000) return 'good';
    if (ms < STATUS_STALE_MS) return 'mid';
    return 'slow';
  }

  function updateStatusLive() {
    const payload = statusInfo.payload;

    if (els.statusSignal) {
      const age = statusAge(payload);
      els.statusSignal.textContent = formatSignalAge(age);
      els.statusSignal.dataset.quality = signalQuality(age);
    }

    if (els.statusUptime) {
      const started = payload && payload.startedAt ? Date.parse(payload.startedAt) : NaN;
      const active = statusInfo.state === 'operational' || statusInfo.state === 'degraded';

      if (!Number.isFinite(started) || !active) {
        els.statusUptime.textContent = '—';
      } else {
        els.statusUptime.textContent = formatUptime(Date.now() - started);
      }
    }

    // Si el latido caduca entre comprobaciones, la tarjeta pasa a "Sin conexión".
    // Solo se recalcula cuando ya hay un estado real (no en "Comprobando" ni "Sin datos").
    if (payload && ['operational', 'degraded', 'offline'].includes(statusInfo.state)) {
      const next = computeStatusState(payload);
      if (next !== statusInfo.state) {
        statusInfo.state = next;
        renderStatus();
        updateHeaderStatus();
      }
    }
  }

  function renderStatus() {
    const stateName = statusInfo.state;
    const payload = statusInfo.payload || {};
    const forcedService = stateName === 'offline' || stateName === 'error' ? stateName : '';

    if (els.statusCard) els.statusCard.dataset.state = stateName;

    if (els.heroStatusPill) {
      els.heroStatusPill.dataset.state = stateName;
      const heroDot = $('.dot', els.heroStatusPill);
      if (heroDot) heroDot.classList.toggle('dot-live', stateName === 'operational');
    }

    if (els.heroStatusText) {
      const heroLabels = {
        checking: 'Comprobando',
        operational: 'En línea',
        degraded: 'Servicio limitado',
        offline: 'Sin conexión',
        error: 'Estado no disponible',
      };
      els.heroStatusText.textContent = heroLabels[stateName] || 'Comprobando';
    }

    const labels = {
      checking: ['Comprobando', 'Conectando con NovitaBot…'],
      operational: ['En línea', 'Todo funcionando'],
      degraded: ['Atención', 'Servicio limitado'],
      offline: ['Sin conexión', 'NovitaBot sin conexión'],
      error: ['Sin datos', 'No pudimos comprobar el estado'],
    };

    const current = labels[stateName] || labels.checking;
    let detail = 'Esperando el último latido del bot.';

    if (stateName === 'operational') {
      const age = statusAge(payload);
      detail = Number.isFinite(age)
        ? 'Latido recibido ' + formatSignalAge(age) + '. Todo listo para usar el bot.'
        : 'Todos los servicios están funcionando.';
    } else if (stateName === 'degraded') {
      detail =
        payload.maintenanceNote ||
        'Algunos servicios están limitados. Vuelve a intentarlo en unos minutos.';
    } else if (stateName === 'offline') {
      const age = statusAge(payload);
      const stale = payload.online !== false && age !== null && age > STATUS_STALE_MS;

      if (!navigator.onLine) {
        detail = payload && payload.name
          ? 'Sin conexión. Mostrando los últimos datos guardados del bot.'
          : 'Sin conexión. Conéctate a internet para comprobar el estado.';
      } else if (stale) {
        detail =
          'El bot dejó de enviar señal ' + formatSignalAge(age) + '. Puede estar apagado.';
      } else {
        detail = 'El bot está fuera de línea. Vuelve a intentarlo en unos minutos.';
      }
    } else if (stateName === 'error') {
      detail =
        location.protocol === 'file:'
          ? 'Abre la web desde internet para ver el estado en vivo.'
          : 'El servicio no respondió. Comprueba tu conexión y vuelve a intentarlo.';
    }

    if (els.statusStateLabel) els.statusStateLabel.textContent = current[0];
    if (els.statusTitle) els.statusTitle.textContent = current[1];
    if (els.statusDetail) els.statusDetail.textContent = detail;

    if (els.statusSignal) {
      const age = statusAge(payload);
      els.statusSignal.textContent = formatSignalAge(age);
      els.statusSignal.dataset.quality = signalQuality(age);
    }

    if (els.statusVersion) els.statusVersion.textContent = payload.version || '—';
    if (els.statusRegion) els.statusRegion.textContent = payload.region || 'Global';
    if (els.statusCommands) {
      els.statusCommands.textContent = formatNumber(
        payload.commands || BOT.commands || COMMANDS.length
      );
    }
    if (els.statusPlugins) {
      els.statusPlugins.textContent = formatNumber(
        payload.plugins || BOT.plugins || COMMANDS.filter((command) => command.primary !== false).length
      );
    }
    if (els.statusChecked) {
      els.statusChecked.textContent = statusInfo.checkedAt ? formatClock(statusInfo.checkedAt) : '—';
    }

    updateStatusLive();

    if (els.statusServices) {
      const services =
        Array.isArray(payload.services) && payload.services.length
          ? payload.services
          : STATUS_FALLBACK.services;

      els.statusServices.innerHTML = services
        .map((service) => {
          const raw = service && service.status ? String(service.status) : 'online';
          const allowed = ['online', 'degraded', 'offline', 'checking'];
          const statusName = forcedService || (allowed.includes(raw) ? raw : 'online');
          const name = service && service.name ? service.name : 'Servicio';

          return (
            '<span class="service-pill" data-status="' +
            escapeHtml(statusName) +
            '"><i aria-hidden="true"></i>' +
            escapeHtml(name) +
            '</span>'
          );
        })
        .join('');
    }

    // Los totales de la web siguen al bot real cuando el latido los incluye.
    syncStats({ commands: payload.commands, plugins: payload.plugins });
  }

  function updateHeaderStatus() {
    if (!els.headerStatus) return;

    const labels = {
      checking: 'Comprobando',
      operational: 'En línea',
      degraded: 'Atención',
      offline: 'Sin conexión',
      error: 'Sin datos',
    };

    els.headerStatus.dataset.state = statusInfo.state;
    if (els.headerStatusText) {
      els.headerStatusText.textContent = labels[statusInfo.state] || 'Estado';
    }

    const dot = $('.dot', els.headerStatus);
    if (dot) dot.classList.toggle('dot-live', statusInfo.state === 'operational');
  }

  function applyStatusPayload(payload, checkedAt) {
    statusInfo.payload = payload && typeof payload === 'object' ? payload : {};
    statusInfo.checkedAt = checkedAt || Date.now();
    statusInfo.state = computeStatusState(statusInfo.payload);

    saveStatusCache(statusInfo.payload);

    renderStatus();
    updateHeaderStatus();
  }

  function applyStatusFailure() {
    const cached = readStatusCache();

    if (cached) statusInfo.payload = cached;
    statusInfo.latency = null;
    statusInfo.checkedAt = Date.now();
    statusInfo.state = navigator.onLine ? 'error' : 'offline';

    renderStatus();
    updateHeaderStatus();
  }

  async function checkStatus(manual) {
    if (statusInfo.busy) return;

    if (!navigator.onLine) {
      applyStatusFailure();
      if (manual) showToast('Sin conexión a internet');
      return;
    }

    if (location.protocol === 'file:') {
      applyStatusFailure();
      if (manual) showToast('Abre la web desde internet para ver el estado');
      return;
    }

    statusInfo.busy = true;

    if (manual) {
      statusInfo.state = 'checking';
      renderStatus();
      updateHeaderStatus();

      if (els.statusRefresh) {
        els.statusRefresh.classList.add('is-loading');
        els.statusRefresh.disabled = true;
      }
    }

    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timeout = controller
      ? setTimeout(() => controller.abort(), STATUS_TIMEOUT_MS)
      : null;

    try {
      const response = await fetch(statusEndpoint(), {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
        signal: controller ? controller.signal : undefined,
      });

      if (!response.ok) throw new Error('HTTP ' + response.status);

      const payload = await response.json();

      statusInfo.busy = false;
      applyStatusPayload(payload, Date.now());
      if (manual) showToast('Estado actualizado');
    } catch {
      statusInfo.busy = false;
      applyStatusFailure();
      if (manual) showToast('No se pudo comprobar el estado');
    } finally {
      if (timeout) clearTimeout(timeout);
      if (els.statusRefresh) {
        els.statusRefresh.classList.remove('is-loading');
        els.statusRefresh.disabled = false;
      }
    }
  }

  function setupStatus() {
    const cached = readStatusCache();

    if (cached) {
      statusInfo.payload = cached;
      statusInfo.state = computeStatusState(cached);
      renderStatus();
      updateHeaderStatus();
    }

    if (els.statusRefresh) {
      els.statusRefresh.addEventListener('click', () => {
        tapFeedback(8);
        checkStatus(true);
      });
    }

    window.addEventListener('online', () => checkStatus());
    window.addEventListener('offline', () => applyStatusFailure());

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) return;
      if (Date.now() - statusInfo.checkedAt > STATUS_REFRESH_MS) checkStatus();
    });

    checkStatus();

    statusInfo.timer = setInterval(() => {
      if (document.hidden || !navigator.onLine) return;
      checkStatus();
    }, STATUS_REFRESH_MS);

    statusInfo.liveTimer = setInterval(() => {
      if (document.hidden) return;
      updateStatusLive();
    }, STATUS_LIVE_REFRESH_MS);
  }

  // ---------- Comando del día ----------

  let dailyCommand = null;

  function setupDailyCommand() {
    const pool = COMMANDS.filter((command) => command.primary !== false);
    if (!pool.length || !els.dailyName) return;

    const day = Math.floor(Date.now() / 86400000);
    dailyCommand = pool[day % pool.length];

    const category = dailyCommand.__category;
    els.dailyName.textContent = commandName(dailyCommand.name);

    if (els.dailyCat) {
      els.dailyCat.textContent = category
        ? (category.icon ? category.icon + ' ' : '') + category.title
        : capitalize(dailyCommand.category);
    }

    if (els.dailyDesc) {
      els.dailyDesc.textContent = dailyCommand.description || 'Comando de NovitaBot';
    }
  }

  function bindDailyCommand() {
    if (els.dailyCopy) {
      els.dailyCopy.addEventListener('click', () => {
        if (dailyCommand) copyCommand(els.dailyCopy, dailyCommand.name);
      });
    }

    if (els.dailyOpen) {
      els.dailyOpen.addEventListener('click', () => {
        if (dailyCommand) openModal(dailyCommand.name);
      });
    }
  }

  // ---------- Compartir la web ----------

  function bindShareSite() {
    if (!els.shareSite) return;

    els.shareSite.addEventListener('click', () => {
      const url = location.origin + location.pathname;
      const data = {
        title: 'NovitaBot',
        text: 'Mira todos los comandos de NovitaBot y su estado en vivo.',
        url,
      };

      if (navigator.share && location.protocol === 'https:') {
        navigator.share(data).catch(() => {
          /* el usuario cerró el menú de compartir */
        });
        return;
      }

      copyText(url).then((ok) => {
        if (ok === false) return;
        showToast('Enlace copiado');
      });
    });
  }

  // ---------- Aviso de nueva versión (PWA) ----------

  let waitingWorker = null;

  function showUpdateBanner(worker) {
    if (!els.updateBanner) return;

    if (worker) waitingWorker = worker;
    els.updateBanner.hidden = false;
  }

  function bindUpdateBanner() {
    if (els.updateAccept) {
      els.updateAccept.addEventListener('click', () => {
        if (waitingWorker) waitingWorker.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
      });
    }

    if (els.updateDismiss) {
      els.updateDismiss.addEventListener('click', () => {
        if (els.updateBanner) els.updateBanner.hidden = true;
      });
    }
  }

  // ---------- Instalación y conexión ----------

  function isStandalone() {
    return (
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      window.navigator.standalone === true
    );
  }

  function isIos() {
    const ua = navigator.userAgent || '';
    return (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    );
  }

  function showInstallButton(label) {
    if (!els.install) return;
    if (els.installLabel) els.installLabel.textContent = label;
    els.install.hidden = false;
  }

  function bindInstall() {
    if (!els.install) return;

    if (isStandalone()) {
      els.install.hidden = true;
      return;
    }

    let deferred = null;

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      if (typeof event.prompt === 'function') deferred = event;
      showInstallButton('Instalar app');
    });

    window.addEventListener('appinstalled', () => {
      els.install.hidden = true;
      showToast('NovitaBot instalado');
    });

    if (isIos()) showInstallButton('Añadir a inicio');

    els.install.addEventListener('click', async () => {
      if (deferred) {
        deferred.prompt();
        const choice = await deferred.userChoice.catch(() => null);
        deferred = null;

        if (choice && choice.outcome === 'accepted') {
          els.install.hidden = true;
          showToast('Instalando NovitaBot');
        }
        return;
      }

      if (isIos()) {
        const faq = document.getElementById('faq-instalar');
        if (faq) {
          faq.open = true;
          faq.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          showToast('Safari: Compartir → Añadir a pantalla de inicio');
        }
        return;
      }

      showToast('Usa el menú del navegador para instalar la app');
    });
  }

  function bindConnection() {
    window.addEventListener('offline', () => {
      showToast('Sin conexión: los comandos guardados siguen disponibles');
    });

    window.addEventListener('online', () => {
      showToast('Conexión restablecida');
    });
  }

  function updateHint() {
    if (!els.hint) return;

    const touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    els.hint.textContent = touch
      ? '💡 Toca una tarjeta para ver sus detalles, copiar el comando o guardarlo en favoritos.'
      : '💡 Haz clic en una tarjeta para ver sus detalles, copiar el comando o guardarlo en favoritos.';
  }

  // ---------- Service worker ----------

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;

    const secure =
      location.protocol === 'https:' ||
      location.hostname === 'localhost' ||
      location.hostname === '127.0.0.1';

    if (!secure) return;

    const hadController = !!navigator.serviceWorker.controller;

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // Un controlador nuevo significa que la app se actualizó por detrás.
      if (hadController) showUpdateBanner();
    });

    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('sw.js')
        .then((registration) => {
          if (registration.waiting && navigator.serviceWorker.controller) {
            showUpdateBanner(registration.waiting);
          }

          registration.addEventListener('updatefound', () => {
            const worker = registration.installing;
            if (!worker) return;

            worker.addEventListener('statechange', () => {
              if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                showUpdateBanner(worker);
              }
            });
          });
        })
        .catch(() => {
          /* sin service worker: la web sigue funcionando */
        });
    });
  }

  // ---------- Inicio ----------

  function init() {
    if (els.year) els.year.textContent = String(new Date().getFullYear());

    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection && connection.saveData) {
      document.documentElement.classList.add('save-data');
    }

    syncStats();
    setupDailyCommand();
    renderCategoryGrid();
    renderChips();
    renderCommands();
    bindEvents();
    bindScroll();
    bindReveal();
    bindCounters();
    bindInstall();
    bindConnection();
    setupStatus();
    updateHint();
    applyHash();
    registerServiceWorker();

    if (COMMANDS.length) {
      document.documentElement.classList.add('js-ready');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
