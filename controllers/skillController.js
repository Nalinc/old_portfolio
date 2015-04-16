define(['plugins'],function(){
	var sCtrl=angular.module('skillCtrl',[]);

	sCtrl.controller("skillController",function($scope){
	 	$scope.$on('$viewContentLoaded', function(){
			 $("#circular-skills").skillChart()
		});
	});
});
