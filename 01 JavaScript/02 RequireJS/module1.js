define(function() {
    "use strict";

    console.log("module1");

    function doSomething() {
        console.log("module1.doSomething");
    }

    return {
      doSomething: doSomething,
    };
});

