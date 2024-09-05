function getData() {
	var jqXHR = $.ajax({
		dataType: 'json',
		url: "data_js/passStore.json",
		tagmode: "any",
		type: 'GET',
		cache: false,
		async: false,	
	});
	return jqXHR.responseText;
};

var result = getData();		
var data = JSON.parse(result);

function validar(){
	var usuario = (document.getElementById("name").value).toUpperCase();
	var password = (document.getElementById("pas").value).toUpperCase();

	if((usuario=="" && password=="") || (usuario=="" && password=="") || (usuario=="" && password=="")){
		var tiempo1 = Math.floor(Date.now());
		window.location="index.html";
		sessionStorage.setItem('name',usuario);
		sessionStorage.setItem('tiempooriginal',tiempo1);
	}else if((password=="")&(usuario=="")){
		alert("Por favor introduzca sus datos");
		window.location="login.html";
	}else if(usuario==""){
		alert("Por favor introduzca un usuario");
		window.location="login.html";
	}else if(password==""){
		alert("Por favor introduzca una contraseña");
		window.location="login.html";
	}else{
		alert("Datos incorrectos");
		window.location="login.html";	
	}

}
$(function() {
    $('.btn btn-primary').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
});
$(document).keypress(function(e) {
    if(e.which == 13) {
        validar();
    }
});


