
require.config({
  waitSeconds: 0,
  paths:{
    "angular":"node_modules/angular/angular.min",
    "jquery":"node_modules/jquery/dist/jquery.min",
    "angular-route":"node_modules/angular-route/angular-route.min",
    "bootstrap":"node_modules/bootstrap/dist/js/bootstrap.min",
    "homeCtrl":"controllers/homeController",
    "ngHeader":"directives/ngHeader", 
    "ngFooter":"directives/ngFooter",
    'plugins':'js/plugins.min',
    'custom':'js/custom.min',
    'skillCtrl':'controllers/skillController'
  },

  shim: {
    'ngHeader': ['angular'],
    'ngFooter': ['angular'],
    'angular-route':['angular'],
    'homeCtrl': ['angular'],
    'skillCtrl': ['angular'],
    'bootstrap': ['jquery'],
  }

})


require([
          "angular",
          "angular-route",
          "homeCtrl",
          "ngHeader",
          "ngFooter",
          "skillCtrl"          
          ],function(){

              var app= angular.module('Portfolio',['ngRoute']);

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