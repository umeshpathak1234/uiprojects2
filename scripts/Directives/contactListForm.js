"use strict";
angular.module("appName").directive("contactListForm",
[function(){
        return{
            restrict:"EAMC",
            controller:"contactListCtrl",
            templateUrl:"/views/contactListForm.html"
            }
    }]);