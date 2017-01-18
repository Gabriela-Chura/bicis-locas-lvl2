document.getElementById("input-password").setAttribute("minlength", "6"); 

function validateForm(evt) {

var nombre, apellido, email, contrasena;
nombre = document.getElementById("name").value;
apellido = document.getElementById("lastname").value;
email = document.getElementById("input-email").value;
contraseña = document.getElementById("input-password").value;
    
    
var lista = document.getElementById("lista").selectedIndex;
    
    var correo =  /\w+@\w+\.+[a-z]/;
    // /\.com/; Busca la cadena “.com”.
    // /\W/; Busca cualquier caracter que no sea alfanumérico ni ‘_’.
    // /[a-z]/; Busca una letra de la ‘a’ a la ‘z’.
    
    var texto = /^[a-zA-Z\s]*$/;
    // /1*234/; Buscaría: “234”,”1234″,”11234″,etc.
    // $	Final de una línea	
    // ^	Comienzo de una línea
    
var x = document.getElementsByClassName("contenedor");
    for(i=0;i<= x.length; i++){
        
        if (nombre===""||apellido===""|| email===""|| contrasena ==="" || lista===""){
        var text = document.createElement("span");
        text.innerText = "Todos los campos deben estar llenos."; 
        x[i].appendChild(text);
        } else {
            x[i].removeChild(x[i].lastChild);
           if (!texto.test(nombre)){
                var text = document.createElement("span");
                text.innerText = "Ingrese por favor un nombre válido."; 
                x[0].appendChild(text);
            } else {
                x[0].removeChild(x[0].text.lastChild);
            } 
            
            if (!texto.test(apellido)){
                var text = document.createElement("span");
                text.innerText = "Ingrese por favor un apellido válido."; 
                x[1].appendChild(text);
            }else {
                x[1].removeChild(x[1].text.lastChild);
            } 
            if(!correo.test(email)){
                 var text = document.createElement("span");
                text.innerText = "Ingrese por favor un correo válido"; 
                x[2].appendChild(text);
            } else {
                x[2].removeChild(x[2].text.lastChild);
            }
            
            if(contrasena === "password"|| contrasena==="123456"|| contrasenaa==="098754"){
                var text = document.createElement("span");
                text.innerText = "Ingrese por favor una contraseña válida"; 
                x[3].appendChild(text);
            }else {
                x[3].removeChild(x[3].text.lastChild);
            }
            
            if(lista == null || lista == 0) {
                var text = document.createElement("span");
                text.innerText = "Escoja una bici."; 
                x[4].appendChild(text);
            } else {
                x[4].removeChild(x[4].text.lastChild);
            }
            
    evt.preventDefault();
    }
    
    }

    
}
    


