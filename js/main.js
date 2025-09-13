import { initNavbarScroll } from './modules/navbar.js';
import { initMobileMenu } from './modules/menu.js';
import { initParticles } from './modules/particles-config.js';
import { initProjectCardAnimations, initExperienceAnimations } from './modules/animations.js';
import { initSmoothScroll } from './modules/smoothScroll.js';

window.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initParticles();
  initProjectCardAnimations();
  initExperienceAnimations();
  initSmoothScroll();
});
