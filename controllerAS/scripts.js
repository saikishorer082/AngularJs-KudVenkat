/// <reference path="C:\Users\saikishorereddy\Documents\Visual Studio 2015\Projects\Angular\controllerAS\scripts/angular.min.js" />

var sample = angular.module("sample", [])
        .controller("rootScope", function ($scope,$rootScope) {
            $scope.messageLocal = "This Scope is Local";
            $rootScope.messageGlobal = "This Scope is Global from rootScope controller";
        })
        .controller("scope", function ($scope) {
            $scope.messageLocal = "This scope is local";
})