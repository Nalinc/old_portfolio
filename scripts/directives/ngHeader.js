define(function(){
	var app= angular.module('appHeader',[]);

	app.directive("ngHeader",function(){
		return{
			restrict:'E',
			templateUrl:'views/ng-header.html'
		};
	});

});