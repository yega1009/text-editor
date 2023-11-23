// Import the path module to handle and transform file paths
const path = require('path');

// Export a function that takes the app, Express instance, as an argument
module.exports = (app) => {
  // Define a GET route for the root of the application
  app.get('/', (req, res) => {
    // Send the index.html file as a response when the root route is requested
    // Use path.join to create a path to the client's dist directory's index.html
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
};
