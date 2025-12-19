/* ------------------------------
   LOADING SCREEN
------------------------------ */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 600);
    }, 700);
});

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");

/* Open modal */
document.querySelectorAll(".clickable-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

/* Close modal */
closeBtn.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = () => {
    modal.style.display = "none";
};

/* ------------------------------
   DARK/LIGHT MODE TOGGLE
------------------------------ */
const body = document.body;
const lightIcon = document.getElementById("lightIcon");
const darkIcon = document.getElementById("darkIcon");

darkIcon.addEventListener("click", () => {
    body.classList.remove("light");
    body.classList.add("dark");
});

lightIcon.addEventListener("click", () => {
    body.classList.remove("dark");
    body.classList.add("light");
});
/* ------------------------------
   TYPING ANIMATION
------------------------------ */

const text = "I am Khushi Rajendra Shigwan";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120); // typing speed
    }
}

window.addEventListener("load", () => {
    setTimeout(typeEffect, 1200); // starts after loader ends
});


/* ------------------------------
   SCROLL TO TOP BUTTON
------------------------------ */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ------------------------------
   CONTACT FORM POPUP
------------------------------ */
const form = document.getElementById("contactForm");
const successPopup = document.getElementById("success-popup");
const closePopup = document.getElementById("close-popup");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        successPopup.style.display = "flex";
        form.reset();
    }
});

closePopup.addEventListener("click", () => {
    successPopup.style.display = "none";
});