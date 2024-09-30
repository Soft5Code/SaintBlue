const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
//=============================================================================
const faqtitulo1 = document.getElementById('faqtitulo1');
const faqtext1 = document.getElementById('faqtext1');
let isFaq1Visible = false;  // Estado de visibilidade do FAQ 1

faqtitulo1.addEventListener('click', function() {
    // Alterna a visibilidade do texto
    if (isFaq1Visible) {
        faqtext1.style.display = "none";  // Esconde o texto
    } else {
        faqtext1.style.display = "block";  // Mostra o texto
    }
    isFaq1Visible = !isFaq1Visible;  // Inverte o estado de visibilidade
});

const faqtitulo2 = document.getElementById('faqtitulo2');
const faqtext2 = document.getElementById('faqtext2');
let isFaq2Visible = false;  // Estado de visibilidade do FAQ 2

faqtitulo2.addEventListener('click', function() {
    // Alterna a visibilidade do texto
    if (isFaq2Visible) {
        faqtext2.style.display = "none";  // Esconde o texto
    } else {
        faqtext2.style.display = "block";  // Mostra o texto
    }
    isFaq2Visible = !isFaq2Visible;  // Inverte o estado de visibilidade
});

const faqtitulo3 = document.getElementById('faqtitulo3');
const faqtext3 = document.getElementById('faqtext3');
let isFaq3Visible = false;  // Estado de visibilidade do FAQ 3

faqtitulo3.addEventListener('click', function() {
    // Alterna a visibilidade do texto
    if (isFaq3Visible) {
        faqtext3.style.display = "none";  // Esconde o texto
    } else {
        faqtext3.style.display = "block";  // Mostra o texto
    }
    isFaq3Visible = !isFaq3Visible;  // Inverte o estado de visibilidade
});
