

window.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".slider").forEach(slider => {

  const slides = slider.querySelectorAll(".slide");
  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");

  let current = 0;

  function updateSlides() {
    slides.forEach(slide => {
      slide.classList.remove("active", "left", "right");
    });

    const prev = (current - 1 + slides.length) % slides.length;
    const next = (current + 1) % slides.length;

    slides[current].classList.add("active");
    slides[prev].classList.add("left");
    slides[next].classList.add("right");
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlides();
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  });
  updateSlides();
});
});

(function () {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  const overlay = document.getElementById('navOverlay');

  if (!toggle || !nav) return;

  function openMenu() {
    toggle.classList.add('open');
    nav.classList.add('open');
    if (overlay) overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; 
  }

  function closeMenu() {
    toggle.classList.remove('open');
    nav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    toggle.classList.contains('open') ? closeMenu() : openMenu();
  });

  if (overlay) overlay.addEventListener('click', closeMenu);

  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();