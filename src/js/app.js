
(function(window, document, $, vtr, undefined) {
	'use strict';


	$(document).ready(function() {

		vtr.Lightbox.init();
		vtr.Helper.cookies();
		vtr.Nav.init();
		
		
		if (vtr.Helper.exist('.js-openSubmenu')) vtr.Helper.openSubmenu();
		
		if (vtr.Helper.exist('.b-lazy')) vtr.Helper.blazy();
		if (vtr.Helper.exist('#ContactForm')) vtr.ContactForm.init();
		
		$('.js-goto').on('click', function(e) {
			e.preventDefault();
			
			
			vtr.Helper.goToTarget( $(this).attr('href'), -80 );
		});

		if (vtr.Helper.exist('.js-slider')) vtr.Slider.init();
		if (vtr.Helper.exist('.js-show-full')) vtr.Helper.showFull();
		
		/*
vtr.Helper.cookies();
		vtr.Helper.isMobile();
		vtr.Helper.language();
		vtr.Menu.init();
		

		if (vtr.Helper.exist('#accordion')) vtr.Accordion.init('#accordion');		
		
		if (vtr.Helper.exist('#contact-map')) vtr.ContactMap.init();
		if (vtr.Helper.exist('#filters')) vtr.Filters.init();
		if (vtr.Helper.exist('#homeSlider')) vtr.Slider.init();
		if (vtr.Helper.exist('#locationMap')) vtr.LocationMap.init();
		if (vtr.Helper.exist('#masonry')) masonryInit();
		if (vtr.Helper.exist('#offerCarousel')) vtr.OfferCarousel.init();
		if (vtr.Helper.exist('#offerContact')) vtr.OfferContact.init();
		if (vtr.Helper.exist('#questionForm')) vtr.QuestionForm.init();
		if (vtr.Helper.exist('#rentSale')) vtr.Switcher.rentSale();
		if (vtr.Helper.exist('#shortcuts')) vtr.Accordion.init('#shortcuts');		
		if (vtr.Helper.exist('#shortcuts')) vtr.Shortcuts.init();
		if (vtr.Helper.exist('#viewType')) vtr.Switcher.viewType();


		
		if (vtr.Helper.exist('.mfp-image')) vtr.Magnific.images();
		if (vtr.Helper.exist('.mfp-video')) vtr.Magnific.video();
		if (vtr.Helper.exist('.nice-select')) vtr.Helper.nSelect();
		if (vtr.Helper.exist('.c-top')) vtr.Helper.fixTop();
*/
		
		
		
	});
	
	
	$(window).on('load', function() {

		
	});

		
}(window, document, jQuery, window.vtr = window.vtr || {}));

