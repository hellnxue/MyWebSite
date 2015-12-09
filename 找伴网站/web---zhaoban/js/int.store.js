
$(document).ready(function() {
	
	//配送城市
    $(document).on('click', '#stock_province_item li', function() {
		var $this = $(this),
            id = $this.data('value'),
            url = "ajax/city-list.json";
        $.ajax({
            url: url,
			async: false,
			contentType: "application/json",
			dataType: "json",
			type: "GET",
            data: {id: id}
        })
        .done(function(data) {
            if (data.staus) {
				var city_item = "";
				
				for(var i=0; i<data.list.length; i++)  
				{  
				   city_item += '<li><a href="#none" data-value="'+data.list[i].value+'">'+data.list[i].title+'</a></li>';
				}
				$("[data-index=0]").removeClass('curr').find("a").removeClass('hover').find("em").html($this.find("a").html());
				$("[data-index=1]").show().addClass('curr').find("a").addClass('hover').find("em").html("请选择");
				$("[data-index=1]").siblings().removeClass('curr');
				$("[data-index=2]").hide();
				$("#stock_province_item").hide()
				$("#stock_city_item").show().find(".area-list").html(city_item);
				//$("#stock_area_item").html("").hide();
            };
            // console.log(city_item);
        })
        .fail(function() {
            alert('操作失败');
            // console.log("error");
        });
    });
	
	
	//配送区域
    $(document).on('click', '#stock_city_item li', function() {
		var $this = $(this),
            id = $this.data('value'),
            url = "ajax/area-list.json";
        $.ajax({
            url: url,
			async: false,
			contentType: "application/json",
			dataType: "json",
			type: "GET",
            data: {id: id}
        })
        .done(function(data) {
            if (data.staus) {
				var area_item = "";
				
				for(var i=0; i<data.list.length; i++)  
				{  
				   area_item += '<li><a href="#none" data-value="'+data.list[i].value+'">'+data.list[i].title+'</a></li>';
				}
				$("[data-index=1]").removeClass('curr').find("a").removeClass('hover').find("em").html($this.find("a").html());
				$("[data-index=2]").show().addClass('curr').find("a").addClass('hover').find("em").html("请选择");;
				$("[data-index=2]").siblings().removeClass('curr');
				$("#stock_city_item").hide();
				$("#stock_area_item").show().find(".area-list").html(area_item);
            };
            // console.log(city_item);
        })
        .fail(function() {
            alert('操作失败');
            // console.log("error");
        });
    });
	
	
	//选择地址
    $(document).on('click', '#stock_area_item li', function() {
		var $this = $(this),
            id = $this.data('value'),
            url = "ajax/";//换成切换地址触发ajax
			
		$("[data-index=2]").find("em").html($this.find("a").html());
		var title = $("[data-index=0]").find("em").html()+$("[data-index=1]").find("em").html()+$("[data-index=2]").find("em").html();
		$("#store-selector").find(".text").children("div").attr({"time":title}).html(title);
		
		$('#store-selector').removeClass('hover');
		/*$.ajax({
            url: url,
			async: false,
			contentType: "application/json",
			dataType: "json",
			type: "GET",
            data: {id: id}
        })
        .done(function(data) {
            if (data.staus) {
				
            };
            // console.log(city_item);
        })
        .fail(function() {
            alert('操作失败');
            // console.log("error");
        });*/
		
		
    });
	
	//切换选择
    $(document).on('click', '[data-widget=tab-item]', function() {
		$(this).show().addClass('curr').find("a").addClass('hover');
		$(this).siblings().removeClass('curr').find("a").removeClass('hover');
		
		$('[data-area='+$(this).attr("data-index")+']').show().siblings('[data-area]').hide();
    });
	
	
    /*Qfast.add('widgets', {
        path: "js/terminator2.2.min.js",
        type: "js",
        requires: ['fx']
    });
    Qfast(false, 'widgets',
    function() {
        K.tabs({
            id: 'fsD1',
            //焦点图包裹id  
            conId: "D1pic1",
            //** 大图域包裹id  
            tabId: "D1fBt",
            tabTn: "a",
            conCn: '.fcon',
            //** 大图域配置class       
            auto: 1,
            //自动播放 1或0
            effect: 'fade',
            //效果配置
            eType: 'click',
            //** 鼠标事件
            pageBt: true,
            //是否有按钮切换页码
            bns: ['.prev', '.next'],
            //** 前后按钮配置class                          
            interval: 3000 //** 停顿时间  
        })
    });*/
	
});