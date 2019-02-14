(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    planetsArray = planetsString.split("|")
    console.log(planetsArray);

    var brString = planetsArray.join("<br>")
    console.log(brString)
    document.write(brString)

})();
