// Dependencies
const data = require('./utils/data.js');
const error = require('./utils/error.js');
const path = require('path');

// Browser support
let browserlist = [
  '> 0.5% in US',
  'last 2 versions',
  'not ie < 11',
  'Firefox ESR'
];

// Directory paths
let paths = {
  cwd: path.resolve(process.cwd(), '../'),
  src: '/site',
  dist: '/dist',
  assets: '/assets',
  data: '/data',
  pages: '/pages',
  templates: '/templates',
  meta: 'meta.json'
};

// Construct paths
let methods = {
  get: (key) => {
    if (typeof paths[key] === 'undefined') {
      return console.error(`Invalid config key: "${key}"`);
    }
    return paths.cwd + paths.src + paths[key];
  }
};

// Server settings
let server = {
  port: 5000,
  host: 'localhost',
  root: paths.cwd + paths.dist,
  mount: [],
  open: true,
  logLevel: 0
};

// Util libs
let utils = {
  data: data(methods.get('data')),
  error
};

// Export objects
exports.browserlist = browserlist;
exports.config = Object.assign(paths, methods);
exports.server = server;
exports.util = utils;
