 // Navbar Scroll Effect
 const navbar = document.getElementById("navbar");
 window.addEventListener("scroll", () => {
     if (window.scrollY > 50) {
         navbar.classList.add("scrolled");
     } else {
         navbar.classList.remove("scrolled");
     }
 });

 // Mobile Menu Toggle
 const menuBtn = document.getElementById("menuBtn");
 const navLinks = document.getElementById("navLinks");

 menuBtn.addEventListener("click", () => {
     navLinks.classList.toggle("active");
     menuBtn.innerHTML = navLinks.classList.contains("active")
         ? '<i class="fas fa-times"></i>'
         : '<i class="fas fa-bars"></i>';
 });

 // Particles.js
 particlesJS("particles", {
     particles: {
         number: {
             value: 80,
             density: {
                 enable: true,
                 value_area: 800,
             },
         },
         color: {
             value: "#ffffff",
         },
         shape: {
             type: "circle",
             stroke: {
                 width: 0,
                 color: "#000000",
             },
         },
         opacity: {
             value: 0.5,
             random: false,
             anim: {
                 enable: false,
                 speed: 1,
                 opacity_min: 0.1,
                 sync: false,
             },
         },
         size: {
             value: 3,
             random: true,
             anim: {
                 enable: false,
                 speed: 40,
                 size_min: 0.1,
                 sync: false,
             },
         },
         line_linked: {
             enable: true,
             distance: 150,
             color: "#ffffff",
             opacity: 0.4,
             width: 1,
         },
         move: {
             enable: true,
             speed: 2,
             direction: "none",
             random: false,
             straight: false,
             out_mode: "out",
             bounce: false,
             attract: {
                 enable: false,
                 rotateX: 600,
                 rotateY: 1200,
             },
         },
     },
     interactivity: {
         detect_on: "canvas",
         events: {
             onhover: {
                 enable: true,
                 mode: "grab",
             },
             onclick: {
                 enable: true,
                 mode: "push",
             },
             resize: true,
         },
         modes: {
             grab: {
                 distance: 140,
                 line_linked: {
                     opacity: 1,
                 },
             },
             push: {
                 particles_nb: 4,
             },
         },
     },
     retina_detect: true,
 });

 // Scroll Animation for Project Cards
 const projectCards = document.querySelectorAll(".project-card");

 const observer = new IntersectionObserver(
     (entries) => {
         entries.forEach((entry, index) => {
             if (entry.isIntersecting) {
                 setTimeout(() => {
                     entry.target.classList.add("visible");
                 }, index * 100);
             }
         });
     },
     { threshold: 0.1 }
 );

 projectCards.forEach((card) => {
     observer.observe(card);
 });

 // Smooth Scrolling for Navigation
 document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
     anchor.addEventListener("click", function (e) {
         e.preventDefault();
         const targetId = this.getAttribute("href");
         if (targetId !== "#") {
             document.querySelector(targetId).scrollIntoView({
                 behavior: "smooth",
             });

             // Close mobile menu if open
             if (navLinks.classList.contains("active")) {
                 navLinks.classList.remove("active");
                 menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
             }
         }
     });
 });

// Animation for Experience Cards
document.addEventListener('DOMContentLoaded', function() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    const experienceObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );
    
    experienceCards.forEach((card) => {
        experienceObserver.observe(card);
    });
    
    // Add experience link to navigation
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        const projectsLink = document.querySelector('a[href="#projects"]');
        if (projectsLink) {
            const experienceLink = document.createElement('a');
            experienceLink.href = '#experience';
            experienceLink.textContent = 'Experience';
            navLinks.insertBefore(experienceLink, projectsLink.nextSibling);
        }
    }
});