const nav = document.querySelector('.site-nav');
const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';

if (isHome) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.classList.add('nav-visible');
    } else {
      nav.classList.remove('nav-visible');
    }
  }, { passive: true });
} else {
  nav.style.transition = 'none';
  nav.classList.add('nav-visible');
  nav.offsetHeight; // force reflow
  nav.style.transition = '';
}
