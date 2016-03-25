// JavaScript Document
 
 /*跨浏览器事件处理程序*/
 /*跨浏览器事件对象*/
 /*有些方法或属性在同一个浏览器的不同版本中效果也不一样*/
 var EventUtil={
	 //绑定事件
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
	 getEvent:function(event){
		 
			 return event||window.event;
			 
			 },
	 getTarget:function(event){
		 
		   return event.target||event.srcElement;
		   
		 },
	 preventDefault:function(event){
		 if(event.preventDefault){
			 
			 event.preventDefault();
			  
			 }else{
				 
			  event.returnValue=false;	
			  
			}
		 },
	 stopPropagation:function(event){
		  if(event.stopPropagation){
			  
			  event.stopPropagation();
			 
			  }else{
				  
			  event.cancleBubble=true;
			   
			  }
		 },
	 //删除事件
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
	 },
	 //mouseover与mouseout事件中的相关元素属性
	 
	 getRelatedTarget:function(event){
		 if(event.relatedTarget){//DOM对象中的相关元素
			 
			 return event.relatedTarget;
			 
		   }else if(event.toElement){//IE浏览器，触发mouseout事件时event.toElement属性保存有相关元素
			   
			 return event.toElement;
			 
		   }else if(event.fromElement){//IE浏览器，触发mouseover事件时event.fromElement属性保存有相关元素
			   
			 return event.fromElement;
			 
		   }else{
			 return null;	
		   }
		 
		 }
   
  }