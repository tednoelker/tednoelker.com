// Dependencies
const gulp = require('gulp');

// Tasks
const ejs = require('./tasks/ejs.js');
const scss = require('./tasks/scss.js');
const serve = require('./tasks/serve.js');

// Runners
const build = gulp.parallel(scss.build, ejs.build);
const watch = gulp.parallel(scss.watch, ejs.watch);
const dev = gulp.series(build, serve, watch);

// Exports
gulp.task('default', build);
gulp.task('dev', dev);
gulp.task('serve', serve);
