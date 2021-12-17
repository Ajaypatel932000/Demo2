///  <reference path="angular.min.js" />

var myApp=angular
             .module("myapp",[])
             .controller("myctl",function($scope){
                
                var country={
                    name:"India",
                    flag:"ang.jpeg"
                }
   
                 $scope.country=country;
             
      });