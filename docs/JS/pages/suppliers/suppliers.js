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