const gulp = require("gulp");
const generator = require('@vlr/ts-reexports');

const options = { lineFeed: '\n', quotes: '"', typesOnly: true };

gulp.task("reexports", function (done) {
  generator.generateReexports('./src', options)
    .then(done);
});