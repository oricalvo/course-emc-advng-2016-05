var module = angular.module("myApp", []);

var configInjector;
var runInjector;

module.config(function($locationProvider, XXXProvider, $injector) {
    console.log(XXXProvider);

    configInjector = $injector;

    //$locationProvider.html5Mode(true);

    XXXProvider.setMaxStackSize(123);
    
});

module.run(function ($location, _XXX_, $injector) {
    // console.log(XXX);

    //XXX.set

    // $injector.invoke(["$http", run]);
    // var $q = $injector.get("$q");
    // console.log("$q: " + !!$q);
    //
    // runInjector = $injector;
    //
    // console.log(configInjector == runInjector);
});

function run($http) {
    console.log("$http: " + !!$http);
}

// module.service("XXX", function () {
// });

module.provider("XXX", {
    $get: function() {
        return 123;
    },
    setMaxStackSize: function(max) {
        console.log(max);
    }
});

module.controller("HomeCtrl", function($scope) {
    $scope.run = function() {
        $scope.$apply();
    }
});
