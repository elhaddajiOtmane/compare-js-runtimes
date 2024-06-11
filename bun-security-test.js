import { promises as fs } from 'fs';
import { exec } from 'child_process';

try {
  // Attempt to read a file
  const data = await fs.readFile('sample.txt', 'utf8');
  console.log('File content (Bun):', data);
} catch (error) {
  console.error('File read error (Bun):', error.message);
}

try {
  // Attempt to write a file
  await fs.writeFile('newfile.txt', 'Hello, World!');
  console.log('File written (Bun)');
} catch (error) {
  console.error('File write error (Bun):', error.message);
}

try {
  // Attempt to execute a command
  exec('ls', (error, stdout, stderr) => {
    if (error) {
      console.error('Command execution error (Bun):', error.message);
      return;
    }
    console.log(stdout);
  });
} catch (error) {
  console.error('Command execution error (Bun):', error.message);
}
