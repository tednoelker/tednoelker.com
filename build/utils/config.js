let vars = {
  cwd: process.cwd().replace('build', ''),
  src: 'site',
  dist: 'dist',
  assets: '/assets',
  data: '/data',
  pages: '/pages',
  templates: '/templates'
}

let methods = {
  get: (key, config = vars) => {
    return config.cwd + config.src + config[key];
  }
}

module.exports = Object.assign(vars, methods);
