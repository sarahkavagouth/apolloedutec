let slideIndex = 1;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    slideIndex = 1;
  } else if (index < 1) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  const offset = -(slideIndex - 1) * 100;
  document.querySelector(".carousel").style.transform = `translateX(${
    offset / 3
  }%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Duplicar o primeiro e o último slide para efeito infinito
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const firstSlide = slides[0].cloneNode(true);
  const lastSlide = slides[slides.length - 1].cloneNode(true);

  document.querySelector(".carousel").appendChild(firstSlide);
  document.querySelector(".carousel").insertBefore(lastSlide, slides[0]);

  // Inicializar o carrossel no segundo slide (o primeiro é uma cópia)
  showSlide(slideIndex);

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  const header = document.querySelector(".header");

  function checkHeaderColor() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 100) {
      header.classList.add("black-bg");
    } else {
      header.classList.remove("black-bg");
    }
  }

  window.addEventListener("scroll", checkHeaderColor);
  checkHeaderColor();
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  function checkHeaderColor() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 100) {
      header.classList.add("black-bg");
    } else {
      header.classList.remove("black-bg");
    }
  }

  window.addEventListener("scroll", checkHeaderColor);
  checkHeaderColor();
});
