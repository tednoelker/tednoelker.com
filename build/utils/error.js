// Dependencies
const chalk = require('chalk');

// Display error message
module.exports = (title, message) => {
  return console.error(`


${chalk.whiteBright.bgRedBright.bold(` ${title} `)}

${chalk.yellowBright(message)}


  `);
}
