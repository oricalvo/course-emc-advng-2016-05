var PointEx = (function() {
    "use strict";
    
    function PointEx(x, y, z) {
        Point.call(this, x, y);

        this.z = z;
    }

    PointEx.prototype = Object.create(Point.prototype);

    PointEx.prototype.dump = function() {
        Point.prototype.dump.call(this);

        console.log(this.z);
        //Point.call(
    }

    return PointEx;
})();
