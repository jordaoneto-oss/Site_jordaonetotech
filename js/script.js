document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const header = document.querySelector('.site-header');

  // Mobile menu toggle
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Header blur on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Scroll reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Carousel
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track && prevBtn && nextBtn) {
    let position = 0;
    const cards = track.querySelectorAll('.carousel-card');
    const cardStyle = getComputedStyle(cards[0]);
    const gap = 24;

    function getCardWidth() {
      const containerWidth = track.parentElement.clientWidth;
      if (window.innerWidth <= 768) return containerWidth;
      if (window.innerWidth <= 1024) return (containerWidth - gap) / 2;
      return (containerWidth - gap * 2) / 3;
    }

    function getMaxPosition() {
      const cardWidth = getCardWidth();
      const totalWidth = cards.length * (cardWidth + gap) - gap;
      const visible = track.parentElement.clientWidth;
      return Math.max(0, totalWidth - visible);
    }

    function updateCarousel() {
      const cardWidth = getCardWidth();
      position = Math.max(0, Math.min(position, getMaxPosition()));
      track.style.transform = `translateX(-${position}px)`;
    }

    prevBtn.addEventListener('click', () => {
      const cardWidth = getCardWidth();
      position = Math.max(0, position - cardWidth - gap);
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      const cardWidth = getCardWidth();
      position = Math.min(getMaxPosition(), position + cardWidth + gap);
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    // Touch swipe support
    let startX = 0;
    let isDragging = false;
    let startPosition = 0;

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      startPosition = position;
      track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      track.style.transform = `translateX(-${startPosition - diff}px)`;
    }, { passive: true });

    track.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';

      const cardWidth = getCardWidth();
      const currentPos = position;
      const diff = startPosition - position;

      if (Math.abs(diff) > cardWidth * 0.3) {
        if (diff > 0) {
          position = Math.min(getMaxPosition(), position + cardWidth + gap);
        } else {
          position = Math.max(0, position - cardWidth - gap);
        }
      }

      updateCarousel();
    }, { passive: true });
  }
});
