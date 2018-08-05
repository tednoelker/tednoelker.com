// Dependencies
const fs = require('fs');

// Parse data directory files
module.exports = (dirPath, data = {}) => {
  fs.readdirSync(dirPath).forEach(fileName => {
    const keyName = fileName.replace('.json', '');
    const filePath = `${dirPath}/${fileName}`;
    delete require.cache[require.resolve(filePath)];
    data[keyName] = fs.existsSync(filePath) ? require(filePath) : {};
  });
  return data;
};
