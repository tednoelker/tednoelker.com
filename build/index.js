// Dependencies
const gulp = require('gulp');

// Tasks
const ejs = require('./tasks/ejs.js');
const img = require('./tasks/img.js');
const scss = require('./tasks/scss.js');
const serve = require('./tasks/serve.js');

// Runners
const build = gulp.parallel(scss.build, img.build, ejs.build);
const watch = gulp.parallel(scss.watch, img.watch, ejs.watch);
const dev = gulp.series(build, serve, watch);

// Exports
gulp.task('default', build);
gulp.task('dev', dev);
gulp.task('serve', serve);
