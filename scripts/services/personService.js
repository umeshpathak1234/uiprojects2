"use strict";
angular.module("appName").service("personService", function(){
    
   var firstName,lastName,address,phone;
    
    this.setfirstName=function(Name){
        firstName=Name;
    }
    this.setlastName=function(lname){
        lastName=lname;
    }
    this.setAddress=function(addre){
        address=addre;
    }
    this.setphone=function(fon){
        phone=fon;
    }
    this.getfirstName=function(){
        return firstName;
    }
    this.getlastName=function(){
        return lastName;
    }
    this.getAddress=function(){
        return address;
    }
    this.getphone=function(){
        return phone;
    }
    this.testValues=function(){
        console.log(firstName);
        console.log(lastName);
        console.log(address);
        console.log(phone);
    }
});