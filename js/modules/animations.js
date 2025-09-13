export function initProjectCardAnimations() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 100);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach((c) => observer.observe(c));
}

export function initExperienceAnimations() {
  const cards = document.querySelectorAll('.experience-card');
  if (!cards.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.style.animation = 'fadeIn 0.8s forwards';
    });
  }, { threshold: 0.1 });
  cards.forEach((c) => observer.observe(c));
}
