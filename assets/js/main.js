$(document).ready(function(){

	check_nav_display();

	$('.js-nav-check').css('width','' + ($('.js-title').width() - 16) + 'px');

	$(window).scroll(function(){
		check_nav_display();
	})

	function check_nav_display(){
		if ( $(document).scrollTop() > $('.js-nav-check').offset().top + $('.js-nav-check').height() ) {
			$('.js-nav').css('opacity','1');
		}else{
			$('.js-nav').css('opacity','0');
		}
	}

})