	var initProductResult=[];//初始化的所有产品
	var calculateResult=[];//产品试算结果
	var hasSelectedProduct=false;//当前选中的产品是否在试算中删除
	var calPP;
	var backFlag=0;
	var swiper=null;
	
	$(document).ready(function() {
		
		initProduct();
		
		$(".qs_li > span").bind("click", function(){
			$(".qs_li > span").removeClass("qs_current");
			$(this).addClass("qs_current");
		});
		
		
		//金额输入
		$('input[name=loanAmt]').on('click', function() {
 
			$(".shade_outer").css("background","rgba(0,0,0,0)").show();
			new KeyBoard(this,
				{
					
					accomplished:function(){
					
					var productCode=$(".swiper-slide-active").attr("productCode");
					var period=$(".swiper-slide-active").attr("period");
					
					//初始化试算结果
					var flag=inputchange(productCode,period);
					
					console.log("productCode= "+productCode);
					//console.log("period= "+period);
					
					//匹配产品试算结果
					//capticalMatchByPC(productCode);
					return flag;
				
			},
				endCallback:function(){
					setTimeout(function(){
						$(".shade_outer").css("background","rgba(0,0,0,0.5)").hide();
					},600);
				}
			});
			
//			$("img[data-delete]").attr("src",path+"/resource/images/main/v1/delete@2x.png").css("width","0.59rem");
//			$("div[data-delete]").css({
//				"width":"0.8rem",
//				"height":"0.5rem",
//				"background":"url('"+path+"/resource/images/main/v1/delete@2x.png')",
//				"background-size":"0.59rem 0.43rem",
//				"display":"inline-block",
//				"background-repeat":"no-repeat"
//				 });
			
			$("div[data-delete]").addClass("keyboard-empty");

		});
		
		
		//下一步
		$("#step").on("click", next);
		
		
		
	});
	
	function next(){
			if(validate()){
				$(this).parents("form").submit();
			}

	}
	
	//根据输入金额获取产品试算结果
	function inputchange(productCode,period){ 
		
		if(paramObj.loanAmt){
			delete paramObj.loanAmt;
		}
		
		var amount = $("input[name=loanAmt]").val(); 
		
		if("" == amount || "" == period || "" == productCode){
			$(".bMoney").text("0");
			return false;
		}
		
		if(!validate()){
			return false;
		}
		
		$.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: 'kakadai/order/trial',
			data: {
				userId : sessionUserId,
				amount : amount,
//				period : period,
//				productCode : productCode
			}
		}).done(function(data){
			if(data.code == '0000'){
				
				calculateResult=data.result;
				
				
				
				console.log("productCode= "+productCode);
				console.log("period= "+period);
				
				//筛选出试算后没不匹配的产品并删除
			
				var rmProductAry=[];//不匹配的产品
				$.map(initProductResult,function(item,index){
					var flag=calculateResult.some(function(item0,index0){
						return item.productCode==item0.productCode;
					});
					if(!flag){
						
						rmProductAry.push(item.productCode);
						
					}
				});
				
				
				console.log("删除了的产品="+rmProductAry);
				
				if(rmProductAry.length>0){
					
					
				  hasSelectedProduct=rmProductAry.some(function(item,index){
						
						return productCode==item;
					});
				}
				
				
				if(!hasSelectedProduct){
					calPP=productCode;
					}
				swiper.destroy(false);
				initProduct();//删除不匹配的产品之前，重新渲染一次
				
				
				if(rmProductAry.length>0){
					$.map(rmProductAry,function(item,index){
						swiper.removeSlide($("[productcode="+item+"]").data("index"));
						
						//更新index值
						$(".swiper-wrapper>.swiper-slide").each(function(i, ele){
							$(this).data("index",i);
							
						});
					});
				}
				
				console.log("hasSelectedProduct="+hasSelectedProduct);
				
				var curProTt;
				//当前的产品未被删除，试算之前选中的产品
				if(!hasSelectedProduct){
//					calPP=productCode;
					console.log("试算选中的产品。。。");
					capticalMatchByPC(productCode);
//					 $(".swiper-active-switch").css("background-color","orange");
					 
					 
					 $(".swiper-container .pagination span").eq($(".pd_area[productcode="+productCode+"]").index()).
					 removeAttr("style").css("background-color","orange").addClass("swiper-active-switch");
					 curProTt=productCode;
				}else{
					 curProTt=$(".swiper-wrapper .swiper-slide:first").attr("productcode");
					//试算第一个
					capticalMatchByPC($(".swiper-wrapper .swiper-slide:first").attr("productcode"));
					
					 $(".swiper-pagination-switch").removeAttr("style");
					 $(".swiper-pagination-switch:first").css("background-color","orange");
				}
				
				  $(".swiper-slide").removeClass("swiper-slide-active cur-scales right");
				  $(".pd_area[productcode="+curProTt+"]").prev("div").addClass("right");
				  $(".pd_area[productcode="+curProTt+"]").addClass("swiper-slide-active cur-scales ");
				  
				  
				  //修改返回参数
//				 var $curSelector=$(".swiper-slide-active");

				  var $curSelector= $(".pd_area[productcode="+curProTt+"]")
				 $("#period_dom").text( $curSelector.attr("period") );//产品期数
				 
				 $("input[name=productName]").val($curSelector.attr("productName"));
				 $("input[name=productCode]").val($curSelector.attr("productCode"));
				 $("input[name=repaymentPeriod]").val($curSelector.attr("period"));
				
			}else {
				promt(data.msg, function(){});
			}
			
		});
		
	}
	
	
	//产品试算匹配
	function capticalMatchByPC(productCode){
		 
		if(calculateResult.length>0){
			$.map(calculateResult,function(item,index){
				if(item.productCode==productCode){
					$(".pd_area[productcode="+productCode+"]").find(".bMoney").html(item.capital);
					$("input[name=poundage]").val(item.poundage);
					$("input[name=capital]").val(item.capital);
				}
				 
			});
			
		}
	}
	
	
	//产品数据初始化
	function initProduct(){
		
		
		$.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: 'getProduct' 
		}).done(function(data){
			if(data.code == '0000'){
				
				if(data.result){
						var dom = "", pd_c= "";
						initProductResult=data.result;
						$(data.result).each(function(i, obj){
							
							if(i == 0 ){
								//pd_c = " pd_c_first checked";
								$("#period_dom").text(obj.period);
								$("input[name=repaymentPeriod]").val(obj.period);
								$("input[name=productCode]").val(obj.productCode);
								$("input[name=productName]").val(obj.productName);
								
							}  else {
								//pd_c = " pd_c";
							}
							//productDesc
							dom +=
							"<div class='swiper-slide pd_area sp " + "' data-index='" + i + "" + "' period='" + obj.period + "' productCode='" + obj.productCode +"' productName='" + obj.productName + "' >" +
					        "<div class='t_lit'>" +
						        "<div class='p_n' productCode='" + obj.productCode + "'>" + obj.productName +
						        "</div>" +
						        "<div class='p_d'>" + obj.rateDesc +
						        "</div>" +
					        "</div>" +
					        "<div class='t_lit'>" +
					        "<span>手续费扣收方式</span>" +
					        "<span class='t_lit_je'>"+obj.interestTypeDesc+"</span>" +
					        "<p class='t_lit_p'>&nbsp;</p>" +
	//				        "<span class='t_lit_je'>从放款余额中直接扣除</span>" +
	//				        "<p class='t_lit_p'><span class='orange'>/</span>还款时收取</p>" +
					        
				        "</div>" +
					        "<div class='t_lit'>" +
						        "<span>每期还款</span>" +
						        "<span class='t_lit_je bMoney'>0.00</span>" +
					        "</div>" +
					    "</div>";
						});
					
					
					
					$(".pd_list_cn .swiper-wrapper").html(dom);
					
//					$(".swiper-slide:first").addClass("cur-scales");
					
					
					initSwiperTool(paramObj.productCode);
					 $(".swiper-active-switch").css("background-color","orange");
					
					//返回
					if(paramObj.loanAmt){
						backFlag++;
						
						console.log("backFlag==="+backFlag);
						var $curSelector=$(".pd_area[productcode="+paramObj.productCode+"]");
						$("#period_dom").text($curSelector.attr("period"));				//期数
						$("input[name=repaymentPeriod]").val($curSelector.attr("period")); //期数
						$("input[name=productCode]").val($curSelector.attr("productCode"));
						$("input[name=productName]").val($curSelector.attr("productName"));
						 
						inputchange(paramObj.productCode,$curSelector.attr("period"));
						 
//						capticalMatchByPC(paramObj.productCode);
					}
				}else{
					MessageWin(data.msg,function(){
						history.go(-1);
					});
				}
				 
			}else {
				MessageWin(data.msg,function(){
					history.go(-1);
				});
			}
		}).fail(function(data){
			
			MessageWin("获取信息失败！",function(){
				history.go(-1);
			});
		});
	}
	
	
	
	
	

	/*额度验证*/
	function validate() {
		var flag=false;
		var amount = $("input[name=loanAmt]").val(); 
		if(amount==""){
			promt("请输入借款金额！");
			 
		}else if(parseInt(amount) > parseInt(creditAmount)){
			promt("您的信用额度不够！");
			 
		}else if(parseInt(amount) < 100 || parseInt(amount) % 100 != 0){
			promt("贷还金额为100的整数倍！");
		 
		}else{
			flag=true;
		}
		
		return flag;
	}
	
	//初始化滑动插件
	function initSwiperTool(bProductCode){
		
		console.log("bProductCode+++++ "+bProductCode);
		 
		var index=0;
//		if(bProductCode){
//			index=$(".pd_area[productcode="+bProductCode+"]").index();
//		}
		
		
		
	     resetSwiperContainerWH({
		      	remWidth:6.72,					//相对宽度 6.72
		      	remHeight:3.5,					//相对高度
		      	containerSelector:".swiper-container" , //滑动容器
		      	firstInitPage:true			    //是否第一次执行
	      });
	     
    	 swiper=new Swiper(".swiper-container" ,{
		   	    pagination:".pagination",
  		   	    paginationClickable:true,
  		   	    resizeReInit:true,
		   	    onTouchEnd: function(swiper){
		   	      var $curSelector=$(".swiper-slide-active");
				  swiper.swipeTo($curSelector.index());
				  
				  touchAndClick(swiper);
		   	    },
		   	  onSliderMove:function(swiper, event){
		   		  
		   	    	console.log("滑动中。。。。。");
		   	    },
		   	 onTouchMove:function(swiper, event){
		   	      //console.log("滑动中。。。。。111");
//		   	      $(".swiper-slide").removeClass("scales");
//				  $(".swiper-slide-active").addClass("scales");
		   	    } 
   	        });
     
    	 //选中的产品在试算过程中被删除掉，则默认选中第一项
    	 if(hasSelectedProduct){
    		 console.log("设置默认选中项啦.....");
    		//设置默认选中项
        	 $(".swiper-container .pagination span").eq(0).click();
    	 }else{
    		 
    		 console.log("calPP====="+calPP);
    		 console.log("index====="+$(".pd_area[productcode="+calPP+"]").index());
    		 
    		 if(calPP){
    			 $(".swiper-container .pagination span").eq($(".pd_area[productcode="+calPP+"]").index()).click();// calPP
    		 } 
    		
    		
    		 
    	 }
    	 
    	 //返回后的默认选中
//    	 if(bProductCode){
//    		 $(".swiper-container .pagination span").eq(index).click();
//    	 }
    	
    	
    	 
    	//滑动动画
		 sliderItemAnimation();
    	
    	//分页器点击处理
    	$(".swiper-container .pagination span").click(function(){
    		
    		 touchAndClick(swiper);
    		
    	});
    	
    	if(calPP){
    		 $(".swiper-container .pagination span").eq($(".pd_area[productcode="+calPP+"]").index()).siblings().removeAttr("style").
    		 removeClass("swiper-active-switch");
    		
    	}
    		
    	calPP=undefined;
	}
	
	
	function touchAndClick(swiper){
		
		  //滑动动画
		  sliderItemAnimation();
		
		  //产品试算
		 var $curSelector=$(".swiper-slide-active");
		  
		 $("#period_dom").text( $curSelector.attr("period") );//产品期数
		 
		 $("input[name=productName]").val($curSelector.attr("productName"));
		 $("input[name=productCode]").val($curSelector.attr("productCode"));
		 $("input[name=repaymentPeriod]").val($curSelector.attr("period"));
		 
		//匹配产品试算结果
		 capticalMatchByPC($curSelector.attr("productCode"));
		 
	}
	
	/*滑动动画*/
	function sliderItemAnimation(){
		  $(".swiper-slide").removeClass("cur-scales right");
		  $(".swiper-slide-active").prev("div").addClass("right");
		  $(".swiper-slide-active").addClass("cur-scales");
		  $(".swiper-pagination-switch").css("background-color","#555");
		  $(".swiper-active-switch").css("background-color","orange");
	}
	
	 