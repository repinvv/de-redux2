const gulp = require("gulp");
const settings = require("../settings");
var spawn = require("../tools/spawn");

gulp.task("run-tests-cover", function (done) {
  spawn("nyc", ['--reporter=html', '--reporter=text', 'mocha', settings.testFiles], { stdio: "inherit" }, done, "test coverage");
});
