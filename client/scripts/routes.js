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
            '/skills': {
                templateUrl: '/views/skills.html',
                dependencies: [
                    'controllers/skillController'
                ]
            },
            '/projects': {
                templateUrl: '/views/projects.html',
                dependencies: [
                    'controllers/projectController'
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