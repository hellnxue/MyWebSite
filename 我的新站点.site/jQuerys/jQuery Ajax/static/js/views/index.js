var thisPage={};
function addTab(action){
		document.getElementById("contentFrame").src=action;
	}
	
	function addTab(title, href,icon){  
	    var tt = $('#tabs');  
	    if (tt.tabs('exists', title)){//如果tab已经存在,则选中并刷新该tab          
	        tt.tabs('select', title);  
	        //refreshTab({tabTitle:title,url:href});  
	    } else {  
	        if (href){  
	            var content = '<iframe  name="contentFrame" src="'+href+'" style="width: 100%; height: 100%;" frameborder="0"></iframe>';  
	        } else {  
	            var content = '未实现';
	                }  
	        tt.tabs('add',{  
	            title:title,  
	            closable:true,  
	            content:content,  
	            iconCls:icon||'icon-default'  
	        });  
	    }  
	} 