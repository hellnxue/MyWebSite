// JavaScript Document
//对象级别插件
$(function(){
		   
		$.fn.extend({
		  "lifocuscolor":function(foc_color){
			  
			     var def_color="pink";
				 var las_color="yellow";
			     foc_color=(foc_color==undefined)?def_color:foc_color;
				
				 $(this).find("li").each(function(){
				     
					$(this).mouseover(function(){
					   $(this).css("background-color",foc_color);				
											   
					        });
					$(this).mouseout(function(){
											  
					    $(this).css("background-color",las_color);				
											  
			                });
												 
												 
												 
				     });
				    return $(this);//返回jquery对象
			    }
		  
		  
		       });   
		   
		   })

