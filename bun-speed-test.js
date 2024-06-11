import { readFile } from 'fs/promises';
console.time('Bun File Read');

const filePath = './sample.txt';

(async () => {
  try {
    for (let i = 0; i < 100000; i++) {
      await readFile(filePath, 'utf8');
    }
    console.timeEnd('Bun File Read');
  } catch (error) {
    console.error('Error reading file:', error);
  }
})();
