document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('mainNav');

  // Scroll effect
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

  // Mobile menu
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Expandable cards (Accenture-style awards)
  document.querySelectorAll('.card-expand').forEach(card => {
    const btn = card.querySelector('.card-expand-btn');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.toggle('open');
      const isOpen = card.classList.contains('open');
      btn.textContent = isOpen ? 'Fechar →' : 'Expandir →';
    });
  });

  // Report cards toggle (Accenture-style)
  document.querySelectorAll('.report-card').forEach(card => {
    const toggle = card.querySelector('.report-toggle');
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.toggle('open');
      const span = toggle.querySelector('span');
      span.textContent = card.classList.contains('open') ? '↓' : '→';
    });
  });

  // Carousel
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (track) {
    const slides = track.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function getSlidesPerView() {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, slides.length - getSlidesPerView());
    }

    function getSlideWidth() {
      const containerWidth = track.parentElement.clientWidth;
      const slidesPerView = getSlidesPerView();
      const gap = 24;
      return (containerWidth - gap * (slidesPerView - 1)) / slidesPerView;
    }

    function updateCarousel() {
      const slideWidth = getSlideWidth();
      const gap = 24;
      const offset = currentIndex * (slideWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
      }
    }

    // Create dots
    if (dotsContainer) {
      const maxIndex = getMaxIndex();
      for (let i = 0; i <= maxIndex - 2; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateCarousel();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
      currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
      updateCarousel();
    });

    window.addEventListener('resize', () => {
      currentIndex = Math.min(currentIndex, getMaxIndex());
      updateCarousel();
    });

    // Touch support
    let startX = 0, isDragging = false, startTranslate = 0;

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      startTranslate = currentIndex;
      track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      const slideWidth = getSlideWidth() + 24;
      const offset = (startTranslate * slideWidth) - diff;
      track.style.transform = `translateX(-${Math.max(0, offset)}px)`;
    }, { passive: true });

    track.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';

      const diff = startX - (startX + (currentIndex - startTranslate) * (getSlideWidth() + 24));
      const slideWidth = getSlideWidth() + 24;

      if (Math.abs(diff) > slideWidth * 0.25) {
        currentIndex = diff > 0
          ? Math.min(getMaxIndex(), currentIndex + 1)
          : Math.max(0, currentIndex - 1);
      }

      updateCarousel();
    }, { passive: true });
  }
});
