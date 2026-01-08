/* ===============================
   TYPING EFFECT (LOOP)
================================ */
const roles = [
  "BCA Student",
  "Python Web Developer",
  "Django Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 90;
const deletingSpeed = 50;
const delayBetweenRoles = 1500;

function typingEffect() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  if (!isDeleting && charIndex < currentRole.length) {
    typingElement.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(typingEffect, typingSpeed);
  } 
  else if (isDeleting && charIndex > 0) {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typingEffect, deletingSpeed);
  } 
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typingEffect, delayBetweenRoles);
  }
}

/* ===============================
   REVEAL ON SCROLL (OPTIMIZED)
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ===============================
   NAVBAR SCROLL EFFECT
================================ */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ===============================
   ACTIVE NAV LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ===============================
   TAB SWITCHING
================================ */
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add("active");
  });
});

/* ===============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing");
  if (typingElement) typingElement.textContent = "";
  typingEffect();
});


