const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

// Define an endpoint for retrieving cattle history
app.get('/history', (req, res) => {
  // Simulate the cattle history data
  const cattleHistory = [
    {
      id: 1,
      age: 4,
      sex: 'Female',
      // Add more properties as needed
    },
    {
      id: 2,
      age: 3,
      sex: 'Male',
      // Add more properties as needed
    },
    // Add more cattle history entries
  ];

  res.json(cattleHistory);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
