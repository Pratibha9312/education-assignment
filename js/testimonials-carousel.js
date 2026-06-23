document.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById("testimonialTrack");

  let currentIndex = 0;

  function createTestimonialCard(item) {
    return `
      <div class="testimonial-card">
        <img src="${item.avatar}" alt="${item.name}">
        <p>"${item.message}"</p>
        <h3>- ${item.name}</h3>
      </div>
    `;
  }

  function renderTestimonials() {
    track.innerHTML = testimonials
      .map(createTestimonialCard)
      .join("");
  }

  function getVisibleCards() {
    return window.innerWidth <= 768 ? 1 : 3;
    }

  function updateSlider() {
  const visibleCards = getVisibleCards();
  const step = 100 / visibleCards;
  track.style.transform =
    `translateX(-${currentIndex * step}%)`;
}

  function nextSlide() {
    const visibleCards = getVisibleCards();
    const maxIndex = testimonials.length - visibleCards;

    currentIndex =
        currentIndex >= maxIndex ? 0 : currentIndex + 1;

    updateSlider();
    }

  function prevSlide() {
    const visibleCards = getVisibleCards();
    const maxIndex = testimonials.length - visibleCards;

    currentIndex =
        currentIndex <= 0 ? maxIndex : currentIndex - 1;

    updateSlider();
    }

  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", prevSlide);

  renderTestimonials();
  updateSlider();

  setInterval(nextSlide, 6000);

  window.addEventListener("resize", () => {
    currentIndex = 0;
    updateSlider();
    });

});