(function(window, document, $, vtr, undefined) {
	'use strict';
	
	var PrivacyPolicy = vtr.PrivacyPolicys = function () { };

	PrivacyPolicy.prototype.init = function() {

		var el = document.getElementById('privacyPolicy'),
			body = document.getElementsByTagName('body'),
			close = $('.js-closeLightbox'),
			showPrivacyPolicy = $('.js-showPrivacyPolicy'),
			pagePos;
		
		showPrivacyPolicy.on('click', function(e) {
			e.preventDefault();
			
			pagePos = $('body').scrollTop();
			$(el).toggleClass('is-visible');
			close.toggleClass('is-visible');
			$(body).toggleClass('no-scroll');
			
			
				
		});
		
		close.on('click', function(e) {
			e.preventDefault();			
			
			$(el).removeClass('is-visible');
			close.removeClass('is-visible');
			$(body).removeClass('no-scroll');
			
			$(body).scrollTop(pagePos);
		});
	};
		
	vtr.PrivacyPolicy = new PrivacyPolicy();

}(window, document, jQuery, window.vtr = window.vtr || {}));

