$(document).ready(function(){
	var w_width = $(window).width();
	var w_height = $(window).height();
	var w_STop = $(window).scrollTop();

	var HdHt = $('.header').height();
	$('.con-wrap').css('margin-top', HdHt);

	$('#slide').bxSlider({
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true,
		adaptiveHeight: false,
		mode: 'horizontal',
		speed: 600,
		wrapperClass: 'bx-wrapper' // 얘가 없으면 안된다
	});
	
	$('#abm-list').bxSlider({
		slideWidth: 300,
		minSlides: 3,
    	maxSlides: 3,
    	moveSlides: 1,
    	slideMargin: 5,
		pager: false,
		wrapperClass: 'bx-wrapper2' // 얘가 없으면 안된다
	});
	

	
	//$('#menu').click(function(){
//		$(this).toggleClass({
//            
//        });
//	});
	
	//$('.con-wrap').css('margin-top',$('.header').height());
	
});