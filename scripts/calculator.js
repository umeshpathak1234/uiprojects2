var app= angular.module('myapp',[]);
app.controller("calculator", function($scope){
    $scope.add=function(x,y){
        Addition:
        $scope.result="Addition: " + ($scope.a+$scope.b);
    }
    $scope.sub=function(x,y){
        $scope.result="Subtraction: " + ($scope.a-$scope.b);
    }
    $scope.mul=function(x,y){
        $scope.result="Multiplication: " + ($scope.a*$scope.b);
    }
    $scope.div=function(x,y){
        $scope.result="Division: " + ($scope.a/$scope.b);
    }
  
});
 