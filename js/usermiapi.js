//Consumir API  => https://randomuser.me/

////OBTENCION CODIGO
$(document).ready(function() {
    //Creamos la estructura de conexión
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://randomuser.me/api/?results=25&nat=us,dk,fr,gb',true);
    xmlhttp.send();

    //Crear la estructura de la tabla
    //Obtener la referencia del lugar donde dejaremos la tabla
    var tabla_codigo = document.getElementById("tabla_codigo");
 
    //Crear los elementos de la tabla <table>, <thead>, <tbody>
    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //Crear la sección de encabezados, independiente si logramos o no conectarnos a los datos
    var encabezados = "CODIGO";
    var filaHead = document.createElement("tr");
    
        //Crear una celda... por cada encabezado
        var celdaHead = document.createElement("th");
        var textoCelda = document.createTextNode(encabezados);
        celdaHead.appendChild(textoCelda);
        filaHead.appendChild(celdaHead);
    
    thead.appendChild(filaHead);

    //Obtener los datos y crear el cuerpo de la tabla.
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            //Crear la estructura de cada fila/registro que obtuvimos...
            for(var i = 0; i < data.results.length;i++)
            {
                //Crear una fila por cada registro
                var filaBody = document.createElement("tr");

                //Crear la celda para cada dato que vamos a mostrar...
                //Codigo
                var celdaCodigo = document.createElement("td");
                var textoCodigo = document.createTextNode(i+1);
                celdaCodigo.appendChild(textoCodigo);
                filaBody.appendChild(celdaCodigo);
                tbody.appendChild(filaBody);

                
            }
        }
        
    };
       
    //Mostrar la tabla
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    tabla_codigo.appendChild(tabla);
    

    //Aplicar clasese de Bootstrap
    tabla.setAttribute("class","table table-bordered table-hover");
    thead.setAttribute("class","thead-dark text-center");
    tbody.setAttribute("id","datos_tabla");


});



///OBTENCION NOMBRES
$(document).ready(function() {
    //Creamos la estructura de conexión
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://randomuser.me/api/?results=25&nat=us,dk,fr,gb',true);
    xmlhttp.send();

    //Crear la estructura de la tabla
    //Obtener la referencia del lugar donde dejaremos la tabla
    var tabla_nombre = document.getElementById("tabla_nombre");
 
    //Crear los elementos de la tabla <table>, <thead>, <tbody>
    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //Crear la sección de encabezados, independiente si logramos o no conectarnos a los datos
    var encabezados = "NOMBRE";
    var filaHead = document.createElement("tr");
    
        //Crear una celda... por cada encabezado
        var celdaHead = document.createElement("th");
        var textoCelda = document.createTextNode(encabezados);
        celdaHead.appendChild(textoCelda);
        filaHead.appendChild(celdaHead);
    
    thead.appendChild(filaHead);

    //Obtener los datos y crear el cuerpo de la tabla.
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            //Crear la estructura de cada fila/registro que obtuvimos...
            for(var i = 0; i < data.results.length;i++)
            {
                //Crear una fila por cada registro
                var filaBody = document.createElement("tr");

                //Crear la celda para cada dato que vamos a mostrar...
                //Nombre
                var celdaNombre = document.createElement("td");
                var textoNombre = document.createTextNode(data.results[i].name.first + " " + data.results[i].name.last);
                celdaNombre.appendChild(textoNombre);
                filaBody.appendChild(celdaNombre);
                tbody.appendChild(filaBody);

                
            }
        }
        
    };
       
    //Mostrar la tabla
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    tabla_nombre.appendChild(tabla);
    

    //Aplicar clasese de Bootstrap
    tabla.setAttribute("class","table table-bordered table-hover");
    thead.setAttribute("class","thead-dark text-center");
    tbody.setAttribute("id","datos_tabla");


});


///OBTENCION NOMBRES
$(document).ready(function() {
    //Creamos la estructura de conexión
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://randomuser.me/api/?results=25&nat=us,dk,fr,gb',true);
    xmlhttp.send();

    //Crear la estructura de la tabla
    //Obtener la referencia del lugar donde dejaremos la tabla
    var tabla_email = document.getElementById("tabla_email");
 
    //Crear los elementos de la tabla <table>, <thead>, <tbody>
    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //Crear la sección de encabezados, independiente si logramos o no conectarnos a los datos
    var encabezados = "EMAIL";
    var filaHead = document.createElement("tr");
    
        //Crear una celda... por cada encabezado
        var celdaHead = document.createElement("th");
        var textoCelda = document.createTextNode(encabezados);
        celdaHead.appendChild(textoCelda);
        filaHead.appendChild(celdaHead);
    
    thead.appendChild(filaHead);

    //Obtener los datos y crear el cuerpo de la tabla.
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            //Crear la estructura de cada fila/registro que obtuvimos...
            for(var i = 0; i < data.results.length;i++)
            {
                //Crear una fila por cada registro
                var filaBody = document.createElement("tr");

                //Crear la celda para cada dato que vamos a mostrar...
                //Email
                var celdaEmail = document.createElement("td");
                var textoEmail = document.createTextNode(data.results[i].email);
                celdaEmail.appendChild(textoEmail);
                filaBody.appendChild(celdaEmail);
                tbody.appendChild(filaBody);

                
            }
        }
        
    };
       
    //Mostrar la tabla
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    tabla_email.appendChild(tabla);
    

    //Aplicar clasese de Bootstrap
    tabla.setAttribute("class","table table-bordered table-hover");
    thead.setAttribute("class","thead-dark text-center");
    tbody.setAttribute("id","datos_tabla");


});

