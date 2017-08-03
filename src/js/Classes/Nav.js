(function(window, document, $, vtr, undefined) {
	'use strict';
	
	var Nav = vtr.Navs = function () { }, 
		menu = $('.c-nav');

	Nav.prototype.actions = function() {
		var link = $('a', menu);		
		
		link.on('click', function(e) {
			e.preventDefault();
			
			var $$ = $(this);
			
			if ( $$.next('ul').length > 0 ) {
			
				if (vtr.Helper.isWindowSmallerThan(769) === true) {

					$$.next('ul').toggleClass('is-active');
				}
			} else {
				window.location = $$.attr('href');
			}
		});
	};

	Nav.prototype.mobile = function() {

		var container = $('.o-container'),
			hamburger = $('.js-hamburger'),
			lang = $('.js-lang'),
			status = false,
			topbar = $('.c-top'),
			e;

		function hideMenu() {
			status = false;
			hamburger.toggleClass('icon-close icon-hamburger');
			
			menu.removeClass('is-active');
			
			setTimeout(function() {
				e = lang.detach();
				topbar.append(e);
				
				e = menu.detach();
				topbar.append(e);
			}, 300);
		}

		function showMenu() {
			status = true;
			hamburger.toggleClass('icon-close icon-hamburger');
			
			e = lang.detach();
			menu.append(e);
			
			e = menu.detach();
			container.before(e);
			
			setTimeout(function() {
				menu.addClass('is-active');	
			}, 5);
		}
		
		hamburger.on('click', function(e) {
			e.preventDefault();
			
			var $$ = $(this);			

			if (status === false) {
				showMenu();
			} else {
				hideMenu();
			}
		});
		
		if ((vtr.Helper.isWindowSmallerThan(769) === false) && (status === true)) {
			hideMenu();
		}
	};
	
	Nav.prototype.submenu = function() {

		var el = $('.c-nav > ul > li > a'),
			close = $('.js-closeLightbox');
		
		el.on('click', function(e) {
			//e.preventDefault();
			
			var $$ = $(this);
			
			/*
if ( $$.parent().find('.submenu').length > 0 ) {
			
				if (vtr.Helper.isWindowSmallerThan(769) === false) {
					$$.parent().toggleClass('is-submenu is-active');
	
					if ( $('#privacyPolicy').hasClass('is-visible') ) { } else { 
						close.toggleClass('is-visible');
					}
				}
				
			} else {
				el.removeClass('.is-submenu.is-active');
				window.location = $$.attr('href');
				
				close.removeClass('is-visible');
			}
*/
		});
		
		close.on('click', function(e) {
			e.preventDefault();
			
			el.parent().removeClass('is-submenu is-active');
			close.removeClass('is-visible');
		});
	};
	
	Nav.prototype.init = function() {

	//	alert( vtr.Helper.isWindowSmallerThan(769) );

		Nav.prototype.actions();
		Nav.prototype.mobile();
		Nav.prototype.submenu();
	};
		
	vtr.Nav = new Nav();

}(window, document, jQuery, window.vtr = window.vtr || {}));

