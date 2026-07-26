(() => {
  const carousel = document.querySelector('[data-testimonial-carousel]');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('[data-testimonial-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-testimonial-dot]'));
  const previous = carousel.querySelector('[data-testimonial-previous]');
  const next = carousel.querySelector('[data-testimonial-next]');
  const mobileViewport = window.matchMedia('(max-width: 640px)');

  if (slides.length !== 4 || dots.length !== 4) return;

  let activeIndex = 0;
  let timer = 0;

  const show = (requestedIndex) => {
    activeIndex = (requestedIndex + 4) % 4;
    const companionIndex = (activeIndex + 1) % 4;

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

  const syncViewport = () => show(activeIndex);

  if (typeof mobileViewport.addEventListener === 'function') {
    mobileViewport.addEventListener('change', syncViewport);
  } else {
    mobileViewport.addListener(syncViewport);
  }

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(activeIndex + 1), 5200);
  };

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
    if (document.hidden) window.clearInterval(timer);
    else start();
  });

  show(0);
  start();
})();
