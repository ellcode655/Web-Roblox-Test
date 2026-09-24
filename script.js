const carousel = document.querySelector("#carouselExampleInterval");
const items = carousel.querySelectorAll(".carousel-item");

function updateSideSlides() {
  const active = carousel.querySelector(".carousel-item.active");

  const activeIndex = Array.from(items).indexOf(active);

  const previousIndex = (activeIndex - 1 + items.length) % items.length;

  const nextIndex = (activeIndex + 1) % items.length;

  // Remove old classes
  items.forEach((item) => {
    item.classList.remove("prev-slide", "next-slide");
  });

  // Add previous
  items[previousIndex].classList.add("prev-slide");

  // Add next
  items[nextIndex].classList.add("next-slide");
}

// Initial setup
updateSideSlides();

// Update after Bootstrap finishes changing slide
carousel.addEventListener("slid.bs.carousel", function () {
  updateSideSlides();
});
