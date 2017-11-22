$(document).ready(function(){

	//shows/hides top navbar depending on scroll amount
	check_nav_display();

	$(window).scroll(function(){
		check_nav_display();
	})

	function check_nav_display(){
		if ( $(document).scrollTop() > $('.js-nav-check').offset().top + $('.js-nav-check').height() ) {
			$('.js-nav').css('opacity','1');
		} else {
			$('.js-nav').css('opacity','0');
		}
	}

	//gets width for banner nav bar
	$('.js-nav-check').css('width','' + ($('.js-title').width() - 16) + 'px');

	//bottom nav display/hide
	$('.bottom_nav').click(function(){

		if ( $('.bottom-nav__nav').hasClass('js-bottom-nav-show') ) {
			$('.bottom-nav__nav').removeClass('js-bottom-nav-show');
		} else {
			$('.bottom-nav__nav').addClass('js-bottom-nav-show');
		}
	})

})