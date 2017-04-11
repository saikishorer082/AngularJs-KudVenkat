/// <reference path="scripts/angular.min.js" />
/// <reference path="myController1.js" />

sampleModule.service("myService", function () {
    var employees = [
        { eid: 101, ename: "sai", role: "trainer", salary: 5500 },
        { eid: 102, ename: "kishore", role: "programmer", salary: 5000 },
        { eid: 103, ename: "krishna", role: "developer", salary: 6500 },
        { eid: 104, ename: "manohar", role: "trainer", salary: 6000 },
    ];
    this.getAllEmployees = function () {
        return employees;
    }
})