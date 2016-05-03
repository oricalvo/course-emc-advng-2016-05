//(function() {
    "use strict";

    var pt1 = new Point(5, 10);
    var pt2 = new Point(10, 20);

    pt1.dump();
    pt2.dump();

    console.log(pt1.dump==pt2.dump);

    //console.log(pt1.equals(pt2))
//})();


// function Counter() {
//     var val = 0;
//
//     return {
//         inc: function() {
//             ++val;
//         },
//         dec: function() {
//             --val;
//         }
//     };
// }
//
// var c1 = Counter();
// c1.inc();
//
// var c2 = Counter();
// c2.dec();
//
//
