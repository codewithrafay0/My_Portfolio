/* ===== NAVBAR TOGGLE ===== */
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("nav-toggle");
});

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70; // adjust based on header height
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ===== SCROLL TOP BUTTON ===== */
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ===== TYPING EFFECT ===== */
const typed = new Typed(".typing-text", {
  strings: ["Responsive Website Developer", "Front-End Developer", "Wordpress Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

/* ===== VANILLA TILT ===== */
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

/* ===== SCROLL REVEAL ===== */
ScrollReveal().reveal(".home .content, .about .content, .skills .bar, .education .box, .work .box, .experience .container, #certifications .box, .contact .container, .footer .box", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
  easing: "ease-in-out",
  reset: false,
});

/* ===== PARTICLES JS ===== */
particlesJS.load("particles-js", "./assets/js/particles.json", function() {
  console.log("Particles Loaded!");
});

/* ===== CLOSE MOBILE MENU ON LINK CLICK ===== */
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-toggle");
  });
});
