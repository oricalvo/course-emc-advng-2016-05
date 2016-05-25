var x = "<div>\n    <span></span>\n    <button>Click me</button>\n</div>";
var HomeCtrl = (function () {
    function HomeCtrl() {
        this.add = function () {
            this.nums.push(5);
        };
        this.message = "CCC";
        this.nums = [1, 2, 3];
    }
    return HomeCtrl;
}());
angular.module("myApp").controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map