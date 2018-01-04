const gulp = require("gulp");
const settings = require("../settings");
const tslint = require("gulp-tslint");

gulp.task("tslint", function (done) {
    return gulp.src(settings.projectTsFiles)
        .pipe(tslint({ formatter: "verbose" }))
        .pipe(tslint.report({ emitError: process.env.emitError }));
});