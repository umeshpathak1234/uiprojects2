angular.module("appName").controller("contactListCtrl",
        ["$scope","personHttp",function($scope,personHttp){
            
    $scope.contactList = [];
            
    $scope.formModels = {
             firstName:"",
             lastName:"",
             address:"",
             phone:""
         };    
            
        var promise=personHttp.getPersonList();
            promise.then(function(response){
                $scope.contactList=response;
                console.log(response);
            });
            
    $scope.update = function(){
        var tempObj = {
                        firstName:$scope.formModels.firstName,
                         lastName:$scope.formModels.lastName,
                         address:$scope.formModels.address,
                         phone:$scope.formModels.phone
                };
        $scope.contactList.push(tempObj);
            }
    
         var person1= {
                firstName:"JOhn",
                 lastName:"doe",
                 address:"ah",
                 phone:"76832"
            };
        var person2= {
                firstName:"JOhn",
                 lastName:"cena",
                 address:"You can't see me",
                 phone:"762"
            };
        var person3= {
                firstName:"Undertaker",
                 lastName:"Kane",
                 address:"Under world",
                 phone:"999999"
            };
         
//            $scope.contactList.push(person1);
//            $scope.contactList.push(person2);
//            $scope.contactList.push(person3);
//            
         
         }]);