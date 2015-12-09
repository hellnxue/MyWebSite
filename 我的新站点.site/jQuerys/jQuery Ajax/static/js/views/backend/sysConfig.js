thisPage.comboData={};
thisPage.initWin=function(id){
	if($(id).length===0){
		thisPage.mainWin=id;
		_(id).form({});
	}
};
thisPage.createButtonStr=function(name){
	var str= "<a href=\"javascript:void(0);\" class=\"btn\" value=\""+name+"\">"+name+"</a>";
	return str;
};
thisPage.tabOperation=function(field, row,button,e){
	if(button==null){
		return;
	}
	switch (button) {
	case '修改':
		var selected=row;
		if(selected){
			 var operation=selected.operation;
			 if(operation.blockCode){
	    	    _("group").form("open","edi");
	    	     _("group").form("load",operation);
	    	    thisPage.subsuccess=function(){
	    	    	_("group").form("close");
 					var selected=$("#dg").treegrid('getSelected');
 					var parent=$("#dg").treegrid("getParent",selected.id);
 					if(parent){
 						$("#dg").treegrid('reload', parent.id);
 					}else{
 						$("#dg").treegrid('reload');
 					}
	    	    };
	    	 }else if(operation.elementCode){
	    	 	_("element").form("open","edi");
	    	     _("element").form("load",operation);
	    	 }
		}
		break;
	case '添加子分组' :
		_("group").form("setValue","parentBlockName",row.name);
		_("group").form("setValue","parentBlock",row.id);
		_("group").form("open","add");
		_("group").form("setValue","blockCode",row.code+"_");
		_("group").form("setValue","blockName",row.name);
		thisPage.ft="M";
		break;
	case '添加元素' :
		_("element").form("setValue","elementBlock",row.id);
		_("element").form("open","add");
		_("element").form("setValue","elementCode",row.code+"_");
		break;
	case '子分组引用' :
		thisPage.groupYId=row.id;
		$("#dlg").css({"left":e.clientX,"top":(e.clientY-e.target.clientHeight/2)});
		$("#dlg").css({"left":e.clientX,"top":(e.clientY-e.target.clientHeight/2)});
		$("#group_y_").find("span[Class='combo-arrow']").trigger("click");
		break;	
	case '解除与父级关系' :
		var parent=$("#dg").treegrid("getParent",row.id);
		$.ajax({ 
                type: "post", 
                async:false,//同步
                url: thisPage.urlH+"sys/cfg/parentSubDel.do",
                dataType: "json",
                data:{"parentBlock":parent.id,"subBlock":row.id},
                success: function (data) {
                	 $.messager.alert($.messager.defaults.message,data.msg,"",function(){
						  if(data.success==1){$("#dg").treegrid('reload', parent.id);}
			          })
                }
        });
		break;
	case '删除':
		$.messager.confirm('确认','将删除包含所有子节点，且操作不可回滚，是否继续?',function(r){  
		    if (r){  
		    	 var operation=row.operation;
		    	 var url;
		    	 if(operation.pf052Id){
		    	    url=thisPage.urlH+"sys/cfg/elementGroupDel.do?pf052Id="+operation.pf052Id;
		    	 }else if(operation.pf053Id){
		    	 	url=thisPage.urlH+"sys/cfg/elementDel.do?pf053Id="+operation.pf053Id;
		    	 }
		    	 $.ajax({ 
	                type: "post", 
	                async:false,//同步
	                url: url,
	                dataType: "json",
	                data:{},
	                success: function (data) {
	                	 $.messager.alert($.messager.defaults.message,data.msg,"",function(){
							  if(data.success==1){
							  		$("#dg").treegrid('remove', row.id);
							  		if(operation.pf052Id){
							  			$("#main_gruop_sel").combogrid("grid").datagrid("reload");
							  		}
							  }
				          })
	                }
       			 });
		    }  
		});  
		break;
	}
};
thisPage.treegridFormat=function(data){
    var blockType=data.blockType;
    var elementType=data.elementType;
	var str="";
	if(data){
		str+=thisPage.createButtonStr("修改");
		if(blockType){
			 str+=thisPage.createButtonStr("添加子分组");
			 str+=thisPage.createButtonStr("子分组引用");
			 if(data.blockType!="M"){
			 	str+=thisPage.createButtonStr("解除与父级关系");
			 }
			 if(data.blockType){
			 	str+=thisPage.createButtonStr("添加元素");
			 }
			 str+=thisPage.createButtonStr("删除");
		}else if(elementType){
			 if(elementType=="1"){
			 }
			  if(elementType=="2"){
			 }
			 str+=thisPage.createButtonStr("删除");
		}
	}
		return str;
};

