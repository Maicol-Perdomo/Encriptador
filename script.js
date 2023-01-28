const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none";


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function aparecerBTNCopiar(){
    copia.style.display = "block"
}

function desaparecerFondo(){
    mensaje.style.backgroundImage = "none";
}

function limpiarTextArea(){
    textArea.value = "";
}

function encriptar(stringEncriptado){

    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
        }
    }
    return stringDesencriptado;
}


//  Funciones de Botones

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    limpiarTextArea;
    desaparecerFondo();
    aparecerBTNCopiar();
}

function btnDesencriptar(){
    const textodesencriptado = desencriptar(textArea.value)
    mensaje.value = textodesencriptado;
    limpiarTextArea;
    desaparecerFondo();
    aparecerBTNCopiar();
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    limpiarTextArea();
    alert("Texto Copiado");
}








