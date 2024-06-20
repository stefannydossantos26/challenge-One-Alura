// Seleciona os elementos de entrada e saída
const textInput = document.querySelector("#input-texto");
const output = document.querySelector("#output");

// Função para criptografar o texto
function criptografar() {
    const texto = textInput.value.toLowerCase();
    const resultCripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    exibirResultado(resultCripto);
}

// Função para descriptografar o texto
function descriptografar() {
    const texto = textInput.value.toLowerCase();
    const resultDescript = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    exibirResultado(resultDescript);
}

// Função para exibir o resultado na área de saída
function exibirResultado(texto) {
    output.innerHTML = `
        <textarea readonly id="input-texto">${texto}</textarea>
        <button class="btn-copiar" id="copiar">Copiar</button>
    `;
    document.querySelector("#copiar").addEventListener("click", copiar);
}

// Função para copiar o texto
function copiar() {
    const textoCop = document.getElementById('input-texto');
    navigator.clipboard.writeText(textoCop.value).then(() => {
        alert('Muito bem! Texto copiado!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
        alert('Erro ao copiar o texto. Por favor, tente novamente.');
    });
}

// Adiciona eventos de clique aos botões de criptografia e descriptografia
document.querySelector("#btn-criptografar").addEventListener("click", criptografar);
document.querySelector("#btn-descriptografar").addEventListener("click", descriptografar);
