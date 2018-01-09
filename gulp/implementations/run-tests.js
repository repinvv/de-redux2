const gulp = require("gulp");
const settings = require("../settings");
const mocha = require("gulp-mocha");

const mochaSetting = { reporter: "spec" };

gulp.task("run-tests", function () {
  return gulp.src(settings.testFiles)
    .pipe(mocha(mochaSetting));
});
