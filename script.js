const navMenu = document.querySelector(".mobile-menu .nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-link");

// open the nav menu when hamburger icon is clicked
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.add("open");
});

// close the nav menu when x icon is clicked
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

// close the nav menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// add active class to the clicked nav link and remove it from other nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// CAROUSEL
const carouselImages = document.querySelectorAll(".carousel-images img");
const carouselNextBtn = document.querySelector(".next-button");
const carouselPrevBtn = document.querySelector(".prev-button");

let counter = 0;

// Next button
function nextImageSlide() {
  carouselImages[counter].style.animation = "next1 0.5s forwards";

  counter >= carouselImages.length - 1 ? (counter = 0) : counter++;

  carouselImages[counter].style.animation = "next2 0.5s forwards";
}

carouselNextBtn.addEventListener("click", nextImageSlide);

// Prev Button
function prevImageSlide() {
  carouselImages[counter].style.animation = "prev1 0.5s forwards";

  counter <= 0 ? (counter = carouselImages.length - 1) : counter--;

  carouselImages[counter].style.animation = "prev2 0.5s forwards";
}

carouselPrevBtn.addEventListener("click", prevImageSlide);

// Auto slides
function autoSlides() {
  setSlideTime = setInterval(slide, 2500);
  function slide() {
    nextImageSlide();
  }
}

autoSlides();

// Stop auto slide when mouse is over
const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.addEventListener("mouseover", () => {
  clearInterval(setSlideTime);
});

// Resume auto slide when mouse is out
carouselContainer.addEventListener("mouseout", autoSlides);

// SERVICES ACCORDION
const accordions = document.querySelectorAll(".accordion");
let allActive = false;

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    allActive = !allActive;

    accordions.forEach((accordion) => {
      if (allActive) {
        accordion.classList.add("active");
      } else {
        accordion.classList.remove("active");
      }
    });
  });
});

// CLIENTS LOGOS
document.addEventListener("DOMContentLoaded", function () {
  const logos = [
    "./images/sheraton-hotels-and-resorts-logo.svg",
    "./images/moe-logo.png",
    "./images/mestil-logo.jpg",
    "./images/four-points-by-sheraton-vector-logo.png",
    "./images/Fleetmax_logo.png",
  ];
  const desktopInner = document.querySelector(".logos-desktop-inner");

  // Function to create logo elements
  function createLogoElement(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Client ${alt}`;
    return img;
  }

  // Add logos twice to ensure smooth looping
  logos.forEach((logo, index) => {
    desktopInner.appendChild(createLogoElement(logo, index + 1));
  });
  logos.forEach((logo, index) => {
    desktopInner.appendChild(createLogoElement(logo, index + 1));
  });

  // Adjust animation duration based on the number of logos
  // const totalWidth = desktopInner.scrollWidth / 2; // Half because we duplicated the logos
  const duration = 60; // 50 pixels per second
  desktopInner.style.animationDuration = `${duration}s`;
});

// GET THE CURRENT YEAR FOR COPYRIGHT
const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

// SCROLL TO TOP
document
  .querySelector(".back-to-top")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// SHOW BACK TO TOP BUTTON ON SCROLL
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.querySelector(".back-to-top").classList.add("show");
  } else {
    document.querySelector(".back-to-top").classList.remove("show");
  }
});

// SCROLL FADE IN ANIMATION
document.addEventListener("scroll", () => {
  const pageTop = window.scrollY;
  const pageBottom = pageTop + window.innerHeight;
  const tags = document.querySelectorAll(".fadein");

  tags.forEach((tag) => {
    if (tag.getBoundingClientRect().top + window.scrollY < pageBottom) {
      tag.classList.add("visible");
    } else {
      tag.classList.remove("visible");
    }
  });
});

// STICKY HEADER ON SCROLL
window.onscroll = function () {
  stickyHeader();
};

let header = document.querySelector(".header");
let sticky = 100; // The scroll position where the navbar becomes sticky

function stickyHeader() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// ACTIVE SECTION ON SCROLL
const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove 'active' class from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the corresponding nav link
      const activeLink = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
