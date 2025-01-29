const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might throw an error
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        //Simulate error after awaiting new promise
          reject(new Error('Something went wrong!'));
      }, 100);
    });
    res.send('Hello!');
  } catch (error) {
    console.error('Caught error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle uncaught exceptions as a last resort
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform cleanup or logging here
  process.exit(1);
});
app.listen(3000, () => console.log('Server listening on port 3000'));