/* ============================================
   СКРИПТЫ САЙТА
   ============================================ */

/* === ПРЕЛОАДЕР === */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hidden'), 1200);
  }
});

/* === ШАПКА ПРИ СКРОЛЛЕ === */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* === РЕНДЕР АФИШИ === */
function renderAfisha() {
  const grid = document.getElementById('afisha-grid');
  if (!grid || typeof SPECTACLES === 'undefined') return;

  const upcoming = SPECTACLES.slice(0, 3);

  grid.innerHTML = upcoming.map(s => `
    <a href="spektakl.html?id=${s.id}" class="spektakl-card">
      <div class="spektakl-poster">
        <img src="${s.poster}" alt="${s.title}" loading="lazy">
      </div>
      <div class="spektakl-info">
        <div class="spektakl-date">${s.dateLabel}</div>
        <h3 class="spektakl-title">${s.title}</h3>
        <div class="spektakl-meta">${s.scene} · ${s.age} · ${s.genre}</div>
        <span class="btn-buy">Подробнее →</span>
      </div>
    </a>
  `).join('');
}

/* === АНИМАЦИЯ СЧЁТЧИКОВ === */
function animateCounters() {
  const stats = document.querySelectorAll('.stat');
  const counters = document.querySelectorAll('[data-count]');

  if (!stats.length) return;

  // Появление блоков по очереди
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  stats.forEach(s => statObserver.observe(s));

  // Бегущие цифры
  const numObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const duration = 2000;
      const start = performance.now();

      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      numObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => numObserver.observe(c));
}

/* === АКТИВНЫЙ ПУНКТ МЕНЮ === */
function highlightActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === current);
  });
}

/* === ИНИЦИАЛИЗАЦИЯ === */
document.addEventListener('DOMContentLoaded', () => {
  renderAfisha();
  animateCounters();
  highlightActiveNav();
   animateCover();
});

/* === АНИМАЦИЯ ПОЯВЛЕНИЯ ФОТО ПРИ СКРОЛЛЕ === */
function animateCover() {
  const photo = document.querySelector('.about-photo');
  if (!photo) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(photo);
}

/* === БУРГЕР-МЕНЮ === */
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('open');
    burger.classList.toggle('active');
  });
}