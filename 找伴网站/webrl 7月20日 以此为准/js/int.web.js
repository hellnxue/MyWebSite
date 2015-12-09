$(document).ready(function() {
	//产品推荐
$('.middle .right .new_recommend .new_recommend_lists li ').hover(function(){
	$(this).find('.new_recommend_info').show();
	},function(){
	$(this).find('.new_recommend_info').hide();	
		});
	//人事
	$('.medicalproduct_left li').hover(function(){
		$(this).find('.pingbox').hide();
		$(this).find('.buybox').show();	
		
		},function(){
		$(this).find('.pingbox').show();
		$(this).find('.buybox').hide();
			})
	//资讯滚动
	$(".scrollleft").imgscroll({
		speed: 40,    //图片滚动速度
		amount: 0,    //图片滚动过渡时间
		width: 1,     //图片滚动步数
		dir: "left"   // "left" 或 "up" 向左或向上滚动
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
	//调用加减
	if($('.Js_cart_goto').length > 0){
	  $('.Js_cart_goto').iVaryVal({},flowcakbak);
	};
	
	$(".alert-but").click(function() {
		var dig_title = $(this).attr('dig-title'),dig_message = $(this).attr('dig-message');
		$.Dialog({ title: dig_title, content: '<div class="errortip">'+dig_message+'</div>', fixed: true, buttonshow: false});
	});
	
	
	//登陆/注册表单信息
	$(".cleaript").click(function() {
		$(this).siblings("span").children("input").val("");
		$.Dialog({ title: '提示消息', content: '提示消息', fixed: true, buttonshow: true,okEvent: function(data, args) {
			$.Dialog({ title: '提示消息', content: '正确的消息！', fixed: true, buttonshow: false});
		}});
	});
	
	//注册密码框
    $("#data-reg-pass").keyup(function() {
        if ($(this).val() != "") {
            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
            var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
            var enoughRegex = new RegExp("(?=.{6,}).*", "g");
            if (false == enoughRegex.test($(this).val())) {　　　　　　 //密码小于六位的时候，密码强度图片都为灰色
                $("#mimaqiangdu").find("em").removeClass("cur");
				$(this).show().next(".form-tip").addClass("error-tip").removeClass("ok-tip").html("<em></em>密码小于六位");
				$(this).addClass("error-ipt-tip").removeClass("ok-ipt-tip");
            }　　　　
            else if (strongRegex.test($(this).val())) {　　　　　　 //强,密码为八位及以上并且字母数字特殊字符三项都包括
                $("#mimaqiangdu").find("em").addClass("cur");　　　
				$(this).removeClass("error-ipt-tip").addClass("ok-ipt-tip");
				$(this).show().next(".form-tip").addClass("ok-tip").removeClass("error-tip").html("<em></em>你真是密码高手呀！");　
            }　　　　
            else if (mediumRegex.test($(this).val())) {　　　　　　 //中等,密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
                $("#mimaqiangdu").find("em").removeClass("cur");
                $("#mimaqiangdu").find("em:lt(2)").addClass("cur");　　
				$(this).addClass("ok-ipt-tip").removeClass("error-ipt-tip");
				$(this).show().next(".form-tip").addClass("ok-tip").removeClass("error-tip").html("<em></em>你的密码还可以更复杂！");　　　
            }　　　　
            else {　　　　　　 //弱,如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
                $("#mimaqiangdu").find("em").removeClass("cur");
                $("#mimaqiangdu").find("em:lt(1)").addClass("cur");　
				$(this).show().next(".form-tip").addClass("error-tip").removeClass("ok-tip").html("<em></em>你的密码太弱了");
				$(this).removeClass("error-ipt-tip").addClass("ok-ipt-tip");　
            }
        }
    });
	$(".data-passwd-queren").keyup(function() {
          //密码匹配验证
          if($(this).parents("form").find('.data-passwd').val() == $(this).val() ){
			   //匹配成功
               $(this).validate_callback(null,"sucess");	//此次是官方提供的，用来消除以前错误的提示
          }else{//匹配失败
               $(this).validate_callback("两次密码输入不一致","failed");	//此处是官方提供的API，效果则是当匹配不成功，pwd2表单 显示红色标注，并且TIP显示为"密码不匹配"
          }
		
    });
	//客服悬浮
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	});
	
	
	//数字统计
	
});
$(window).scroll(function(e){
	b();
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

function getstatistical(){
	//console.log("每个五秒一次");
	setTimeout(getstatistical,1000*5);//这里的1000表示1秒有1000毫秒,5表示总共5秒
	var $this = $(".tool-textC"),url = $this.data('url'),startnum = parseInt($this.attr('startnum'));
	$.ajax({
		url: url,
		type: 'get',
		dataType: 'json'
	})
	.done(function(data) {
		if (data.staus) {
			//console.log(data.list.length);
			//console.log(startnum);
			//console.log(data.list[startnum].nums);
			NumbersAnimate.ChangeNumber(data.list[startnum].nums);
			$(".tool-textCtitle").html(data.list[startnum].title);
			
			$(".tool-textC").attr({'startnum':startnum+1});
			if(parseInt($(".tool-textC").attr('startnum')) >= data.list.length){
				$(".tool-textC").attr({'startnum':0});
			}
			
			//console.log($(".tool-textC").attr('startnum'));
			
		};
		// console.log("success");
	})
	.fail(function() {
		
	});
	
};