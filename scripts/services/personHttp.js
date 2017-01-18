angular.module("appName").service("personHttp",
["$http",function($http){
    this.perosnLis=[];
    var that = this;
    this.getPersonList = function(){
        return $http({
            method:"Get",
            url:"/service/contactinfo"
        }).then(function(result){
            that.personList=result.data;   
            return result.data;
        });
    
    }
}]);