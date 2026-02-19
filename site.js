(() => {
  document.querySelectorAll('.main-nav a').forEach((a) => {
    a.addEventListener('click', () => document.body.classList.remove('nav-open'));
  });
})();
