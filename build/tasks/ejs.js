const ejs = require('gulp-ejs');
const error = require('../utils/error.js');
const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');

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
      error('Render error', `Could not locate template file for ${fileName}`);
    }
  });
  return pages;
}

function mergeKeys(pageMeta, siteMeta) {
  if (typeof pageMeta === 'object' && typeof siteMeta === 'object') {
    return Object.assign({}, siteMeta, pageMeta);
  }
  return pageMeta;
}

module.exports = (config, siteData) => {
  return getPages(config).forEach(file => {
    gulp.src(`${config.get('templates')}/${file.template}.ejs`)
      .pipe(
        ejs(
          {
            meta: mergeKeys(file.meta, siteData.meta) || {},
            page: file.content || {},
            site: siteData || {}
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
}
