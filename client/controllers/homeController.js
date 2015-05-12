define(['texteffect','jquery'],function(){
	var appCtrl=angular.module('homeCtrl',[]);

	appCtrl.controller("homeController",function($scope,$rootScope){


		$scope.$on('$viewContentLoaded', function(){

			$rootScope.showLoader= false;

		    angular.element(".subtitle").scrambledWriter();

		});

	});

});
