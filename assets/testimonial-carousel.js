(() => {
  const carousel = document.querySelector('[data-testimonial-carousel]');
  if (!carousel) return;

  const stage = carousel.querySelector('.testimonial-carousel-stage');
  const slides = Array.from(carousel.querySelectorAll('[data-testimonial-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-testimonial-dot]'));
  const previous = carousel.querySelector('[data-testimonial-previous]');
  const next = carousel.querySelector('[data-testimonial-next]');
  const mobileViewport = window.matchMedia('(max-width: 640px)');

  if (slides.length < 2 || slides.length !== dots.length) return;

  let activeIndex = 0;
  let timer = 0;
  let resizeTimer = 0;

  const show = (requestedIndex) => {
    activeIndex = (requestedIndex + slides.length) % slides.length;
    const companionIndex = (activeIndex + 1) % slides.length;

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      const isCompanion = !mobileViewport.matches && index === companionIndex;
      slide.classList.toggle('is-active', isActive);
      slide.classList.toggle('is-companion', isCompanion);
      slide.setAttribute('aria-hidden', String(!isActive && !isCompanion));
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      if (isActive) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  const syncSlideHeights = () => {
    if (!stage) return;

    const stageWidth = stage.getBoundingClientRect().width;
    const columnGap = Number.parseFloat(window.getComputedStyle(stage).columnGap) || 0;
    const columnCount = mobileViewport.matches ? 1 : 2;
    const slideWidth = (stageWidth - columnGap * (columnCount - 1)) / columnCount;
    const referenceSlide = slides[0];
    const previousStyle = referenceSlide.getAttribute('style');

    referenceSlide.style.display = 'flex';
    referenceSlide.style.position = 'absolute';
    referenceSlide.style.inset = '0 auto auto 0';
    referenceSlide.style.width = `${slideWidth}px`;
    referenceSlide.style.height = 'auto';
    referenceSlide.style.minHeight = '0';
    referenceSlide.style.visibility = 'hidden';
    referenceSlide.style.pointerEvents = 'none';
    referenceSlide.style.transform = 'none';
    referenceSlide.style.animation = 'none';
    const referenceHeight = Math.ceil(referenceSlide.scrollHeight);

    if (previousStyle === null) referenceSlide.removeAttribute('style');
    else referenceSlide.setAttribute('style', previousStyle);

    if (referenceHeight > 0) {
      slides.forEach((slide) => {
        slide.style.height = `${referenceHeight}px`;
        slide.style.minHeight = `${referenceHeight}px`;
        slide.classList.remove('is-truncated');
      });

      window.requestAnimationFrame(() => {
        slides.forEach((slide) => {
          const copy = slide.querySelector('.testimonial-copy');
          const isTruncated = copy && copy.scrollHeight > copy.clientHeight + 2;
          slide.classList.toggle('is-truncated', Boolean(isTruncated));
        });
      });
    }
  };

  const syncViewport = () => {
    show(activeIndex);
    syncSlideHeights();
  };

  if (typeof mobileViewport.addEventListener === 'function') {
    mobileViewport.addEventListener('change', syncViewport);
  } else {
    mobileViewport.addListener(syncViewport);
  }

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(activeIndex + 1), 10000);
  };

  const stop = () => window.clearInterval(timer);

  previous?.addEventListener('click', () => {
    show(activeIndex - 1);
    start();
  });

  next?.addEventListener('click', () => {
    show(activeIndex + 1);
    start();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      show(index);
      start();
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  carousel.addEventListener('pointerenter', stop);
  carousel.addEventListener('pointerleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) start();
  });

  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(syncSlideHeights, 140);
  }, { passive: true });

  show(0);
  syncSlideHeights();
  document.fonts?.ready.then(syncSlideHeights);
  start();
})();
