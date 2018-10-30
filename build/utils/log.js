// Dependencies
const chalk = require('chalk');

module.exports = (message, color, emphasis) => {
  if (typeof color === 'string') {
    message = chalk[color](message);

    if (typeof emphasis === 'string') {
      message += ' ' + chalk.underline[color](emphasis);
    }
  }
  return console.log(message);
}
