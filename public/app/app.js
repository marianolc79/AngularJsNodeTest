
'use strict';

//Declares main module (Application) and modules
angular.module('myApp', [
    'ngRoute',
    'myApp.Main', // Module 1
    'myApp.Module1', // Module 1
    'myApp.Module2', // Module 2
    ]);

// Convert into Angular modules all third-party libraries
angular.module('_', []).factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);
    
angular.module('myApp.Main', ['_']);
angular.module('myApp.Module1', ['_']);
angular.module('myApp.Module2', ['_']);
