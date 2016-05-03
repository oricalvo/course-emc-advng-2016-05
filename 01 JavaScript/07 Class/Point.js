var Point = (function() {
    "use strict";
    
    function Point(x, y, z) {
        var name;
        
        function dump() {
            console.log(x + ", " + y);
        }
        
        function equals(pt) {
            return x==pt.x && y==pt.y;
        }
        
        function move(dx, dy) {
            x+=dx;
            y+=dy;
        }
        
        return {
            dump: dump,
            equals: equals,
            move: move,
        };
    }
    
    return Point;
})();
