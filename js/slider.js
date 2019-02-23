var index=0;
var uiSliderWrap=$('.ui-slider-wrap');
var timer=null;
function slideImg(){
   timer=setInterval(function(){
	index++;
	if(index>=3){
		index=0;
	}
	changeImg()
}
,2000)
}
//鼠标移入清除计时器
uiSliderWrap.mouseover(function() {
	clearInterval(timer);
})
$('.ui-slider-arrow .item').mouseover(function() {
	clearInterval(timer);
})
$('.ui-slider-process .item').mouseover(function() {
	clearInterval(timer);
})
//鼠标移出开始计时器
uiSliderWrap.mouseout(function() {
	slideImg();
})
$('.ui-slider-arrow .item').mouseout(function() {
	slideImg();
})
$('.ui-slider-process .item').mouseover(function() {
	clearInterval(timer);
})
//左右按钮
$('.ui-slider-arrow .left').click(
	function(){
	     index--;
		if(index < 0) {
			index = 2;
		}
		changeImg();
	}
)
$('.ui-slider-arrow .right').click(
	function(){
	     index++;
		if(index >= 3) {
			index = 0;
		}
		changeImg();
	}
)	
//button
$('.ui-slider-process .item').click(
	
	function(){
		index=$(this).index();
    changeImg();
	}
	
)


function changeImg(){
	if(index==0){
		uiSliderWrap.css('left','0');
	}
	else if(index==1){
		uiSliderWrap.css('left','-544px');
	}
	else if(index==2){
		uiSliderWrap.css('left','-1088px');
	}
	$('.ui-slider-process .item').removeClass('item_focus');
	$('.ui-slider-process .item').eq(index).addClass('item_focus')
}
slideImg();