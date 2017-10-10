var app=angular.module("page",[]);
	app.controller("pagecon",function($scope,$stateParams,getdata){
		var n=$stateParams.id;
		var str="";
		getdata.then(function(data){
			str+="<header><div class='searcharea'><h4>"+data.data[n].title+"</h4>"+"<div class='back' id='back'>";
			str+="<span class='iconfont'>&#xe648;</span></div></div></header>"
			str+="<div class='shopmall'>"+"<ul id='shoplist'>"+"<li>"+"<div>"+"<img src="+data.data[n].src+">"+"</div>";
			str+="<div class='right'>"+"<p>["+data.data[n].title+"]</p>"+"<p>自由冲浪"+data.data[n].size+"</p>";
			str+="<p>￥"+data.data[n].price+"</p>"+"<a href=#!/page/"+n+">"+"订购</a></div></li></ul></div>";
			str+="<div class='shaker'></div><div class='info'><div class='top'><div class='left'>";
			str+="<img src="+data.data[n].src+">"+"</div><div class='middle'><p>￥"+data.data[n].price+"</p>";
			str+="<p>库存"+data.data[n].num+"件</p>"+"<p>尺寸"+data.data[n].size+"cm</p></div>";
			str+="<div class='font_info'><span>快递:免运费</span><span>月销"+data.data[n].count+"</span><span>海南海口</span>";
			str+="</div></div><hr /><div class='down'><ul><li><span>收货地址:</span>";
			str+="<input type='text'></input></li><li><span>收货人:</span><input type='text'></input></li>";
			str+="<li><span>联系电话:</span><input type='text'></input></li><li><span>购买数量:</span>";
			str+="<button id='del'>-</button><b id='sl'>1</b><button id='add'>+</button><span class='result'></span><a id='buyit'>立即购买</a></li></ul></div></div>"
			$("#box").html(str);
			$(".result").html("￥"+parseInt($("#sl").html())*data.data[n].price);
			$("#add").click(function(){
				$("#sl").html(parseInt($("#sl").html())+1);
				$(".result").html("￥"+parseInt($("#sl").html())*data.data[n].price);
			})
			$("#del").click(function(){
					$("#sl").html(parseInt($("#sl").html())-1);
					$(".result").html("￥"+parseInt($("#sl").html())*data.data[n].price);
					if(parseInt($("#sl").html())<1){
						$("#sl").html(1);
						$(".result").html("￥"+parseInt($("#sl").html())*data.data[n].price);
					}
			})
		
			function wh(){
				var h=$(".info").height();
				var h1=$(".top").height();
				var h2=h-h1;
				return h2;
			}
			$(".down").css("height",wh()+"px");
			$("#buyit").click(function(){
				
			})
		
			$("#back").click(function(){
				history.go(-1);
			})
		})
	})
app.factory('getdata',function($q){
	var defer = $q.defer();
	$.ajax({
		method:'get',
		url:"index.json"
	}).then(function(data){
		defer.resolve(data);
	});
	return defer.promise;
})
	