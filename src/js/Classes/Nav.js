(function(window, document, $, vtr, undefined) {
	'use strict';
	
	var Nav = vtr.Navs = function () { }, 
		hoverListener,
		menu = document.getElementById('menu'),
		container = $('.o-container'),
		hamburger = $('.js-hamburger'),
		lang = $('.js-lang'),
		status = false,
		submenu_content = document.getElementById('submenu'),
		topbar = $('.c-top'),
		top = document.getElementById('top'), el;

	Nav.prototype.actions = function() {
		var link = $('a', menu);		
		
		link.on('click', function(e) {
			e.preventDefault();
			
			var $$ = $(this);
			
			if ( $$.next('ul').length > 0 ) {
			
				if (vtr.Helper.isWindowSmallerThan(769) === true) {
					console.log('f');
					$$.next('ul').toggleClass('is-active');
				}
			} else {
				window.location = $$.attr('href');
			}
		});
	};
	
	Nav.prototype.hideMenu = function() {
		status = false;
		
		hamburger.removeClass('icon-close').addClass('icon-hamburger');
		$(menu).removeClass('is-active');
		$('ul', menu).removeClass('is-active');
		
		setTimeout(function() {
			el = lang.detach();
			topbar.append(el);
			
			el = $(menu).detach();
			topbar.append(el);
		}, 300);
	};

	Nav.prototype.showMenu = function() {
		status = true;
		hamburger.toggleClass('icon-close icon-hamburger');
		
		el = lang.detach();
		$(menu).append(el);
		
		var els = $('.c-nav').detach();
		container.before(els);
		
		setTimeout(function() {
			$(menu).addClass('is-active');	
		}, 5);
	};

	Nav.prototype.mobile = function() {

		hamburger.on('click', function(e) {
			e.preventDefault();
			
			var $$ = $(this);			

			if (status === false) {
				Nav.prototype.showMenu();
			} else {
				Nav.prototype.hideMenu();
			}
		});
		
		if ((vtr.Helper.isWindowSmallerThan(769) === false) && (status === true)) {
			Nav.prototype.hideMenu();
		}
		
		$(window).on('resize', function() {
			
			if ( $(window).width() > 768 ) {
			
				$(submenu_content).removeClass('is-active');
				vtr.Nav.hideMenu();
			
			}
		});
	};
	
	Nav.prototype.submenu = function() {
		var interval,
			isHoverInside,
			menu_parent = $('.menu > li'),
			$$ = $(this);

		hoverListener = function(event) {
			isHoverInside = submenu_content.contains(event.target);
			return isHoverInside;
		};

		top.addEventListener('mousemove', hoverListener, false);

		menu_parent.on('mouseenter', function(e) {
			e.preventDefault();
			
			if (vtr.Helper.isWindowSmallerThan(768) === false) {
				if ($('ul', this).length > 0) {
					
					$(submenu_content).addClass('is-active');
					clearTimeout(interval);
	
				} 
			}
		});
		
		menu_parent.on('mouseleave', function(e) {
		
			if (vtr.Helper.isWindowSmallerThan(768) === false) {
				interval = setTimeout(function() {
	
					if ( isHoverInside === false ) {
						$(submenu_content).removeClass('is-active');
						menu_parent.removeClass('is-active');
					}
					
				}, 300);
			}
		});
	
			
/*
			
			
			
			if (vtr.Helper.isWindowSmallerThan(769) === true) {
			
				if ( $$.next('ul').length > 0 ) {
					$$.next('ul').toggle();
				}
			
*/
			
				//if ( $$.parent().find('.submenu').length > 0 ) {
				
					//if (vtr.Helper.isWindowSmallerThan(769) === false) {
						//$$.parent().toggleClass('is-submenu is-active');
		
						/*
if ( $('#privacyPolicy').hasClass('is-visible') ) { } else { 
							close.toggleClass('is-visible');
						}
*/
					//}


		/*
	} else {
				el.removeClass('.is-submenu.is-active');
				window.location = $$.attr('href');
			}

		});
		
		close.on('click', function(e) {
			e.preventDefault();
			
			el.parent().removeClass('is-submenu is-active');
			close.removeClass('is-visible');
		});
*/
	};
	
	Nav.prototype.init = function() {		

		Nav.prototype.actions();
		Nav.prototype.mobile();
		Nav.prototype.submenu();

	};
		
	vtr.Nav = new Nav();

}(window, document, jQuery, window.vtr = window.vtr || {}));

