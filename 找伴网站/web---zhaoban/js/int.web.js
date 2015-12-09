
$(document).ready(function() {
	//顶部下拉
	$('.my_ban').hover(function(){
		$(this).children().next().show();
		$(this).addClass('cur')
		},function(){
		$(this).children().next().hide();
		$(this).removeClass('cur')	
			})
	//产品分类
	$(".goodsClass li").mouseover(function() {
        $(this).addClass("cur").siblings().removeClass("cur");
		$(this).siblings().children("div.sub_box").hide();
        $(this).children("div.sub_box").show();
    });
	
	//
	$(".floor-menu li").mouseover(function() {
        $(this).addClass("cur").siblings().removeClass("cur");
		$(this).parents(".floor_box").find(".tab-box").eq($(this).index()).show().siblings().hide();
    });
	
	$(".goodsClass").mouseleave(function(){
        $(this).children("li").removeClass("cur").children("div.sub_box").hide();
	});
	
	$(".menuAll").mouseover(function() {
		$(this).siblings(".menuAlllist").show();
    });
	
	$(".menuAlllist").mouseleave(function(){
        $(this).hide();
	});
	
	//产品筛选展开
	$('.select_table tr:gt(2)').hide()
	$('.open_list').click(function(){
		if($(this).hasClass('cur')){
			$('.select_table tr:gt(2)').hide();
			$(this).removeClass('cur').find("span").html("展开");
		}else{
			$('.select_table tr:gt(2)').show();
			$(this).addClass('cur').find("span").html("隐藏");
		}
		
	});
	//人力通
	$('.recommended_shop_list li').hover(function(){
		$(this).children('.mk_btn').show();
		},function(){
		$(this).children('.mk_btn').hide();	
			})  
    //产品列表
    $('.shop_products_li ul li .img').hover(function() {
        $(this).children().children().next().show();
    },
    function() {
        $(this).children().children().next().hide();
    })
    //
    $('.products_menu > ul > li').click(function() {
        $(this).addClass('cur').siblings().removeClass('cur')
    });
	
	
	$("#store-selector").mouseover(function() {
		$(this).addClass("hover");
    });
	
	
    //首页轮换
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });

	//小幅轮换
    /*Comflash($(".ComComflash1"));
    Comflash($(".ComComflash2"));
    Comflash($(".ComComflash3"));
    Comflash($(".ComComflash4"));*/
	
	$('.advt-list > span.prev').click(function() {
		var wraper = $(this).parents(".advt-list"),img = $(this).parents(".advt-list").find('ul'),w = img.find('li').outerWidth(true);
		img.find('li:last').prependTo(img);
		img.css({
			'margin-left': -w
		});
		img.animate({
			'margin-left': 0
		});
	});
	
	$('.advt-list > span.next').click(function() {
		var wraper = $(this).parents(".advt-list"),img = $(this).parents(".advt-list").find('ul'),w = img.find('li').outerWidth(true);
		img.animate({
            'margin-left': -w
        },
        function() {
            img.find('li').eq(0).appendTo(img);
            img.css({
                'margin-left': 0
            });
        });
	});

    //滚动代码
    DY_scroll('.img_scroll_a', '.prev_a', '.next_a', '.img_list_a', 3, 'false');
    //首页栏目滚动
    $('.menu_img_scroll .img_list li').hover(function() {
        $(this).animate({
            marginTop: '-12px'
        })
    },
    function() {
        $(this).animate({
            marginTop: '-0px'
        })
    });
	
	//调用加减
	if($('.buy_goods_num').length > 0){
	  $('.buy_goods_num').iVaryVal({},flowcakbak);
	};

    $('.menu ul > li').click(function() {
        var $this = $(this);
        if ($this.is(":has(ul)")) {
            $(this).children().addClass("curs").next("ul").slideToggle(300);
            $(this).siblings().children().next().slideUp("slow");
            $(this).siblings().children().removeClass("curs");
        }
    });
    //产品内页选项卡
    var $tags = $('.tab_tags a');
    $tags.click(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        var index = $tags.index(this);
		$('.tab_cont > div').eq(index).show().siblings().hide();
    });
	//客服悬浮
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	}) 
	})
	$(window).scroll(function(e){
	b();	
	
	
    //调用加减
	if($('.Js_cart_goto').length > 0){
	  $('.Js_cart_goto').iVaryVal({},flowcakbak);
	};
	
	$(".alert-but").click(function() {
		var dig_title = $(this).attr('dig-title'),dig_message = $(this).attr('dig-message');
		$.Dialog({ title: dig_title, content: '<div class="errortip">'+dig_message+'</div>', fixed: true, buttonshow: false});
	});
	 
	
});

