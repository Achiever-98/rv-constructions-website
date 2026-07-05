/* =====================================================
   RV CONSTRUCTIONS & CONSULTANCY
   Version 1.0
===================================================== */

window.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       STICKY NAVBAR
    =============================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "#080808";
            navbar.style.padding = "12px 0";
            navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(0,0,0,.85)";
            navbar.style.padding = "18px 0";
            navbar.style.boxShadow = "none";

        }

    });

    /* ===============================
       BACK TO TOP BUTTON
    =============================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.pageYOffset > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ===============================
       SMOOTH SCROLL
    =============================== */

 

    /* ===============================
       SCROLL ANIMATION
    =============================== */

    const fadeElements = document.querySelectorAll(

        ".service-card, .project-card, .gallery-img, .testimonial-card, .why-box"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");
                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    fadeElements.forEach(item => observer.observe(item));

    /* ===============================
       COUNTER ANIMATION
    =============================== */

    const counters = document.querySelectorAll(".stats h2");

    const speed = 60;

    counters.forEach(counter => {

        const animate = () => {

            const target = parseInt(counter.innerText);

            const count = +counter.getAttribute("data-count") || 0;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.setAttribute(

                    "data-count",

                    count + increment

                );

                counter.innerText = Math.min(

                    count + increment,

                    target

                ) +

                (counter.innerText.includes("%") ? "%" : "+");

                requestAnimationFrame(animate);

            } else {

                counter.innerText = target +

                (counter.innerText.includes("%") ? "%" : "+");

            }

        };

        animate();

    });

});

/* ======================================
   ACTIVE NAVIGATION
====================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ======================================
   IMAGE HOVER EFFECT
====================================== */

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";
        image.style.transition = ".4s";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/* ======================================
   BUTTON RIPPLE EFFECT
====================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transition = ".3s";
        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});

/* ======================================
   SIMPLE PAGE LOADER
====================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ======================================
   CONSOLE MESSAGE
====================================== */

console.log("%c🏗 RV Constructions & Consultancy",
"color:#D4AF37;font-size:20px;font-weight:bold;");

console.log("%cWebsite Developed by Mithun R.",
"color:white;font-size:14px;");

/* ======================================
   FUTURE FEATURES
====================================== */

// Image Slider
// Contact Form Validation
// Email Integration
// Google Maps
// Testimonials Slider
// Project Filter
// Blog
// Admin Dashboard

/* ======================================
   END OF SCRIPT.JS
====================================== */