///  <reference path="angular.min.js" />

//  below this code in one lines
//  var myApp=angular
//                .module("myModule",[])
//                .controller("myController",function($scope){
//                 var employee={
//                     firstName:"Ajay",
//                     lastName:"KACHHIYAPATEL",
//                     gender:"MALE"
//                 }
//                  $scope.message="Hello World"
//                  $scope.employee=employee;
            
            
//             });

var myApp=angular.module("myModule",[])



myApp.controller("myController",function($scope){
    var employee={
        firstName:"Ajay",
        lastName:"KACHHIYAPATEL",
        gender:"MALE"
    }
     $scope.message="Hello World"
     $scope.employee=employee;


});