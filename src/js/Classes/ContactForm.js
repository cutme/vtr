(function(window, document, $, vtr, undefined) {
	'use strict';
	
	var ContactForm = vtr.ContactForm = function () { };

	ContactForm.prototype.init = function() {

		var el = document.getElementById('ContactForm'),
			switcher = document.querySelector('.js-newsletterSwitcher');
		
		
		$(switcher).on('click', function(e) {
			e.preventDefault();
			
			$(el).toggleClass('tel email');
		});
		
	};
		
	vtr.ContactForm = new ContactForm();

}(window, document, jQuery, window.vtr = window.vtr || {}));

