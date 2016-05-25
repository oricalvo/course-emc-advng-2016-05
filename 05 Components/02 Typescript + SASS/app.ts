/// <reference path="./typings/angularjs/angular.d.ts" />

import "./angular";

var module = angular.module("myApp", []);

module.run(function($rootScope) {
    $rootScope.message = "XXX";
});

