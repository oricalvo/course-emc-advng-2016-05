var angular = require("angular");

var appModule = angular.module("myApp", []);

appModule.config(function($provide) {
    appModule.factory = function(serviceName, factoryFn) {
        $provide.factory(serviceName, factoryFn);

        return appModule;
    }
});

appModule.run(function() {
    // appModule.factory = function(serviceName, factoryFn) {
    //
    // }
});

module.exports = appModule;

