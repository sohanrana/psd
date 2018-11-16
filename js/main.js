(function ($) {
"use strict";


	// Sticky Menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	// Brand owlCarousel
	$('.brand-carousel').owlCarousel({
	    loop:true,
	    margin:0,
		items:4,
	    nav:false,
		dots:false,
		autoplay: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:3
	        },
	        992:{
	            items:4
	        }
	    }
	})
	
	 // Smooth Scroll
	 $('.menu-right a[href*="#"]:not([href="#"])').on("click" , function() {
	      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	          var target = $(this.hash);
	          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	          if (target.length) {
	              $('html, body').animate({
	                  scrollTop: target.offset().top
	              }, 1000);
	              return false;
	          }
	      }
	});

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


})(jQuery);