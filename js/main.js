
function validateForm(){
	var nombre = $("#name");
	var apellido = $("#lastname");
	var email = $('#input-email');
	var contra = $('#input-password');
	var lista = document.getElementById("lista");
	

	if(nombreValid(nombre)){
		nameCorrecto(nombre);
	}
	
	if(apellidoValid(apellido)){
		lastnameCorrecto(apellido);
	}
	
	emailValid(email);
	
	
	if(contraValid(contra)){
		passwordCorrecto(contra);
	}
	
    listaValid(lista);

    
  
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
		console.log('holaaa');
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
	
	if(_contra.value.length < 6 || _contra.value == '098754' || _contra.value == '123456' || _contra.value == 'password'){
	var span = document.createElement('SPAN');
	span.innerHTML ="Contraseña inválida";
	_contra.parentNode.appendChild(span);
	}else{
	if(_contra.nextSibling != null){
	_contra.parentNode.removeChild(_contra.nextSibling); 	
		}
			
}}

function listaValid (_lista){
    
    if(_lista.value == 0){
    var span = document.createElement('SPAN');
	span.innerHTML ="Seleccione una bici";
	_lista.parentNode.appendChild(span);
        }    
    else{
            if(_lista.value != 0){
                _lista.parentNode.removeChild(_lista.nextSibling);
            }
        }
}































/* OTRA FORMA */ 
/*

.val(); 
function nombreValid (_name){
	var Valid = false; 
	if(_name.value == ''){
		var span = document.createElement('SPAN');
		span.textContent ="Llene los campos";
	   	_name.parentNode.appendChild(span);
		Valid=false;
		
	}else{
		if(_name.nextSibling != null){
			_name.parentNode.removeChild(_name.nextSibling); 	
		}
		Valid = true; 
	}
	
	return Valid; 
}

function nameCorrecto(_nombre){
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

function apellidoValid (_ape){
	var Valid = false; 
	if(_ape.value== ''){
		var span = document.createElement('SPAN');
		span.innerHTML ="Llene los campos";
		_ape.parentNode.appendChild(span);
		Valid=false;
	}else{
		if(_ape.nextSibling != null){
			_ape.parentNode.removeChild(_ape.nextSibling); 	
		}
		Valid = true; 
	}
	return Valid; 
}


function lastnameCorrecto(_apellido){
	var correcto = /([0-9])/g;
	if (correcto.test(_apellido.value)){
		var span = document.createElement('SPAN');
		span.innerHTML ="Apellido inválido";
		_apellido.parentNode.appendChild(span);
	}else{
		if(_apellido.nextSibling != null){
			_apellido.parentNode.removeChild(_apellido.nextSibling); 	
		}
}}

function emailValid (_email){
	
	if(_email.value.length == 0){
		var span = document.createElement('SPAN');
		span.innerHTML ="Llene los campos";
		_email.parentNode.appendChild(span);
	}else{
		if(_email.nextSibling != null){
			_email.parentNode.removeChild(_email.nextSibling); 	
		}
	}
}

function contraValid (_contra){
	var Valid = false; 
	if(_contra.value.length == 0){
		var span = document.createElement('SPAN');
		span.innerHTML ="Llene los campos";
		_contra.parentNode.appendChild(span);
        Valid=false;
	}else{
		if(_contra.nextSibling != null){	_contra.parentNode.removeChild(_contra.nextSibling); 	
		}
        Valid = true;
	}
    return Valid; 
}




function passwordCorrecto(_contra){
	
	if(_contra.value.length < 6 || _contra.value == '098754' || _contra.value == '123456' || _contra.value == 'password'){
	var span = document.createElement('SPAN');
	span.innerHTML ="Contraseña inválida";
	_contra.parentNode.appendChild(span);
	}else{
	if(_contra.nextSibling != null){
	_contra.parentNode.removeChild(_contra.nextSibling); 	
		}
			
}}

function listaValid (_lista){
    
    if(_lista.value == 0){
    var span = document.createElement('SPAN');
	span.innerHTML ="Seleccione una bici";
	_lista.parentNode.appendChild(span);
        }    
    else{
            if(_lista.value != 0){
                _lista.parentNode.removeChild(_lista.nextSibling);
            }
        }
}

*/






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



