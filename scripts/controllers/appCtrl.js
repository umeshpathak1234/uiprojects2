angular.module("appName").controller("appCtrl", 
    ["$scope","personService","personFactory",function($scope,personService,personFactory){
        
    $scope.title="Hello world";
    $scope.formModel="George";
        
    $scope.change= function(){
        $scope.title="God dammit, check your spellings";
    }
    $scope.init=function(){
        personService.setfirstName("Donald");
        personService.setlastName("Trump");
        personService.setAddress("White house");
        personService.setphone("911");
    }
    $scope.displayPerson=function(){
        init();
        console.log("FROM APP CTRL")
        personService.testValues();
    }
    personFactory.setfirstName("hello world");
        personFactory.setlastName("Good morning");
        personFactory.testValues();
        
    
}]);
