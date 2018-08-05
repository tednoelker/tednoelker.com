const ejs = require('gulp-ejs');
const error = require('../utils/error.js');
const fs = require('fs');
const gulp = require('gulp');

module.exports = (config, data) => {
  return getPages(config).forEach(file => {
    gulp
      .src(`${config.get('template')}/${file.template}.ejs`)
      .pipe(ejs(
          { page: file.content },
          { rmWhitespace: true },
          { ext: '.html' }
      ).on('error', (error) => {
          reportError(error);
      }))
      .pipe(gulp.dest(config.cwd + config.dist))
  });
}

function getPages(config, pages = []) {
  fs.readdirSync(config.get('pages')).forEach(fileName => {
    const pageName = fileName.replace('.json', '');
    const filePath = `${config.get('pages')}/${fileName}`;
    console.log(filePath);
    console.log(require(filePath));
    delete require.cache[require.resolve(filePath)];
    if (typeof require(filePath).template === 'string') {
      pages.push({
        page: pageName,
        template: require(filePath).template,
        data: require(filePath).content || {}
      });
    } else {
      error('Render error', `Could not locate template file for ${fileName}`);
    }
  });
  return pages;
}
