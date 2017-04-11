/// <reference path="scripts/angular.min.js" />

var sample= angular.module("sample",[])
.controller("test",function($scope){
    $scope.students = [];
    (
        function () {
            $scope.students = [
            { id: 1001, name: "sai", age: 15, fee: 2000 },
            { id: 1002, name: "manohar", age: 14, fee: 3000 },
            { id: 1003, name: "harsha", age: 13, fee: 4000 },
            { id: 1004, name: "prashanth", age: 15, fee: 2000 },
            { id: 1005, name: "reddy", age: 14, fee: 2500 },
            ]
        })();

    r=0;
    $scope.First=function(){
        r=0;
        $scope.s = $scope.students[r];
    }
    $scope.Last = function () {
        $scope.s = $scope.students[$scope.students.length - 1];
    }
    $scope.next = function () {
        if (r < $scope.students.length-1)
            r++;
        else
            alert("No more rows exist");
            $scope.s = $scope.students[r];
    }
    $scope.previous = function () {
        if (r > 0)
            r--;
        else
            alert("No more rows exists");

        $scope.s = $scope.students[r];
    }
});