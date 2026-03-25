
function scrollToSection(id){
    const element = document.getElementById(id);
    if(element){
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if(toggle && menu){
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

const textList = ["Web Developer", "Laravel Developer", "Backend Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){
    const typingElement = document.getElementById("typing");
    if(!typingElement) return;

    currentText = textList[i];

    if(isDeleting){
        typingElement.textContent = currentText.substring(0, j--);
    } else {
        typingElement.textContent = currentText.substring(0, j++);
    }

    if(!isDeleting && j === currentText.length){
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if(isDeleting && j === 0){
        isDeleting = false;
        i = (i + 1) % textList.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(!navbar) return;

    let currentScroll = window.pageYOffset;
    if(currentScroll <= 0){
        navbar.style.top = "0";
        return;
    }

    if(currentScroll > lastScroll){
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});