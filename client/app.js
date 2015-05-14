  
require.config({
  waitSeconds: 0,
  paths:{
    'angular':[
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min',
                '../node_modules/angular/angular.min'
              ],
    'jquery':'../node_modules/jquery/dist/jquery.min',
    'angular-route':[
                      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route',
                      '../node_modules/angular-route/angular-route.min'
                    ],
    'bootstrap':[
                  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
                  '../node_modules/bootstrap/dist/js/bootstrap.min'
                ],
    'homeCtrl':'controllers/homeController',
    'ngHeader':'directives/ngHeader', 
    'ngFooter':'directives/ngFooter',
    'plugins':'js/plugins',
    'custom':'js/custom',
    'skillCtrl':'controllers/skillController',
    'projectCtrl':'controllers/projectController',
    'raphael':'js/raphael',
    'init':'js/init',
    'texteffect':'js/texteffect',
    'angular-animate':'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-animate'
  },

  shim: {
    'angular':{ deps: ['jquery']},
    'ngHeader': { deps: ['angular']},
    'ngFooter': { deps: ['angular']},
    'angular-route':{ deps: ['angular']},
    'angular-animate':{ deps: ['angular']},
    'homeCtrl': { deps: ['angular','bootstrap','angular-animate']},
    'skillCtrl': { deps: ['angular','angular-animate']},
    'projectCtrl': { deps: ['angular','angular-animate']},
    'custom':{ deps: ['jquery','plugins']},
    'bootstrap': { deps: ['jquery']},
    'raphael':{ deps: ['jquery']},
    'plugins':{ deps: ['jquery']},
    'init':{ deps: ['raphael']},
    'texteffect':{ deps: ['jquery']}
  }

})


require([
          "angular",
          "angular-route",
          "angular-animate",
          "homeCtrl",
          "ngHeader",
          "ngFooter",
          "skillCtrl",
          "projectCtrl"          
          ],function(){

              var app= angular.module('Portfolio',['ngRoute','homeCtrl','appFooter','appHeader','skillCtrl','projectCtrl','ngAnimate']);

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
                        controller: 'projectController'
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