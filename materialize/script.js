$(document).ready (function() {
	$(".button-collapse").sideNav();
	$('.parallax').parallax ();
	$('.modal').modal({
		dismissible:false,
		outDuration:700,
	});
	$(".carousel.carousel-slider").carousel({
		fullWidth:true,
		indicators:true,
		noWrap:true
	})
})