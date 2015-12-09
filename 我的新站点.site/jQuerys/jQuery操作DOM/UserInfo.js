// JavaScript Document
  var data=[
	       {
		      "name":"小新",
			   "sex":"男",
			   "email":"103ssss27@qq.com"
		   },
		   {
		      "name":"小新2",
			   "sex":"男",
			   "email":"1032dddddd7@qq.com"
		   }
	 ];
   var showInfo="";
   $.each(data,function(index,value){
		      //alert(this["name"]);
		      showInfo+="名 字 "+this["name"]+"  性别  "+this["sex"]+"  邮箱  "+this["email"]+"<br/>";
		   })
   
   $("#test3").html(showInfo);