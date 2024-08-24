const clave = 3;

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
    document.getElementById("output").innerHTML = `<p>${textoencriptado}</p>`;
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

    document.getElementById("output").innerHTML = `<p>${textodesencriptado}</p>`;
}