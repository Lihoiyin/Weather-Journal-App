// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;

// Spin up the server
// Callback to debug
const server = app.listen(port, ()=>{
     console.log(`The server is running on port: ${port}`);   
});

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get( '/all', (req, res) => {
    res.send(projectData);  
  })

// Post Route
app.post( '/addData', (req, res) => {
    projectData['temp'] = req.body.temp;
    projectData['date'] = req.body.date;
    projectData['feelings'] = req.body.feelings;
    res.send(projectData);
  })