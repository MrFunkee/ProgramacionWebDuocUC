$(document).ready(function(){

var xmlhttp = new XMLHttpRequest();
xmlhttp.open ('GET','https://randomuser.me/api/',true);
xmlhttp.send();





xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        for(var i = 0; i < data.results.length;i++){
            var txtNombre = data.results[i].name.first+' '+data.results[i].name.last;
            var txtEmail = data.results[i].email;
            var txtEdad = data.results[i].registered.age;
            var txtPais = data.results[i].location.country;
            var txtcell = data.results[i].cell;
            
        }
       

    }
    document.getElementById("nombre").innerHTML = txtNombre;
    document.getElementById("contacto").innerHTML = '-Metodo de Contacto  (celular) ' +txtcell+' '+'(Email) '+txtEmail;
    document.getElementById("informacion").innerHTML = '-Tiene '+txtEdad+' '+'años y vive en '+txtPais;
  
}
});

$(document).ready(function(){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://randomuser.me/api/',true);
    xmlhttp.send();
    
    
     
    
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
    
            for(var i = 0; i < data.results.length;i++){
                var txtNombre = data.results[i].name.first+' '+data.results[i].name.last;
                var txtEmail = data.results[i].email;
                var txtEdad = data.results[i].registered.age;
                var txtPais = data.results[i].location.country;
                var txtcell = data.results[i].cell;
                
            }
           
    
        }
        document.getElementById("nombre2").innerHTML = txtNombre;
        document.getElementById("contacto2").innerHTML = '-Metodo de Contacto  (celular) ' +txtcell+' '+'(Email) '+txtEmail;
        document.getElementById("informacion2").innerHTML = '-Tiene '+txtEdad+' '+'años y vive en '+txtPais;
      
    }
    });

$(document).ready(function(){

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open ('GET','https://randomuser.me/api/',true);
        xmlhttp.send();
        
  
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var data = JSON.parse(this.responseText);
        
                for(var i = 0; i < data.results.length;i++){
                    var txtNombre = data.results[i].name.first+' '+data.results[i].name.last;
                    var txtEmail = data.results[i].email;
                    var txtEdad = data.results[i].registered.age;
                    var txtPais = data.results[i].location.country;
                    var txtcell = data.results[i].cell;
                    
                }
               
        
            }
            document.getElementById("nombre3").innerHTML = txtNombre;
            document.getElementById("contacto3").innerHTML = '-Metodo de Contacto  (celular) ' +txtcell+' '+'(Email) '+txtEmail;
            document.getElementById("informacion3").innerHTML = '-Tiene '+txtEdad+' '+'años y vive en '+txtPais;
          
        }
        });
        

       