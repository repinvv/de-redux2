const gulp = require("gulp");
const sequence = require("run-sequence");
gulp.task("test", function (done) {
    return sequence("build", "run-tests", done);
});
