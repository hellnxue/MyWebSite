$(document).ready(function(){
	//审批下拉
	$('.sp_s h2 a').click(function(){
		$('.sp_info .info_li li:gt(0)').toggle();
		$(this).toggleClass('cur')
	})	
	$('.sp_n h2 a').click(function(){
		$('.sp_info .info_area p').toggle();
		$(this).toggleClass('cur')
		})	
	});


