document.addEventListener('DOMContentLoaded', () => {
  const topbar = document.querySelector('.topbar');
  const links = document.querySelectorAll('a[href^="#"]');

  // Smooth scroll for internal anchors
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Add shadow to topbar after scroll
  const toggleShadow = () => {
    if (window.scrollY > 10) {
      topbar.classList.add('shadowed');
    } else {
      topbar.classList.remove('shadowed');
    }
  };

  toggleShadow();
  window.addEventListener('scroll', toggleShadow, { passive: true });
});
