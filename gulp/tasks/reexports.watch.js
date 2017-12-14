const gulp = require('gulp');
const watch = require('gulp-watch');
const settings = require('../settings');

gulp.task('reexports.watch', function () {
  gulp.start('generate-reexports');
  watch(settings.srcPath, function () {
    gulp.start('generate-reexports');
  });
});