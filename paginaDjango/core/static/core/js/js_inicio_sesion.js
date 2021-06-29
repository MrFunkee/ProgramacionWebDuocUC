//darle constantes a los elementos de formulario
const inic = document.getElementById("formulario_ini");
const email = document.getElementById("ingrese_email");
const contra = document.getElementById("ingrese_contrasena");

const regexEmail = new RegExp("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)");

inic.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    revisarCampos();
});

function revisarCampos() {
    //conseguir valores de los Campo:
    const emailValor = email.value.trim();
    const contraValor = contra.value;

        //email
    if(emailValor === null , emailValor.length == 0 ) {
        mostrarError(email,'El campo está vacío');
    } else if(!regexEmail.test(emailValor)) {
        //viendo si se adapta al regex de mail
        mostrarError(email,'El formato del email está incorrecto. tiene que ser ej: correo@email.com');
    } else {
        afirmarCorrecto(email)
    }

        //contraseña 
    if(contraValor === null, contraValor.length == 0 ) {
        mostrarError(contra,'El campo está vacío');
    } else {
        afirmarCorrecto(contra)
    }
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
