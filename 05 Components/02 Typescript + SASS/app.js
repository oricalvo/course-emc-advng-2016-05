/// <reference path="./typings/angularjs/angular.d.ts" />
"use strict";
require("./angular");
var module = angular.module("myApp", []);
module.run(function ($rootScope) {
    $rootScope.message = "XXX";
});
