const arreglo_dinero = [];
function api() {
    //Creamos la estructura de conexión
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://mindicador.cl/api',true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            arreglo_dinero.push(data.dolar.valor);
            arreglo_dinero.push(data.euro.valor);
        }
    }
};
api();

const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado3 = document.getElementById("resultado3");
const pesosInput = document.getElementById("pesosConvertir");


function cambioDolar() {
    const pesosValor = pesosInput.value.trim();
    if(validar(pesosValor)){
        resultado.innerText = "Por favor, ingrese solo numeros";
    }
    else{
        if(typeof arreglo_dinero[0] === 'undefined'){
            resultado1.innerText = "Cargando valores Dolar, intente de nuevo"
            resultado2.innerText = ""
            resultado3.innerText = ""
        }
        else{
            const valorDolar = Math.round((parseInt(pesosValor)/arreglo_dinero[0])*100)/100;
            resultado1.innerText = pesosValor + " CLP son:";
            resultado2.innerText = valorDolar + " USD.";
            resultado3.innerText = "Con el dolar a " + arreglo_dinero[0];
        }
    }
}

function cambioEuro() {
    const pesosValor = pesosInput.value.trim();
    if(validar(pesosValor)){
        resultado.innerText = "Por favor, ingrese solo numeros";
    }
    else{
        if(typeof arreglo_dinero[0] === 'undefined'){
            resultado1.innerText = "Cargando valores Euro, intente de nuevo"
            resultado2.innerText = ""
            resultado3.innerText = ""
        }
        else{
            const valorDolar = Math.round((parseInt(pesosValor)/arreglo_dinero[1])*100)/100;
            resultado1.innerText = pesosValor + " CLP son:";
            resultado2.innerText = valorDolar + " EUR.";
            resultado3.innerText = "Con el euro a " + arreglo_dinero[1];
        }
    }
}
function validar(valor) {
    const valorProcesado = parseInt(valor);
    if(isNaN(valorProcesado)){
        return true;
    }
    else{
        return false;
    }
}
















//Tengo los precios de dolar y euro en el array arreglo_dinero
// continuar pensando en como hacer el ciclo para elegir una lista de elementos
//por su clase y actualizar los precios
//también tengo que averiguar cual es el event listener para cuando se elige un
//elemento de la lista de dinero.















/* ESTO ERA PARA UN TRANSFORMADOR DE DINERO DENTRO DE LA PÁGINA
let padre = document.getElementsByClassName("dinero-y-simbolo");
let precio = null;
let simbolo = null;
for (let i = 0; i < valores.length; i++) {
    valores.item(i);
    for (var j = 0; j < doc.childNodes.length; j++) {
        if (doc.childNodes[j].className == "4") {
          notes = doc.childNodes[j];
          break;
        }        
    }
}


const eleccion = document.getElementById("moneda")

eleccion.addEventListener('submit', (e) =>{

    actualizarMoneda();
});

function actualizarMoneda() {
    monedaElegida = eleccion.valor

    null;
}

function pruebaCiclo(){
    let valores = document.getElementsByClassName("dinero-y-simbolo");
    for (let i = 0; i < valores.length; i++) {
        valores.item(i);
    }
}
*/