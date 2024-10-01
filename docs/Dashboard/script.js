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



// Grafico em Dashboard

// Gráfico de barras
var trace1 = {
    x: ['Monitores', 'Placas de Vídeo', 'Processadores'],
    y: [20, 14, 23],
    name: 'Agosto',
    type: 'bar',
    marker: {
        color: '#20B2AA'
    }
};

var trace2 = {
    x: ['Monitores', 'Placas de Vídeo', 'Processadores'],
    y: [12, 18, 29],
    name: 'Setembro',
    type: 'bar',
    marker: {
        color: '#556B2F'
    }
};

var dataBar = [trace1, trace2];

var layoutBar = {
    barmode: 'group',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: {
        t: 30,
        b: 30,
        l: 40,
        r: 40
    },
    title: {
        text: 'Vendas de Produtos por Mês',
        font: {
            family: 'Aleo',
            size: 20, // Tamanho da fonte
            color: '#333' // Cor da fonte
        },
        x: 0.43, // Posiciona o título no centro (0 a 1)
        xanchor: 'center' // Ancoragem do título no centro
    },
    width: 450, /* Definir largura menor */
    height: 300, /* Definir altura menor */
};

var configBar = { responsive: true };
Plotly.newPlot('myDiv1', dataBar, layoutBar, configBar);

// Redimensionar os gráficos com base no redimensionamento da janela
window.onresize = function() {
    Plotly.Plots.resize(document.getElementById('myDiv1'));
    Plotly.Plots.resize(document.getElementById('myDiv2'));
};


// Gráfico de pizza
var dataPie = [{
    type: "pie",
    values: [2, 3, 4, 4],
    labels: ["RAM", "SSD", "MONITOR 29", "GTX-550"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
}];

var layoutPie = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    margin: {
        t: 30,
        b: 50,
        l: 50,
        r: 50
    },
    showlegend: false,
    title: {
        text: "Vendas por Produto - Setembro",
        font: {
            family: 'Aleo',
            size: 20, // Tamanho da fonte
            color: '#333' // Cor da fonte
        },
        x: 0.5, // Posiciona o título no centro (0 a 1)
        xanchor: 'center' // Ancoragem do título no centro
    },
    width: 400, /* Definir largura menor */
    height: 300, /* Definir altura menor */
};

var configPie = { responsive: true };
Plotly.newPlot('myDiv2', dataPie, layoutPie, configPie);



//Grafico Linha
trace1 = {
    type: 'scatter',
    x: ['JAN', 'FEV', 'MAR', 'ABR'],
    y: [10, 15, 13, 17],
    mode: 'lines',
    name: 'GTX-550',
    line: {
      color: 'rgb(219, 64, 82)',
      width: 3
    }
  };
  
  trace2 = {
    type: 'scatter',
    x: ['JAN', 'FEV', 'MAR', 'ABR'],
    y: [12, 9, 15, 12],
    mode: 'lines',
    name: 'SSD',
    line: {
      color: 'rgb(55, 128, 191)',
      width: 3
    }
  };
  
  var layout = {
    width: 380,
    height: 360,
    paper_bgcolor: 'rgba(0,0,0,0)', // Fundo do gráfico transparente
    plot_bgcolor: 'rgba(0,0,0,0)',  // Fundo da área do gráfico transparente
    title: {
        text: 'Em Estoque', // Título do gráfico
        font: {
            family: 'Aleo',
            size: 20,
            color: '#333'
        },
        y: 0.95, // Ajuste a posição vertical do título (valores menores movem para cima)
        xanchor: 'center' // Ancoragem do título no centro
    },
};
  
  var data = [trace1, trace2];
  
  Plotly.newPlot('myDiv3', data, layout);


//Grafico Speed

var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 450,
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { axis: { range: [null, 500] } }
    }
  ];
  
  var layout = {
    width: 400,
    height: 350,
    paper_bgcolor: 'rgba(0,0,0,0)', // Fundo do gráfico transparente
    plot_bgcolor: 'rgba(0,0,0,0)',  // Fundo da área do gráfico transparente
    title: {
        text: 'Venda Mensal', // Você pode adicionar um título se desejar
        font: {
            family: 'Aleo',
            size: 20,
            color: '#333'
        }
    },
  };
  Plotly.newPlot('myDiv4', data, layout);



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