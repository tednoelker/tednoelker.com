// Dependencies
const data = require('./utils/data.js');
const error = require('./utils/error.js');
const log = require('./utils/log.js');
const router = require('./utils/router.js');
const path = require('path');

// Browser support
let browserlist = [
  'last 2 versions'
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
    const directory = (key === 'dist') ? paths.dist : paths.src + paths[key];
    return paths.cwd + directory;
  }
};

// Server settings
let server = {
  port: 5000,
  host: 'localhost',
  root: methods.get('dist'),
  mount: [],
  open: true,
  logLevel: 0,
  middleware: [router(methods.get('dist'))]
};

// Util libs
let utils = {
  data: data(methods.get('data')),
  error,
  log
};

// Export objects
exports.browserlist = browserlist;
exports.config = Object.assign(paths, methods);
exports.server = server;
exports.util = utils;
