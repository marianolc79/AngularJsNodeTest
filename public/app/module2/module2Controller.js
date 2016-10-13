
 'use strict';

 angular.module('myApp.Module2').controller('module2Controller', function($scope) {
    $scope.message = 'This is a message';
    $scope.testFloat = 1.122;
    
    var numIn = parseFloat(1/2);
    var strx = new String(numIn);
    var GetDecimalChar = strx.substr(1,1);
    
 });