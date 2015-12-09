jQuery(document).ready(function($) {
/*头部导航鼠标滑过效果*/
/*导航菜单*/
$(" .right_bottom li").mouseover(function(event) {
	$(this).addClass(' current').siblings().removeClass(' current ');
	
});
$(".artical_HRO li").mouseover(function(event) {
	$(this).addClass(' current ').siblings().removeClass(' current ');
	$(this).children('a').addClass(' white_color ').parent().siblings().children('a').removeClass(' white_color ');
	 
});
/*登录注册处*/
$(" .right_top li a").mouseover(function(event) {
	$(this).addClass(' buy blue').parent().siblings().children().removeClass(' buy blue ');
 $(this).css('color', '#fff!important');
});
 
$(".right_top .people_center").mouseover(function(event) {
	$(this).removeClass('buy');

});
/*头部导航鼠标滑过效果——结束*/






	  $(window).scroll(function(event) {
	var height=$(window).scrollTop();

	if (height>600) {

	$(".top_arr").click(function(event) {
		$(window).scrollTop(0);

	});
}
});


/*以上是返回顶部部分*/	 
	var nav_two_h=1300;
   $(window).scroll(function(event) {
		
		 var top_h =$(document).scrollTop();
		 
		if (top_h<nav_two_h) { 
				$(".nav_two").css({
					"position": 'absolute',
					"z-Index":"5",
					/*"top":"1300px",*/
					"top":"1250px"					
					});

				$(".three_content").css({
				/*top:700*/ 
			});
			}


		else if (top_h>=nav_two_h) { 
				$(".nav_two").css({
					"position": 'fixed',
					"z-Index":"5",
					"top":"0"

				});
			$(".three_content").css({
				/*top:650 */
			});
		}

		 
		 	
	});












































































































});