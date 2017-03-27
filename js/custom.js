$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});

/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

$( function() {

	/* components */

	// mobyle menu
	if($('.js-navbar__button').length) {
		var $mainNav = $('.navbar-collapse');
		$('.js-navbar__button').on('click', function() {
			$(this).toggleClass('active_btn');
			$mainNav.slideToggle('fast', function(){
				$mainNav.removeAttr('style').toggleClass('open');
			});
		});
	};

	/* form styler */
	if($('#form-order input, #form-order select, #form-order input').length){
		$('#form-order input, #form-order select, #form-order input').styler();
	};

	/* calendar */
	if($('#js-datepicker1').length) {
		$( "#js-datepicker1" ).datepicker({
			dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
			monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сетябрь", "Октябрь", "Ноябрь", "Декабрь" ]
		});
	};
	if($('#js-datepicker2').length) {
		$( "#js-datepicker2" ).datepicker({
			dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
			monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сетябрь", "Октябрь", "Ноябрь", "Декабрь" ]
		});
	};
	if($('.icon-date.one').length) {
		$( ".icon-date.one" ).on('click', function(){
			$("#js-datepicker1").trigger('focus');
		});
	};
	if($('.icon-date.one').length) {
		$( ".icon-date.two" ).on('click', function(){
			$("#js-datepicker2").trigger('focus');
		});
	};

	/* Main-carousel*/
	if($('.main-carousel').length) {
		$('.main-carousel').slick({
			infinite: true,
			dots: false,
			speed: 1000,
			fade: true,
			autoplay:true,
			arrows:false,
			autoplaySpeed:5000
		});
	};

	/* placeholder*/
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	// $('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



