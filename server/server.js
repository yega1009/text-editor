// Import the express module to create a web server
const express = require('express');

// Initialize an instance of express which represents our app
const app = express();

// Set a default port for the server to listen on or use the port provided by the environment
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory in the client folder
app.use(express.static('../client/dist'));

// Middleware to parse incoming request bodies and make them available under the req.body property
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import and use the HTML routes defined in another file
// These routes will determine how to respond to requests to different endpoints
require('./routes/htmlRoutes')(app);

// Start the server and have it listen on the specified PORT
// When the server starts, it logs a message to the console
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