$(window).resize(function () { 
	$(".box_height_window").height($(window).height());
	$(".box_height_view").height($(window).height()-$(".header").height());
});


function flowcakbak(value,index,obg)
{
  
  
  return false;
}

$.fn.iVaryVal=function(iSet,CallBack){
	/*
	 * Minus:点击元素--减小
	 * Add:点击元素--增加
	 * Input:表单元素
	 * Min:表单的最小值，非负整数
	 * Max:表单的最大值，正整数
	 */
	iSet=$.extend({Minus:$('.J_minus'),Add:$('.J_add'),Input:$('.J_input'),Min:1,Max:50},iSet);
	var C=null,O=null;
	//插件返回值
	var $CB={};
	//增加
	iSet.Add.each(function(i){
		$(this).click(function(){
			O=parseInt(iSet.Input.eq(i).val());
			(O+1<=iSet.Max) || (iSet.Max==null) ? iSet.Input.eq(i).val(O+1) : iSet.Input.eq(i).val(iSet.Max);
			//输出当前改变后的值
			$CB.val=iSet.Input.eq(i).val();
			$CB.index=i;
			//回调函数
			if (typeof CallBack == 'function') {
                CallBack($CB.val,$CB.index,iSet.Input.eq(i));
            }
		});
	});
	//减少
	iSet.Minus.each(function(i){
		$(this).click(function(){
			O=parseInt(iSet.Input.eq(i).val());
			O-1<iSet.Min ? iSet.Input.eq(i).val(iSet.Min) : iSet.Input.eq(i).val(O-1);
			$CB.val=iSet.Input.eq(i).val();
			$CB.index=i;
			//回调函数
			if (typeof CallBack == 'function') {
				CallBack($CB.val,$CB.index,iSet.Input.eq(i));
		  	}
		});
	});
	//手动
	iSet.Input.bind({
		'click':function(){
			O=parseInt($(this).val());
			$(this).select();
		},
		'keyup':function(e){
			if($(this).val()!=''){
				C=parseInt($(this).val());
				//非负整数判断
				if(/^[1-9]\d*|0$/.test(C)){
					$(this).val(C);
					O=C;
				}else{
					$(this).val(O);
				}
			}
			//输出当前改变后的值
			$CB.val=$(this).val();
			$CB.index=iSet.Input.index(this);
			//回调函数
			if (typeof CallBack == 'function') {
                CallBack($CB.val,$CB.index,$(this));
            }
		},
		'blur':function(){
			$(this).trigger('keyup');
			if($(this).val()==''){
				$(this).val(O);
			}
			//判断输入值是否超出最大最小值
			if(iSet.Max){
				if(O>iSet.Max){
					$(this).val(iSet.Max);
				}
			}
			if(O<iSet.Min){
				$(this).val(iSet.Min);
			}
			//输出当前改变后的值
			$CB.val=$(this).val();
			$CB.index=iSet.Input.index(this);
			//回调函数
			if (typeof CallBack == 'function') {
                CallBack($CB.val,$CB.index,$(this));
            }
		}
	});
};
