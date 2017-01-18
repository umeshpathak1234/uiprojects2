"use strict"
angular.module("appName").factory("personFactory", function(){
   var firstName,lastName,address,phone;
    var _this=this;
    
    return{
        
        setfirstName:function(fName){
            _this.firstName=fName;
            
        },
        setlastName:function(lname){
            _this.lastName=lname;
        },
        setAddress:function(addre){
            _this.address=addre;
            
        },
        setPhone:function(fon){
            _this.phone=fon;
        },
        getfirstName:function(){
            return _this.fName;
            
        },
        getlastName:function(){
            return _this.lastname;
        },
        getphone:function(){
            return _this.phone;
            
        },
        getaddress:function(){
            return _this.address;
        },
    
        testValues:function(){
            console.log("From factory");
            console.log(_this.firstName);
            console.log(_this.lastName);
            console.log(_this.address);
            console.log(_this.phone);
        }
    }
    
});