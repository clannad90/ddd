var app=angular.module("app",["ui.router","page","person"]);
//app.directive("main",function(){
//	return {
//		templateUrl:"view/main.html",
//		restrict:"EA",
//		replace: true
//	}
//})
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("one");
	$stateProvider.state({
		name:"one",
		url:'/one',
		templateUrl:"view/pageone.html"
	}).state({
		name:"two",
		url:"/two",
		templateUrl:"view/pagetwo.html"
	}).state({
		name:"three",
		url:"/three",
		templateUrl:"view/pagethree.html"
	}).state({
		name:"four",
		url:"/four",
		templateUrl:"view/pagefour.html"
	}).state({
		name:"page",
		url:"/page/:id",
		templateUrl:"view/page.html",
		controller:"pagecon"
	}).state({
		name:"online",
		url:"/online",
		templateUrl:"view/online.html"
	}).state({
		name:"user",
		url:"/person/:id",
		templateUrl:"view/person.html",
		controller:"person"
	})
})
window.onload=function(){
	var deviceWidth = document.documentElement.clientWidth;
	if(deviceWidth > 640) deviceWidth = 640;
	document.documentElement.style.fontSize = 20+ 'px';
	$("#back").click(function(){
		history.go(-1);
	})
}
