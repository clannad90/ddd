var app=angular.module("person",[]);
var username="";
	app.controller("person",function($scope,$stateParams){
		console.log($stateParams.id);
		if($stateParams.id=="05"){
			$scope.title="我的订单"
			$(".person_form").html("");
		}
		if($stateParams.id=="06"){
			$scope.title="设置";
			$(".person_form").html("");
		}
		if($stateParams.id=="07"){
			$scope.title="账号注册";
			$(".person_form").submit(function(){
				bg.transaction(function(tx){
					tx.executeSql("insert into person(username,password,tel,email) values(?,?,?,?)",[$("#username").val(),$("#password").val(),$("#tel").val(),$("email").val()],function(tx,rs){
								history.go(-1);
					})
				})
			})
		}
		if($stateParams.id=="08"){
			$scope.title="账号登陆";
			var str="";
			str="<form action='' class='person_form' method='post'><ul><li><label for='username'><b>用户名:</b><input type='text' id='username' /></label></li><li><label for='password'><b>密码:</b><input type='password' id='password' /></label></li><li><label for='sub'><input type='submit' value='立即登陆' class='sub' id='sub'/></label></li></ul></form>"
			$(".person_form").html(str);
			$("#sub").click(function(){
				bg.transaction(function(tx){
					tx.executeSql("select username,password from person",[],function(tx,rs){
						for(var i=0;i<rs.rows.length;i++){
							if($("#username").val()==rs.rows[i].username&&$("#password").val()==rs.rows[i].password){
								username=rs.rows[i].username;
								history.go(-1);
							}
						}
					})
				})
		})
	}
})
var bg=openDatabase("info","1.0","test websql",1024*1024);
		bg.transaction(function(tx){
			tx.executeSql("create table if not exists person(username char(20) Primary Key,password char(10),tel char(20),email like '%_@%_._%')");
		})