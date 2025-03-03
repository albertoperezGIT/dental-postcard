const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like images) from the "images" folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve your index.html file when accessing the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});