
function validateForm(){
	var nombre = $("#name");
	var apellido = $("#lastname");
	var email = $('#input-email');
	var contra = $('#input-password');
	var lista = $("#lista");
	

	if(nombreValid(nombre)){
		nameCorrecto(nombre);
	}
	
	if(apellidoValid(apellido)){
		lastnameCorrecto(apellido);
	}
	
	if(emailValid(email)){
		emailCorrect(email);
	}
	
	if(contraValid(contra)){
		passwordCorrecto(contra);
	}
	
	
    listaValid(lista);

    convertirMayus(nombre);
	convertirMayus(apellido);
  
}


function nombreValid (_name){
	var Valid = false; 
	if(_name.val() == ''){
		/*var span = document.createElement('SPAN');
		span.textContent ="Llene los campos";
	   	_name.parentNode.appendChild(span);*/
		var span = $('<span>Llene los campos</span>');
		_name.parent().append(span);
		Valid=false;
		
	}else{
		if(_name.parent().find('span').length > 0){
			_name.next().remove(); 	
		}
		Valid = true; 
	}
	
	return Valid; 
}

function nameCorrecto(_nombre){
	var correcto = /([0-9])/g;
	if (correcto.test(_nombre.val())){
		//var span = document.createElement('SPAN');
		//span.innerHTML ="Nombre inválido";
		var span = $('<span>Nombre inválido</span>');
		_nombre.parent().append(span);
	}else{
		if(_nombre.parent().find('span').length > 0){
			_nombre.next().remove(); 	
		}
}}

function apellidoValid (_ape){
	var Valid = false; 
	if(_ape.val() == ''){
		/*var span = document.createElement('SPAN');
		span.innerHTML ="Llene los campos";
		_ape.parentNode.appendChild(span);*/
		var span = $('<span>Llene los campos</span>');
		_ape.parent().append(span);
		Valid=false;
	}else{
		if(_ape.parent().find('span').length > 0){
			_ape.next().remove(); 	
		}
		Valid = true; 
	}
	return Valid; 
}


function lastnameCorrecto(_apellido){
	var correcto = /([0-9])/g;
	if (correcto.test(_apellido.val())){
		//var span = document.createElement('SPAN');
		//span.innerHTML ="Apellido inválido";
		var span = $('<span>Apellido inválido</span>');
		_apellido.parent().append(span);
	}else{
		if(_apellido.parent().find('span').length > 0){
			_apellido.next().remove(); 	
		}
	}
}

function emailValid (_email){
	
	if(_email.val() == ''){
		
		//var span = document.createElement('SPAN');
		//span.innerHTML ="Llene los campos";
		var span = $('<span>Llene los campos</span>');
		_email.parent().append(span);
		
	}else{
		if(_email.parent().find('span').length > 0){
			_email.next().remove();	
		}
		
	}
	 
}

function emailCorrect(_email){

	var correcto =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (correcto.test(_email.val())){
		
		//var span = document.createElement('SPAN');
		//span.innerHTML ="Apellido inválido";
		var span = $('<span>Contraseña inválida</span>');
		_email.parent().append(span);
	}else{
		if(_email.parent().find('span').length > 0){
			_email.next().remove(); 	
		}
	}
}


function contraValid (_contra){
	var Valid = false; 
	if(_contra.val() == ''){
		//var span = document.createElement('SPAN');
		//span.innerHTML ="Llene los campos";
		var span = $('<span>Llene los campos</span>');
		_contra.parent().append(span);
        Valid=false;
	}else{
		if(_contra.parent().find('span').length > 0){	_contra.next().remove();	 	
		}
        Valid = true;
	}
    return Valid; 
}




function passwordCorrecto(_contra){
	
	if(_contra.val().length < 6 || _contra.val() == '098754' || _contra.val() == '123456' || _contra.val() == 'password'){
	//var span = document.createElement('SPAN');
	//span.innerHTML ="Contraseña inválida";
		var span = $('<span>Contraseña inválida</span>');
	_contra.parent().append(span);
	}else{
	if(_contra.parent().find('span').length > 0){
	_contra.next().remove(); 	
		}
			
	}
}

function listaValid (_lista){
    
    if(_lista.val() == 0 ){
    //var span = document.createElement('SPAN');
	// span.innerHTML ="Seleccione una bici";
		var span = $('<span>Seleccione una bici</span>');
	_lista.parent().append(span);
        }    
    else{
            if(_lista.parent().find('span').length > 0){
                _lista.next().remove(); 
            }
        }

}




function convertirMayus(string)
{
	//var string= document.getElementById(string);
	console.log(string.val()); 
	var arreglo = string.val().split("");
    var first = String(arreglo[0]);
    var mayus = first.toUpperCase();
    var Valid = false;
        
    for(var i=1; i<arreglo.length; i++) {
         if(Valid){
            mayus += arreglo[i].toUpperCase();
            Valid = false;
            } else {
                mayus += arreglo[i];
                if(arreglo[i] == " ")
                    Valid = true;
            }
        string.val(mayus);
        }
        return string.val();
}




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

