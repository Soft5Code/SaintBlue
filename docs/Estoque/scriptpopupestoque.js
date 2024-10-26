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
