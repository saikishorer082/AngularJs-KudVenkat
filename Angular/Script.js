/// <reference path="scripts/angular.min.js" />
var sample=angular.module("sample",[]);
sample.controller("test", function ($scope) {
    $scope.names = [];
    $scope.Add = function () {
        $scope.names.push($scope.name);
    }
    $scope.Delete = function (i) {
        $scope.names.splice(i, 1);
    }
    $scope.Select = function (i) {
        $scope.names = $scope.names[i];
    }
    $scope.Edit = function (n, i) {
        $scope.names[i] = name;
    }

});

//sample.controller("test", function ($scope) {
//    $scope.person = [];
//    (
//        function () {
//            $scope.person = [
//                { pid: 1001, pname: "kishore", age: 25, gender: "Male" },
//                { pid: 1002, pname: "sai", age: 24, gender: "Male" },
//                { pid: 1003, pname: "Rani", age: 20, gender: "Female" },
//                { pid: 1004, pname: "reddy", age: 25, gender: "Male" },
//            ];
//        })();
//    $scope.Add = function(p)
//    {
//        $scope.person.push(p);
//        $scope.p = {};
//    }
//    $scope.Delete = function (i) {
//        $scope.person.splice(i,1);
//    }
//    $scope.update = function (p,i) {
//        $scope.person[$scope.i] = p;
//        $scope.p = {};
//    }
//    $scope.Edit = function (p,i) {
//        $scope.p = $scope.person[i];
//    }
//});

//$scope.updateBook = function (book) {
//    $scope.books[$scope.editId] = book;
//    $scope.editId = undefined;
//    $scope.book = {};
//}