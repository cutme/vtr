(function(window, document, $, vtr, undefined) {
	'use strict';
	
	var PrivacyPolicy = vtr.PrivacyPolicys = function () { };

	PrivacyPolicy.prototype.init = function() {

		var el = document.getElementById('privacyPolicy'),
			body = document.getElementsByTagName('body'),
			close = $('.js-closeLightbox'),
			showPrivacyPolicy = $('.js-showPrivacyPolicy');
		
		showPrivacyPolicy.on('click', function(e) {
			e.preventDefault();
									
			$(el).toggleClass('is-visible');
			close.toggleClass('is-visible');
			$(body).toggleClass('no-scroll');
				
		});
		
		close.on('click', function(e) {
			e.preventDefault();
			
			$(el).removeClass('is-visible');
			close.removeClass('is-visible');
			$(body).removeClass('no-scroll');
		});
	};
		
	vtr.PrivacyPolicy = new PrivacyPolicy();

}(window, document, jQuery, window.vtr = window.vtr || {}));

