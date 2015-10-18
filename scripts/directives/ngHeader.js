define(function(){
	var app= angular.module('appHeader',[]);

	app.directive("ngHeader",function(){
		return{
			restrict:'E',
			templateUrl:'views/ng-header.html',
			controller:function($rootScope){
				$rootScope.$on('$routeChangeStart', function(event, next, current) {
					$rootScope.showLoader= true;
				});
				$rootScope.$on('$routeChangeSuccess', function(event, next, current) {
					$rootScope.showLoader= false;
				});			

			}
		};
	});

});