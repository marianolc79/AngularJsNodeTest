'use strict';

// Underscore library and mainService are injected
angular.module('myApp.Main')
.controller('mainController', ['$scope', '_', 'mainService', 
function ($scope, _, mainService) {    
    console.log('Controller..');
    //This message is read via an angular expression
    $scope.message = 'This is a text message example from controller';
    //This one is read via ng-bind
    $scope.message1 = 'This is a text message example from controller via ng-bind';
 
    $scope.list = [
        {
            id: 1, 
            name: "Element1", 
            order: 2
        },
        {
            id: 2, 
            name: "Element2",            
            order: 44
        },
        {
            id: 3, 
            name: "Element3",            
            order: 5                        
        }
    ];
    
    // Form data definition, all controls are initialized
    $scope.form = {
        text : "Text",
        selectedElement : $scope.list[1]
    };
    
    // List sorting by order property
    $scope.list = _.sortBy($scope.list, function(x) { return x.order; });
    
    // Function attached to button
    $scope.clickFunction = function() {
        var msg = "Text : "+$scope.form.text+"\n";
        msg += "Combo : "+$scope.form.selectedElement.name;
        alert(msg);
    };  
    
    // ng-change should be used over watches (for performance raisons)
    $scope.comboChangeFunction = function() {
        alert("ng-change function called...");  
    };

    $scope.resetServiceResult = function() {
        $scope.resultCall = null;
    };

    // Call to services 
    $scope.callService = function(servNum) {
        if(servNum == 1) {
            mainService.getService1().then(function(response) {
                $scope.resultCall = response.data;        
            });
        } else {
            mainService.getService2().then(function(response) {
                $scope.resultCall = response.data;        
            });
        }
    };
}]);