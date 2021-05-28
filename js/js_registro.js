//La validación del mínimo de caracteres se hace en el archivo html con "minlength". Usado en el campo de contraseña
//lo mismo con el máximo, con el atributo "maxlength"

//darle constantes a los elementos de formulario
const formu = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const rut = document.getElementById("rut");
const contra1 = document.getElementById("password");
const contra2 = document.getElementById("validate-password");

//regex para validar rut
const regexRut = new RegExp('([0-9]{8})+[-]+[0-9/k]{1}');


formu.addEventListener('submit', (e) =>{
    e.preventDefault();

    revisarCampos();
});

function revisarCampos() {
    //conseguir valores de los Campo:
    const nombreValor = nombre.value.trim();
    const rutValor = rut.value.trim();
    
    if(nombreValor === null , nombreValor.length == 0 ) {
        mostrarError(nombre,'El campo está vacío');

    } else {
        afirmarCorrecto(nombre)
    }

    if(rutValor === null , rutValor.length == 0 ) {
        //evento de error campo vacio
        mostrarError(rut,'El campo está vacío');
    } else if(!regexRut.test(rutValor)) {
        //viendo si se adapta al regex que dice 8 numeros, un guión y un número o "k"
        mostrarError(rut,'el rut tiene que ser escrito en el formato 12345678-9');
    }
    else {
        afirmarCorrecto(rut)
    }

    
}
//cambia el elemento small que es invisible y está debajo de los campos del formulario para mostrar el error dependiendo de la situación
function mostrarError (campo, mensaje) {

    const divPadre = campo.parentElement;
    const small = divPadre.querySelector("small");

    small.innerText = mensaje;

    divPadre.classList.add("error");
}

//lo mismo que mostrarError() pero con el mensaje fijo de un ✔ verde
function afirmarCorrecto (campo) {
    const divPadre = campo.parentElement;
    const small = divPadre.querySelector("small");

    small.innerText = '✔';

    divPadre.classList.add("correcto");
}
