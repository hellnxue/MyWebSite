<#assign security=JspTaglibs["http://www.springframework.org/security/tags"] />
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>第一人力 HI,找最全最准确的信息</title>

<#include "/member/include/param.ftl" />
<#include "/member/include/style.ftl" />
<#include "/member/include/js.ftl" />
<link href="${ctxStatic}/jQueryAlert/jquery.alerts.css" rel="stylesheet" type="text/css">
<style>
  .contentTextLeft{
    display: inline-block;
    float: left;
    text-align: left;
    width: 50%;
  }
  
  .contentTextRight {
    display: inline-block;
    box-sizing:border-box;
    text-align: right;
    width: 50%;
  }

	.fheader1 {
	    background-color: #fff;
	    margin: 0 auto;
	    padding: 10px 6px 5px 5px;
	    width: 100%;
	    font-size:0;
	    letter-spacing:-4px; /*实际情况下 -4这个值可能还要调整*/
	    word-spacing:-4px; 
	}
	.fheader1 div{
	  display: inline-block;
	  width: 50%;
	  vertical-align:middle;
	  zoom:1;
	  font-size:16px;
	  letter-spacing:normal;
	  word-spacing:normal;
	}
	
	.fheader1 div:nth-of-type(1) {
		text-align:left;
	}
	
	.fheader1 div:nth-of-type(2){
	   
	    text-align: right;
	}
	
	.fheader1  span{
		 
		display:inline-block;
		vertical-align: middle;
		color:#336699;
	}
	
	.fheader1 div span+span{
		 
		  padding-left: 50px;
	
	}
	.btn{
		display:inline-block;
		margin-bottom:0;
		padding:6px 12px;
		border:1px solid transparent;
		border-radius:4px;
		font-size:14px;
		font-weight:400;
		background-color:#eee;
		vertical-align:middle;
		line-height:1.4;
		text-align:center;
		white-space:nowrap;
		cursor:pointer;
	}
	
	.btn-primary {
	    background-color: #337ab7;
	    border-color: #2e6da4;
	    color: #fff;
	}
	.btn-sm {
	    border-radius: 3px;
	    font-size: 12px;
	    line-height: 1.5;
	    padding: 5px 10px;
	}
