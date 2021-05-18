const formu = document.getElementById("formulario");
const nombre = document.getElementById("nombre");

formu.addEventListener('submit', (e) =>{
    e.preventDefault();

    revisarInputs();
});

function revisarInputs() {
    //conseguir valores de los inputs:
    const nombreValor = nombre.value.trim();

    if(nombreValor === '') {
        //evento de error
        mostrarError(nombre,'El campo está vacío')
    } else {
        //evento de exito
    }
}


function mostrarError (input, mensaje) {
    const divPadre = input.parentElement;
    const small = divPadre.querySelector("small");

    small.innerText = mensaje;

    divPadre.classList.add("error")
}