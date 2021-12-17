var app=angular.module("module7",[])
               .controller("myctl7",function($scope){
                   
                var tech=[
                    {name:"C#",likes:0,dislikes:0},
                    {name:"ASP.NET",likes:0,dislikes:0},
                    {name:"AngularJs",likes:0,dislikes:0},
                    {name:"NodeJs",likes:0,dislikes:0}
                ]
                $scope.msg="Hello"
                $scope.tech=tech;


                $scope.incrementLikes=function(tech)
                {
                     tech.likes++;
                }

                $scope.incrementDisLikes=function(tech)
                {
                    tech.dislikes++;
                }
        })