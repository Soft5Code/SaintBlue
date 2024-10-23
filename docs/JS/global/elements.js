const menuIcon = document.getElementById("menu_icon");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll(".barra-lateral span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

// Ajuste na barra lateral para pequena ou grande
menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max_barra_lateral");
    if(barraLateral.classList.contains("max_barra_lateral")){
        menu.children[0].style.display = "none"
        menu.children[1].style.display = "block"
    }
    else{
        menu.children[0].style.display = "block"
        menu.children[1].style.display = "none"
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini_barra_lateral");
        main.classList.add("min_main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }  
});


palanca.addEventListener("click",() => {
    let body = document.body;
    body.classList.toggle("dark_mode");
    circulo.classList.toggle("prendido");

    // Salvar a preferência de tema no localStorage
    if (body.classList.contains("dark_mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});



menuIcon.addEventListener("click",() => {
    barraLateral.classList.toggle("mini_barra_lateral");
    main.classList.toggle("min_main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    })

    // Salvar o estado da barra lateral no localStorage sem modificar seu comportamento original
    if (barraLateral.classList.contains("mini_barra_lateral")) {
        localStorage.setItem("sidebar", "minimized");
    } else {
        localStorage.setItem("sidebar", "maximized");
    }
});





// Verificar o localStorage e restaurar o tema e a barra lateral ao carregar a página
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark_mode");
        circulo.classList.add("prendido");
    }

    const sidebarState = localStorage.getItem("sidebar");
    if (sidebarState === "minimized") {
        barraLateral.classList.add("mini_barra_lateral");
        main.classList.add("min_main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }
});
//---------------------------------------------------------------------------------------
//--------------------------POPUP--------------------------------------------------------
const button = document.querySelector(".button_cadastrar");
const modal = document.querySelector("dialog");
const buttonClose = document.getElementById("dialogbutton");
const closeButton = document.getElementById('close-button');
const imageInput = document.getElementById("product-image");
const imagePreview = document.getElementById("image-preview");
const form = modal.querySelector('form');

button.onclick = function () {
    modal.showModal();
}

// Para o botão "Concluir"
buttonClose.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    console.log("Produto cadastrado!"); // Exemplo de ação
    modal.close(); // Fecha o diálogo após o cadastro
});

// Para o botão "X"
closeButton.addEventListener('click', () => {
    form.reset(); // Limpa o formulário antes de fechar
    modal.close(); // Fecha o diálogo
});

modal.addEventListener('close', function() {
    form.reset(); // Limpa todos os campos do formulário ao fechar o modal
});

form.onsubmit = function (event) {
    event.preventDefault();
    modal.close(); // Fecha o modal após o envio
}

// Impede o fechamento ao clicar nas extremidades
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        event.stopPropagation(); // Não faz nada se clicar fora
    }
});


imageInput.onchange = function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result; // Define a fonte da imagem para a prévia
        }
        reader.readAsDataURL(file);
    }
}

//--------------------------------------------------------------------------------------------------
//---------------------------------FILTRO-----------------------------------------------------------
function clickMenu(){
    if (menuFiltro.style.display == 'block'){
        menuFiltro.style.display = 'none'
    } else {
        menuFiltro.style.display = 'block'
    }
  }

  
  // Para clicar no menu filtro e ficar visivel a opcao selecionada em main
  function selectOption(optionElement) {
    optionElement.classList.toggle('selected');
    const selectedOptions = document.querySelectorAll('.filtro a.selected');
    const selectedFilters = Array.from(selectedOptions).map(option => option.id);
    filterData(selectedFilters);
  }

  function filterData(selectedFilters) {
    // Lógica para filtrar os dados com base nos filtros selecionados
    // ...
  }
//-----------------------------------------------------------------------------------------------------
//POP-UP
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}