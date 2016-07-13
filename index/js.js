$(function(){
	$('.search li').click(function(){
		$(this).addClass('bgcolor').siblings().removeClass('bgcolor');
	});
	$('.search_btn').hover(function(){
		$(this).addClass('search_btn:hover');
	});
	/*小圆点控制*/
	$('.img li').eq(0).show();
	$('.num li').bind('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var i=$(this).index();
		$('.img li').eq(i).stop().fadeIn().siblings().stop().fadeOut();
	});
	/*箭头控制*/
	$('.left').bind('click',function(){
		var i=$('.num li.selected').index();
		i=i-1;
		if(i<0){
			i=3;
		}
		$('.img li').eq(i).stop().fadeIn().siblings().stop().fadeOut();
		$('.num li').eq(i).addClass('selected').siblings().removeClass('selected');
	});
		$('.right').bind('click',function(){
		var i=$('.num li.selected').index();
		i=i+1;
		if(i>3){
			i=0;
		}
		$('.img li').eq(i).stop().fadeIn().siblings().stop().fadeOut();
		$('.num li').eq(i).addClass('selected').siblings().removeClass('selected');
	});
});
	/*封装函数*/
	function move(){
		$('.right').click();
		var i=$('.num li.selected').index();
		if(i>3){
			i=0;
		}
		$('.img li').eq(i).stop().fadeIn().siblings().stop().fadeOut();
		$('.num li').eq(i).addClass('selected').siblings().removeClass('selected');
	}
	/*自动轮播*/
	var timer=setInterval(move,3000);
	/*清除定时器*/
	$('.img li').hover(function(){
		clearInterval(timer);
		},function(){
		timer=setInterval(move,3000);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	