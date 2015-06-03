
define(function(){
    var app= angular.module('appFooter',[]);

    app.directive("ngFooter",function(){
        return{
            restrict:'E',
            templateUrl:'views/ng-footer.html'
        };
    });

});