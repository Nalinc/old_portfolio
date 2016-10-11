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
/*            $("#img-thumbnail").on("mouseenter", function(){
                $("#img-thumbnail > #img-ripple").removeClass("ripple");
                $("#img-thumbnail > #img-ripple > img").css({'margin-left':'50px','border-radius':'5px'});
                $("#img-thumbnail > #img-overlay").css({'display':'block'});
            }).on("mouseleave", function(){
                $("#img-thumbnail > #img-ripple").addClass("ripple");
                $("#img-thumbnail > #img-ripple > img").css({'margin-left':'auto','border-radius':'50%'});
                $("#img-thumbnail > #img-overlay").css({'display':'none'});
            });*/
    });
    app.controller("aboutController",function($scope,$rootScope){
            $(".subtitle").scrambledWriter();
    });
    app.controller("profileController",function($scope){
        
    });
    app.controller('labController', function($scope, $rootScope, $http){
        $scope.modalShown = false;
        $http.get('data/projects.json').then(function(res){
            $scope.projects = res.data;
            $rootScope.currentProject=$scope.projects[0];
        })
        $scope.openModal=function(obj){
            $('.view-animate-container').css({'overflow-y':'hidden'});
            $rootScope.currentProject=obj;
            var property ='linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('+obj.img.small+')';
            var webkit_property ='-webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('+obj.img.small+')';
            var moz_property ='-moz-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('+obj.img.small+')';                
            $('.thumb a').css({'background':webkit_property,'-webkit-background-size': '0, cover'});
            $('.thumb a').css({'background':moz_property,'-moz-background-size': '0, cover'});
            $('.thumb a').css({'background':property,'background-size': '0, cover'});
            console.log($rootScope.currentProject)
            $scope.modalShown = !$scope.modalShown;
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
            templateUrl:'views/ng-footer.html',
            controller: function($location, $scope){
                var footerUpdate = function(){
                                        if($location.$$path == '/profile')
                        $scope.hideFooter = true;
                    else
                        $scope.hideFooter = false;
                }

                footerUpdate()
                $scope.$on('$locationChangeSuccess', function(){
                    footerUpdate();
                });
/*                $scope.$watch($location.$$path,function(oldVal, newVal){
                    $scope.loc = newVal;
                })
                console.log($scope.loc)*/
            }
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
                    $('.view-animate-container').scrollTop(0);
                });         
            }
        };
    });
    app.directive('modalDialog', function() {
      return {
        restrict: 'E',
        scope: {
          show: '=',
          project: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function() {
                scope.show = false;
                $('.view-animate-container').css({'overflow-y':'auto'})
            };
            scope.changeImage = function(img){
                var property ='linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('+img+')';
                var webkit_property ='-webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('+img+')';
                var moz_property ='-moz-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('+img+')';                
                $('.thumb a').css({'background':webkit_property,'-webkit-background-size': '0, cover'});
                $('.thumb a').css({'background':moz_property,'-moz-background-size': '0, cover'});
                $('.thumb a').css({'background':property,'background-size': '0, cover'});
            }            

        },
        templateUrl: "views/modal.html"
      };
    });

   return app;
});