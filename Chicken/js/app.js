var webApp = angular.module('webApp', ['ngRoute', 'ngResource']);
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
  $http.get('location.json').success(function(response){ 

    $scope.dLocation=response;

    $scope.onLocationClick = function(){
      $location.path("/Menu");
}
 });
});
webApp.controller('menuCtrl', function($scope,$http, $location) {
  $http.get('menu.json').success(function(response){ 

    $scope.fMenu=response;
    $scope.onVegClick = function(){
      $scope.categoryValue = "veg";
  }
  $scope.onNonvegClick = function(){
      $scope.categoryValue = "non";
  }
  $scope.onAllClick = function(){
      $scope.categoryValue = "";
  }
  });
});
$(".nav li").on("click", function() {
    location.href ="/#Menu";
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });


