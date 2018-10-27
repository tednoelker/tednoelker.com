// Dependencies
const { config, server } = require('../config.js')
const liveServer = require('live-server');

// Init local server
function task(end) {
  liveServer.start(server);
  console.log(`Running at ${server.host}:${server.port}`);
  return end();
}

// Gulp log name
task.displayName = 'serve';

// Export task
module.exports = task;
