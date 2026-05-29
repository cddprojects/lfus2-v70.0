const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const revealSelectors = [
  '.hero-copy', '.hero-card', '.advantage-visual-copy', '.steps .step-card',
  '.centered-intro', '.feature-card', '.photo-banner', '.role-card',
  '.form-copy', '.lead-form', '.faq-grid > div', '.faq-list details',
  '.footer-grid > div', '.thank-you-card', '.legal'
];

const revealTargets = document.querySelectorAll(revealSelectors.join(','));
revealTargets.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${Math.min((index % 6) * 80, 400)}ms`;
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in-view'));
}
