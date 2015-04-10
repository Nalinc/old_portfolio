
require.config({
  paths:{
    "angular":"node_modules/angular/angular",
    "jquery":"node_modules/jquery/dist/jquery.min",
    "angular-route":"node_modules/angular-route/angular-route.min",
    "bootstrap":"node_modules/bootstrap/dist/js/bootstrap.min",
    "homeCtrl":"controllers/homeController",
    "ngHeader":"directives/ngHeader", 
    "ngFooter":"directives/ngFooter",
    'plugins':'js/plugins',
    'custom':'js/custom',
    'skillCtrl':'controllers/skillController'
  },

  shim: {
    'ngHeader': ['angular'],
    'ngFooter': ['angular'],
    'angular-route':['angular'],
    'homeCtrl': ['angular'],
    'skillCtrl': ['angular'],
    'bootstrap': ['jquery'],
//    'plugins':['jquery'],
//    'custom':['jquery','plugins']
  }

})


require([
          "angular",
          "angular-route",
          "homeCtrl",
          "ngHeader",
          "ngFooter",
          "skillCtrl"
//          "jquery",
 //         "bootstrap",
   //       "plugins",
     //     "custom"
          
          ],function(){

              var app= angular.module('Portfolio',['ngRoute','homeCtrl','appFooter','appHeader','skillCtrl']);

                app.config(['$routeProvider',
                  function($routeProvider) {
                    $routeProvider.
                      when('/', {
                        templateUrl: 'partials/home.html',
                        controller: 'homeController'
                      }).
                      when('/about', {
                        templateUrl: 'partials/about.html',
                        controller: 'homeController'
                      }).
                      when('/skills', {
                        templateUrl: 'partials/skills.html',
                        controller: 'skillController'
                      }).
                      when('/projects', {
                        templateUrl: 'partials/projects.html',
                        controller: 'homeController'
                      }).            
                      when('/connect', {
                        templateUrl: 'partials/connect.html',
                        controller: 'homeController'
                      }).            
                      otherwise({
                        redirectTo: '/'
                      });
                  }]);

        angular.bootstrap(document, ['Portfolio']);

});