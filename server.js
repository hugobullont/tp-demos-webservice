const express = require('express');
const bodyParser = require('body-parser');

//creating express app
const app = express();

var cors = require('cors');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//enables cors
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to RESTapi application."});
});

require('./app/routes/ble.routes.js')(app);
require('./app/routes/pages.routes.js')(app);

// listen for requests
app.listen(2021, () => {
    console.log("Server is listening on port 2020");
});