//variables
let inputTexto = document.getElementById("valorUsuario").value;

// Función para encriptar el texto
function encriptar() {
    let inputTexto = document.getElementById("valorUsuario").value;
    let encriptado = inputTexto.replace(/a/g, "afa")
        .replace(/e/g, "efe")
        .replace(/i/g, "ifi")
        .replace(/o/g, "ofo")
        .replace(/u/g, "ufu");
    
    mostrarResultado(encriptado);
}

//Función para desencriptar el texto
function desencriptar() {
    let inputTexto = document.getElementById("valorUsuario").value;
    let desencriptado = inputTexto.replace(/afa/g, "a")
        .replace(/efe/g, "e")
        .replace(/ifi/g, "i")
        .replace(/ofo/g, "o")
        .replace(/ufu/g, "u");
    
    mostrarResultado(desencriptado);
}

function mostrarResultado(texto) {
    // Esconde el contenido original y muestra el resultado
    document.getElementById("contenidoOriginal").style.display = "none";
    
    let resultadoTexto = document.getElementById("resultadoTexto");
    resultadoTexto.innerText = texto;
    resultadoTexto.classList.add("mostrar"); // Añade la clase para alinear el texto arriba
    
    document.getElementById("resultadoContainer").style.display = "flex";
}

function copiarTexto() {
    let resultadoTexto = document.getElementById("resultadoTexto");

    // Selecciona el texto y lo copia al portapapeles
    let range = document.createRange();
    range.selectNodeContents(resultadoTexto);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    navigator.clipboard.writeText(resultadoTexto.innerText);
}