const fs = require('fs').promises;
const path = require('path');
console.time('Node.js File Read');

const filePath = path.join(__dirname, 'sample.txt');

(async () => {
  try {
    for (let i = 0; i < 100000; i++) {
      await fs.readFile(filePath, 'utf8');
    }
    console.timeEnd('Node.js File Read');
  } catch (err) {
    console.error('Error reading file:', err);
  }
})();
