// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Run animation only once
        }
    });
}, observerOptions);

// Target all elements with the .slide-up class
document.addEventListener("DOMContentLoaded", () => {
    const slideElements = document.querySelectorAll('.slide-up');
    slideElements.forEach(el => observer.observe(el));
});