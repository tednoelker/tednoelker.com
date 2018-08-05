// Dependencies
const { config, util } = require('../config.js');
const ejs = require('gulp-ejs');
const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');

// Parse json files in pages directory
function getPages(config, pages = []) {
  fs.readdirSync(config.get('pages')).forEach(fileName => {
    const pageName = fileName.replace('.json', '');
    const filePath = `${config.get('pages')}/${fileName}`;
    delete require.cache[require.resolve(filePath)];
    let data = require(filePath);
    if (typeof data.template === 'string') {
      pages.push({
        name: pageName,
        template: data.template,
        meta: data.meta,
        content: data.content
      });
    } else {
      util.error('Render error', `Could not locate template file for ${fileName}`);
    }
  });
  return pages;
}

// Resolve page meta data with site defaults
function mergeKeys(pageMeta, siteMeta) {
  if (typeof pageMeta === 'object' && typeof siteMeta === 'object') {
    return Object.assign({}, siteMeta, pageMeta);
  }
  return pageMeta;
}

// Hydrate templates with page data
function task(end) {
  getPages(config).forEach(file => {
    gulp.src(`${config.get('templates')}/${file.template}.ejs`)
      .pipe(
        ejs(
          {
            meta: mergeKeys(file.meta, util.data.meta) || {},
            page: file.content || {},
            site: util.data || {}
          },
          {
            async: true,
            rmWhitespace: true
          }
        ).on('error', (message) => {
          error(message);
        })
      )
      .pipe(
        rename({
          dirname: config.dist,
          basename: file.name,
          extname: '.html'
        })
      )
      .pipe(
        gulp.dest(config.cwd)
      )
  });
  return end();
}

// Gulp log name
task.displayName = 'ejs';

// Export task
module.exports = task;
