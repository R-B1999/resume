$(window).scroll(function(){
	$('nav').toggleClass('scrolled',$(this).scrollTop() > 50 );
});


var h=$(window).width();
    $('.banner').css({
    'height':h/2,});


$(window).resize(function(){
    var h=$(window).width();
    $('.banner').css({
    'height': h/2,
});
});
