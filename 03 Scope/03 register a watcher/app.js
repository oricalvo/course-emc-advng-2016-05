var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope) {
    $scope.counter = 0;
    $scope.counter2 = 0;
    
    $scope.$watch("counter", function(newValue, oldValue) {
        if(newValue === oldValue) {
            return;
        }

        $scope.counter2++;

        console.log(oldValue + " --> " + newValue);
    });

    $scope.$watch("counter2", function(newValue, oldValue) {
        if(newValue === oldValue) {
            return;
        }

        $scope.counter++;

        console.log(oldValue + " --> " + newValue);
    });

    $scope.change = function() {
        $scope.counter++;
    }
});
