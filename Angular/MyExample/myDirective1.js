/// <reference path="scripts/angular.min.js" />
/// <reference path="myController1.js" />
sampleModule.directive("testDirective", function () {
    return {
        templateUrl: "employee.html",
                    
        restrict: "EAC"
    };
});