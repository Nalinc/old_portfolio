var require={
  waitSeconds: 0,
  paths:{
    'angular':[
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min',
                'node_modules/angular/angular.min'
              ],
    'jquery':'/node_modules/jquery/dist/jquery.min',
    'angular-route':[
                      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route',
                      'node_modules/angular-route/angular-route.min'
                    ],
/*    'bootstrap':[
                  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
                  'node_modules/bootstrap/dist/js/bootstrap.min'
                ],*/
    'app':'app',
    'homeCtrl':'controllers/homeController',
    'aboutCtrl':'controllers/aboutController',
    'ngHeader':'directives/ngHeader',
    'ngFooter':'directives/ngFooter',
    'plugins':'lib/plugins',
    'custom':'lib/custom',
    'skillCtrl':'controllers/skillController',
    'projectCtrl':'controllers/projectController',
    'raphael':'lib/raphael',
    'init':'lib/init',
    'texteffect':'lib/texteffect',
    'angular-animate':'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-animate'
  },

  shim: {
    'app': { deps: ['angular', 'angular-route'] },
    'angular-route': { deps: ['angular'] },
    'ngHeader': { deps: ['angular']},
    'ngFooter': { deps: ['angular']},
    'angular-animate':{ deps: ['angular']},
    'aboutCtrl': { deps: ['angular','angular-animate']},
    'homeCtrl': { deps: ['angular','angular-animate']},
    'skillCtrl': { deps: ['angular','angular-animate']},
    'projectCtrl': { deps: ['angular','angular-animate']},
    'custom':{ deps: ['jquery','plugins']},
/*    'bootstrap': { deps: ['jquery']},*/
    'raphael':{ deps: ['jquery']},
    'plugins':{ deps: ['jquery']},
    'init':{ deps: ['raphael']},
    'texteffect':{ deps: ['jquery']}
  }

}