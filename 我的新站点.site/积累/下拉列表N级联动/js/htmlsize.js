
var cardinalNumber=0;//页面根目录字体大小基数值

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth>=750){
            docEl.style.fontSize = '100px';
            cardinalNumber=100;
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            cardinalNumber=100 * (clientWidth / 750);
        }
       if(cardinalNumber!=0){
           resetSwiperContainerWH({
   	      	remWidth:6.72,					//相对宽度
   	      	remHeight:3.5,					//相对高度
   	      	containerSelector:".swiper-container" , //滑动容器
   	      	firstInitPage:false			    //是否第一次执行
   	      });
       }

        
    };

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);


/*动态计算重置滑动容器的宽高 */	
function resetSwiperContainerWH(paramObj) {

	if (paramObj.firstInitPage) {
		var docEl = document.documentElement;
		var clientWidth = docEl.clientWidth;
		if (!clientWidth)
			return;
		if (clientWidth >= 750) {
			cardinalNumber = 100;
		} else {
			cardinalNumber = 100 * (clientWidth / 750);
		}

	}

	var hWidth = cardinalNumber * paramObj.remWidth;
	var hHeight = cardinalNumber * paramObj.remHeight;

	$(paramObj.containerSelector).css("width", hWidth + "px");
	$(paramObj.containerSelector).css("height", hHeight + "px");

}