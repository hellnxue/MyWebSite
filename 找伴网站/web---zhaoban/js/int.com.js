window.console = window.console || {}; 
console.log || (console.log = opera.postError);
//function flash()
function Comflash(flashView) {
	var _titles = flashView.find(".flashbut li");
	var _bodies = flashView.find(".flashlist li");
    var defaultOpts = {
        interval: 3000,
        fadeInTime: 'slow',
        fadeOutTime: 'slow'
    };
    var _count = _titles.length;
    var _current = 0;
    var _intervalID = null;
    var stop = function() {
        window.clearInterval(_intervalID);
    };
    var slide = function(opts) {
        if (opts) {
            _current = opts.current || 0;
        } else {
            _current = (_current >= (_count - 1)) ? 0 : (++_current);
        };
        _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime,
        function() {
            _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
            //_bodies.removeClass("current").eq(_current).addClass("current");
        });
        _titles.removeClass("current").eq(_current).addClass("current");
        //_titles_bg.removeClass("current").eq(_current).addClass("current");
    }; //endof slide
    var go = function() {
        stop();
        _intervalID = window.setInterval(function() {
            slide();
        },
        defaultOpts.interval);
    }; //endof go
    var itemMouseOver = function(target, items) {
        stop();
        var i = $.inArray(target, items);
        slide({
            current: i
        });
    }; //endof itemMouseOver
    _titles.hover(function() {
        if ($(this).attr('class') != 'current') {
            itemMouseOver(this, _titles);
        } else {
            stop();
        }
    },
    go);
    //_titles_bg.hover(function() { itemMouseOver(this, _titles_bg); }, go);
    _bodies.hover(stop, go);
    //trigger the slidebox
    go();
};
// 图片左右滚动
function DY_scroll(wraper, prev, next, img, speed, or) {
    var wraper = $(wraper);
    var prev = $(prev);
    var next = $(next);
    var img = $(img).find('ul');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function() {
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
    prev.click(function() {
        img.find('li:last').prependTo(img);
        img.css({
            'margin-left': -w
        });
        img.animate({
            'margin-left': 0
        });
    });
    if (or == true) {
        ad = setInterval(function() {
            next.click();
        },
        s * 1000);
        wraper.hover(function() {
            clearInterval(ad);
        },
        function() {
            ad = setInterval(function() {
                next.click();
            },
            s * 1000);
        });

    }
};

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
function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}