// projects.js - Dynamic project rendering with filtering and pagination
import { projects, getAllTags } from '../data/projects.js';

const PROJECTS_PER_PAGE = 6;
let currentPage = 1;
let currentFilter = 'all';
let filteredProjects = [...projects];

// Render a single project card
function renderProjectCard(project) {
  const tagsHTML = project.tags
    .map(tag => `<span class="project-tag">${tag}</span>`)
    .join('');

  return `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}" class="project-img" />
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${tagsHTML}
        </div>
        <div class="project-links">
          <a href="${project.links.demo}" class="project-link">
            <i class="fas fa-link"></i> Demo
          </a>
          <a href="${project.links.code}" class="project-link">
            <i class="fab fa-github"></i> Code
          </a>
        </div>
      </div>
    </div>
  `;
}

// Render projects grid
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  // Calculate pagination
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const projectsToShow = filteredProjects.slice(startIndex, endIndex);

  // Render cards
  grid.innerHTML = projectsToShow.map(renderProjectCard).join('');

  // Trigger animations after render
  setTimeout(() => {
    const cards = grid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => card.classList.add('visible'), index * 100);
    });
  }, 50);

  // Update pagination UI
  updatePagination();
}

// Render filter buttons
function renderFilters() {
  const filterContainer = document.getElementById('projectFilters');
  if (!filterContainer) return;

  const tags = getAllTags();
  
  // All button
  let filtersHTML = `
    <button class="filter-btn active" data-filter="all">
      <i class="fas fa-th"></i> All
    </button>
  `;

  // Tag buttons
  tags.forEach(tag => {
    filtersHTML += `
      <button class="filter-btn" data-filter="${tag}">
        ${tag}
      </button>
    `;
  });

  filterContainer.innerHTML = filtersHTML;

  // Attach event listeners
  const buttons = filterContainer.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => handleFilterClick(btn));
  });
}

// Handle filter button click
function handleFilterClick(button) {
  const filter = button.dataset.filter;
  currentFilter = filter;
  currentPage = 1; // Reset to first page

  // Update active state
  const allButtons = document.querySelectorAll('.filter-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  // Filter projects
  if (filter === 'all') {
    filteredProjects = [...projects];
  } else {
    filteredProjects = projects.filter(project => 
      project.tags.includes(filter)
    );
  }

  // Re-render
  renderProjects();
}

// Render pagination controls
function updatePagination() {
  const paginationContainer = document.getElementById('projectPagination');
  if (!paginationContainer) return;

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  // Hide pagination if only one page
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let paginationHTML = '';

  // Previous button
  paginationHTML += `
    <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">
      <i class="fas fa-chevron-left"></i>
    </button>
  `;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
      <button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
        ${i}
      </button>
    `;
  }

  // Next button
  paginationHTML += `
    <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  paginationContainer.innerHTML = paginationHTML;

  // Attach event listeners
  const buttons = paginationContainer.querySelectorAll('.pagination-btn:not([disabled])');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page);
      renderProjects();
      
      // Scroll to projects section
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Initialize projects section
export function initProjects() {
  renderFilters();
  renderProjects();
}
