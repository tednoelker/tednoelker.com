// Dependencies
const { config, server } = require('../config.js')
const handler = require('serve-handler');
const http = require('http');
const pbcopy = require('child_process').spawn('pbcopy').stdin;

// Init local server
function task(end) {
  return http.createServer((request, response) => {
    return handler(request, response, server.settings);
  }).listen(server.port, () => {
    const url = `http://localhost:${server.port}`;
    console.log(`Running at ${url} (copied to clipboard)`);
    pbcopy.write(url);
    pbcopy.end();
    return end();
  });
}

// Gulp log name
task.displayName = 'serve';

// Export task
module.exports = task;
