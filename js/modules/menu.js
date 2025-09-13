export function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuBtn || !navLinks) return;

  const setExpanded = (expanded) => {
    menuBtn.setAttribute('aria-expanded', String(expanded));
    menuBtn.innerHTML = expanded ? '<i class="fas fa-times" aria-hidden="true"></i>' : '<i class="fas fa-bars" aria-hidden="true"></i>';
  };

  menuBtn.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    setExpanded(isActive);
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        setExpanded(false);
      }
    });
  });
}
