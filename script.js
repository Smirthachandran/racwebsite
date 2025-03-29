
document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
        }, index * 1000);
    });
});

 // Navbar Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "#ff5f6d";
            navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.background = "#ff758c";
            navbar.style.boxShadow = "none";
        }
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
});
