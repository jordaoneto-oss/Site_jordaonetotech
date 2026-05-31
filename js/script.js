document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const mainNav = document.getElementById('mainNav');

  // Mobile menu
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener('click', () => {
      mainNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Submenu dropdowns (mobile + desktop)
  document.querySelectorAll('.has-submenu').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.closest('.nav-item');
      const isOpen = parent.classList.contains('open');

      // Close other open submenus
      document.querySelectorAll('.nav-item.open').forEach(item => {
        if (item !== parent) item.classList.remove('open');
      });

      parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  // Close submenus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item.open').forEach(item => {
        item.classList.remove('open');
      });
    }
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });

  // Smooth reveal animation for cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.highlight-card, .card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
