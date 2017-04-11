/// <reference path="scripts/angular.min.js" />
/// <reference path="scripts/angular-route.min.js" />
/// <reference path="route.js" />

var sampleModule = angular.module("sampleModule", ["ui.router"])
    .controller("homeController", function ($state) {
        this.message = "Home Page";
       
        this.homeCustomData1 = $state.current.data.customData1;
        this.homeCustomData2 = $state.current.data.customData2;

        this.courseCustomData1 = $state.get("courses").data.customData1;
    })
        .controller("coursesController", function () {
            this.courses = ["C#", ".NET", "SQL Server", "AngularJS"];
        })
    .controller("personParentController", function (personTotals) {
        this.males = personTotals.males;
        this.females = personTotals.females;
    })
    .controller("personsTotalController", function (personTotals) {
        this.total = personTotals.total;
    })
.controller("personsController", function (personsList, $http, $state, $scope, $location, personTotals) {
    var vm = this;
    vm.searchPerson = function () { 
        $state.go("personParent.searchPerson", { pname: vm.pname });
    }
    //$scope.$on("$stateChangeStart", function (event, next, current) {
    //    if (!confirm("Are you sure you want to navigate from this page to " + next.$$state.originalPath))
    //        event.preventDefault();
    //});
    vm.reloadData = function () {
        $state.reload();
    }
    vm.persons = personsList;
    vm.personsTotal = personTotals;
})
  
    .controller("personDetailsController", function ($http, $stateParams) {
        var vm = this;
        $http({
            url: "person.asmx/personDetails",
            method: "get",
            params: { pid: $stateParams.pid }
             })
            .then(function (response) {
                console.log(response);
                vm.person = response.data;
            })
    })
    .controller("searchPersonController", function ($http, $stateParams) {
        var vm = this;
        if ($stateParams.pname) {
            $http({
                url: "person.asmx/personDetailsByName",
                method: "get",
                params: { pname: $stateParams.pname }
            })
            .then(function (response) {
                console.log(response);
                vm.persons = response.data;
            })
        }
        else {
            $http.get("person.asmx/personName")
            .then(function (response) {
                console.log(response);
                vm.persons = response.data;
            })
        }
    })
    .controller("employeesController", function ($http) {
        var vm = this;
        $http.get("Employee.json")
            .then(function (response) {
                vm.employees = response.data;
            })

    })
;