$(document).ready(function(){
	var w_width = $(window).width();
	var w_height = $(window).height();
	var w_STop = $(window).scrollTop();
	
	var HdHt = $('.header').height();
	$('.con-wrap').css('margin-top', HdHt);
	
	console.log(HdHt)
	
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
	
	$(window).scroll(function(e) {
        
    });
	
	//$('#menu').click(function(){
//		$(this).toggleClass({
//            
//        });
//	});
	
	//$('.con-wrap').css('margin-top',$('.header').height());
	
	console.log(w_width)
	console.log(w_height)
	console.log(w_STop)
	
});