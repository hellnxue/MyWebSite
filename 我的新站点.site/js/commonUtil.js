// JavaScript Document
 
 /*��������¼��������*/
 /*��������¼�����*/
 /*��Щ������������ͬһ��������Ĳ�ͬ�汾��Ч��Ҳ��һ��*/
 var EventUtil={
	 //���¼�
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
	 //ɾ���¼�
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
	 //mouseover��mouseout�¼��е����Ԫ������
	 
	 getRelatedTarget:function(event){
		 if(event.relatedTarget){//DOM�����е����Ԫ��
			 
			 return event.relatedTarget;
			 
		   }else if(event.toElement){//IE�����������mouseout�¼�ʱevent.toElement���Ա��������Ԫ��
			   
			 return event.toElement;
			 
		   }else if(event.fromElement){//IE�����������mouseover�¼�ʱevent.fromElement���Ա��������Ԫ��
			   
			 return event.fromElement;
			 
		   }else{
			 return null;	
		   }
		 
		 }
   
  }