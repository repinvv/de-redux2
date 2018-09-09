const gulp = require("gulp");
const sequence = require("run-sequence");

gulp.task("build", function (done) {
    return sequence("clean-output", "reexports", "build-ts", "tslint", done);
})