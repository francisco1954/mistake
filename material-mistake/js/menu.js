$(function() {
	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();

	// menú responsive
	// calculamos elancho de la página
	var ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btn-menu'),
		icono = $('#btn-menu .icono');

		if (ancho < 991) {
			enlaces.hide();
			/*icono.addClass('icon-menu');*/
		}

		btnMenu.on('click', function(e) {
			enlaces.slideToggle();
			icono.toggleClass('icon-menu');
			icono.toggleClass('icon-cancel');
		});

		$(window).on('resize', function() {
			if($(this).width() > 991) {
				enlaces.show();
				icono.addClass('icon-cancel');
				icono.removeClass('icon-menu')
			} else {
				enlaces.hide();
				icono.addClass('icon-menu');
				icono.removeClass('icon-cancel')
			}
		});
});