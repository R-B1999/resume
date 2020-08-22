$(window).scroll(function(){
	$('nav').toggleClass('scrolled',$(this).scrollTop() > 50 );
});


            
var h = $('.fixed-top').outerHeight(); 
$('.header-height').css({
    'height':h,
});
        

$(window).resize(function(){
    var h=$('.fixed-top').outerHeight(); 
    $('.header-height').css({
    'height': h,
});
});


var w=$(window).width();
	if(w>1200){
		$('.profile').css({
			'width' : w/6,
			'border-radius':w/3,
			// 'padding-left': w/12,
			// 'padding-right': w/12,
		});
	}
	if(w<1200){
		$('.profile').css({
			'width' : w/4,
			'border-radius':w/2,
			// 'padding-left': w/8,
			// 'padding-right': w/8,
		});
		if(w<992){
			$('.profile').css({
				'width' : w/2,
				'border-radius':w,
				// 'padding-left': w/4,
				// 'padding-right': w/4,
			});
		}
	}

$(window).resize(function(){
	var w=$(window).width();
	if(w>1200){
		$('.profile').css({
			'width' : w/6,
			'border-radius':w/3,
			// 'padding-left': w/12,
			// 'padding-right': w/12,
		});
	}
	if(w<1200){
		$('.profile').css({
			'width' : w/4,
			'border-radius':w/2,
			// 'padding-left': w/8,
			// 'padding-right': w/8,
		});
		if(w<992){
			$('.profile').css({
				'width' : w/2,
				'border-radius':w,
				// 'padding-left': w/4,
				// 'padding-right': w/4,
			});
		}
	}
});