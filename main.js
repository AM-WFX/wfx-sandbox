/* ============================================================================
   COMPREHENSIVE DAP TEST SITE - MAIN UTILITIES
   ============================================================================ */

// Global namespace
const DAPTest = {
  state: {
    currentPage: 'index',
    modalsOpen: {},
    accordionsOpen: {},
    tabsActive: {}
  },

  init: function() {
    this.setupNavigation();
    this.setupModals();
    this.setupAccordions();
    this.setupTabs();
    this.setupDropdowns();
    this.setupTooltips();
    this.setupFormValidation();
    this.setupDynamicContent();
    this.setupToggleSwitches();
    this.handlePageLoad();
  },

  setupNavigation: function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  },

  setupModals: function() {
    document.addEventListener('click', (e) => {
      // Open modal
      if (e.target.hasAttribute('data-modal-trigger')) {
        const modalId = e.target.getAttribute('data-modal-trigger');
        DAPTest.openModal(modalId);
      }

      // Close modal
      if (e.target.hasAttribute('data-modal-close') || 
          (e.target.classList.contains('modal-overlay') && e.target === e.currentTarget)) {
        DAPTest.closeModal(e.target.getAttribute('data-modal-close') || 
                          e.target.id);
      }

      // Modal close button
      if (e.target.classList.contains('modal-close')) {
        const modal = e.target.closest('.modal-overlay');
        if (modal) DAPTest.closeModal(modal.id);
      }
    });
  },

  openModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      this.state.modalsOpen[modalId] = true;
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      this.state.modalsOpen[modalId] = false;
      document.body.style.overflow = 'auto';
    }
  },

  setupAccordions: function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header, index) => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.classList.contains('show');

        // Close others in same accordion
        const accordion = header.closest('.accordion');
        const otherBodies = accordion.querySelectorAll('.accordion-body.show');
        otherBodies.forEach(b => {
          b.classList.remove('show');
          b.previousElementSibling.classList.remove('active');
        });

        // Toggle current
        if (!isOpen) {
          body.classList.add('show');
          header.classList.add('active');
        }
      });
    });
  },

  setupTabs: function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabGroup = button.parentElement;
        const tabContents = tabGroup.nextElementSibling;

        if (!tabContents || !tabContents.classList.contains('tab-contents')) {
          return;
        }

        // Deactivate all tabs
        tabGroup.querySelectorAll('.tab-button').forEach(b => {
          b.classList.remove('active');
        });
        tabContents.querySelectorAll('.tab-content').forEach(c => {
          c.classList.remove('active');
        });

        // Activate selected tab
        button.classList.add('active');
        const tabIndex = Array.from(tabGroup.children).indexOf(button);
        tabContents.children[tabIndex].classList.add('active');
      });
    });
  },

  setupDropdowns: function() {
    document.addEventListener('click', (e) => {
      const dropdownToggle = e.target.closest('[data-dropdown]');

      if (dropdownToggle) {
        const dropdown = dropdownToggle.closest('.dropdown');
        const isActive = dropdown.classList.contains('active');

        // Close all other dropdowns
        document.querySelectorAll('.dropdown.active').forEach(d => {
          if (d !== dropdown) d.classList.remove('active');
        });

        // Toggle current
        if (isActive) {
          dropdown.classList.remove('active');
        } else {
          dropdown.classList.add('active');
        }
      } else {
        // Close dropdowns when clicking outside
        if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown.active').forEach(d => {
            d.classList.remove('active');
          });
        }
      }
    });
  },

  setupTooltips: function() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
      // Tooltip text positioning can be added here if needed
    });
  },

  setupFormValidation: function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
            const errorEl = input.nextElementSibling;
            if (errorEl && errorEl.classList.contains('error')) {
              errorEl.textContent = 'This field is required';
            }
          } else {
            input.classList.remove('is-invalid');
          }
        });

        if (isValid) {
          DAPTest.showAlert('success', 'Form submitted successfully!');
          form.reset();
        }
      });
    });
  },

  setupDynamicContent: function() {
    // Simulate AJAX loading
    document.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-load-content')) {
        const contentId = e.target.getAttribute('data-load-content');
        DAPTest.loadContent(contentId);
      }
    });
  },

  setupToggleSwitches: function() {
    const toggles = document.querySelectorAll('.toggle-switch input');
    toggles.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const label = e.target.nextElementSibling?.textContent || 'Setting';
        const status = e.target.checked ? 'enabled' : 'disabled';
        DAPTest.showAlert('info', `${label} has been ${status}`);
      });
    });
  },

  loadContent: function(contentId) {
    const container = document.getElementById(contentId);
    if (container) {
      container.innerHTML = '<div class="skeleton skeleton-text" style="height: 100px;"></div>';

      // Simulate loading delay
      setTimeout(() => {
        container.innerHTML = '<p>Content loaded successfully! This would be dynamic content from an API.</p>';
      }, 1500);
    }
  },

  showAlert: function(type, message) {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type}`;
    alertContainer.innerHTML = `
      <span>${message}</span>
      <button style="background: none; border: none; color: inherit; cursor: pointer; font-weight: bold;">✕</button>
    `;

    const main = document.querySelector('main');
    if (main) {
      main.insertBefore(alertContainer, main.firstChild);

      alertContainer.querySelector('button').addEventListener('click', () => {
        alertContainer.remove();
      });

      setTimeout(() => {
        alertContainer.remove();
      }, 5000);
    }
  },

  handlePageLoad: function() {
    // Mark current nav item as active
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  DAPTest.init();
});

// Utility functions
function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Table sorting
function sortTable(tableId, columnIndex) {
  const table = document.getElementById(tableId);
  if (!table) return;

  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  let isAscending = !table.hasAttribute('data-sort-asc');

  rows.sort((a, b) => {
    const aCell = a.cells[columnIndex].textContent;
    const bCell = b.cells[columnIndex].textContent;

    const aVal = isNaN(aCell) ? aCell : parseFloat(aCell);
    const bVal = isNaN(bCell) ? bCell : parseFloat(bCell);

    if (isAscending) {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  rows.forEach(row => tbody.appendChild(row));
  table.setAttribute('data-sort-asc', isAscending ? 'true' : 'false');
}

// Filter table
function filterTable(tableId, searchTerm, columnIndex = 0) {
  const table = document.getElementById(tableId);
  if (!table) return;

  const rows = table.querySelectorAll('tbody tr');
  const term = searchTerm.toLowerCase();

  rows.forEach(row => {
    const cell = row.cells[columnIndex]?.textContent || '';
    row.style.display = cell.toLowerCase().includes(term) ? '' : 'none';
  });
}

// Pagination
function paginate(items, page, itemsPerPage) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    items: items.slice(start, end),
    totalPages: totalPages,
    currentPage: page
  };
}

// Validation helpers
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  const regex = /^[\d\s\-\+\(\)]+$/;
  return regex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAPTest;
}
