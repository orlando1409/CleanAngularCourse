'use strict';

angular.module('DemoAngular.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','dataFactory',function($scope,dataFactory) {
  $scope.items=dataFactory.getItems();
}]);
