$(document).ready(function(){
	var w_width = $(window).width();
	var w_height = $(window).height();
	var w_STop = $(window).scrollTop();
	
	//처음에 화면이 작을때 바로 터져야 되니까.

	if(winW<=767){ //window너비가 767보다 같거나 작을때 해라
		$("#m-gnb li > a").click(function(e){//꺽쇠 꼭 넣기(직속). 왜냐하면 대메뉴 a에만 클릭이 되어야 되니까. 다른 a에 클릭된다고 하면 오류날 수 있다.
			$(".submenu").removeClass("open");
			$("+.submenu", this).addClass("open"); //여기서 this는 #gnb li a. 즉 $("+.d2", this) 이 말은 #gnb li a의 형제인 #gnb li .d2
			return false; //못넘기게하기
		});
	}

	//화면을 늘이고 줄이고 했을때 터지는 것
	$(window).resize(function(e){ //윈도우가 resize될때마다
		winW=$(window).width(); //사이즈를 바뀔때마다 실행
		if(winW<=767){ //window너비가 767보다 같거나 작을때 해라
		$("#m-gnb li > a").click(function(e){
			$(".submenu").removeClass("open");
			$("+.submenu", this).addClass("open"); //여기서 this는 #gnb li a
			return false; //원래 기능(click 기능)이 안되게 하기. 못넘기게하기
		});
	};
	});

	
	
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