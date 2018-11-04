// Dependencies
const { config, util } = require('../config.js');
const composer = require('gulp-uglify/composer');
const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglifyES = require('uglify-es');
const uglify = composer(uglifyES, console);

// Hydrate templates with page data
function build(end) {
  return gulp.src(`${config.get('assets')}/js/!(_*)*.js`)
    .pipe(
      uglify()
      .on('error', (error) => {
        util.error(`ERROR: ${error.plugin}`, `${error.cause.filename}: ${error.cause.message}`);
        end();
      })
    )
    .pipe(
      gulp.dest(`${config.cwd}${config.dist}${config.assets}/js/`)
    );
}

// Watch for changes
function watch(end) {
  return gulp.watch(`${config.get('assets')}/scss/**/*.scss`, build);
}

// Gulp log name
build.displayName = 'js';
watch.displayName = 'watch:js';

// Export task
exports.build = build;
exports.watch = watch;
