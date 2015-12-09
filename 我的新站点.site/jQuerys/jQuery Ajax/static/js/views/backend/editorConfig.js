thisPage.pc=function(f,id,row){
	_().pageClick({
		window:"#window",
		row:row,
		dg:id,
		url:thisPage.urlH+"editor/cfg/del.e",
		type:f
	});
};
thisPage.pageClick=function(f,id){
	thisPage.pc(f,id);
};
thisPage.tabOperation=function(field, row,eth,e){
	var f;
	if(eth==="编辑"){
		f="edi";
	}else if(eth==="删除"){
		f="del";
	}
	thisPage.pc(f,"#dg",row);
};
thisPage.init=function(){
_("#sform").form({
	title:'后台发文管理',
	window:false,
	columns:[{
field:'文正标题',name:"title",type:'text'},
{field:'所属栏目',name:"category",type:'combobox',comboData:{
	valueField:'id',  
    textField:'text',
    data:[{  
        "id":"政策法规",  
        "text":"政策法规"  
    },{  
        "id":"行业动态",  
        "text":"行业动态"  
    },{  
        "id":"注册申请",  
        "text":"注册申请"
    },{  
        "id":"购买流程",  
        "text":"购买流程"  
    },{  
        "id":"系统教程",  
        "text":"系统教程"  
    },{  
        "id":"关于我们",  
        "text":"关于我们"  
    }]  
}}
	],
	button:[{
		field:"查询",
		check:false,
		onclick:function(){
			$("#dg").datagrid("load");
		}
	},{
		field:"重置",
		check:false,
		onclick:function(){
			_("sform").form("clear");
		}
	}]
});
	
_('dg').datagrid({
	url:thisPage.urlH+"editor/cfg/sel.e",
	columns:[[
		{title:'文正标题',field:'title',width:80,hfield:'articleId'},
		{title:'栏目',field:'category',width:80},
		{title:'概要',field:'info',width:80,type:"long"}
	]],
	onBeforeLoad:function(param){
		var serForm=_("sform").form("serialize");
		$.extend(param,serForm);
	},
	dtoolbar:["add","edi","del","out"],
	DbInfo:true
});

_("#window").form({
	title:'操作',
	action:thisPage.urlH+"editor/cfg/sub.e",
	columnsNun:1,
	columns:[
{name:"articleId",type:"hidden"},
{field:'标题',name:"title",type:'text',cfunc:[{'fun':'isNotEmpty','msg':'是必选项目'}]},
{field:'概要',name:"info",type:'text',cfunc:[{'fun':'isNotEmpty','msg':'是必选项目'}]},
{id:"content",field:'正文',name:"content",type:'text',readOnly:true,cfunc:[{'fun':'isNotEmpty','msg':'是必选项目'}]}
	],
	after:function(){
		$("#content").off().on("click",function(){
			var articleId=_("window").form("getValue","articleId");
			if(articleId){
				thisPage.nowId=articleId;
				var href=thisPage.urlH+"editor/cfg/editorPage.e?id=" +articleId;
				_("#dialog"+articleId).dialog({
					title:"修改",width:650,
					iframe:href
				});
			}else{
				thisPage.nowId=null;
				var href=thisPage.urlH+"backend/editorConfigIf.e";
				_("#dialog").dialog({
					title:"添加",width:650,
					iframe:href
				});
			}
		});
	}
});

$(window).resize(function(){  
	$("#dg").datagrid("resize");
	$("#sform").panel("resize");
});
};

thisPage.nowId=null;
thisPage.close=function(){
	var id="#dialog";
	if(thisPage.nowId){
		id+=thisPage.nowId;
	}
	_(id).dialog("close");
}
thisPage.setH=function(h){
	var id="#dialog";
	if(thisPage.nowId){
		id+=thisPage.nowId;
	}
	$("#content").val(h);
	_(id).dialog("close");
}