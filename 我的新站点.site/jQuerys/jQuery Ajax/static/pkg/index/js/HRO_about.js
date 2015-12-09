$(function () {
		$(window).scroll(function () {
			var cy =$(window).height();
			for(var i=1;i<7;i++){
				$("#scor"+i).each(function() {
					var juli =($(this).offset().top)-($(window).scrollTop());
					if(juli>=(-($(this).height()/2)) && juli<(cy/2.2)){
						$("#menu"+i).addClass("w_x");
					}
					else{
						$("#menu"+i).removeClass("w_x");
					}
                });	
			}
		});
  

var h1=244;
  
  $(window).scroll(function(event) {
    var val=$(document).scrollTop();
    if (val>h1) {
        $(".left_main01").css({
        "position": 'fixed',
        "top":0,
        "left":175,
        "z-index":4

      });
        $(".wf_cplist").css('padding-top', '19px');
     
    }
    
    else{
     

      $(".left_main01").css({
        "position": 'static'
        
      });
    }
  });

});
	$(function(){
	$(".level_pic ul li a").click(function(){
		$(".level_pic ul li a").removeClass("vip_bg_tx");
		$(".level_pic ul li a").children().removeClass("changeColor");
		$(this).children().addClass("changeColor");
		$(this).addClass("vip_bg_tx");
		$("#num").val($(this).attr("id"));
		});
	});
