'use strict';

angular.module('DemoAngular.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Home/home.html',
    controller: 'HomeController'
  });
}]);
