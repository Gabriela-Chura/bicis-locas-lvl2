
function validateForm(){
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email = document.getElementById('input-email');
	var contra = document.getElementById('input-password');
	
	
	vacioValid(apellido,email,contra);

	
}

function vacioValid (_name){
	
	if(_name.value.length == 0){
		var span = document.createElement('SPAN');
		span.innerHTML ="Llene los campos";
		_name.parentNode.appendChild(span);
	}else{
		if(_name.nextSibling != null){
			_name.parentNode.removeChild(_name.nextSibling); 	
		}
	}
}


/*function apellidoValid (_email){
	

	if(_email.value.length == 0){
		var span = document.createElement('SPAN');
		span.innerHTML ="Apellido vacío";
		_email.parentNode.appendChild(span);
	}else{
		if(_email.nextSibling != null){
			_email.parentNode.removeChild(_email.nextSibling); 	
		}
	}
}*/

/*function apellidoValid (_contra){
	
	
	if(_contra.value.length == 0){
		var span = document.createElement('SPAN');
		span.innerHTML ="Apellido vacío";
		_contra.parentNode.appendChild(span);
	}else{
		if(_contra.nextSibling != null){
			_contra.parentNode.removeChild(_contra.nextSibling); 	
		}
	}
}*/


/*function nombreValid (_nombre){
	
	var correcto = /([0-9])/g;
	if (correcto.test(_nombre.value)){
		var span = document.createElement('SPAN');
		span.innerHTML ="Nombre inválido";
		_nombre.parentNode.appendChild(span);
	}else{
		if(_nombre.nextSibling != null){
			_nombre.parentNode.removeChild(_nombre.nextSibling); 	
		}
}}

function apellidoValid (apellido){
	apellido = document.getElementById('lastname');
	var correcto = /([0-9])/g;
	if (correcto.test(apellido.value)){
		var span = document.createElement('SPAN');
		span.innerHTML ="Apellido inválido";
		apellido.parentNode.appendChild(span);
	}else{
		if(apellido.nextSibling != null){
			apellido.parentNode.removeChild(apellido.nextSibling); 	
		}
}}*/






/* OTRA FORMA */ 

/*function validateForm(){
	
	var nombre = document.getElementById('name');
	var apellido = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var contraseña = document.getElementById('input-password');

	if(Validator.isText(nombre.value))
	{
		removeMessage('name');
	}else{
		createMessage('name', 'No es válido');
	}

	if(Validator.isText(apellido.value))
	{
		removeMessage('lastname');
	}else{
		createMessage('lastname', 'Ingresa tu apellido');
	}

	if(Validator.isValidPassword(contraseña.value))
	{
		removeMessage('input-password');
	}else{
		createMessage('input-password', 'Tu password no es válido');
	}

	if(Validator.isEmail(email.value))
	{
		removeMessage('input-email');
	}else{
		createMessage('input-email', 'Tu e-mail no es válido');
	}
}


function removeMessage(_inputID)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling != null)
	{
		elemento.parentNode.removeChild(elemento.nextSibling);
	}
}

function createMessage(_inputID, _message)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling == null)
	{
		
		var span = document.createElement('span');
		span.innerHTML = _message;
		elemento.parentNode.appendChild(span);
	}else{
		
		if(elemento.nextSibling.tagName == 'SPAN')
		{
			elemento.nextSibling.innerHTML = _message;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);

			var span = document.createElement('span');
			span.innerHTML = _message;
			elemento.parentNode.appendChild(span);
		}
	}
}



var Validator = {
	isText:function (_string)
	{
		var regex = /([0-9]+)/;
		return !regex.test(_string);
	},
	isEmail:function (_string)
	{
		var regex = /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
		return regex.test(_string);
	},
	isValidPassword: function (_string)
	{
		var isValid = true;
		if(_string.length < 6 || _string == '098754' || _string == '123456' || _string == 'password')
			isValid = false;

		return isValid;
	},
	
	
}; 
 
 */



/* OTRA FORMA */ 

/* function validateForm(evt) {

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
    
*/ 

