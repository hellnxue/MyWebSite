/*
 * Image preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 
this.imagePreview = function(s){	
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 30;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	
	   cursrc="";
	$(s).click(function(e){
		$("html").css("overflow","hidden");
		//alert($(s).length);
		cursrc=$(this).attr("imgurl");
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<div style='position:absolute;border:1px solid #ccc;padding:5px;display:none;color:#fff;background-color:rgba(0,0,0,0.7);overflow:auto;top:"+$(window).scrollTop()+"px;left:0px;z-index:99999;' id='preview' align='center'><img style='' id='top_bag_img' src='"+ cursrc +"' alt='Image preview' onload='f_show(this)'  /></div>");								 
		
		$("#preview").click(function(){
			
		      $(this).remove();
			  $("#top_bag_img").remove();
			  $("html").css("overflow","auto");
         });
		 
		// xset=parseInt(($(window).width() - $("#preview img")[0].width)/2);
		//yset=($(window).height() - $($("#preview img").get(0)).height())/2;
		 
		
		 $("#preview").width($(window).width());
		 $("#preview").height($(window).height());
		 
		/*if(yset<0){
		   yset=0;	
		}else{
		   yset=parseInt(yset);	
		}*/
		
		
		
		$("#preview")
			//.css("padding-top",yset + "px")
			//.css("padding-left",xset + "px")
			.fadeIn("fast",function(){
				
				
				/*$("body").append("<img style='position:absolute;z-index:999991' id='top_bag_img' src='"+ cursrc +"' alt='Image preview' />");
				
				xset=parseInt(($(window).width() - $("#top_bag_img").width())/2);
		        yset=($(window).height() - $("#top_bag_img").height())/2;
				if(yset<0){
		            yset=0;	
		        }else{
		            yset=parseInt(yset);	
		        }
				$("#top_bag_img").css("top",yset+"px");
				$("#top_bag_img").css("left",xset+"px");
				$("#top_bag_img").click(function(){
					$("#preview").click();
					
					});*/
				//$("#preview").css("opacity","1");
				});
			
			
			
		
			
									
    });	
	
	
	$(window).scroll(function(){
		
		$("#preview").css("top",$(window).scrollTop()+"px");
		
		});
	
				
};


function f_show(obj){
	yset=($(window).height() - $($("#preview img").get(0)).height())/2;
	if(yset<0){
		   yset=0;	
		}else{
		   yset=parseInt(yset);	
	}
	$("#preview")
			.css("padding-top",yset + "px")	 ;
}





