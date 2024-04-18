const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function print(output) {
   process.stdout.write(output);
   process.stdout.write("\nprompt >");
};

function bash() {
   process.stdout.write("prompt >");
   process.stdout.write("data",(data) => {
      let args = 
   })
};

bash();
module.exports = {
   print,
   bash,
};
