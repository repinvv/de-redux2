const gulp = require('gulp');
const settings = require('../settings');
const generator = require('typescript-reexport-generator')

const options = { lineFeed: '\r\n' };

gulp.task('generate-reexports', function (done) {
  generator.generateReexports(settings.srcPath, options)
    .then(done);
});