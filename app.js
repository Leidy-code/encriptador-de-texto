// Función para encriptar el texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Función para manejar el clic del botón de encriptar
document.getElementById("encryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    if (inputText) {
        let encryptedText = encryptText(inputText);
        document.getElementById("outputText").textContent = encryptedText;
    } else {
        document.getElementById("outputText").textContent = "No ha digitado ninguna oración";
    }
});

// Función para manejar el clic del botón de desencriptar
document.getElementById("decryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    if (inputText) {
        let decryptedText = decryptText(inputText);
        document.getElementById("outputText").textContent = decryptedText;
    } else {
        document.getElementById("outputText").textContent = "No ha digitado ninguna oración";
    }
});

// Función para copiar el texto al portapapeles
document.getElementById("copyBtn").addEventListener("click", function() {
    let outputText = document.getElementById("outputText").textContent;
    if (outputText && outputText !== "No ha digitado ninguna oración") {
        navigator.clipboard.writeText(outputText).then(function() {
            alert("Texto copiado al portapapeles");
        }, function() {
            alert("Error al copiar el texto");
        });
    }
});

