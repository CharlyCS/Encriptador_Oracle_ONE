const clave = 3;

function encriptar(){
    const variable = document.getElementById('input').value;
    let textoCifrado = '';

    for (let i = 0; i < variable.length; i++) {
        let charCode = variable.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            textoCifrado += String.fromCharCode(((charCode - 65 + clave) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoCifrado += String.fromCharCode(((charCode - 97 + clave) % 26) + 97);
        } else {
            textoCifrado += texto[i];
        }
    }

    document.getElementById("textoCifrado").value = textoCifrado;
}

function desencriptar() {
    const textoCifrado = document.getElementById("textoCifradoInput").value;
    let textoDesencriptado = '';

    for (let i = 0; i < textoCifrado.length; i++) {
        let charCode = textoCifrado.charCodeAt(i);

        // Solo desplazar letras mayúsculas y minúsculas
        if (charCode >= 65 && charCode <= 90) {
            textoDesencriptado += String.fromCharCode(((charCode - 65 - clave + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoDesencriptado += String.fromCharCode(((charCode - 97 - clave + 26) % 26) + 97);
        } else {
            textoDesencriptado += textoCifrado[i]; // Otros caracteres no se modifican
        }
    }

    document.getElementById("textoDesencriptado").value = textoDesencriptado;
}