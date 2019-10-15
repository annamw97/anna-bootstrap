const gulp = require('gulp');
const browserSync = require('browser-sync');

// BrowserSync Reload
function browserSyncReload(done) {
  browserSync.reload();
  done();
}

module.exports = () => {
  browserSync({
    notify: false,
    server: 'docs',
    port: 3000
  }),
  gulp.watch(['src/html/**/*.html'], gulp.series('html', browserSyncReload));
  gulp.watch(
    ['node_modules/bootstrap/scss/bootstrap.scss','src/scss/**/*.scss'],
    gulp.series('styles', browserSyncReload)
    );
};