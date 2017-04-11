/// <reference path="scripts/angular.min.js" />
var sample = angular.module("sample", [])
    .controller("test", function ($scope) {
        $scope.students = [];
        (
            function(){
            $scope.students = [
            { id: 1001, name: "sai", age: 15, fee: 2000 },
            { id: 1002, name: "manohar", age: 14, fee: 3000 },
            { id: 1003, name: "harsha", age: 13, fee: 4000 },
            { id: 1004, name: "prashanth", age: 15, fee: 2000 },
            { id: 1005, name: "reddy", age: 14, fee: 2500 },
            ]
        })();
        $scope.Add = function (s) {
            $scope.students.push(s);
            $scope.s = {};
        }
        $scope.Delete = function (i) {
            $scope.students.splice(i, 1);
        }
        $scope.Edit = function (s, i) {
            $scope.s = $scope.students[i];
        }
        $scope.Update = function (s, i) {
            $scope.students[$scope.s] = s;
            $scope.s = {};
        }
        $scope.Select = function (i) {
            $scope.ss = $scope.students[i];
        }
    });