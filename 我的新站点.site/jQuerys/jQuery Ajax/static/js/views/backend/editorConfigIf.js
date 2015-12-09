thisPage.init=function(){
	

    //$("textarea").htmlarea(); // Initialize all TextArea's as jHtmlArea's with default values

//    $("#txtDefaultHtmlArea").htmlarea(); // Initialize jHtmlArea's with all default values

    $("#txtDefaultHtmlArea").htmlarea({
        // Override/Specify the Toolbar buttons to show
        toolbar: [
                  ["html"], ["bold", "italic", "underline", "|", "forecolor"],
                  ["h1", "h2", "h3", "h4", "h5", "h6"],
                  ["link", "unlink"],   
                  ["strikethrough", "p","orderedList","unorderedList","superscript","subscript","indent","outdent"],
                  ["justifyleft", "justifycenter","justifyright","increasefontsize","decreasefontsize","forecolor","horizontalrule"],
            [{
                // This is how to add a completely custom Toolbar Button
                css: "image",
                text: "测试",
                action: function(btn) {
                	thisPage.Object=this;
                	var href=thisPage.urlH+"editor/cfg/uploadPage.e?uptype=1";
            		_("#dialog").dialog({
            			iframe:href,
            			title:"上传头像",
            			width: 300,
            			height: 150
            		});
            		_("#dialog").dialog('refresh', href);
                }
            }]
        ],

        // Override any of the toolbarText values - these are the Alt Text / Tooltips shown
        // when the user hovers the mouse over the Toolbar Buttons
        // Here are a couple translated to German, thanks to Google Translate.
        toolbarText: $.extend({}, jHtmlArea.defaultOptions.toolbarText, {
            "bold": "加粗",
            "italic": "斜体 ",
            "underline": "下划线",
            "forecolor": "字体颜色",
            "p": "分段",
            "h1":"一级标题",
            "h2":"二级标题", 
            "h3":"三级标题", 
            "h4":"四级标题", 
            "h5":"五级标题", 
            "h6":"六级标题",
            "orderedlist":"项目列表",
            "unorderedlist":"项目符号"
        }),

        // Specify a specific CSS file to use for the Editor
        css: "style//jHtmlArea.Editor.css",

        // Do something once the editor has finished loading
        loaded: function() {
            //// 'this' is equal to the jHtmlArea object
            //alert("jHtmlArea has loaded!");
            //this.showHTMLView(); // show the HTML view once the editor has finished loading
        }
    });
    
    $("#s").click(function(){
    	var html = $('#txtDefaultHtmlArea').htmlarea('toHtmlString');
    	window.parent.thisPage.setH(html);
    });
    
    $("#q").click(function(){
    	window.parent.thisPage.close();
    });
	
}
thisPage.upImg=function(uptype,src,id){
	if(uptype==="1"){
		_("#dialog").dialog("close");
		thisPage.upImgId=id;
		thisPage.Object.image(src);
	}else{
		_("#dialog").dialog("close");
	}
}
thisPage.Object=null;
thisPage.upImgId=null;
thisPage.t=null;
