var texInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    
    var texto = texInput.value.toLowerCase();

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");

    outInput.innerHTML = `
        <textarea readonly id="input-texto">${resultCripto}</textarea>
        <button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>
    `;
}

function descriptografar(){ 
    var texto = texInput.value.toLowerCase();

    var resultDescript = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
    .replace(/ober/g, "o").replace(/ufat/g, "u");

    outInput.innerHTML = `
        <textarea readonly id="input-texto">${resultDescript}</textarea>
        <button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>
    `;
    
}

function copiar() {
    // Apenas para o usuário ter noção que o texto já está copiado
    var textoCop = document.getElementById('input-texto');
    navigator.clipboard.writeText(textoCop.value);
    alert('Muito Bem Texto copiado!');

}
