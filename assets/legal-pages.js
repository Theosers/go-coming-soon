const legalNavToggle = document.querySelector('.legal-nav-toggle');
const legalNavLinks = document.querySelector('.legal-nav-links');
const legalDropdown = document.querySelector('.legal-dropdown');
const legalDropdownToggle = document.querySelector('.legal-dropdown-toggle');
const legalProgress = document.querySelector('.legal-progress');

function setLegalDropdown(open) {
  if (!legalDropdown || !legalDropdownToggle) return;
  legalDropdown.classList.toggle('is-open', open);
  legalDropdownToggle.setAttribute('aria-expanded', String(open));
}

legalNavToggle?.addEventListener('click', () => {
  const isOpen = legalNavLinks.classList.toggle('is-open');
  legalNavToggle.setAttribute('aria-expanded', String(isOpen));
  legalNavToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  if (!isOpen) setLegalDropdown(false);
});

legalDropdownToggle?.addEventListener('click', () => {
  setLegalDropdown(!legalDropdown.classList.contains('is-open'));
});

legalNavLinks?.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  setLegalDropdown(false);
  legalNavLinks.classList.remove('is-open');
  legalNavToggle?.setAttribute('aria-expanded', 'false');
  legalNavToggle?.setAttribute('aria-label', 'Ouvrir le menu');
});

document.addEventListener('click', (event) => {
  if (!legalDropdown?.contains(event.target)) setLegalDropdown(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  setLegalDropdown(false);
  legalNavLinks?.classList.remove('is-open');
  legalNavToggle?.setAttribute('aria-expanded', 'false');
});

function updateLegalProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  legalProgress?.style.setProperty('--legal-progress', String(progress));
}

window.addEventListener('scroll', updateLegalProgress, { passive: true });
updateLegalProgress();

const legalSections = [...document.querySelectorAll('.legal-section[id]')];
const legalTocLinks = [...document.querySelectorAll('.legal-toc a[href^="#"]')];

if (legalSections.length && legalTocLinks.length) {
  const legalSectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    legalTocLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, {
    rootMargin: '-18% 0px -62% 0px',
    threshold: [0, .15, .35]
  });

  legalSections.forEach((section) => legalSectionObserver.observe(section));
}
