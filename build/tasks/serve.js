// Dependencies
const { config, server } = require('../config.js')
const handler = require('serve-handler');
const http = require('http');

// Init local server
function task(end) {
  return http.createServer((request, response) => {
    return handler(request, response, server.settings);
  }).listen(server.port, () => {
    console.log('Running at http://localhost:' + server.port);
    return end();
  });
}

// Gulp log name
task.displayName = 'serve';

// Export task
module.exports = task;
