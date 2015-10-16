var webApp = angular.module('webApp', ['ngRoute', 'ngResource']);
/* Router */
webApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'location.html',
                controller: 'locationCtrl'
            }).
            when('/Menu', {
                templateUrl: 'menu_all.html',
                controller: 'menuCtrl'
            }).
            
           otherwise({
                redirectTo: '/Home'
            });
    }

]).controller('locationCtrl', function($scope,$http, $location) {
  $http.get('location.json').success(function(response){ /* Fetching the JSON data */

    $scope.dLocation=response;

    $scope.onLocationClick = function(){
      $location.path("/Menu");
    }

  });
  });
webApp.controller('menuCtrl', function($scope,$http, $location) {
  $http.get('menu.json').success(function(response){ /* Fetching the JSON data */

    $scope.fMenu=response;
    $scope.onVegClick = function(){
      $scope.vegValue = "veg";

      //$scope.sample = $scope.fMenu;
     //for(i=0;i<$scope.fMenu.Menu.length;i++){
      //$scope.fMenu.Menu[i] = ($($scope.fMenu).filter($scope.fMenu.Menu[i].type =="veg"));
      //$scope.fMenu.Menu.filter(function() {
      //return  $( this ).type === "veg";
  }
  

   // }

    

  });
  });
$(".nav li").on("click", function() {
    location.href ="/#Menu";
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });

