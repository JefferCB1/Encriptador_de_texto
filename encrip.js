function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoCifrado = texto
      .replace(/a/gi, "ai")
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        imagen.getElementById("imagen").src = "./img/encriptado.jpg";

    }else{
        imagen.src = "./img/muñeco.png"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}