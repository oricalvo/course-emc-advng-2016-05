var Point = (function () {
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        setInterval(function () {
            _this.dump();
        }, 1000);
    }
    Point.prototype.dump = function () {
        console.log(this.x + ", " + this.y);
    };
    return Point;
}());
;
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.debug = function () {
    };
    Logger.prototype.warn = function () {
    };
    Logger.prototype.err = function () {
    };
    return Logger;
}());
// var logger = {
//     debug: function() {
//     },
//     warn: function() {
//     },
//     err: function() {
//     }
// };
var logger = new Logger();
var pt = new Point(5, 10);
//pt.dump();
//# sourceMappingURL=Point.js.map