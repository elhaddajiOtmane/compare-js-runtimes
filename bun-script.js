import { readFile } from 'fs/promises';

const filePath = './sample.txt';

try {
  const data = await readFile(filePath, 'utf8');
  console.log('File content:', data);
} catch (error) {
  console.error('Error reading file:', error);
}
