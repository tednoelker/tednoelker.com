// Dependencies
const { config, server, util } = require('../config.js')
const liveServer = require('live-server');

// Init local server
function task(end) {
  liveServer.start(server);
  util.log(`Running at`, 'yellow', `${server.host}:${server.port}`);
  return end();
}

// Gulp log name
task.displayName = 'serve';

// Export task
module.exports = task;
