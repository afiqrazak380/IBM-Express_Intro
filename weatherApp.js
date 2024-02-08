// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Create a new route handler
app.get('/temperature/:location_code', (req, res) => {
  const location = req.params.location_code;

  //Perform actions based on the location, e.g: fetch current weather conditions
  res.send(`Current weather conditions for ${location}`);
});

// Start an HTTP server on a given port
const port = 9090;

app.listen(port, () => {
  console.log(`Server is running on the http://localhost:${port}`);
});
