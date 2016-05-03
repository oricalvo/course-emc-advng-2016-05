var myApp = myApp || {};

myApp.module1 = (function() {
    "use strict";
    
    function doSomething() {
        console.log("module1");
    }

    return {
      doSomething: doSomething,
    };
})();

