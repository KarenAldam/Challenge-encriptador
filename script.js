//Lo que el usurio escribira en el encriptador
//DOM capturar el primer elemento dentro del documento que coincide dentro del selector
const textArea = document.querySelector(".text-area");
//constante para el campo del mensaje, el texto encriptado
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        
        //quitar la imagen al mostrar el mensaje
        mensaje.style.backgroundImage = "none"
        //limpiar el campo
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){
     //arreglos de arreglos, multidimencionales 
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //toLowerCase convierte las palabras en minuscula
    stringEncriptada = stringEncriptada.toLowerCase()


    for(let i = 0; i < matrizCodigo.length; i++){
        //crear la condición con array
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            //llave de encriptacion
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    //desencriptar el mensaje
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    //Limpiar el campo
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
