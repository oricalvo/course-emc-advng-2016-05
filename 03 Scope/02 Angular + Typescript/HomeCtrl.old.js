(function() {

    function HomeCtrl() {
        this.message = "YYY";

        this.nums = [1,2,3];
    }

    HomeCtrl.prototype.add = function() {
        this.nums.push(4);
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);

})();


