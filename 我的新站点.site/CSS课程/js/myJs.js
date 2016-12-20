$(document).ready(function(){
	
    $("#layerTest").on("click",function(){

		layerShow();

	});

 	$("div[data-outer]").on("click",function(){

		layerHide();							 
	});

});




function layerShow(){

	$("div[data-outer]").removeClass("hidden");
	$("div[data-layer]").removeClass("hidden")//.css("bottom","-200px");

}


function layerHide(){
	
	$("div[data-outer]").addClass("hidden");
	$("div[data-layer]").addClass("hidden")//.css("bottom","0");
}