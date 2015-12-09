window.console = window.console || {}; 
console.log || (console.log = opera.postError);

$(document).ready(function(){
	//审批下拉
	$('.sp_s h2 a').click(function(){
	$('.sp_info .info_li li:gt(0)').toggle();
	$(this).toggleClass('cur')
	});
	$('.sp_n h2 a').click(function(){
	$('.sp_info .info_area p').toggle();
	$(this).toggleClass('cur')
	});	
    //城市触发
	$('.city-wrapper li').click(function(){
		$(this).parents(".city-wrapper").find("li").removeClass('cur');
		$(this).addClass('cur');
	})
	//城市
	$(".city-nav li").each(function (e) {
		$(this).click(function () {
			  //$(this).parents("li").addClass("cur").siblings().removeClass("cur");
			  //$(".city-wrapper").animate({ scrollTop: $(".city-wrapper h3").get(e).offsetTop}, 1000);
			  $(document).scrollTop($(".cityhli").get(e).offsetTop);
		});
	});
	//通讯录
	$('.tongxunlu-ico').click(function(){
		if(!$(this).hasClass('cur')){
			$(this).addClass('cur').transition({ rotate: 180 });
			$('.select_list').show();
		}else{
			$(this).removeClass('cur').transition({ rotate: 0 });
			$('.select_list').hide();
		}
	});
	//首页底部
	$('.fot_bg li').click(function(){
		$(this).addClass('cur');
		})
		
		
	$('.clearico').click(function(){
		$(".search-keyword").val("");
		//$(this).parents(".am-g").find(".page-back").show();
		//$(this).parents(".am-g").find(".touchable").hide();
	});
	$(".touchable").on("click", function (e) {
		var keyword = $("#searchkeyword").val();
		window.location = $(this).parents(".am-g").data('posturl')+'?keyword='+keyword;
    });
	
	//选项卡
	$('.tab_menu li').click(function() {
		$(this).addClass('cur').siblings().removeClass('cur');
		var index = $(this).index();
		$('.tab_cont_view > div').eq(index).show().siblings().hide();
	});
	
	
	
	$('.menu-list-item li.subli').click(function() {
		if(!$(this).hasClass('down')){
			$(this).addClass('down').siblings().removeClass('down');
		}else{
			if($(event.target).parents(".gsidlist").length==0){
				$(this).removeClass('down');
			}
		}
	});
	
	$(document).on('click', '[data-gsid]', function() {
		$(this).parents(".menu-list-item").find("[data-gsid]").removeClass('cur');
		$(this).addClass('cur');
	});
	
	//搜索关键词
	$(document).on("change", "#searchkeyword",function() {
		var keyword = $(this).val();
		if(keyword !==''){
			$(this).parents(".am-g").find(".page-back").hide();
			$(this).parents(".am-g").find(".touchable").show();
		}else{
			$(this).parents(".am-g").find(".page-back").show();
			$(this).parents(".am-g").find(".touchable").hide();
		}
		
    });
	//
	$('.fdj_ico').click(function(){
		$('.page-header').show();
		});	
	$('#searchkeyword').focus(function(){
		$(".page-back").show();
		$(this).parent().addClass('cur')
		});
		
	$('#searchkeyword').blur(function(){
		$(this).parent().addClass('cur')
		});
	$('.page-back').click(function(){
		$('.page-header').hide();
		$(".page-back").hide();
		$(this).parent(".search-main").find(".search_ico").removeClass('cur')
	});
		
		
	$('.index-home-ico').click(function(){	
		if(!$(this).hasClass('cur')){
			$(this).addClass('cur').transition({ rotate: 180 });
			$(".foot-home-over").animate({ 'bottom': '49px'}, 1000);
		}else{
			$(this).removeClass('cur').transition({ rotate: 0 });
			$(".foot-home-over").animate({ 'bottom': '-49px'}, 1000);
		}
		//$(this).animate({ '-webkit-transform': 'rotate(180deg)'}, 1000);
		
		//$(this).animate({textIndent: 0},{step: function(now, fx) {$(this).css('-webkit-transform', 'rotate(180deg)');},duration: 'slow'},'linear');
	});
});


