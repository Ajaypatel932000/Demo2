
var app=angular.module("module13",[])

app.filter("gender",function(){

     return function(gender){
         switch(gender)
         {
             case 1:
                      return "Female";
             case 0: 
                      return "Male";
                      
         }

     }
     
});

app.controller("controller13",function($scope){

    var emp=[

        {name:"Ajay",gender:0,salary:22000},
        {name:"Nishi",gender:1,salary:25000},
        {name:"Vijay",gender:0,salary:12000}
    ];

     
     $scope.emp=emp;

})