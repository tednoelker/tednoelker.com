// Dependencies
const gulp = require('gulp');

// Tasks
const ejs = require('./tasks/ejs.js');
const img = require('./tasks/img.js');
const js = require('./tasks/js.js');
const scss = require('./tasks/scss.js');
const serve = require('./tasks/serve.js');

// Runners
const build = gulp.parallel(scss.build, js.build, img.build, ejs.build);
const watch = gulp.parallel(scss.watch, js.watch, img.watch, ejs.watch);
const dev = gulp.series(build, serve, watch);

// Exports
gulp.task('default', build);
gulp.task('dev', dev);
gulp.task('serve', serve);
