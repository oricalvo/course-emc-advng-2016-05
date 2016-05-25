var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope) {
    $scope.message = "XXX";

    $scope.nums = [1,2,3];

    $scope.addNumber = function() {
        $scope.nums.push(111);
    }
});
