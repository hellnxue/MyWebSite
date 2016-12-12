/**
 * Created by OracleOAEC on 2016/10/19.
 */
function Tools(){

}
Tools.prototype.addZero=function(_num){
    if(_num<10){
        _num="0"+_num;
    }else{
        _num=_num;
    }
    return _num;
};
Tools.prototype.getWindowSize=function(){
    return {
        width:window.innerWidth||document.documentElement.clientWidth,
        height:window.innerHeight||document.documentElement.clientWidth
    }
};
Tools.prototype.getScrollSize=function(){
    return{
        top:document.body.scrollTop||document.documentElement.scrollTop,
        left:document.body.scrollLeft||document.documentElement.scrollLeft
    }
};
