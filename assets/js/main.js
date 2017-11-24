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
	$('.burger-menu').click(function(){

		if ( $('.burger-menu').hasClass('js-bottom-nav-show') ) {
			$('.js-cross').css({'transform':'translateX(0px) rotate(45deg)','opacity':'0'});
			$('.js-burger').css({'transform':'translateX(0px)','opacity':'1'});
			$('.burger-menu').removeClass('js-bottom-nav-show');
			setTimeout(hide_nav,200);
		} else {
			$('header').css('right','0');
			setTimeout(show_nav,100);
		}
	})

	function show_nav(){
		$('.js-burger').css({'transform':'translateX(80px)','opacity':'0'}).dequeue();
		$('.js-cross').css({'transform':'translateX(80px) rotate(45deg)','opacity':'1'}).dequeue();
		$('.burger-menu').addClass('js-bottom-nav-show');
	}

	function hide_nav(){
		$('header').css('right','-300px');
	}

})