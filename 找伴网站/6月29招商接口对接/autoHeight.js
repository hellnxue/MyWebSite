/**!
 * iframe嵌套跨域 高度自适应
 * @author: tommyshao <jinhong.shao@frontpay.cn>
 * @copyright www.frontpay.cn
 * @date:   2015-06-18
 */
!(function(root, d, undefined){
    function ajustHeight(height){
        var oIframe = d.getElementById('j-mainFrame');
        if(height) oIframe.style.height = height + 'px';
    }

    /* 加载完成调整 */
    root.onload = function(){ // 顶级父窗口页面
        var oIframe = d.getElementById('j-mainFrame');
        if(!!oIframe) {
            var docH = d.documentElement.clientHeight;
            var barH = d.getElementById('j-topbar').clientHeight;
            var clientH = oIframe.clientHeight;
            // 获取最高，因为可能proxy.html先执行
            var h = Math.max((docH - barH), clientH);
            ajustHeight(h)
        }        
    }

    
    root.ajustHeight  = ajustHeight;
})(window, document);