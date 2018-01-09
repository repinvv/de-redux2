const gulp = require("gulp");
const settings = require("../settings");
const removeDirRecursive = require("../tools/removeDirRecursive");

gulp.task("clean-output", function(){
    return removeDirRecursive(settings.buildPath);
});