let botonEncrip = document.getElementById('botonEnc')
let botonDescrip = document.getElementById('botonDes')
let botonC = document.getElementById("botonCop");
let letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù'1-9]/g;
let input = document.getElementById('ingreseTexto')
let counter = document.querySelector('span')
let char = document.querySelector('h2')

counter.style.color = 'blue';
input.addEventListener('input', e => {
    if (input.value.length < 40) {
        counter.innerText = input.value.length
    } else {
        counter.innerText = 'Max';
        input.value = input.value.substring(0, 40);
    }
})




botonC.style.display = 'none';
function img() {

    var textoVacio = "";
    let textoSalida = document.getElementById('textoSalida').value;
    textoSalida;
    if (textoVacio !== textoSalida) {
        document.getElementById('frame5').style.display = 'none';
    } else document.getElementById('frame5').style.display = "";
}

function limpiar() {
    document.getElementById("ingreseTexto").value = "";
    document.getElementById("textoSalida").value = "";
}

function foco() {
    document.getElementById("ingreseTexto").focus();
}

function encriptar() {
    let nuevoTexto = document.getElementById("ingreseTexto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    nuevoTexto;

    document.getElementById("textoSalida").value = nuevoTexto;
    document.getElementById("textoSalida").style.color = "#495057";
    img();

    botonC.style.display = 'block';
}

function desencriptar() {
    let nuevoTexto = document.getElementById("ingreseTexto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    nuevoTexto;

    document.getElementById("textoSalida").value = nuevoTexto;
    document.getElementById("textoSalida").style.color = "#495057";
    img();
}

function copiar() {
    document.getElementById("ingreseTexto").placeholder = "";
    let textCopi = document.getElementById("textoSalida");
    textCopi.select();
    document.execCommand("copy");
    document.getElementById("ingreseTexto").value = "";
    document.getElementById("textoSalida").value = "";

    foco(); 
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto copiado",
        showConfirmButton: false,
        timer: 1500,
        color: 'red'
    });
}


function validar() {
    let nuevomensaje = document.getElementById("ingreseTexto").value;
    
    if (nuevomensaje.match(letras) != null) {
        limpiar();
        foco();
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Solo letras minúsculas y sin acentos',
            showConfirmButton: true,
            backdrop: `
            rgba(123, 8, 0, 0.4)
            url("./img/nyan-cat.gif")
            left top
            no-repeat
          `
           
          })
    }
}


function borrar() {
    document.getElementById("ingreseTexto").placeholder = "Ingrese el texto aqui";
    document.getElementById("textoSalida").placeholder = "";
    document.getElementById("textoSalida").style.color = "#495057";
    limpiar();
    foco();
    img();
}

foco();
botonEncrip.addEventListener("click", validar);
botonEncrip.addEventListener("click", encriptar);

botonDescrip.addEventListener("click", validar);
botonDescrip.addEventListener("click", desencriptar);

botonC.addEventListener("click", copiar);
botonB.addEventListener("click", borrar);
