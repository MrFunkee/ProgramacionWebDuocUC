//La validación del mínimo de caracteres se hace en el archivo html con "minlength". Usado en el campo de contraseña
//lo mismo con el máximo, con el atributo "maxlength"

//darle constantes a los elementos de formulario
const formu = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const rut = document.getElementById("rut");
const email = document.getElementById("email");
const fecha = document.getElementById("fecha_nac");
const contra1 = document.getElementById("password");
const contra2 = document.getElementById("validate-password");

//regex para validar rut
const regexRut = new RegExp('([0-9]{8})+[-]+[0-9/k]{1}');
const regexEmail = new RegExp("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)");

formu.addEventListener('submit', (e) =>{
    e.preventDefault();

    revisarCampos();
});

function revisarCampos() {
    //conseguir valores de los Campo:
    const nombreValor = nombre.value.trim();
    const rutValor = rut.value.trim();
    const emailValor = email.value.trim();
    const fechaValor = fecha.value;


        //nombre
    if(nombreValor === null , nombreValor.length == 0 ) {
        mostrarError(nombre,'El campo está vacío');

    } else {
        afirmarCorrecto(nombre)
    }
        //rut
    if(rutValor === null , rutValor.length == 0 ) {
        mostrarError(rut,'El campo está vacío');
    } else if(!regexRut.test(rutValor)) {
        //viendo si se adapta al regex que dice 8 numeros, un guión y un número o "k"
        mostrarError(rut,'el rut tiene que ser escrito en el formato 12345678-9');
    }
    else {
        afirmarCorrecto(rut)
    }
        //email
    if(emailValor === null , emailValor.length == 0 ) {
        mostrarError(email,'El campo está vacío');
    } else if(!regexEmail.test(emailValor)) {
        //viendo si se adapta al regex
        mostrarError(email,'El formato del email está incorrecto. tiene que ser ej: correo@email.com');
    }
    else {
        afirmarCorrecto(email)
    }
        //fecha
        /*
    if(fechaValor === null ) {
        mostrarError(fecha,'El campo está vacío');
        //poner validacion para ser mayor de edad
    } else if() {
        //viendo si la fecha ingresada es mayor de 18 años
        mostrarError(fecha,'Tienes que ser mayor de 18 años');
    }
    else {
        afirmarCorrecto(fecha)
    }
        */
    
}
//cambia el elemento small que es invisible y está debajo de los campos del formulario para mostrar el error dependiendo de la situación
function mostrarError (campo, mensaje) {

    const divPadre = campo.parentElement;
    const small = divPadre.querySelector("small");

    small.innerText = mensaje;

    divPadre.classList.add("error");
    small.style = 'color: red;'
}

//lo mismo que mostrarError() pero con el mensaje fijo de un ✔ verde
function afirmarCorrecto (campo) {
    const divPadre = campo.parentElement;
    const small = divPadre.querySelector("small");

    small.innerText = '✔';

    divPadre.classList.add("correcto");
    small.style = 'color: green;'
}
