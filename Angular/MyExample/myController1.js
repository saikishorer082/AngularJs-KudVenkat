/// <reference path="scripts/angular.min.js" />
/// <reference path="myService.js" />

var sampleModule = angular.module("sampleModule", [])
.controller("testController", function ($scope, myService) {
    $scope.e = {};
    $scope.e = myService.getAllEmployees();

});