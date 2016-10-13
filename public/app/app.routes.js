
    'use strict';

    angular.module('myApp')
    .config([//'$locationProvider', 
    '$routeProvider', function($routeProvider) { //$locationProvider, 
    //$locationProvider.hashPrefix('!');

    $routeProvider
    .when('/', {
                templateUrl: 'app/main/mainView.html',
                //action: 'myApp.Module1',
                controller : 'mainController'
            })
    .when('/module1', {
                templateUrl: 'app/module1/module1View.html',
                //action: 'myApp.Module1',
                controller : 'module1Controller'
            })
    .when('/module2', {
                templateUrl: 'app/module2/module2View.html',
                //action: 'myApp.Module2',
                controller : 'module2Controller'
            })
    
    .otherwise({
            redirectTo: '/'
        });
    }]);
