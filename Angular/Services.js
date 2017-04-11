/// <reference path="scripts/angular.min.js" />
/// <reference path="JavaScript.js" />

sampleModule.service("fruits", function () {
    var f = ["Apple", "orange", "Bananna", "Mango", "Cherry"];
    var r = {};
    
    this.allFruits = function () {
        return f;
    }
    this.addRecord = function (af) {
        
        return f.push(af);
    }
    this.deleteRecord = function (i) {
        return f.splice(i,1);
    }
    this.select = function (i) {
        return f[i];
    }
    this.update = function (i, af) {
        var e = [];
        if (af == e)
            alert("No data to add");
        else
            f[i] = af;

        return f[i];
    }
    
});