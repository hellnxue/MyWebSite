
var cardinalNumber=0;//ҳ���Ŀ¼�����С����ֵ

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
   	      	remWidth:6.72,					//��Կ��
   	      	remHeight:3.5,					//��Ը߶�
   	      	containerSelector:".swiper-container" , //��������
   	      	firstInitPage:false			    //�Ƿ��һ��ִ��
   	      });
       }

        
    };

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);


/*��̬�������û��������Ŀ�� */	
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