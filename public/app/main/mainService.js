
angular.module("myApp")
.factory("mainService", ["$http",
   function ($http) {
      var factory = {
         getService1: getService1,
         getService2: getService2
      };
      
      function getService1() {
          return $http.get("api/getService1");
      };
      function getService2() {
          return $http.get("api/getService2");
      };
       
      return factory;
   }]);