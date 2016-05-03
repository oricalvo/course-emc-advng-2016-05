var myApp = myApp || {};

myApp.module2 = (function() {
    "use strict";

    var lastActivity = 123;

    function doSomething() {
        console.log("module2");
    }
    
    function getLastActivityDate() {
    }
    
    return {
        doSomething: doSomething,
        getLastActivitydate: getLastActivityDate,
    };
})();
