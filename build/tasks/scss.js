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
function task(end) {
  return gulp.src(`${config.get('assets')}/scss/!(_*)*.scss`)
    .pipe(
      cleanCSS()
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['> 0.5% in US', 'last 2 versions', 'not ie < 11', 'Firefox ESR'],
          cascade: false
        })
      ])
    )
    .pipe(
      rename({
        dirname: `${config.dist}/${config.assets}/css`,
        //basename: file.name,
        extname: '.css'
      })
    )
    .pipe(
      gulp.dest(config.cwd)
    );
}

// Gulp log name
task.displayName = 'scss';

// Export task
module.exports = task;
