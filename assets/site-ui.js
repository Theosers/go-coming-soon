(() => {
  const backToTop = document.querySelector('[data-back-to-top]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hoverNavigation = window.matchMedia('(min-width: 981px) and (hover: hover) and (pointer: fine)');
  const dropdowns = document.querySelectorAll('.nav-dropdown, .legal-dropdown');

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle, .legal-dropdown-toggle');
    if (!toggle) return;

    const setExpanded = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
    };

    dropdown.addEventListener('pointerenter', () => {
      if (!hoverNavigation.matches) return;
      dropdown.classList.remove('is-open');
      setExpanded(true);
    });

    dropdown.addEventListener('pointerleave', () => {
      if (!hoverNavigation.matches || dropdown.contains(document.activeElement)) return;
      setExpanded(false);
    });

    dropdown.addEventListener('focusin', () => {
      if (hoverNavigation.matches) setExpanded(true);
    });

    dropdown.addEventListener('focusout', () => {
      if (!hoverNavigation.matches) return;
      window.requestAnimationFrame(() => {
        if (!dropdown.contains(document.activeElement) && !dropdown.matches(':hover')) {
          setExpanded(false);
        }
      });
    });

    toggle.addEventListener('click', (event) => {
      if (!hoverNavigation.matches) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      dropdown.classList.remove('is-open');
      setExpanded(dropdown.matches(':hover') || dropdown.contains(document.activeElement));

      if (event.detail > 0) toggle.blur();
    }, true);
  });

  if (backToTop) {
    const updateBackToTop = () => {
      const isVisible = window.scrollY > Math.max(520, window.innerHeight * .72);
      backToTop.classList.toggle('is-visible', isVisible);
      backToTop.setAttribute('aria-hidden', String(!isVisible));
      backToTop.tabIndex = isVisible ? 0 : -1;
    };

    backToTop.addEventListener('click', (event) => {
      const target = document.querySelector(backToTop.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });
    });

    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
})();
