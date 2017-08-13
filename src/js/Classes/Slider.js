(function(window, document, $, vtr, undefined) {
	'use strict';
	
	var Slider = vtr.Sliders = function () { };

	Slider.prototype.init = function() {

		var el = document.querySelector('.js-slider');
		
		$(el).each(function() {
		
			var $$ = $(this);
			
			$$.owlCarousel({
				autoheight: true,
				autoplay: true,
				animateOut: 'fadeOut',
				items: 1,
				lazyLoad: false,
				loop: true,
				touchDrag: false
			});
		});
	};
	
	Slider.prototype.partners = function() {

		var el = document.getElementById('partners');
		
		$(el).owlCarousel({
			autoheight: true,
			autoplay: true,
			lazyLoad: false,
			loop: true,
			touchDrag: false,
			responsive: {
				0: {
					items: 2
				},
				480: {
					items: 4
				},
				640: {
					items: 6
				},
				1126: {
					items: 9
				}
			}
		});
	};
		
	vtr.Slider = new Slider();

}(window, document, jQuery, window.vtr = window.vtr || {}));

