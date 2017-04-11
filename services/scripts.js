/// <reference path="scripts/angular.min.js" />

var sampleModule = angular.module("sampleModule", [])
    .controller("testController", function ($scope,$http) {
        $http.get("Employee.json")
        .then(function (response) {
            $scope.employees = response.data;
        })
    });