</style>
<script src="${ctxStatic}/js/views/demand/demandReceive/demandReceiveList.js"></script>
<script type="text/javascript" src="${ctxStatic}/jQueryAlert/jquery.alerts.js"></script>
<script>
	
	function getLocalTime(nS) { 
	console.log(new Date(parseInt("/Date(1474426813000)/".substr(6, 13))).toLocaleDateString());   
	console.log(nS); 
        return new Date(parseInt(nS)).toLocaleString('chinese',{hour12:false}).replace(/年|月/g, "-").replace(/日/g, " ");       
    }  
	function wd(param,userName,userType,productName){
	    $.ajax({
	    	url:"selectCard.do",
	    	type:"post",
	    	data:{"id":param},
	    	async : false,
	    }).done(function(d){
	        var temp=d.transactionType;
	        if (temp == 1){
				temp='单卡充值';
				}
			else if (temp == 2){
				temp='号段充值';
				}
			else if (temp == 3){
				temp='卡密支付';
				}
			else if (temp == 4){
				temp='提现';
				}
			else if (temp == 5){
				temp='卡无磁无密支付';
				}
			else if (temp == 6){
				temp='卡卡转账';
				}
			else if (temp == 7){
				temp='直接退货';
			}
	    	var date = getLocalTime(d.transactionDate);
	    	date = date.replace(/\//g,"-");
	    	var msg = '<div style="width:100%">'+
			'<span class="contentTextLeft">交易时间</span>'+
			'<span class="contentTextRight">'+ date +'</span><br>'+
			'<span class="contentTextLeft">订单号</span>'+
			'<span class="contentTextRight">'+ d.orderNo +'</span><br>'+
			'<span class="contentTextLeft">交易平台</span>'+
			'<span class="contentTextRight">'+ d.transactionPlatform +'</span><br>'+
			'<span class="contentTextLeft">交易类型</span>'+
			'<span class="contentTextRight">'+ temp +'</span><br>'+
			'<span class="contentTextLeft">交易金额</span>'+
			'<span class="contentTextRight">'+ d.transactionAmount +'</span><br>'+
			'<span class="contentTextLeft">交易摘要</span>'+
			'<span class="contentTextRight">'+ d.transactionRemark +'</span><br>'+
			'</div>';
			var loginType="";	
			if(userType == 1){
			 	loginType="企业用户";
			 }else if(userType == 2){
			 	loginType="个人用户";
			 }
			$.alerts.dialogTitleTextCenter=true;
		
		
		jAlert( msg,  loginType+userName+"    "+productName+"交易明细", function(){
		   
		} )
	    	})
	}
		
	function topUp(cardId,productId,userName,userType,productName){
		var msg= '<form action="" method="post" style="width:100%" id="acOrder">'+
					 '<span class="contentTextLeft">充值金额</span>'+
					 '<input type="text" id="amount" class="contentTextRight"/><br>'+
					 '<span class="contentTextLeft">支付方式</span>'+
					 '<select id="payMethod" class="contentTextRight">'+
					 	'<option value="1" >银联支付</option>'+
					  '</select><br>'+
				 '</form>';
		var loginType ="";
		 if(userType == 1){
		 	loginType="企业用户";
		 }else if(userType == 2){
		 	loginType="个人用户";
		 }
		 var productType="00";
		 $.alerts.dialogTitleTextCenter=true;
		 jAlert( msg,  loginType+userName+"  "+productName+"充值", function(){
		 
		    var amount=$('#amount').val();
		    console.log($(this));
		    
		    
		 	 
		   
		});
		
		  
		
		 
		 
	
	}
</script>	
</head>
<body>

<#assign title_index_1 = "我的账户" >
	
	<#include "/member/include/header.ftl" />
	
	<div class="member_main wrap">
		<#include "/member/include/leftNav.ftl" />
		
		<div class="right_body fr">
			<#include "/member/include/rightHeader.ftl" />

			<div class="member_center">


<div class="member_body">

	<div class="order_center" id="spmStoreListDiv">
		<div class="fheader1">
			<div>
				<span><strong>${productName}</strong></span>
			</div>
			<div>
			   <span><strong>余额</strong></span>
			   <span><strong>￥${validBalance}</strong></span>
			   <span><button type="button" class="btn btn-primary btn-sm " onclick="topUp('${cardId}','${productId}','${userName}','${userType}','${productName}');">充值</button></span>
			</div>
	</div>
	<hr>
		<table width="100%" border="0" cellpadding="0" cellspacing="0"
			style="border-collapse: collapse;">
			<thead class="dingdan_tab">
				<tr>
					<th>交易日期</th>
					<th>交易平台</th>
					<th>类  型</th>
					<th>交易金额</th>
					<th>操  作</th>
				</tr>
			</thead>
			
			<tbody>
				<#list cashAccount as cash>
					<tr align="center">
						<td>${cash.transactionDate?string("yyyy-MM-dd")}</td>
						<td>${cash.systemName}</td>
						<#if cash.transactionType == 1>
							<td>单卡充值</td>
						<#elseif cash.transactionType == 2>
							<td>号段充值</td>
						<#elseif cash.transactionType == 3>
							<td>卡密支付</td>
						<#elseif cash.transactionType == 4>
							<td>提现</td>
						<#elseif cash.transactionType == 5>
							<td>卡无磁无密支付</td>
						<#elseif cash.transactionType == 6>
							<td>卡卡转账</td>
						<#elseif cash.transactionType == 7>
							<td>直接退货</td>
						</#if>
						
						<td>￥${cash.transactionAmount}</td>
						<td><a href="javascript:void(0)" onclick="wd( ${cash.id},'${userName}','${userType}','${productName}' )">查看流水</a></td>
					</tr>
				</#list>
			</tbody>
		</table>
		<div class="clear"></div>
	</div>
</div>



	
			</div>

		</div>
		<div class="clear"></div>
	</div>
	
	
	
<#include "/member/include/footer.ftl" />
	
</body>
</html>