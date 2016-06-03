
var weather = angular.module('weatherApp',['ngRoute', 'ngResource']);

// SERVICE

weather.service('cityService', function(){
  this.cityName = "Tirupathi";
})

// CONTROLLERS
weather.controller('cricketController', function($scope, $http){
  
  $scope.getMatch = function(){
    var urlStr = 'http://cricapi.com/api/cricket/'
    $http({
      method: 'GET',
      url: urlStr
    }).then(function successCallback(response){
      
      console.log(response);
      
      $scope.results = response.data.data
      
    },
    function errorCallback(response){
      console.log("error");
    });
  }
  
  $scope.getScore = function(id){
    var urlStr = 'http://cricapi.com/api/cricketScore?unique_id='+id
    $http({
      method: 'GET',
      url: urlStr
    }).then(function successCallback(response){
      console.log(response);
      $scope.scores = response.data;
    },
     function errorCallback(response){
      console.log("error while getting scores");
    });
  }
  
});

weather.controller('mainController', function($scope,cityService,$route,$location){
  $scope.cityName = cityService.cityName;
  
  $scope.$watch('cityName', function(){
    cityService.cityName = $scope.cityName;
  })
  // $route.reload();
  $scope.path = $location.absUrl();
});

weather.controller('currentController', function($scope,$http,$route,cityService){

  
  $scope.getCurrent = function(){
    console.log("Current weather called");
    // $route.reload();
    var urlStr = 'http://api.openweathermap.org/data/2.5/weather?q='+cityService.cityName+ '&appid=3fa7b473d43c3f2d4694babcdf10c8ee';
    $http({
      method: 'GET',
      url: urlStr
    }).then(function successCallback(response){
        console.log(response);
        $scope.result = response.data;
        $scope.result.dt = $scope.result.dt * 1000;
        $scope.result.main.temp = $scope.result.main.temp - 273.15;
        }, 
        function errorCallback(response){
          console.log("error");
          $scope.errorMessage = "Unable to fetch weather data";
        });
  }
  
  $scope.getCurrent();

});

weather.controller('forecastController', function($scope, $http,cityService,$routeParams){
 
 $scope.days = $routeParams.days || '2'; 
  $scope.getForecast = function(){
    console.log("Forecast called");
    var urlStr = 'http://api.openweathermap.org/data/2.5/forecast?q='+cityService.cityName+ '&appid=3fa7b473d43c3f2d4694babcdf10c8ee&cnt=';
    $http({
      method: 'GET',
      url: urlStr
    }).then(function successCallback(response){
        console.log(response);
        $scope.results = response.data.list;        
        }, 
        function errorCallback(response){
          console.log("error");
          $scope.errorMessage = "Unable to fetch weather data";
        });
  }
  $scope.getForecast();
});
