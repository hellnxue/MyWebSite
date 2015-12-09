var PayInfo = {
	config: {
		price: [0,28888,48888,68888,88888]
	},
	init: function() {
		PayInfo.initEvent();
		PayInfo.fn.showPayInfo();
	},
	initEvent: function() {
		$("input.the_number_of").bind("input propertychange", function() {
			PayInfo.fn.showPayInfo();			
		});
		
		$("div.form_rad label").bind("click", function(){
			var radioId = $(this).attr('name');
			$('label').removeAttr('class') && $(this).attr('class', 'checked');
			$('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
			PayInfo.fn.showPayInfo();	
		});		
	},
	fn: {
		showPayInfo: function() {
			var s = $("input.the_number_of").val();
			if(s){
				var sm=s.match(/^[0-9]*[1-9][0-9]*$/g);
				if(!s){
					$("input.the_number_of").val("");
					return;
				}	
			}else{
				return;
			}				
			var people = $("input.the_number_of").val();
			var year = $("label.checked").text();
			if (people<=1000) {
				PayInfo.fn.selectLevel(0);
				PayInfo.fn.calTotalPrice(year, PayInfo.config.price[0]);
			}else if(people>1000&&people<=5000) {
				PayInfo.fn.selectLevel(1);
				PayInfo.fn.calTotalPrice(year, PayInfo.config.price[1]);
			}else if(people>5000&&people<=20000) {
				PayInfo.fn.selectLevel(2);
				PayInfo.fn.calTotalPrice(year, PayInfo.config.price[2]);
			}else if(people>20000&&people<=50000) {
				PayInfo.fn.selectLevel(3);
				PayInfo.fn.calTotalPrice(year, PayInfo.config.price[3]);
			}else if(people>50000) {
				PayInfo.fn.selectLevel(4);
				PayInfo.fn.calTotalPrice(year, PayInfo.config.price[4]);
			}						
		},
		selectLevel:function(lv) {
			$("div.level_pic").find("li").each(function(index, element) {
                $(this).children().children().removeClass("changeColor");
            });
			var lis = $("div.level_pic").find("li");
			
			$(lis[lv]).children('a').addClass('vip_bg_tx').parent().siblings().children('a').removeClass('vip_bg_tx');
			$(lis[lv]).children('a').addClass('txt_white').parent().parent().siblings().children().children('span,em').removeClass('txt_white');	
			$(lis[lv]).children().children().addClass("changeColor");
		},
		calTotalPrice:function(year, price) {
			$(".price_yuan em").html(year*price);
		}
	}
}



jQuery(document).ready(function($) {
	 $(".cont_head_l a").hover(function() {
	 	 $(".cont_head_r").stop().show(100, function() {
	 	 	/*$(this).hover(function() {
	 	 		$(this).show(0);
	 	 	}, function() {
	 	 		$(this).hide(400);
	 	 	});*/
	 	 });
	 }, function() {
	 	 
	 	 $(".cont_head_r").stop().hide(100);
	 });

/*右侧显示切换*/
 
$(".news_r_1 .list_one,.list_two,.list_three").hover(function() {
	 $(this).children('.hide_toogle').show().parent().siblings().children('.hide_toogle').hide();

}, function() {
	  

});

$(".table_math_a a").click(function(event) {
	$(this).css('color', '#ababad').siblings().css('color', '#bac9f0');

});

/*$("a.the_one_vip").click(function(event) {
	  $(this).addClass('vip_bg_tx').parent().siblings().children('a').removeClass('vip_bg_tx');
	  $(this).children('span,em').addClass('txt_white').parent().parent().siblings().children().children('span,em').removeClass('txt_white'); 
);*/

/*帮助中心部分*/

	$(".register_flow a").click(function(event) {
		$(this).addClass('cur_bgc').parent().siblings().children().removeClass('cur_bgc')
	});
 
/*支付页面底部选择方式*/	
 
$(".radio").click(function(event) {
	
	$(this).addClass('radio_cur').parent().siblings().children('.radio').removeClass('radio_cur');
});

//初始化PayInfo
PayInfo.init();
});


