const gulp = require("gulp");
const sequence = require("run-sequence");

gulp.task("build", function (done) {
    return sequence("clean-output", "build-ts", "tslint", done);
})