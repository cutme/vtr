(function(window, document, $, vtr, undefined) {
	'use strict';
	
	var Lightbox = vtr.Lightbox = function () { };

	Lightbox.prototype.init = function() {

		var body = document.getElementsByTagName('body'),
			close = $('.js-closeLightbox'),
			showLightbox = $('.js-showLightbox'),
			pagePos,
			target;
		
		showLightbox.on('click', function(e) {
			e.preventDefault();
			
			target = $(this).attr('href');
			
			pagePos = $('body').scrollTop();
			$(target).toggleClass('is-visible');
			close.toggleClass('is-visible');
			$(body).toggleClass('no-scroll');
			
			
				
		});
		
		close.on('click', function(e) {
			e.preventDefault();			
			
			$('.c-lightbox').removeClass('is-visible');
			close.removeClass('is-visible');
			$(body).removeClass('no-scroll');
			
			$(body).scrollTop(pagePos);
		});
	};
		
	vtr.Lightbox = new Lightbox();

}(window, document, jQuery, window.vtr = window.vtr || {}));

