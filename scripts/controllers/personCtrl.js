"use strict";
angular.module("appName").controller("personCtrl",
["$scope","personService",function($scope,personService){
    //init();
    
   
    function init(){
        personService.setfirstName("Barrack");
        personService.setlastName("obama");
        personService.setAddress("White house");
        personService.setphone("911");
    }
    
    $scope.initialize=function(){
        init();
        console.log("FROM PERSON CONTROLLER")
        personService.testValues();
    }
    
}]);