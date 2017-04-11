// <reference path="scripts/angular.min.js" />
/// <reference path="scripts/angular-route.min.js" />
/// <reference path="myController1.js" />

//var sampleModule = angular.module("sampleModule", ["ngRoute"])
sampleModule.config(function ($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider,$locationProvider) {
   $urlRouterProvider.otherwise("/home");
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "Templates/home.html",
            controller: "homeController",
            controllerAs: "homeCtrl",
            data: {
                customData1:"data1 from home state",
                customData2:"data2 from home state"
                    }
            })
    .state("courses", {
        url: "/courses",
        templateUrl: "Templates/courses.html",
        controller: "coursesController",
        controllerAs: "coursesCtrl",
        data: {
            customData1: "data1 from courses state",
            customData2: "data2 from courses state"
        }
    })
        .state("personParent", {
            url: "/persons",
            templateUrl: "Templates/personParent.html",
            controller: "personParentController",
            controllerAs: "personParentCtrl",
            resolve: {
                personTotals: function ($http) {
                    return $http.get("person.asmx/GetPersonTotals")
                            .then(function (response) {
                                return response.data;
                            })
                }
            },
            abstract: true

        })
    .state("personParent.persons", {
        url: "/",
        views: {
            "personData": {
                templateUrl: "Templates/persons.html",
                controller: "personsController",
                controllerAs:"personsCtrl",
                resolve: {
                    personsList: function ($http) {
                        return $http.get("person.asmx/personName")
                 .then(function (response) {
                     return response.data;
                 })
                    }   }
            },
            "totalPersons": {
                templateUrl: "Templates/personsTotal.html",
                controller: "personsTotalController",
                controllerAs:"personsTotalCtrl"
            }
            

    }
        
    })

         .state("personParent.personDetails", {
             url: "/:pid",
             views:{
                 "personData":{
                     templateUrl: "Templates/personDetails.html",
                     controller: "personDetailsController",
                     controllerAs: "personDetailsCtrl"
                 }
             }
             
         })
        .state("personParent.searchPerson", {
            url: "persons/:pname?",
            views:{
                "personData":{
                    templateUrl: "Templates/searchPerson.html",
                    controller: "searchPersonController",
                    controllerAs: "searchPersonctrl"
                }
            }
           
        })

   .state("employees", {
       url: "/employees",
       templateUrl: "Templates/employees.html",
       controller: "employeesController",
       controllerAs: "employeesCtrl"
   })
    $locationProvider.html5Mode(true);
});