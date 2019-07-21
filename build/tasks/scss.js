// Dependencies
const { config, util } = require('../config.js');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

// Hydrate templates with page data
function build(end) {
  return gulp.src(`${config.get('assets')}/scss/!(_*)*.scss`)
    .pipe(
      sass
        .sync()
        .on('error', sass.logError)
    )
    .pipe(
      cleanCSS()
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: config.browserlist,
          cascade: false
        })
      ])
    )
    .pipe(
      rename({
        dirname: `${config.dist}/${config.assets}/css`,
        extname: '.css'
      })
    )
    .pipe(
      gulp.dest(config.cwd)
    );
}

// Watch for changes
function watch(end) {
  return gulp.watch(`${config.get('assets')}/scss/**/*.scss`, build);
}

// Gulp log name
build.displayName = 'scss';
watch.displayName = 'watch:scss';

// Export task
exports.build = build;
exports.watch = watch;
