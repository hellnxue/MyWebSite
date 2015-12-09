jQuery(document).ready(function($) {
//$(window).scroll(function(event) {
//	  var top_h_B =$(document).scrollTop();
/*点击蓝/红/帮手按钮功能*/
$(".detail_word").hover(function() {
	$(this).siblings('.flow_erweima_HRO').show();
}, function() {
	$(this).siblings('.flow_erweima_HRO').hide();
});
	$(".two_party_left").click(function(event) {
		$(this).addClass('two_party_left_shadow').siblings().removeClass('two_party_left_shadow');
		$(".paper_plane").empty();
		$(".paper_plane").html("<img src='images/banner-A.png' alt='' '/'>")
		$(".two_cont_bot").show();

		$(".two_party_B,.HR_helper_mode,.weixin_mode").hide();		

		$(".three_party .ul").show();
		$(".three_party_ol_B,.three_party_ol_HR").hide();
		$(".inner_mode").hide();
		$(".two_party").css('height', '900px');
		$(".four_content_app").show();
		$(".China_sever").hide();
		$(".four_party").css({
			backgroundColor: '#f5f5f5',
			height: '700px'
		});

	});	
	$(".HR_hrlper").click(function(event) {
		$(this).addClass('two_party_left_shadow').siblings().removeClass('two_party_left_shadow');
		$(".paper_plane").empty();
		$(".paper_plane").html("<img src='images/banner-C.png' alt='' '/'>")

		$(".two_party_B,.two_cont_bot").hide();		
		$(".HR_helper_mode").show();
		$(".two_party").css('height', '400px');
		$(".three_party_ol_B,.three_party .ul").hide();

		$(".three_party_ol_HR,.weixin_mode").show();
		$(".inner_mode").hide();

		$(".four_content_app").hide();
		$(".China_sever").hide();
		$(".four_party").css({
			backgroundColor: '#f5f5f5',
			height: '480px'
		});

	});	
	$(".two_party_top").click(function(event) {
		$(this).addClass('two_party_left_shadow').siblings().removeClass('two_party_left_shadow');
		$(".paper_plane").empty();
		$(".paper_plane").html("<img src='images/banner-B.png' alt='' '/'>")
		$(".two_cont_bot").hide();
		$(".two_party_B").show();		

		$(".three_party .ul,.weixin_mode,.three_party_ol_HR").hide();
		$(".three_party_ol_B").show();
		$(".inner_mode").show();
		$(".two_party").css('height', '900px');
		$(".four_content_app").hide();
		$(".China_sever").show();
		$(".four_party").css({
			backgroundColor: '#fff',
			height: '800px'
		});

		
	});

	
//});

/*点击蓝/红色按钮功能结束*/
   
   $(window).scroll(function(event) {
		
  var top_h =$(document).scrollTop();
		
  
 if (top_h>600) {
 				$(".bot_three,.bot_two_B").fadeIn(300);
 		 		$(".bot_three,.bot_two_B").addClass('fadeInRight animated'); 			
 		 		 
		
			if (top_h>900) {
								$(".party_ol_HR_1").addClass('fadeInLeft animated').fadeIn(400, function() {
						  		
						  		$(".party_ol_HR_2").addClass('fadeInDown animated').fadeIn(400, function() {
						  			
						  				$(".party_ol_HR_3").addClass('fadeInRight animated').fadeIn(400, function() {
						  					$(".party_ol_HR_4").addClass('fadeInRight animated').fadeIn(400, function() {
						  						$(".party_ol_HR_5").addClass('fadeInUp animated').fadeIn(400, function() {
						  							$(".party_ol_HR_6").addClass('fadeInLeft animated').fadeIn(400, function() {	});
						  									});						  			
						  							});						  			
						  					});
						  			});

						  }); 



				if (top_h>1300) {	 		 		  		 		 		  				 
		 		 		   $(".right_pic_phone").addClass('fadeInRight animated').fadeIn(400);	 		  
						  $(".three_li_1").addClass('fadeInLeft animated').fadeIn(400, function() {
						  		
						  		$(".three_li_2").addClass('fadeInDown animated').fadeIn(400, function() {
						  			
						  				$(".three_li_3").addClass('fadeInRight animated').fadeIn(400, function() {
						  					$(".three_li_4").addClass('fadeInRight animated').fadeIn(400, function() {
						  						$(".three_li_5").addClass('fadeInUp animated').fadeIn(400, function() {
						  							$(".three_li_6").addClass('fadeInLeft animated').fadeIn(400, function() {	});
						  									});						  			
						  							});						  			
						  					});
						  			});

						  }); 
						   $(".party_ol_B_1").addClass('fadeInLeft animated').fadeIn(400, function() {
						  		
						  		$(".party_ol_B_2").addClass('fadeInDown animated').fadeIn(400, function() {
						  			
						  				$(".party_ol_B_3").addClass('fadeInRight animated').fadeIn(400, function() {
						  					$(".party_ol_B_4").addClass('fadeInRight animated').fadeIn(400, function() {
						  						$(".party_ol_B_5").addClass('fadeInUp animated').fadeIn(400, function() {
						  							$(".party_ol_B_6").addClass('fadeInLeft animated').fadeIn(400, function() {		
						  								$(".party_ol_B_7").addClass('fadeInDown animated').fadeIn(400, function() {	
						  								$(".party_ol_B_8").addClass('fadeInRight animated').fadeIn(400, function() {		

						  														});	

						  												});


						  											});
						  									});						  			
						  							});						  			
						  					});
						  			});

						  }); 
						 
						if (top_h>1900) {
							$(".foot_start").fadeIn(400);
								 $(" .foot_start").addClass('fadeInRight animated');


							if (top_h>2200) {
							
								$(".app_icon_left").fadeIn(400);
								$(".app_icon_left").addClass('fadeInLeft animated');								
								$(".app_icon_right").fadeIn(400);
								$(".app_icon_right").addClass('fadeInRight animated');

							
 							if (top_h>2360) {
 								
 									$(".btn").fadeIn(400);
								   $(".btn").addClass('fadeInDown animated');
 								if (top_h>2650) {
 									
 										$(".foot_start").fadeIn(400);
								$(".foot_start").addClass('fadeInRight animated');


 									if (top_h>2900) {

 										

 										if (top_h>3100) {
											

										if (top_h>3200) {

											


											if (top_h>3400) {

											

											

												if (top_h>3700) {
													


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
			}

		

 }
 	 else{
 		$(".go_top").fadeOut(400);
		
 			}
 			if(top_h<600){
				$(".bot_three").hide().removeClass('fadeInRight animated'); 			
 				$(".bot_two_B").hide().removeClass('fadeInRight animated');
 			/*}
 			else if (top_h<600) {*/
 				$(".party_ol_HR_1").hide(400).removeClass('fadeInLeft animated');
		        $(".party_ol_HR_2").hide(400).removeClass('fadeInDown animated');
		        $(".party_ol_HR_3").hide(400).removeClass('fadeInRight animated');
		        $(".party_ol_HR_4").hide(400).removeClass('fadeInRight animated');
		        $(".party_ol_HR_5").hide(400).removeClass('fadeInUp animated');
		        $(".party_ol_HR_6").hide(400).removeClass('fadeInLeft animated');
 			}

 			else if ( top_h<1300) {
 				 
 			 	$(".three_li_1,.party_ol_B_1").hide(400).removeClass('fadeInLeft animated');
		        $(".three_li_2,.party_ol_B_2").hide(400).removeClass('fadeInDown animated');
		        $(".three_li_3,.party_ol_B_3").hide(400).removeClass('fadeInRight animated');
		        $(".three_li_4,.party_ol_B_4,.right_pic_phone").hide(400).removeClass('fadeInRight animated');
		        $(".three_li_5,.party_ol_B_5").hide(400).removeClass('fadeInUp animated');
		        $(".three_li_6,.party_ol_B_6").hide(400).removeClass('fadeInLeft animated');
		        $(".party_ol_B_7").hide(400).removeClass('fadeInDown animated');
		        $(".party_ol_B_8").hide(400).removeClass('fadeInRight animated');	 
 			}

 			else if (top_h<2200) {
				$(".app_icon_left").hide().removeClass('fadeInLeft animated');	
				$(".app_icon_right").hide().removeClass('fadeInRight animated');
 			}

 			else if (top_h<2360) {
 				$(".btn").hide().removeClass('fadeInDown animated');
 			}
 			else if (top_h<2650) {
 				$(".foot_start").hide().removeClass('fadeInRight animated');
 			}

 		
	});












































































































});