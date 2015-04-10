
require.config({
  paths:{
    "angular":"node_modules/angular/angular",
    "jquery":"node_modules/jquery/dist/jquery.min",
    "angular-route":"node_modules/angular-route/angular-route.min",
    "bootstrap":"node_modules/bootstrap/dist/js/bootstrap.min",
    "controllers":"controllers/controllers",
    "ngHeader":"directives/ngHeader", 
    "ngFooter":"directives/ngFooter"
  },

  shim: {
    'ngHeader': ['angular'],
    'ngFooter': ['angular'],
    'angular-route':['angular'],
    'controllers': ['angular'],
    'bootstrap': ['jquery']
  }

})


require([
          "angular",
          "angular-route",
          "controllers",
          "ngHeader",
          "ngFooter",
          "jquery",
          "bootstrap"
          
          ],function(){

              var app= angular.module('Portfolio',['ngRoute','appCtrl','appFooter','appHeader']);

                app.config(['$routeProvider',
                  function($routeProvider) {
                    $routeProvider.
                      when('/', {
                        templateUrl: 'partials/home.html',
                        controller: 'hController'
                      }).
                      when('/about', {
                        templateUrl: 'partials/about.html',
                        controller: 'aController'
                      }).
                      when('/skills', {
                        templateUrl: 'partials/skills.html',
                        controller: 'aController'
                      }).
                      when('/projects', {
                        templateUrl: 'partials/projects.html',
                        controller: 'aController'
                      }).            
                      when('/connect', {
                        templateUrl: 'partials/connect.html',
                        controller: 'aController'
                      }).            
                      otherwise({
                        redirectTo: '/'
                      });
                  }]);

        angular.bootstrap(document, ['Portfolio']);

});