const filePath = './sample.txt';
console.time('Deno File Read');

try {
  for (let i = 0; i < 100000; i++) {
    await Deno.readTextFile(filePath);
  }
  console.timeEnd('Deno File Read');
} catch (error) {
  console.error('Error reading file:', error);
}
