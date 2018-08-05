let vars = {
  cwd: process.cwd().replace('build', ''),
  src: 'site',
  dist: 'dist',
  assets: '/assets',
  data: '/data',
  pages: '/pages',
  templates: '/templates',
  meta: 'meta.json'
}

let methods = {
  get: (key, config = vars) => {
    if (typeof config[key] === 'undefined') {
      return console.error(`Invalid config key: "${key}"`);
    }
    return config.cwd + config.src + config[key];
  }
}

module.exports = Object.assign(vars, methods);