thisPage.init=function(){

	_("#group").form({
		title:"添加修改页面或者页面块组合",
		columnsNun:1,
		action:thisPage.urlH+"page/cfg/groupSub.e",
		columns:[{field:'分组编码',type:'text',name:'blockCode',cfunc:"[{'fun':'isNotEmpty','msg':'"+$.fn.validatebox.defaults.missingMessage+"'}]"},
{field:'分组说明',type:'text',name:'blockName',cfunc:"[{'fun':'isNotEmpty','msg':'"+$.fn.validatebox.defaults.missingMessage+"'}]"},
{id:'group_blockType',field:'类别',type:'text',name:'blockType',cfunc:"[{'fun':'isNotEmpty','msg':'"+$.fn.validatebox.defaults.missingMessage+"'}]"},
{field:'请求路径',type:'text',name:'blockAction',cfunc:'all'},
{field:'分组模版',type:'text',name:'blockTemplate',cfunc:'all'},
{field:'当前父级',type:'text',name:'parentBlockName',disabled:true,cfunc:'all'},
{type:'hidden',name:'parentBlock'}],
			after:function(){
 			$("#group_blockType").combobox({
					valueField: 'id',  
			        textField: 'text', 
			        data: [{
			        	text: '页面',
						id: 'M'
					},{
						text: '页面分块',
						id: 'B'
					},{
						text: '虚拟分块',
						id: 'C'
					}]
			});
			},
			subsuccess:function(){
				_("group").form("close");
				var ft=_("group").form("getValue","blockType");
				var selected=$("#dg").treegrid('getSelected');
				if(thisPage.ft=="M"){
					var selected=$("#dg").treegrid('getSelected');
				    $("#dg").treegrid('reload', selected.id);
				}else if(selected){
					$("#dg").treegrid('reload', selected.id);
				}
			}
	});
	
	_("element").form({
		title:"添加页面元素",
		columnsNun:1,
		action:thisPage.urlH+"page/cfg/elementSub.e",
		columns:[ 
{field:'元素编码',type:'text',name:'elementCode',cfunc:"[{'fun':'isNotEmpty','msg':'"+$.fn.validatebox.defaults.missingMessage+"'}]"},
{field:'元素名称',type:'text',name:'elementName',cfunc:"[{'fun':'isNotEmpty','msg':'"+$.fn.validatebox.defaults.missingMessage+"'}]"},
{field:'元素序号',type:'text',name:'elementOrder',_class:'easyui-numberspinner',options:"min:0",cfunc:'all'},
{id:'element_elementType',field:'元素类别',type:'text',name:'elementType',cfunc:"[{'fun':'isNotEmpty','msg':'"+$.fn.validatebox.defaults.missingMessage+"'}]"},
{type:'hidden',name:'elementSyscolid'},
{type:'hidden',name:'elementBlock'},
{id:'element_elementTemplate',field:'元素模版',type:'textarea',name:'elementTemplate',cfunc:'all',width:700,height:100}],
			after:function(){
				$("#element_elementType").combobox({
					valueField: 'id',  
			        textField: 'text',  
			        data: [{
			        	text: '文本',
						id: '1'
					},{
						text: '表格列',
						id: '2'
					},{
						text: '表单',
						id: '3'
					}]
			});
			},
			subsuccess:function(){
				_("element").form("close");
				var selected=$("#dg").treegrid('getSelected');
				if(selected){
					var id=selected.id;
				    $("#dg").treegrid('reload');
				}
			}
	});

_("#sform").form({
	title:'搜索页面',
	window:false,
	columns:[
{field:'页面编码',name:"blockCode",type:"text"},
{field:'页面名称',name:"blockName",type:"text"}
	],
	button:[{
		field:"检索",
		check:false,
		onclick:function(){
			$('#dg').treegrid('reload');
		}
	},{
		field:"添加",
		check:false,
		onclick:function(){
			_("#group").form("open");
		}
	},{
		field:"重置",
		check:false,
		onclick:function(){
			_("#sform").form("clear");
		}
	}]
});
	
$("#dg").treegrid({  
	   url:thisPage.urlH+"page/cfg/cfgTree.e",  
	   rownumbers:true,
	   animate:true,
	   toolbar: '#tb',
	   idField:'id',  
	   treeField:'name',
	   columns:[[  
	       {title:'名称',field:'name',width:200,align:'left'},  
	       {title:'编码',field:'code',width:200,align:'left'}, 
	       {field:'operation',title:'操作',width:450,align:'center',formatter:thisPage.treegridFormat} 
	    ]],
	    onBeforeLoad:function(row, param){
	    	var sub=_("#sform").form("serialize");
	    	$.extend(param,sub);
	    },
	    onClickCell:function(field,row,u,e){
	    	if(field=="name"){
	    	}else if(field=="operation"){
	    		thisPage.tabOperation(field, row,e.target.innerHTML,e);
	    	}
	    }
	});

var pageCode=_().requestParameter("p");
if(pageCode){
	_("#sform").form("setValue","blockCode",pageCode);
	_("#sform").form("setItemType","blockCode","readOnly",true);
	_("#sform").form("setItemType","blockName","readOnly",true);
	$('#dg').treegrid('reload');
}

$(window).resize(function(){  
	$("#dg").datagrid("resize");
	$("#sform").panel("resize");
});
};