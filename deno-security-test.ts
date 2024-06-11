try {
    // Attempt to read a file
    const data = await Deno.readTextFile('sample.txt');
    console.log('File content (Deno):', data);
  } catch (error) {
    console.error('File read error (Deno):', error.message);
  }
  
  try {
    // Attempt to write a file
    await Deno.writeTextFile('newfile.txt', 'Hello, World!');
    console.log('File written (Deno)');
  } catch (error) {
    console.error('File write error (Deno):', error.message);
  }
  
  try {
    // Attempt to execute a command
    const p = Deno.run({ cmd: ['ls'], stdout: 'piped' });
    const output = await p.output();
    console.log(new TextDecoder().decode(output));
  } catch (error) {
    console.error('Command execution error (Deno):', error.message);
  }
  