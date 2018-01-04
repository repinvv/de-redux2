const gulp = require("gulp");
var spawn = require("../tools/spawn");
var path = require("path")

gulp.task("build-ts", function (done) {
  spawn("tsc", [], { stdio: "inherit" }, done, "compilation");
});
