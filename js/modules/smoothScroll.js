export function initSmoothScroll() {
  const navLinks = document.getElementById('navLinks');
  const menuBtn = document.getElementById('menuBtn');
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const el = document.querySelector(targetId);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
