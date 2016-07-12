$(function(){
	$('.search li').click(function(){
		$(this).addClass('bgcolor').siblings().removeClass('bgcolor');
	});
	$('.search_btn').hover(function(){
		$(this).addClass('search_btn:hover');
	});
	$('.img li').eq(0).show();
	$('.num li').bind('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var i=$(this).index();
		$('.img li').eq(i).fadeIn().siblings().fadeOut();
	});
})