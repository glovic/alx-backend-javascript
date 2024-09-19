const readline = require('readline');

// Check if input is being piped (process.stdin is not a TTY)
if (process.stdin.isTTY) {
  // Handle normal interactive input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });

} else {
  // Handle piped input
  let data = '';
  process.stdin.on('data', (chunk) => {
    data += chunk;
  });

  process.stdin.on('end', () => {
    const name = data.trim(); // Remove any extra newlines
    console.log('Welcome to Holberton School, what is your name?');
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
  });
}

