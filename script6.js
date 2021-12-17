
var myApp=angular.module("module6",[])
                 .controller("myctl6", function($scope){

                    var employee=[
                                     {firstName:"Ajay",lastName:"Patel",gender:"Male",salary:40000},
                                     {firstName:"jay",lastName:"Patel",gender:"Male",salary:50000},
                                     {firstName:"Sara",lastName:"Patel",gender:"Female",salary:30000},
                                     {firstName:"Rahul",lastName:"Patel",gender:"Male",salary:440000}
                    ]
                    $scope.msg="Hello Part  2267"
                    $scope.employee=employee;

                 })
    
var app=angular.module("mod6",[])
                .controller("mc6",function($scope){

                    var countries=[
                        {
                            name:"UK",
                            cities:[
                                     {name:"London"},
                                     {name:"Manchester"}
                                   ]
                        },
                        {
                            name:"India",
                            cities:[
                                     {name:"Channai"},
                                     {name:"Mumbai"}
                                   ]
                        }

                    ];

                    $scope.msg="Hello Part  "
                    $scope.countries=countries
                })