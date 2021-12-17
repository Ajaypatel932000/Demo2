var myApp=angular.module("module5",[])
                 .controller("myctl5", function($scope){

                   var employee={
                       firstName:"AJAY",
                       lastName:"Buffet",
                       gender:"Male"
                   }

                    $scope.message="Hello Part 5"
                    $scope.emp=employee;

                 })