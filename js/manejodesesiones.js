function index(){
	var dt2 = sessionStorage.getItem('tiempooriginal');
	var dt1 = Math.floor(Date.now());

	var dt3 = ((dt1-dt2)/1000);

	if(dt3>3000){
		alert("Sesion terminada por inactividad");
		window.location.assign('login.html');
	}else{
		var tiempo1 = Math.floor(Date.now());
		sessionStorage.setItem('tiempooriginal',tiempo1);
		window.location.assign('index.html');
	}
}




// ---- /Tecnologias ----

// ---- contador ----
$('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// ---- /contador ----