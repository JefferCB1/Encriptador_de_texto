function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    let copiar = document.getElementById("copiar");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length != 0){
        
        /*imagen.setAttribute("style", "visibility: hidden;");*/
        tituloMensaje.setAttribute("style", "display: block; justify-content: center;");
        /*copiar.setAttribute("style", "display: flex")*/


        document.getElementById("texto").value = "";
        document.getElementById("texto").reset; 
        tituloMensaje.textContent = textoCifrado;
        parrafo.textContent = "Esta es la palabra desifrada";
        imagen.src = "./img/encriptado.jpg";

    }else{
        imagen.src = "./img/muñeco.png"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

/*function copiarText(){
    let inputText = textoCifrado;

    inputText.select();
    inputText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputText.value);

    alert("Texto copiado: "+ inputText.value);

}*/



function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");


    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0){

        /*imagen.setAttribute("style", "display:none;");*/

        document.getElementById("texto").value = "";
        document.getElementById("texto").reset; 
        tituloMensaje.textContent = textoCifrado;
        parrafo.textContent = "Esta es la palabra desifrada";
        imagen.src = "./img/desencriptado.jpg";
    }else{
        imagen.src = "./img/muñeco.png"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}


