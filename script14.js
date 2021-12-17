
var app=angular.module("module14",[])

app.controller("controller14",function($scope){

    var emp=[
           {name:"Ajay",gender:"Male",city:"London",salary:26000},
           {name:"Tamana",gender:"Female",city:"UK",salary:20000},
           {name:"Rimi",gender:"Female",city:"US",salary:17000},
           {name:"jay",gender:"Male",city:"London",salary:40000}
    ];

    $scope.emp=emp;
})