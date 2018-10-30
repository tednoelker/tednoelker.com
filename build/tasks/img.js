// Dependencies
const { config, util } = require('../config.js');
const fs = require('fs');
const gulp = require('gulp');
const image = require('gulp-image');

function build(end) {
  return gulp.src(`${config.get('assets')}/img/**/*`)
    .pipe(
      image()
    )
    .on('error', (message) => {
      util.error(message);
    })
    .pipe(
      gulp.dest(`${config.cwd}${config.dist}${config.assets}/img/`)
    );
}

// Watch for changes
function watch(end) {
  return gulp.watch(`${config.get('assets')}/img/**/*`, build);
}

// Gulp log name
build.displayName = 'img';
watch.displayName = 'watch:img';

// Export task
exports.build = build;
exports.watch = watch;
