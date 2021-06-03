function actual() {
    var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    var segundo=fecha.getSeconds(); //segundo actual
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();
    
    if (hora<10) { //dos cifras para la hora
       hora="0"+hora;
       }
    if (minuto<10) { //dos cifras para el minuto
       minuto="0"+minuto;
       }
    if (segundo<10) { //dos cifras para el segundo
       segundo="0"+segundo;
       }
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    mes = meses[mes];


    //ver en el recuadro del reloj:

    mireloj = hora+" : "+minuto+" : "+segundo+" | "+dia+" de "+mes+" del "+year;	
            return mireloj; 
    }   
    

function actualizar() { //función del temporizador
mihora=actual();
mireloj=document.getElementById("reloj"); //buscar elemento reloj
mireloj.innerHTML=mihora; //incluir hora en elemento //recoger hora actual


}
setInterval(actualizar,1000); //iniciar temporizador