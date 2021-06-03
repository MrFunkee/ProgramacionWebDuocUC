$(document).ready(function(){

var xmlhttp = new XMLHttpRequest();
xmlhttp.open ('GET','https://randomuser.me/api/',true);
xmlhttp.send();

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

       var txtNombre = data.results.name.first;
       var txtEmail = data.results.email;

    }
    document.getElementById("nombre").innerHTML = txtNombre;

}
});