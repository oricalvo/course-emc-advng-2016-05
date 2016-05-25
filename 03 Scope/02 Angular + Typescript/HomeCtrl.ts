declare var angular;

var x = `<div>
    <span></span>
    <button>Click me</button>
</div>`;
    
class HomeCtrl {
    message:string;
    nums:number[];

    constructor() {
        this.message = "CCC";
        this.nums = [1, 2, 3];
    }

    add = function () {
        this.nums.push(5);
    }
}

angular.module("myApp").controller("HomeCtrl", HomeCtrl);
