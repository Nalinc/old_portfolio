define(['texteffect'],function(){
	var appCtrl=angular.module('homeCtrl',[]);

	appCtrl.controller("homeController",function($scope,$rootScope){


		$scope.$on('$viewContentLoaded', function(){

			$rootScope.showLoader= false;
//			$.noConflict();
		    jQuery(".subtitle").scrambledWriter();

		});


	});

});
