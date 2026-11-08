(function () {
  'use strict';

  const DATA = window.NOVITA_DATA || { bot: {}, categories: [], commands: [] };
  const BOT = DATA.bot || {};
  const CATEGORIES = Array.isArray(DATA.categories) ? DATA.categories : [];
  const COMMANDS = Array.isArray(DATA.commands) ? DATA.commands : [];
  const PREFIX = BOT.prefix || '#';

  const PAGE_SIZE = 24;
  const FAVORITES_KEY = 'novita:favorites';
  const SORT_KEY = 'novita:sort';

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

  const state = {
    query: '',
    category: 'all',
    visible: PAGE_SIZE,
    showAliases: false,
    sort: readSort(),
    favorites: readFavorites(),
    modalCommand: null,
    lastFocused: null,
  };

  const categoryById = new Map(CATEGORIES.map((category) => [category.id, category]));

  const els = {
    header: $('#site-header'),
    navToggle: $('#nav-toggle'),
    nav: $('#main-nav'),
    search: $('#command-search'),
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
    modalWhatsapp: $('#modal-whatsapp'),
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
      } else if (state.category !== 'all' && command.category !== state.category) {
        return false;
      }

      return matchesQuery(command, query);
    });
  }

  function sortedResults(list) {
    const items = list.slice();

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
        '<span class="category-card-count">' +
        formatNumber(count) +
        (count === 1 ? ' comando' : ' comandos') +
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

  function renderChips() {
    if (!els.chips) return;

    const source = state.showAliases
      ? COMMANDS
      : COMMANDS.filter((command) => command.primary !== false);

    const favoriteCount = COMMANDS.filter(
      (command) =>
        state.favorites.has(command.name) && (state.showAliases || command.primary !== false)
    ).length;

    const items = [
      { id: 'all', icon: '✨', title: 'Todos', count: source.length },
      { id: 'favorites', icon: '⭐', title: 'Favoritos', count: favoriteCount },
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
    renderChips();
    renderCommands();

    if (scroll !== false && els.grid) {
      const top = els.grid.getBoundingClientRect().top + window.scrollY - 120;
      if (Math.abs(window.scrollY - top) > 140) {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  function setQuery(value) {
    state.query = String(value || '');
    state.visible = PAGE_SIZE;
    renderCommands();
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

  function openModal(name) {
    const command = findCommand(name);
    if (!command || !els.modal) return;

    state.modalCommand = command;
    state.lastFocused = document.activeElement;

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
    document.body.classList.add('modal-open');

    if (els.modalClose) els.modalClose.focus();
  }

  function closeModal() {
    if (!els.modal || els.modal.hidden) return;

    els.modal.hidden = true;
    document.body.classList.remove('modal-open');
    state.modalCommand = null;

    if (state.lastFocused && typeof state.lastFocused.focus === 'function') {
      state.lastFocused.focus();
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

      els.search.addEventListener('input', (event) => {
        const value = event.target.value;
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
        renderChips();
        renderCommands();
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
    bindFaq();
  }

  function copyCommand(button, name) {
    const value = commandName(name);

    copyText(value).then((ok) => {
      if (ok === false) return;

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

  // ---------- Header, progreso y scroll ----------

  function bindScroll() {
    const onScroll = () => {
      if (els.header) {
        els.header.classList.toggle('scrolled', window.scrollY > 12);
      }

      if (els.progress && els.progress.firstElementChild) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        els.progress.firstElementChild.style.transform = 'scaleX(' + ratio + ')';
      }

      if (els.backToTop) {
        els.backToTop.classList.toggle('show', window.scrollY > 700);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (els.backToTop) {
      els.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

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

    setActive();
    window.addEventListener('scroll', setActive, { passive: true });
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

  function syncStats() {
    const totalCommands = Number(BOT.commands) || COMMANDS.length;
    const totalPlugins = Number(BOT.plugins) || COMMANDS.length;
    const totalCategories = CATEGORIES.length || 15;

    if (els.heroCount) els.heroCount.textContent = formatNumber(totalCommands);
    if (els.commandsTotal) els.commandsTotal.textContent = formatNumber(totalCommands);
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

  // ---------- Inicio ----------

  function init() {
    if (els.year) els.year.textContent = String(new Date().getFullYear());

    syncStats();
    renderCategoryGrid();
    renderChips();
    renderCommands();
    bindEvents();
    bindScroll();
    bindReveal();
    bindCounters();

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
