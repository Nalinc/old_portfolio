define(['js/plugins.js'],function(){
	var sCtrl=angular.module('skillCtrl',[]);

	sCtrl.controller("skillController",function($scope,$http){
	 	$scope.$on('$viewContentLoaded', function(){
			 $("#circular-skills").skillChart()
		});
	});
});
