function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const text = ["Web Developer", "Laravel Developer", "Backend Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (isDeleting) {
        document.getElementById("typing").textContent = currentText.substring(0, j--);
    } else {
        document.getElementById("typing").textContent = currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scroll ke bawah → hide navbar
        navbar.style.top = "-80px";
    } else {
        // scroll ke atas → tampilkan navbar
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});