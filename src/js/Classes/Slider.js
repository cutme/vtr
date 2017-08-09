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
		
	vtr.Slider = new Slider();

}(window, document, jQuery, window.vtr = window.vtr || {}));

