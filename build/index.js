// Dependencies
const gulp = require('gulp');

// Tasks
const ejs = require('./tasks/ejs.js');
const serve = require('./tasks/serve.js');

// Runners
const build = gulp.parallel(ejs);
const dev = gulp.series(build, serve);

// Exports
gulp.task('default', build);
gulp.task('dev', dev);
gulp.task('serve', serve);
