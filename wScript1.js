
var app=angular.module("myapp",[]);
               
app.controller("myctl",function($scope,$rootScope){

                $scope.name="AJAY PATEL";
                $rootScope.msg1="This is rootScope Example";

            
      });

app.controller("myctl2",function($scope,$rootScope){
  
    $scope.name="Vishi Patel";
    $rootScope.msg2="This Second Controller root Scope";
});
