document.addEventListener('DOMContentLoaded', () => {
  const topbar = document.querySelector('.topbar');
  const links = document.querySelectorAll('a[href^="#"]');
  const lazyImages = document.querySelectorAll('img[data-fallback]');
  const mapFrame = document.querySelector('.map-frame');

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

  // Fallback images: if branded asset fails, fall back to remote placeholder
  lazyImages.forEach((img) => {
    img.addEventListener('error', () => {
      if (img.dataset.fallback && img.src !== img.dataset.fallback) {
        img.src = img.dataset.fallback;
      }
    });
  });

  // Google Maps Embed API integration with graceful fallback
  if (mapFrame) {
    const place = mapFrame.dataset.mapPlace;
    const fallback = mapFrame.dataset.mapFallback;
    const keyFromData = mapFrame.dataset.mapKey;
    const keyFromWindow = window["AIzaSyBRe0JvYv-waVv14x7CHLW8E_DO9tHAfSA"] || '';
    const apiKey = (keyFromWindow || keyFromData || '').trim();

    if (apiKey && place) {
      const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(place)}&zoom=16`;
      mapFrame.src = embedUrl;
    } else if (fallback) {
      mapFrame.src = fallback;
    }
  }
});
