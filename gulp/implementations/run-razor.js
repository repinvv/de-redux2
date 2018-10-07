const gulp = require('gulp');
const settings = require('../settings');
const transform = require('gulp-transform');
const rename = require('gulp-rename');
const razor = require('@vlr/razor');

gulp.task('run-razor', function () {
  const razorFiles = settings.srcPath + '/**/*.rzr';
  return gulp.src(razorFiles)
    .pipe(transform('utf8', razorToTs))
    .pipe(rename({ extname: '.ts' }))
    .pipe(gulp.dest(settings.srcPath));
});

function razorToTs(content) { 
  return razor.generate(content);
}