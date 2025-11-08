import { initNavbarScroll } from './modules/navbar.js';
import { initMobileMenu } from './modules/menu.js';
import { initParticles } from './modules/particles-config.js';
import { initProjectCardAnimations, initExperienceAnimations } from './modules/animations.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initProjects } from './modules/projects.js';

window.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initParticles();
  initProjects(); // Initialize dynamic projects with filtering & pagination
  initProjectCardAnimations();
  initExperienceAnimations();
  initSmoothScroll();
});
