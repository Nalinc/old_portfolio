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
    app.controller('labController', function($scope, $rootScope){
        $scope.modalShown = false;
        $scope.projects=[{
                            name:'weather report notifier',
                            img:{
                                small:'images/lab/wrn.png',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'information-retrieval'
                        },{
                            name:'codeasy',
                            img:{
                                small:'images/lab/ce.jpg',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'casual'
                        },{
                            name:'XnOs',
                            img:{
                                small:'images/lab/XnOs.png',
                                large:''
                            },
                            description:'XnOs is a 2-player strategy game played on 4 X 4 board in which a player has to get 4 consecutive symbols in a row either horizontally, vertically or diagonally in order to win. It is a varient of m,n,k game in which two players take turns in placing a stone/symbol of their color on an m×n board, the winner being the player who first gets k stones of their own color/symbol in a row, horizontally, vertically, or diagonally. m,n,k-game is also called a k-in-a-row game on m×n board. Thus,tic-tac-toe is the 3,3,3-game and XnOs is a 4-4-4 game.XnOs is a 2-player strategy game played on 4 X 4 board in which a player has to get 4 consecutive symbols in a row either horizontally, vertically or diagonally in order to win. It is a varient of m,n,k game in which two players take turns in placing a stone/symbol of their color on an m×n board, the winner being the player who first gets k stones of their own color/symbol in a row, horizontally, vertically, or diagonally. m,n,k-game is also called a k-in-a-row game on m×n board. Thus,tic-tac-toe is the 3,3,3-game and XnOs is a 4-4-4 game.XnOs is a 2-player strategy game played on 4 X 4 board in which a player has to get 4 consecutive symbols in a row either horizontally, vertically or diagonally in order to win. It is a varient of m,n,k game in which two players take turns in placing a stone/symbol of their color on an m×n board, the winner being the player who first gets k stones of their own color/symbol in a row, horizontally, vertically, or diagonally. m,n,k-game is also called a k-in-a-row game on m×n board. Thus,tic-tac-toe is the 3,3,3-game and XnOs is a 4-4-4 game.XnOs is a 2-player strategy game played on 4 X 4 board in which a player has to get 4 consecutive symbols in a row either horizontally, vertically or diagonally in order to win. It is a varient of m,n,k game in which two players take turns in placing a stone/symbol of their color on an m×n board, the winner being the player who first gets k stones of their own color/symbol in a row, horizontally, vertically, or diagonally. m,n,k-game is also called a k-in-a-row game on m×n board. Thus,tic-tac-toe is the 3,3,3-game and XnOs is a 4-4-4 game.',
                            classes:'casual'
                        },{
                            name:'chat.js',
                            img:{
                                small:'images/lab/chatjs.png',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'casual design'
                        },{
                            name:'FOSSEE',
                            img:{
                                small:'images/lab/fossee.png',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'professional'
                        },{
                            name:'Multi-Chaotic Cryptosystem',
                            img:{
                                small:'images/lab/chaoscrypto.png',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'professional design'
                        },{
                            name:'Genetic Cryptanalysis',
                            img:{
                                small:'images/lab/geneticrypt.png',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'design'
                        },{
                            name:'CDS Metadata Upgradation',
                            img:{
                                small:'images/lab/cds.png',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'information-retrieval professional'
                        },{
                            name:'ACO Simulation',
                            img:{
                                small:'images/lab/aco.png',
                                large:''
                            },
                            description:'a quick brown fox jumped over the lazy log',
                            classes:'casual design'
                        }];
        $rootScope.currentProject=$scope.projects[0];
        $scope.openModal=function(obj){
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
          };
        },
        templateUrl: "views/modal.html"
      };
    });

   return app;
});