///OBTENCION NOMBRES
$(document).ready(function() {
    //Creamos la estructura de conexión
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://randomuser.me/api/?results=25&nat=us,dk,fr,gb',true);
    xmlhttp.send();

    //Crear la estructura de la tabla
    //Obtener la referencia del lugar donde dejaremos la tabla
    var tabla_pais = document.getElementById("tabla_pais");
 
    //Crear los elementos de la tabla <table>, <thead>, <tbody>
    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //Crear la sección de encabezados, independiente si logramos o no conectarnos a los datos
    var encabezados = "PAIS";
    var filaHead = document.createElement("tr");
    
        //Crear una celda... por cada encabezado
        var celdaHead = document.createElement("th");
        var textoCelda = document.createTextNode(encabezados);
        celdaHead.appendChild(textoCelda);
        filaHead.appendChild(celdaHead);
    
    thead.appendChild(filaHead);

    //Obtener los datos y crear el cuerpo de la tabla.
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            //Crear la estructura de cada fila/registro que obtuvimos...
            for(var i = 0; i < data.results.length;i++)
            {
                //Crear una fila por cada registro
                var filaBody = document.createElement("tr");

                //Crear la celda para cada dato que vamos a mostrar...
                 //Pais
                 var celdaPais = document.createElement("td");
                 var textoPais = document.createTextNode(data.results[i].location.country);
                 celdaPais.appendChild(textoPais);
                 filaBody.appendChild(celdaPais);
                 tbody.appendChild(filaBody);
 

                
            }
        }
        
    };
       
    //Mostrar la tabla
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    tabla_pais.appendChild(tabla);
    

    //Aplicar clasese de Bootstrap
    tabla.setAttribute("class","table table-bordered table-hover");
    thead.setAttribute("class","thead-dark text-center");
    tbody.setAttribute("id","datos_tabla");


});

$(document).ready(function() {
    //Creamos la estructura de conexión
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://randomuser.me/api/?results=25&nat=us,dk,fr,gb',true);
    xmlhttp.send();

    //Crear la estructura de la tabla
    //Obtener la referencia del lugar donde dejaremos la tabla
    var tabla_edad = document.getElementById("tabla_edad");
 
    //Crear los elementos de la tabla <table>, <thead>, <tbody>
    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //Crear la sección de encabezados, independiente si logramos o no conectarnos a los datos
    var encabezados = "EDAD";
    var filaHead = document.createElement("tr");
    
        //Crear una celda... por cada encabezado
        var celdaHead = document.createElement("th");
        var textoCelda = document.createTextNode(encabezados);
        celdaHead.appendChild(textoCelda);
        filaHead.appendChild(celdaHead);
    
    thead.appendChild(filaHead);

    //Obtener los datos y crear el cuerpo de la tabla.
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            //Crear la estructura de cada fila/registro que obtuvimos...
            for(var i = 0; i < data.results.length;i++)
            {
                //Crear una fila por cada registro
                var filaBody = document.createElement("tr");

                //Crear la celda para cada dato que vamos a mostrar...
                 //Edad
                var celdaEdad = document.createElement("td");
                var textoEdad = document.createTextNode(data.results[i].dob.age);
                celdaEdad.appendChild(textoEdad);
                filaBody.appendChild(celdaEdad);
                tbody.appendChild(filaBody);
 

                
            }
        }
        
    };
       
    //Mostrar la tabla
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    tabla_edad.appendChild(tabla);
    

    //Aplicar clasese de Bootstrap
    tabla.setAttribute("class","table table-bordered table-hover");
    thead.setAttribute("class","thead-dark text-center");
    tbody.setAttribute("id","datos_tabla");


});

$(document).ready(function() {
    $("#texto_buscado").on("keyup", function() {
        var texto = $(this).val().toLowerCase();
        $("#datos_tabla tr").filter (function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(texto) > -1)
        });
    });
});