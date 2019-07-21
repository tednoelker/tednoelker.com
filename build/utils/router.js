// Dependencies
const fs = require('fs');
const path = require('path');

// Default to html extension if not specified
module.exports = directory => (req, res, next) => {
  if ((req.method === 'GET' || req.method === 'HEAD') && req.url !== '/' && path.extname(req.url) === '') {
    fs.exists(`${directory}${req.url}.html`, (exists) => {
      if (exists) {
        req.url += '.html';
      }
      next();
    });
  } else {
    next();
  }
};
