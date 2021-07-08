$(document).ready(function(){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','http://127.0.0.1:8000/api/lista_empleados?format=json',true);
    xmlhttp.send();
    
    
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
    
            for(var i = 0; i < data.length;i++){
                var txtNombre = data[i].nombreEmpleado;
                var txtDescripcion = data[i].descripcion;
                var txtImagen = data[i].imagen;
                document.getElementById("nombre"+i).innerHTML = txtNombre;
                document.getElementById("descripcion"+i).innerHTML = txtDescripcion;
                document.getElementById("imagen"+i).setAttribute('src', txtImagen) ;
            }
            
            
        }
        
    }
    });