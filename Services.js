
sampleModule.factory("fruits", function () {
    var f = ["Apple", "orange", "Bananna", "Mango", "Cherry"];
    var r = {};
    f.allFruits = function () {
        return f;
    }
    f.First = function () {
        r = 0;
        return f[r];
    }
    f.Last = function () {
        return f[f.length - 1];
    }
    f.Next = function () {
        if (r < f.length - 1)
            r++;
        else
            alert("No more rows exist");
        return f[r];
    }
    f.Previous = function () {
        if (r > 0)
            r--;
        else
            alert("No more rows exits");
        return f[r];
    }
    return f;
})
