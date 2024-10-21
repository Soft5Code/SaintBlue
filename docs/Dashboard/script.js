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



// Para aparecer as opcoes do menu suspenso de filtro no main
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


  //POP-UP
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}