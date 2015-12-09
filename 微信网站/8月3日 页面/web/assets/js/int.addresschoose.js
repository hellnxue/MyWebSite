$(document).ready(function() {
    // 地址选择类
    (function() {
        var chooseData = $('.address-choose'),
		chooseMask = $('.address-mask'),
		chooseSelected = $('.address_selected');
		
		$(document).mouseup(function(event){ 
		  if($(event.target).parents(".address_selected").length==0){
			chooseMask.hide();
			chooseSelected.hide();
		  } 
		});
		
		$(".address-choose-close").click(function(e){
			chooseMask.hide();
			chooseSelected.hide();
			$(".static-city").hide();
			$(".static-area").hide();
			$(".static-load").hide();
		});
		
		chooseData.click(function(e){
			chooseMask.show();
			chooseSelected.show();
			
			var province_data = $("#province-value").val(),
			city_data = $("#city-value").val(),
			area_data = $("#area-value").val(),
			load_data = $("#load-value").val();
			
			$(".static-province li").each(function(){
				if($(this).children("a").html() == province_data){
					$(this).addClass('cur');
				}
			});
			$(".static-city li").each(function(){
				if($(this).children("a").html() == city_data){
					$(this).addClass('cur');
				}
			});
			$(".static-area li").each(function(){
				if($(this).children("a").html() == area_data){
					$(this).addClass('cur');
				}
			});
			$(".static-load li").each(function(){
				if($(this).children("a").html() == load_data){
					$(this).addClass('cur');
				}
			});
			
			$(".static-province").show();
        });
		
		$(".static-province li").on("click", function (e) {
			var dataid = $(this).children("a").data('value'),
            url = $(".static-province").data('url');
			
			$(this).addClass('cur').siblings("li").removeClass('cur');
			
			$.ajax({
				url: url,
				type: 'get',
				dataType: 'json',
				data: {dataid: dataid}
			})
			.done(function(data) {
				if (data.staus) {
					var city_item = "";
				
					for(var i=0; i<data.list.length; i++)  
					{  
					   city_item += '<li><a data-value="'+data.list[i].value+'">'+data.list[i].title+'</a></li>';
					}
					
					$(".static-city").html(city_item).show();
					$(".static-province").hide();
				};
	
			   // $.Dialog({ title: '消息提示', content: '<div class="errortip">'+data.msg+'</div>', fixed: true, buttonshow: false});
				// console.log("success");
			})
			.fail(function() {
				console.log("error");
			});
			
			
		});
		
		$(document).on('click', '.static-city li', function() {
			var dataid = $(this).children("a").data('value'),
            url = $(".static-city").data('url');
			$(this).addClass('cur').siblings("li").removeClass('cur');
			
			$.ajax({
				url: url,
				type: 'get',
				dataType: 'json',
				data: {dataid: dataid}
			})
			.done(function(data) {
				if (data.staus) {
					var area_item = "";
				
					for(var i=0; i<data.list.length; i++)  
					{  
					   area_item += '<li><a data-value="'+data.list[i].value+'">'+data.list[i].title+'</a></li>';
					}
					
					$(".static-area").html(area_item).show();
					$(".static-city").hide();
				};
	
			   // $.Dialog({ title: '消息提示', content: '<div class="errortip">'+data.msg+'</div>', fixed: true, buttonshow: false});
				// console.log("success");
			})
			.fail(function() {
				console.log("error");
			});
			
			
		});
		
		$(document).on('click', '.static-area li', function() {
			var dataid = $(this).children("a").data('value'),
            url = $(".static-area").data('url');
			$(this).addClass('cur').siblings("li").removeClass('cur');
			
			$.ajax({
				url: url,
				type: 'get',
				dataType: 'json',
				data: {dataid: dataid}
			})
			.done(function(data) {
				if (data.staus) {
					var load_item = "";
				
					for(var i=0; i<data.list.length; i++)  
					{  
					   load_item += '<li><a data-value="'+data.list[i].value+'">'+data.list[i].title+'</a></li>';
					}
					
					$(".static-load").html(load_item).show();
					$(".static-area").hide();
				};
	
			   // $.Dialog({ title: '消息提示', content: '<div class="errortip">'+data.msg+'</div>', fixed: true, buttonshow: false});
				// console.log("success");
			})
			.fail(function() {
				console.log("error");
			});
			
			
		});
		
		$(document).on('click', '.static-load li', function() {
			$(this).addClass('cur').siblings("li").removeClass('cur');
			
			var province_val = $(".static-province li.cur").children("a").html(),
			city_val = $(".static-city li.cur").children("a").html(),
			area_val = $(".static-area li.cur").children("a").html()
			load_val = $(".static-load li.cur").children("a").html();
			
			$("#province-value").val(province_val);
			$("#city-value").val(city_val);
			$("#area-value").val(area_val);
			$("#load-value").val(load_val);
			
			$(".address-view").html("<span>"+province_val+"</span> <span>"+city_val+"</span> <span>"+area_val+"</span> <span>"+load_val+"</span>");
			
			$(".static-load").hide();
			chooseMask.hide();
			chooseSelected.hide();
		});
		
		
    })($);

});