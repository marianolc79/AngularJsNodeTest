'use strict';

angular.module('myApp.Module1', ['ngTouch', 'ui.grid' ])

.controller('module1Controller', function($scope) {
        
    $scope.message = 'This is a message';
     
    $scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
    ];
});