const fs = require('fs');
const config = require('./config.js');

module.exports = (type, data = {}) => {
  fs.readdirSync(config.get(type)).forEach(fileName => {
    const keyName = fileName.replace('.json', '');
    const filePath = `${config.get(type)/fileName}`;
    delete require.cache[require.resolve(filePath)];
    data[keyName] = fs.existsSync(filePath) ? require(filePath) : {};
  });
  return data;
};
