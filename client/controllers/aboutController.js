define(['texteffect','jquery'],function(){
	var appCtrl=angular.module('aboutCtrl',[]);

	appCtrl.controller("aboutController",function($scope,$rootScope){


		$scope.$on('$viewContentLoaded', function(){


		    angular.element(".subtitle").scrambledWriter();

		});

	});

});
