angular.module('weatherApp').config(function($routeProvider){

  $routeProvider
  .when('/current/:cityName', {
    templateUrl: 'current.html',
    controller: 'currentController'
  })

  .when('/forecast/:cityName', {
    templateUrl: 'forecast.html',
    controller: 'forecastController'
  })
  
  .when('/forecast/:days', {
    templateUrl: 'forecast.html',
    controller: 'forecastController'
  })

  .when('/', {
    templateUrl: 'home.html',
    controller: 'mainController'
  })


})