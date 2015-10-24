define(['angular-animate','wow'], function()
{
    var app = angular.module('app', ['ngRoute','ngAnimate']);

    app.config(function($routeProvider){

            $routeProvider
                .when('/', {
                templateUrl: '/views/home.html',
                controller: 'homeController',
              })
                .when('/about', {
                templateUrl: '/views/about.html',
                controller: 'aboutController'
              })
                .when('/profile', {
                templateUrl: '/views/profile.html',
                controller: 'profileController'
              })
                .when('/lab', {
                templateUrl: '/views/lab.html',
                controller: 'labController'
              })
                .when('/connect', {
                templateUrl: '/views/connect.html',
                controller: 'connectController'
              })
                .otherwise({
                redirectTo: '/'
              });
            /*  $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });*/
        });

    /*-----Controllers----- */
    app.controller('homeController', function($scope,$rootScope){
            $rootScope.showLoader= false;
            wow = new WOW({animateClass: 'animated', mobile: true});
            wow.init();
    });
    app.controller("aboutController",function($scope,$rootScope){
            $(".subtitle").scrambledWriter();
    });
    app.controller("profileController",function($scope){
        
    });
    app.controller('labController', function($scope){
        $scope.open=function(){
            alert()
        }
        $('ul#filter a').click(function() {
                $(this).css('outline','none');
                $('ul#filter .current').removeClass('current');
                $(this).parent().addClass('current');
                
                var filterVal = $(this).text().toLowerCase().replace(' ','-');
                    
                if(filterVal == 'all') {
                  $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
                } else {
                  $('ul#portfolio li').each(function() {
                    if(!$(this).hasClass(filterVal)) {
                      $(this).fadeOut('normal').addClass('hidden');
                    } else {
                      $(this).fadeIn('slow').removeClass('hidden');
                    }
                  });
                }
            return false;
        });
    });
    app.controller("connectController",function($scope){
        
    });    

    /*-----Directives----- */
    app.directive("ngFooter",function(){
        return{
            restrict:'E',
            templateUrl:'views/ng-footer.html'
        };
    });    
    app.directive("ngHeader",function(){
        return{
            restrict:'E',
            templateUrl:'views/ng-header.html',
            controller:function($rootScope,$timeout){
                $rootScope.$on('$routeChangeStart', function(event, next, current) {
                    $rootScope.showLoader= true;
                });
                $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
                    $rootScope.showLoader= false;
//                    $timeout(function(){$rootScope.showLoader= false;}, 1000);
                });         
            }
        };
    });

   return app;
});