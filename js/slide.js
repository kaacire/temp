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

/* VITRINES — setas rolam a fileira de cards e dão a volta no fim (loop) */
document.querySelectorAll(".vitrine").forEach(function (vitrine) {
  const track = vitrine.querySelector(".vitrine-track");
  const prev = vitrine.querySelector(".vprev");
  const next = vitrine.querySelector(".vnext");
  if (!track || !prev || !next) return;

  function rolar(direcao) {
    const max = track.scrollWidth - track.clientWidth;
    const noFim = track.scrollLeft >= max - 4;
    const noInicio = track.scrollLeft <= 4;

    if (direcao > 0 && noFim) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direcao < 0 && noInicio) {
      track.scrollTo({ left: max, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direcao * track.clientWidth * 0.8, behavior: "smooth" });
    }
  }

  prev.addEventListener("click", function () { rolar(-1); });
  next.addEventListener("click", function () { rolar(1); });
});