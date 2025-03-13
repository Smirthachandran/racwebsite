
document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
        }, index * 1000);
    });
});
