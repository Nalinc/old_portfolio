define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/views/home.html',
                dependencies: [
                    'controllers/homeController'
                ]
            },
            '/about': {
                templateUrl: '/views/about.html',
                dependencies: [
                    'controllers/aboutController'
//                    'directives/app-color'
                ]
            },
            '/profile': {
                templateUrl: '/views/profile.html',
                dependencies: [
                    'controllers/profileController'
                ]
            },
            '/projects': {
                templateUrl: '/views/projects.html',
                dependencies: [
                    'controllers/projectController',
                    '/scripts/lib/framework.js'
                ]
            },
            '/connect': {
                templateUrl: '/views/connect.html',
                dependencies: [
                    'controllers/homeController'
                ]
            }                        
        }
    };
});