var gulp = require("gulp");
var ts = require('gulp-typescript');

gulp.task("blabla", function() {
    console.log("blabla");
});

gulp.task('compile-ts', function() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src() 
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('.'));
});

gulp.task("dev", function() {
    console.log("blabla");
});

