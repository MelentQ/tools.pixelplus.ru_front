document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.js-scroll-to-top:not(.--initialized)');
  if (!containers.length) return;

  containers.forEach((container) => {
    container.addEventListener('click', (e) => {
      e.preventDefault();

      window.pts.gsap.to(window, {
        duration: 1,
        ease: 'ease',
        scrollTo: {
          y: 0,
        },
      });
    });

    container.classList.add('--initialized');
  });

  function toggle() {
    containers.forEach((container) => {
      container.classList.toggle('--active', window.scrollY >= window.innerHeight);
    });
  }
  toggle();

  window.addEventListener('scroll', toggle, {
    passive: true,
  });
});
