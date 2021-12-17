// var app=angular.module("module17",[])
//                .controller("controller17",function($scope,$http){
                    
//                 $http.get("http://localhost:8181/RESTDemo/webapi/myresource/names")
//                 .then(function(response){
                        
//                     $scope.emp=response.data;
//                   })

                
//                });
               
               var app = angular.module('module17', []);
               app.controller('controller17', function($scope, $http,$log) {
                 $http.get("http://localhost:8181/RESTDemo/webapi/myresource/getsample")
                 .then(function(response) {
                   $scope.content = response.data;
                   $scope.statuscode = response.status;
                   $scope.statustext = response.statusText;
                   $log.info(response);
                 });
                 $scope.msg="Hello REST";
               });