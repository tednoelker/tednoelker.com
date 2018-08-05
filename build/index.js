const gulp = require('gulp');

const config = require('./utils/config.js');
const data = require('./utils/data.js');
const ejs = require('./tasks/ejs.js');

gulp.task('default', (done) => {
  ejs(config, data());
  done();
});
