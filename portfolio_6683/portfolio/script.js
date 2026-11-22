// Thème clair / sombre
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
try { const saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; } catch (e) {}
toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  toggle.setAttribute('aria-pressed', next === 'light');
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Lien actif dans la navigation selon la section visible
const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => s && io.observe(s));

// Année du footer
document.getElementById('year').textContent = new Date().getFullYear();
