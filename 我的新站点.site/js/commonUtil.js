// JavaScript Document
 
 /*跨浏览器事件处理程序*/
 var EventUtil={
     addHandler:function(element,type,handler){
	     if(element.addEventListener){
		   console.log("DOM2");
		   element.addEventListener(type,handler,false);
		 }else if(element.attachEvent){
		   console.log("IE");
		   element.attachEvent("on"+type,handler);
		 
		 }else{
		   console.log("DOM0");
		   element["on"+type]=handler;
		 }
	 
	 },
	 removeHandler:function(element,type,handler){
	     if(element.removeEventListener){
		   console.log("DOM2 remove");
		   element.removeEventListener(type,handler,false);
		 }else if(element.attachEvent){
		   console.log("IE remove");
		   element.deatchEvent("on"+type,handler);
		 
		 }else{
		   console.log("DOM0 remove");
		   element["on"+type]=null;
		 }
	 }
	 
   
  }