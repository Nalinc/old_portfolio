define([''],function(){
	var sCtrl=angular.module('skillCtrl',[]);

	sCtrl.controller("skillController",function($scope){
	 	$scope.$on('$viewContentLoaded', function(){
		// $("#circular-skills").skillChart()

  			require(["init"], function() {
        // do some stuff with these require()'d dependencies
        		if(!$("svg").height())
	        		o.init();
    		})
		});
	});
});
