define(function(){
    var app= angular.module('appModal',[]);

    app.directive("modal", function($rootScope, $timeout) {
	    return {
	            restrict: "E",
	            templateUrl: "views/modal.html",
	            transclude: true
	    };
	});


});