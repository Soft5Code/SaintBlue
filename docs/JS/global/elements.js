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
// Seleção dos elementos
const buttonCadastrar = document.querySelector(".button_cadastrar");
const modal = document.querySelector("dialog");
const buttonConcluir = document.getElementById("dialogbutton");
const closeButton = document.getElementById("close-button");
const form = modal.querySelector("form");
const imageInput = document.getElementById("product-image1");
const imagePreview = document.getElementById("image-preview");
const formTitle = document.querySelector(".form-header .title h1");

let isEditMode = false;

// Função para abrir o modal no modo de cadastro
buttonCadastrar.onclick = function () {
    isEditMode = false;
    atualizarModalParaModoCadastro();
    modal.showModal();
};

// Função para abrir o modal no modo de edição com os dados preenchidos
function abrirModalParaEdicao(dadosProduto) {
    isEditMode = true;
    preencherFormulario(dadosProduto);
    atualizarModalParaModoEdicao();
    modal.showModal();
}

// Atualiza o título e o botão no modo de cadastro
function atualizarModalParaModoCadastro() {
    formTitle.textContent = "CADASTRO DE PRODUTOS:";
    buttonConcluir.textContent = "CONCLUIR";
    form.reset(); // Limpa o formulário
}

// Atualiza o título e o botão no modo de edição
function atualizarModalParaModoEdicao() {
    formTitle.textContent = "EDITAR PRODUTO:";
    buttonConcluir.textContent = "ATUALIZAR";
}

// Preenche o formulário com os dados do produto a ser editado
function preencherFormulario(dadosProduto) {
    form.produto.value = dadosProduto.produto;
    form.preço.value = dadosProduto.preço;
    form.marca.value = dadosProduto.marca;
    form.cor.value = dadosProduto.cor;
    form.codigo.value = dadosProduto.codigo;
    form.quantidade.value = dadosProduto.quantidade;
    form.condição.value = dadosProduto.condição;
    form.peso.value = dadosProduto.peso;
    form.obs.value = dadosProduto.obs;
    if (dadosProduto.image) {
        imagePreview.src = dadosProduto.image;
    }
}

// Evento para concluir o cadastro/edição
buttonConcluir.addEventListener('click', (event) => {
    event.preventDefault();
    if (isEditMode) {
        console.log("Produto atualizado!");
    } else {
        console.log("Produto cadastrado!");
    }
    modal.close();
});

// Fecha o modal e limpa o formulário ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
    form.reset();
    modal.close();
});

// Evita o envio padrão do formulário
form.onsubmit = function (event) {
    event.preventDefault();
    modal.close();
};

// Pré-visualização da imagem ao selecionar um arquivo
imageInput.onchange = function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Exemplo: botão para abrir o modal no modo de edição
document.querySelectorAll(".button_editar").forEach(button => {
    button.onclick = () => {
        const productData = {
            produto: "Produto Exemplo",
            preço: 99.99,
            marca: "Marca Exemplo",
            cor: "Cor Exemplo",
            codigo: "123ABC",
            quantidade: 10,
            condição: "Novo",
            peso: 1.2,
            obs: "Observação Exemplo"
        };
        abrirModalParaEdicao(productData);
    };
});

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

//---------------------------------Botao acoes-----------------------------------------------------------
function toggleDropdown(event) {
    event.stopPropagation(); // Impede o clique de fechar imediatamente o dropdown
    const dropdownContent = event.currentTarget.nextElementSibling;

    // Fecha qualquer dropdown aberto anteriormente
    document.querySelectorAll(".dropdown-content").forEach((content) => {
        if (content !== dropdownContent) {
            content.style.display = "none";
        }
    });

    // Alterna a visibilidade do dropdown atual
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Fecha o dropdown se clicar fora dele
document.addEventListener("click", (event) => {
    document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.style.display = "none";
    });
});

function editarProduto(button) {
    const id = button.getAttribute('data-id');
    const nome = button.getAttribute('data-nome');
    const fornecedor = button.getAttribute('data-fornecedor');
    const qtd = button.getAttribute('data-qtd');
    // Lógica para abrir o modal de edição com as informações do produto
    console.log(`Editar produto: ID=${id}, Nome=${nome}, Fornecedor=${fornecedor}, QTD=${qtd}`);
}

function excluirProduto(button) {
    const id = button.getAttribute('data-id');
    // Lógica para excluir o produto
    console.log(`Excluir produto com ID=${id}`);
}