require.config({
  paths:{
    'angular':[
                '//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min',
                '../node_modules/angular/angular.min'
              ],
    'jquery':'/node_modules/jquery/dist/jquery.min',
    'angular-route':[
                      '//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route',
                      '../node_modules/angular-route/angular-route.min'
                    ],
    'app':'app',
    'wow':'lib/wow',
    'texteffect':'lib/texteffect',
    'angular-animate':'//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-animate'
  },

  shim: {
    'app': { deps: ['angular', 'angular-route','texteffect'] },
    'angular-route': { deps: ['angular'] },
    'angular-animate':{ deps: ['angular']},
    'texteffect':{ deps: ['jquery']}
  }
});

require(['app'], function(app){
        angular.bootstrap(document, ['app']);
    }
);
