class Point {
    constructor(private x, private y) {
        setInterval(() => {
            this.dump();
        }, 1000);
    }
    
    dump() {
        console.log(this.x + ", " + this.y);
    }
}

interface ILogger {
    debug: Function;
    warn: Function;
    err: Function;
};

class Logger implements ILogger {
    debug() {
    }
    
    warn() {
    }
    
    err() {
    }
}

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


