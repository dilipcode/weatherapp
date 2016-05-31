angular.module('weatherApp').config(function($routeProvider){

  $routeProvider
  .when('/current', {
    templateUrl: 'current.html',
    controller: 'currentController'
  })

  .when('/forecast', {
    templateUrl: 'forecast.html',
    controller: 'forecastController'
  })

  .when('/', {
    templateUrl: 'home.html',
    controller: 'mainController'
  })


})