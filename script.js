// Import Lucide icons (or declare the variable if not using imports)
import * as lucide from 'lucide-static'; // Or use a CDN or local file

// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.querySelector('.main-content');
const searchToggle = document.getElementById('search-toggle');
const searchInput = document.getElementById('search-input');
const versionButton = document.getElementById('version-button');
const versionDropdown = document.getElementById('version-dropdown');
const versionItems = document.querySelectorAll('.version-dropdown-item');
const selectedVersion = document.getElementById('selected-version');
const backToTopButton = document.getElementById('back-to-top');
const submenuToggles = document.querySelectorAll('.sidebar-submenu-toggle');
const productCategoryHeaders = document.querySelectorAll('.product-category-header');

// Toggle sidebar
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
  mainContent.classList.toggle('expanded');
});

// Toggle search input
searchToggle.addEventListener('click', () => {
  searchInput.classList.toggle('expanded');
  if (searchInput.classList.contains('expanded')) {
    searchInput.focus();
  }
});

// Toggle version dropdown
versionButton.addEventListener('click', () => {
  versionDropdown.classList.toggle('show');
});

// Close version dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!versionButton.contains(event.target) && !versionDropdown.contains(event.target)) {
    versionDropdown.classList.remove('show');
  }
});

// Select version
versionItems.forEach(item => {
  item.addEventListener('click', () => {
    const value = item.getAttribute('data-value');
    selectedVersion.textContent = item.textContent;
    
    // Remove selected class from all items
    versionItems.forEach(i => i.classList.remove('selected'));
    
    // Add selected class to clicked item
    item.classList.add('selected');
    
    versionDropdown.classList.remove('show');
  });
});

// Toggle sidebar submenus
submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = toggle.nextElementSibling;
    submenu.classList.toggle('expanded');
    
    // Rotate chevron icon
    const icon = toggle.querySelector('i');
    icon.style.transform = submenu.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0)';
  });
});

// Toggle product categories
productCategoryHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const category = header.parentElement;
    category.classList.toggle('collapsed');
  });
});

// Back to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize - expand all product categories by default
document.addEventListener('DOMContentLoaded', () => {
  // Initialize product categories (expanded by default)
  productCategoryHeaders.forEach(header => {
    const category = header.parentElement;
    category.classList.remove('collapsed');
  });
  
  // Initialize sidebar for mobile
  if (window.innerWidth < 768) {
    sidebar.classList.remove('expanded');
    mainContent.classList.add('expanded');
  } else {
    sidebar.classList.add('expanded');
    mainContent.classList.remove('expanded');
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    sidebar.classList.remove('expanded');
    mainContent.classList.add('expanded');
  } else {
    sidebar.classList.add('expanded');
    mainContent.classList.remove('expanded');
  }
});