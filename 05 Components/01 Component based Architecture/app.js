require("./angular");

var module = angular.module("myApp", []);

module.run(function($rootScope) {
    $rootScope.message = "XXX";
});

