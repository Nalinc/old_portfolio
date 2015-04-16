
require.config({
  waitSeconds: 0,
  paths:{
    "angular":[
                "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min",
                "node_modules/angular/angular.min"
              ],
    "jquery":"node_modules/jquery/dist/jquery.min",
    "angular-route":[
                      "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route",
                      "node_modules/angular-route/angular-route.min"
                    ],
    "bootstrap":[
                  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min",
                  "node_modules/bootstrap/dist/js/bootstrap.min"
                ],
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
    'custom':['jquery','homeCtrl'],
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