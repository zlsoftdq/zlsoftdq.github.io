$(function() {

	if($('#announcement .news .news_list li').length>1){
		var latest_pause=false;
		$('#announcement .news .news_list').hover(function(){latest_pause=true},function(){latest_pause=false});
		setInterval((function(){
			if(latest_pause)return;
			$('#announcement .news .news_list li:first').fadeOut(function(){$(this).appendTo($('#announcement .news .news_list')).show()});
		}),5000);
	}
});
