
(function(window, document, $, vtr, undefined) {
	'use strict';


	$(document).ready(function() {

		vtr.Lightbox.init();
		vtr.Helper.cookies();
		vtr.Nav.init();

		if (vtr.Helper.exist('#ContactForm')) vtr.ContactForm.init();
		if (vtr.Helper.exist('#partners')) vtr.Slider.partners();
		if (vtr.Helper.exist('.js-openSubmenu')) vtr.Helper.openSubmenu();
		if (vtr.Helper.exist('.js-show-full')) vtr.Helper.showFull();
		if (vtr.Helper.exist('.js-slider')) vtr.Slider.init();
		
		$('.js-goto').on('click', function(e) {
			e.preventDefault();
			
			vtr.Helper.goToTarget( $(this).attr('href'), -80 );
		});
	});

		
}(window, document, jQuery, window.vtr = window.vtr || {}));

