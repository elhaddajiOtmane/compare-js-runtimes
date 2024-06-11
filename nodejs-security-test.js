const { VM } = require('vm2');
const fs = require('fs');
const { exec } = require('child_process');

const vm = new VM({
  sandbox: {},
  timeout: 1000, // 1 second
  eval: false,
  wasm: false,
});

try {
  // Attempt to read a file
  vm.run(`
    const fs = require('fs');
    fs.readFileSync('sample.txt', 'utf8');
  `);
} catch (error) {
  console.log('File read error (Node.js):', error.message);
}

try {
  // Attempt to write a file
  vm.run(`
    const fs = require('fs');
    fs.writeFileSync('newfile.txt', 'Hello, World!');
  `);
} catch (error) {
  console.log('File write error (Node.js):', error.message);
}

try {
  // Attempt to execute a command
  vm.run(`
    const { exec } = require('child_process');
    exec('ls');
  `);
} catch (error) {
  console.log('Command execution error (Node.js):', error.message);
}
