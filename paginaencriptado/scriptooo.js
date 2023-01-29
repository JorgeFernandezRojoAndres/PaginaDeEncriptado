

//La función encriptar() se utiliza para cifrar una cadena de texto reemplazando ciertas letras con diferentes combinaciones de letras. La función primero obtiene el valor de un elemento con el ID "textoEncriptado", lo convierte a minúsculas y lo almacena en la variable frase. Luego usa el método replace() para reemplazar las letras "e", "o", "i", "a" y "u" con las cadenas "enter", "ober", "imes", "ai" y "ufat", respectivamente. La cadena encriptada resultante se muestra luego en un elemento con el ID "textoDesencriptado" y el elemento con el ID "botonCopiar" se configura para que se muestre.
function encriptar(){
    var frase = document.getElementById ("textoEncriptado").value.toLowerCase();
     
    // i = Es para que tome letras Mayusculas y Minusculas.
    // g = Es para que tome en cuenta toda la linea o la oracion. 
    // m = Es para que tome en cuenta  multiples  lineas.

    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

//La función desencriptar() se usa para descifrar una cadena previamente encriptada reemplazando las combinaciones de letras encriptadas con las letras originales. La función funciona de manera similar a la función encriptar(), pero usa el método replace() para reemplazar las combinaciones de letras encriptadas "enter", "ober", "imes", "ai" y "ufat" con el letras originales "e", "o", "i", "a" y "u", respectivamente. La cadena descifrada resultante se muestra luego en el elemento con el ID "textoDesencriptado".

function desencriptar(){
    var frase = document.getElementById ("textoEncriptado").value.toLowerCase();
     
    // i = Es para que tome letras Mayusculas y Minusculas.
    // g = Es para que tome en cuenta toda la linea o la oracion. 
    // m = Es para que tome en cuenta  multiples  lineas.

    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");
   
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}
//La función copiar() se utiliza para copiar el contenido del elemento con el ID "textoDesencriptado" al portapapeles. Primero selecciona el contenido del elemento usando los métodos querySelector() y select(), y luego usa el método execCommand() con el comando "copiar" para copiar el contenido seleccionado al portapapeles.
function copiar (){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.Select();
    document.execCommand("")
      
}
    tsParticles.load("tsparticles-full", {encriptar,desencriptar,copiar});