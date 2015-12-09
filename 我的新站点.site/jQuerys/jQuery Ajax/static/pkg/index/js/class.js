jQuery(document).ready(function($) {
  //此处是解决办法的光标经过事件
 
    $(".anlie li").hover(function() {
      
        $(this).children('a').css('display', 'block');
    }, function() {
        
        $(this).children('a').css('display', 'none');
    });


//此处是解决办法的光标经过事件结束
	
   $(window).scroll(function(event) {
		
		 var top_h =$(document).scrollTop();
		
			 
 if (top_h>600) {
 		$(".go_top").fadeIn(400);
 		$(".icon").fadeIn(100);
 		$(".icon_top_1").addClass('fadeInLeft animated');
 		$(".icon_top_2").addClass('fadeInDown animated');
 		$(".icon_top_3").addClass('fadeInRight animated');
		
		if (top_h>1100) {
						$(".pic_huaxia").stop().fadeIn(100);
						$(".pic_huaxia").addClass('fadeInRight animated');
		
						if (top_h>1700) {
							$(".left_pic_1").stop().fadeIn(100);
							$(".left_pic_1").addClass('fadeInLeft animated');
							$(".left_pic_2").stop().fadeIn(1000);
							$(".left_pic_2").addClass('fadeInLeft animated');
							$(".left_pic_3").stop().fadeIn(2000);
							$(".left_pic_3").addClass('fadeInLeft animated');
							
 							if (top_h>2200) {
 								$(".insert").stop().fadeIn(200); 
 								$(".insert").addClass('fadeInRight animated');
 								
 								if (top_h>2400) {
 									$(".five_content").fadeIn(500);
 									$(".health_checkup ").fadeIn(100);
 									$(".health_checkup").addClass('fadeInLeft  animated');
 									$(".advice ").fadeIn(400);
 									$(".advice").addClass('fadeInDown  animated');
 									$(".welfare ").fadeIn(800);
 									$(".welfare").addClass('fadeInUp  animated');
 									$(".insurance ").fadeIn(1200);
 									$(".insurance").addClass('fadeInRight  animated');


 									if (top_h>2900) {

 										$(".six_top").fadeIn(1000 );
 										$(".six_top").addClass('fadeInLeft animated');
 										if (top_h>3100) {
											$(".six_mid li").fadeIn(400);
											$(".six_mid .six_pic").addClass('fadeIn animated')
										if (top_h>3200) {

											$(".six_bottom").fadeIn(1000);
											$(".six_bottom").addClass('fadeInRight animated');

											if (top_h>3400) {

											$(".icon_partner").fadeIn(1500);
											$(".icon_partner1").addClass('fadeInDown animated');
											$(".icon_partner2").addClass('fadeInDown animated');
											$(".icon_partner3").addClass('fadeInDown animated');
											$(".icon_partner4").addClass('fadeInDown animated');
											$(".icon_partner5").addClass('fadeInDown animated');
											$(".icon_partner6").addClass('fadeInDown animated');
											$(".icon_partner7").addClass('fadeInDown animated');
											

												if (top_h>3700) {
													$(".foot_start").fadeIn(800);
													$(".foot_start").addClass(' fadeInRight animated');
												}


											}


										}



										}
	 								}

 									 
 									 
 									 
 									 
 								} 
 							}

						}
		} 	
		

 }
 	 else{
 		$(".go_top").fadeOut(400);
 			}
 
	});












































































































});