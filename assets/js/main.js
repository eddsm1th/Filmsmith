$(document).ready(function(){

	//shows/hides top navbar depending on scroll amount
	check_nav_display();

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

	//gets width for banner nav bar
	$('.js-nav-check').css('width','' + ($('.js-title').width() - 16) + 'px');

})