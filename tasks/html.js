const gulp = require('gulp');

module.exports = () => {
  return gulp.src(['src/html/*.html'])
      .pipe(gulp.dest("./docs"));
};
