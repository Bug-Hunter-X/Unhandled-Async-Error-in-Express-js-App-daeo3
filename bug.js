const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This error will not be caught by the async/await block
    // because it's thrown after the await call has completed.
    throw new Error('Something went wrong!');
  }, 100);
  res.send('Hello!');
});
app.listen(3000, () => console.log('Server listening on port 3000'));