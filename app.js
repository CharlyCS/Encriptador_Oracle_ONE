const clave = 4;

function encriptar(){
    const variable = document.getElementById('input').value;
    let textoencriptado = '';
    // Se considera letras minusculas y sin acento
    for (let i = 0; i < variable.length; i++) {
        let charCode = variable.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            textoencriptado += String.fromCharCode(((charCode - 97 + clave) % 26) + 97);
        } else {
            textoencriptado += texto[i];
        }
    }
    document.getElementById("encriptado").innerHTML = `<p>${textoencriptado}</p>`;
    document.getElementById("copyButton").style.display = "inline-block";
    document.getElementById("kid").style.display = "none";
    document.getElementById("logan").style.display = "none";
}

function desencriptar() {
    const textoCifrado = document.getElementById("input").value;
    let textodesencriptado = '';

    for (let i = 0; i < textoCifrado.length; i++) {
        let charCode = textoCifrado.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            textodesencriptado += String.fromCharCode(((charCode - 97 - clave + 26) % 26) + 97);
        } else {
            textodesencriptado += textoCifrado[i];
        }
    }

    document.getElementById("encriptado").innerHTML = `<p>${textodesencriptado}</p>`;
    document.getElementById("kid").style.display = "none";
    document.getElementById("logan").style.display = "none";
}

function copiar() {
    const textoEncriptado = document.getElementById("encriptado").innerText;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
