// ==========================================================================
// PORTFOLIO JAVASCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking navigation links (mobile)
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          const icon = navToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  // 2. Active Link on Scroll (Scrollspy)
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 3. Dynamic Footer Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
  // 4. Portfolio Tabs Switcher (Projects, Certificates, Achievements, Tech Stack)
  const tabBtns = document.querySelectorAll('.portfolio-tab-btn');
  const tabPanes = document.querySelectorAll('.portfolio-tab-pane');

  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Reset status aktif pada semua tombol dan panel
        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanes.forEach((pane) => pane.classList.remove('active'));

        // Aktifkan tombol yang diklik & tampilkan panel yang sesuai
        btn.classList.add('active');
        const targetPane = document.getElementById(`tab-${targetTab}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }
// Logika Modal Popup Interaktif (Portfolio-Skills)
const modal = document.getElementById('detail-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalCategory = document.getElementById('modal-category');
const modalLevel = document.getElementById('modal-level');

function openSkillModal(name, desc, category, level) {
  if (!modal) return;
  modalTitle.textContent = name;
  modalDesc.textContent = desc;
  modalCategory.textContent = category;
  modalLevel.textContent = level;
  modal.classList.add('active');
}

function closeModal() {
  if (modal) modal.classList.remove('active');
}

function closeModalOnBackdrop(event) {
  if (event.target === modal) {
    closeModal();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
    closeModal();
  }
});
