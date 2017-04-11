/// <reference path="scripts/angular.min.js" />
/// <reference path="Services.js" />

var sampleModule = angular.module("sampleModule", []);
sampleModule.controller("testController", function ($scope, fruits) {
    $scope.f = [];
    $scope.fruits = fruits.allFruits();
    $scope.addRecord = function () {
        
        $scope.af = fruits.addRecord($scope.af);
        $scope.af = [];
    }
    $scope.deleteRecord = function (i) {
        $scope.af = fruits.deleteRecord(i);
        $scope.af = [];
    }
    $scope.select = function (i) {
        $scope.val = i;
        
        $scope.af = fruits.select(i);

        $scope.update = function (af) {
            
            
            $scope.af = fruits.update($scope.val, $scope.af);
        }
    }
    
    
});