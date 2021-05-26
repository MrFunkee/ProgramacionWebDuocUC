const formu = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const rut = document.getElementById("rut");


formu.addEventListener('submit', (e) =>{
    e.preventDefault();

    revisarInputs();
});

function revisarInputs() {
    //conseguir valores de los inputs:
    const nombreValor = nombre.value.trim();
    const rutValor = rut.value.trim();
    
    if(nombreValor === null , nombreValor.length == 0 ) {
        //evento de error
        mostrarError(nombre,'El campo está vacío')
    } else {
        //evento de exito
    }

    if(rutValor === null , rutValor.length == 0 ) {
        //evento de error
        mostrarError(rut,'El campo está vacío')
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