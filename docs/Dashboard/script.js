const menuIcon = document.getElementById("menu_icon");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll(".barra-lateral span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");


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




var data = [{
    type: "pie",
    values: [2, 3, 4, 4],
    labels: ["RAM", "SSD", "MONITOR 29", "GTX-550"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
  }]
  
  var layout = {
    height: 350,
    width: 350,
    paper_bgcolor: 'rgba(0,0,0,0)', 
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    }
  
  Plotly.newPlot('myDiv', data, layout)




  function clickMenu(){
    if (menuFiltro.style.display == 'block'){
        menuFiltro.style.display = 'none'
    } else {
        menuFiltro.style.display = 'block'
    }
  }

  function selectOption(optionElement) {
    optionElement.classList.toggle('selected');

    // Aqui você pode adicionar a lógica para filtrar os dados com base nas opções selecionadas
    const selectedOptions = document.querySelectorAll('.filtro a.selected');
    const selectedFilters = Array.from(selectedOptions).map(option => option.id);

    // Exemplo de filtragem (substitua pela sua lógica):
    // Filtrar dados com base nos filtros selecionados:
    filterData(selectedFilters);
  }

  function filterData(selectedFilters) {
    // Lógica para filtrar os dados com base nos filtros selecionados
    // ...
  }