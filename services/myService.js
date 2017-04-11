/// <reference path="scripts/angular.min.js" />
/// <reference path="myController1.js" />

sampleModule.service("myService", function () {
    this.transfromString = function(ip){
    if (!ip) {
        return ip;
    }

    var op = "";
    var i = "";
    if (ip[0] == ip[0].toLowerCase())
        op = ip[0].toUpperCase();
    else
        op = ip[0];

    for (i = 1; i < ip.length; i++) {
        if (i > 1 && ip[i] == ip[i].toUpperCase()) {
            op = op + " ";
        }

        op =  op + ip[i];
    }
    return op;
    }
});