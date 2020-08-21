$(window).scroll(function(){
	$('nav').toggleClass('scrolled',$(this).scrollTop() > 50 );
});

var h=$(window).width();
    $('.header-banner').css({
    'height':h/5,});


$(window).resize(function(){
    var h=$(window).width();
    $('.header-banner').css({
    'height': h/5,
});
});
