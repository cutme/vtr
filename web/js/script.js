!function(e,t,o,i,n){"use strict";function a(){return[{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#d3d3d3"}]},{featureType:"transit",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#b3b3b3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ebebeb"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#a7a7a7"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#dadada"}]}]}function s(){var e=t.getElementById("cookies"),i=o(".js-accept",e);1!=Cookies.get("vtrproperty-cookies")&&setTimeout(function(){o(e).removeClass("is-hidden")},2e3),i.on("click",function(t){t.preventDefault(),Cookies.set("vtrproperty-cookies",1,{expires:356,path:"/"}),o(e).addClass("is-hidden")})}function r(e){return o(e).length>0}function l(e,i){var n=o("body, html"),a=o(e).offset().top,s=o(t).scrollTop();Math.abs(a-s);i=i||0,n.animate({scrollTop:a+i+2},{easing:"easeOutCubic",duration:500}),o("body.nav-full.is-visible").length>0&&story.Nav.menuHide()}function c(){/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?o("html").addClass("mobile"):o("html").addClass("desktop")}function u(t){return e.innerWidth<parseInt(t,10)}function p(){var t=o(".js-openSubmenu"),n=o(".c-nav .submenu"),a=o(".submenu__container");t.on("click",function(t){t.preventDefault(),o(e).width()>768?(n.addClass("is-active"),a.addClass("is-active")):(i.Nav.showMenu(),n.addClass("is-active"))})}function m(){o(".js-show-full").on("click",function(e){e.preventDefault(),o(this).next(".full").show()})}i.Helper=new function(){return{cookies:s,exist:r,goToTarget:l,openSubmenu:p,isMobile:c,isWindowSmallerThan:u,mapstyle:a,showFull:m}}}(window,document,jQuery,window.vtr=window.vtr||{}),function(e,t,o,i,n){"use strict";o(t).ready(function(){i.Lightbox.init(),i.Helper.cookies(),i.Nav.init(),i.Helper.exist("#ContactForm")&&i.ContactForm.init(),i.Helper.exist("#partners")&&i.Slider.partners(),i.Helper.exist(".js-openSubmenu")&&i.Helper.openSubmenu(),i.Helper.exist(".js-show-full")&&i.Helper.showFull(),i.Helper.exist(".js-slider")&&i.Slider.init(),o(".js-goto").on("click",function(e){e.preventDefault(),i.Helper.goToTarget(o(this).attr("href"),-80)})})}(window,document,jQuery,window.vtr=window.vtr||{}),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",easeOutCubic:function(e,t,o,i,n){return i*((t=t/n-1)*t*t+1)+o}}),function(e,t,o,i,n){"use strict";var a=i.ContactForm=function(){};a.prototype.init=function(){var e=t.getElementById("ContactForm"),i=t.querySelector(".js-newsletterSwitcher");o(i).on("click",function(t){t.preventDefault(),o(e).toggleClass("tel email")})},i.ContactForm=new a}(window,document,jQuery,window.vtr=window.vtr||{}),function(e,t,o,i,n){"use strict";var a,s,r=i.Navs=function(){},l=t.getElementById("menu"),c=o(".o-container"),u=o(".js-hamburger"),p=o(".js-lang"),m=!1,d=t.getElementById("submenu"),y=o(".c-top"),f=t.getElementById("top");r.prototype.actions=function(){o("a",l).on("click",function(t){t.preventDefault();var n=o(this);n.next("ul").length>0?!0===i.Helper.isWindowSmallerThan(769)&&(console.log("f"),n.next("ul").toggleClass("is-active")):e.location=n.attr("href")})},r.prototype.hideMenu=function(){m=!1,u.removeClass("icon-close").addClass("icon-hamburger"),o(l).removeClass("is-active"),o("ul",l).removeClass("is-active"),setTimeout(function(){s=p.detach(),y.append(s),s=o(l).detach(),y.append(s)},300)},r.prototype.showMenu=function(){m=!0,u.toggleClass("icon-close icon-hamburger"),s=p.detach(),o(l).append(s);var e=o(".c-nav").detach();c.before(e),setTimeout(function(){o(l).addClass("is-active")},5)},r.prototype.mobile=function(){u.on("click",function(e){e.preventDefault();o(this);!1===m?r.prototype.showMenu():r.prototype.hideMenu()}),!1===i.Helper.isWindowSmallerThan(769)&&!0===m&&r.prototype.hideMenu(),o(e).on("resize",function(){o(e).width()>768&&(o(d).removeClass("is-active"),i.Nav.hideMenu())})},r.prototype.submenu=function(){var e,t,n=o(".menu > li");o(this);a=function(e){return t=d.contains(e.target)},f.addEventListener("mousemove",a,!1),n.on("mouseenter",function(t){t.preventDefault(),!1===i.Helper.isWindowSmallerThan(768)&&o("ul",this).length>0&&(o(d).addClass("is-active"),clearTimeout(e))}),n.on("mouseleave",function(a){!1===i.Helper.isWindowSmallerThan(768)&&(e=setTimeout(function(){!1===t&&(o(d).removeClass("is-active"),n.removeClass("is-active"))},300))})},r.prototype.init=function(){r.prototype.actions(),r.prototype.mobile(),r.prototype.submenu()},i.Nav=new r}(window,document,jQuery,window.vtr=window.vtr||{}),function(e,t,o,i,n){"use strict";var a=i.Lightbox=function(){};a.prototype.init=function(){var e,i,n=t.getElementsByTagName("body"),a=o(".js-closeLightbox");o(".js-showLightbox").on("click",function(t){t.preventDefault(),i=o(this).attr("href"),e=o("body").scrollTop(),o(i).toggleClass("is-visible"),a.toggleClass("is-visible"),o(n).toggleClass("no-scroll")}),a.on("click",function(t){t.preventDefault(),o(".c-lightbox").removeClass("is-visible"),a.removeClass("is-visible"),o(n).removeClass("no-scroll"),o(n).scrollTop(e)})},i.Lightbox=new a}(window,document,jQuery,window.vtr=window.vtr||{}),function(e,t,o,i,n){"use strict";var a=i.Sliders=function(){};a.prototype.init=function(){var e=t.querySelector(".js-slider");o(e).each(function(){o(this).owlCarousel({autoheight:!0,autoplay:!0,animateOut:"fadeOut",items:1,lazyLoad:!1,loop:!0,touchDrag:!1})})},a.prototype.partners=function(){function e(){o(".js-logos:eq(0)").stop().animate({"margin-left":-i},2e4,"linear",function(){o(".js-logos:eq(0)").css("margin-left",0),e()})}var i=6*o(".js-logos li").first().width(),n=t.querySelectorAll(".js-logos"),a=t.querySelectorAll(".js-scrollers");o(a).width(3*i);for(var s=0;s<2;s++)o(n).clone().insertAfter(o(n));e()},i.Slider=new a}(window,document,jQuery,window.vtr=window.vtr||{}),Parsley.addMessages("pl",{defaultMessage:"Wartość wygląda na nieprawidłową",type:{email:"Wpisz poprawny adres e-mail.",url:"Wpisz poprawny adres URL.",number:"Wpisz poprawną liczbę.",integer:"Dozwolone są jedynie liczby całkowite.",digits:"Dozwolone są jedynie cyfry.",alphanum:"Dozwolone są jedynie znaki alfanumeryczne."},notblank:"Pole nie może być puste.",required:"Pole jest wymagane.",pattern:"Pole zawiera nieprawidłową wartość.",min:"Wartość nie może być mniejsza od %s.",max:"Wartość nie może być większa od %s.",range:"Wartość powinna zaweriać się pomiędzy %s a %s.",minlength:"Minimalna ilość znaków wynosi %s.",maxlength:"Maksymalna ilość znaków wynosi %s.",length:"Ilość znaków wynosi od %s do %s.",mincheck:"Wybierz minimalnie %s opcji.",maxcheck:"Wybierz maksymalnie %s opcji.",check:"Wybierz od %s do %s opcji.",equalto:"Wartości nie są identyczne."}),Parsley.setLocale("pl");