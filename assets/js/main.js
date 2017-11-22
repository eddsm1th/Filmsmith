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
	get_title_nav_width();

	$(window).resize(function(){
		get_title_nav_width();
	})

	function get_title_nav_width(){ $('.js-nav-check').css('width','' + ($('.js-title').width() - 16) + 'px'); }

	//bottom nav display/hide
	$('.bottom_nav').click(function(){

		if ( $('.bottom-nav__nav').hasClass('js-bottom-nav-show') ) {
			$('.js-cross').fadeOut(150).queue(function(){
				$('.js-burger').fadeIn(150).dequeue();
			})

			$('.bottom-nav__nav').removeClass('js-bottom-nav-show');
		} else {
			$('.js-burger').fadeOut(150).queue(function(){
				$('.js-cross').fadeIn(150).dequeue();
			})

			$('.bottom-nav__nav').addClass('js-bottom-nav-show');
		}
	})

})