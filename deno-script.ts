const filePath = './sample.txt';

try {
  const data = await Deno.readTextFile(filePath);
  console.log('File content:', data);
} catch (error) {
  console.error('Error reading file:', error);
}
