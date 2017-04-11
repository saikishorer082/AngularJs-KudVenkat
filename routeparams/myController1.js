/// <reference path="scripts/angular.min.js" />
/// <reference path="scripts/angular-route.min.js" />

var sampleModule = angular.module("sampleModule", ["ngRoute"])
.config(function ($routeProvider,$locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Templates/home.html",
            controller: "homeController"
        })
    .when("/courses", {
        templateUrl: "Templates/courses.html",
        controller: "coursesController"
    })
    .when("/persons", {
        templateUrl:"Templates/persons.html",
        controller: "personsController"
    })
         .when("/persons/:pid", {
             templateUrl: "Templates/personDetails.html",
             controller: "personDetailsController"
         })
        .when("/employees", {
            templateUrl: "Templates/employees.html",
            controller: "employeesController"
        })
       
    .otherwise({
        redirectTo:"/home"
    })
    
    $locationProvider.html5Mode(true);
})
        .controller("homeController",function($scope){
            $scope.message = "Home Page";
        })
        .controller("coursesController",function($scope){
            $scope.courses = ["C#",".NET","SQL Server","AngularJS"];
        })
.controller("personsController",function($scope,$http){
    $http.get("person.asmx/personName")
        .then(function (response) {
            console.log(response);
            $scope.persons = response.data;
        })
})
    .controller("personDetailsController", function ($scope, $http, $routeParams) {
        $http({
            url: "person.asmx/personDetails",
            params: { pid: $routeParams.pid },
            method: "get"
        })
            .then(function (response) {
                console.log(response);
                $scope.person = response.data;
            })
    })
    .controller("employeesController",function($scope,$http){
        $http.get("Employee.json")
            .then(function (response) {
                $scope.employees = response.data;
            })
});