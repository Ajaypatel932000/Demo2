var app=angular.module("mymodule8",[])
               .controller("mycontroller8",function($scope){

                 var emp=[
                     { name:"Ajay",dateOfBirth: new Date("Nov 23, 1980"),gender:"Male",salary:55000},
                     { name:"Karan",dateOfBirth: new Date("Jan 3, 1980"),gender:"Male",salary:85000},
                     { name:"Sumit",dateOfBirth: new Date("June 23, 1980"),gender:"Male",salary:75000},
                     { name:"Rajal",dateOfBirth: new Date("Nov 23, 1980"),gender:"Female",salary:95000},
                     { name:"Manisha",dateOfBirth: new Date("Nov 23, 1980"),gender:"Female",salary:55000}
                 ];
                 $scope.emp=emp;
                 $scope.rowLimit=3;

               })