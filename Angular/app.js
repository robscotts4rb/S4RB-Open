angular.module('app', [])
    .controller('IndexController', function($scope, $http) {
        $scope.summary = "Scope of the CPMU JSON data";
        $http.get('http://localhost:3000/CPMU').
          success(function(data, status, headers, config) {
            $scope.CPMU = data;
          }).
          error(function(data, status, headers, config) {
            $scope.CPMU = {};
          });
    });
