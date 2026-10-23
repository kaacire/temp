const slides = document.querySelectorAll(".hero-slider .slide2");

let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);


document.querySelectorAll(".cards-section").forEach(slider => {
  const slidesContainer = slider.querySelector(".track");
  const nextBtn = slider.querySelector(".right3");
  const prevBtn = slider.querySelector(".left3");

  nextBtn.addEventListener("click", () => {
    const firstCard = slidesContainer.firstElementChild;
    slidesContainer.appendChild(firstCard);
  });

  prevBtn.addEventListener("click", () => {
    const lastCard = slidesContainer.lastElementChild;
    slidesContainer.prepend(lastCard);
  });
});