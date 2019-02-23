//搜索部分
var uiSreachSelected = $('.ui-search-selected');
var uiSreachSelectList = $('.ui-search-select-list')
var subject = $('a', uiSreachSelectList)
uiSreachSelected.click(function() {
	if(uiSreachSelectList.css('display')=='none') {
		uiSreachSelectList.css('display', 'block');
		return false;
	}
	else{
		uiSreachSelectList.css('display', 'none');
	}
});
subject.click(function() {
	uiSreachSelected.text($(this).text());
	uiSreachSelectList.css('display', 'none');
	return false;
})
$('body').click(function() {
	uiSreachSelectList.css('display', 'none');
})
//content-tab部分
var item=$('.item','.caption');
item.click(function(){
	item.removeClass('item_focus');
	$(this).addClass('item_focus');
	if(this==item.get(0)){
		$('.item','.block').eq(0).show();
		$('.item','.block').eq(0).next().hide();
		}
	else{
		$('.item','.block').eq(0).next().show();
		$('.item','.block').eq(0).hide();
	}
	return false;
})
var blockCaptionIteam=$('.block-caption-item');
blockCaptionIteam.click(function(){
	blockCaptionIteam.removeClass('block-caption-item_focus');
	$(this).addClass('block-caption-item_focus');
	return false;
})
//backtop部分
var height=$(window).scroll(function(){
	$('.backTop').show();
	if($(window).scrollTop()==0){
		$('.backTop').hide();
	}
});
var backTop=$('.backTop');
backTop.click(function(){
	scrollTo(0,0);
})
