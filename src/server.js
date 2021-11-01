'use strict';

const express = require('express');
const app = express();

// requiring error handlers
const errorHandler_404 = require('./handlers/404');
const errorHandler_500 = require('./handlers/500');

// requiring the middleware
const logger = require('./middleware/logger');
const queryValidator = require('./middleware/validator');

// the global middleware
app.use(logger);
app.use(queryValidator);

// Initializing the server port
function start(PORT) {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
}

// Proof of life
app.get('/', (req, res) => {
    res.status(200).send('Hello :) Server Running Successfully');
})

/*
Create the '/person' route within your server.js
This route should use the validator middleware to check the user’s input
If valid, send a JSON object through the response with the name value in it
i.e. {name: "fred" }
*/

app.get('/person', queryValidator,(req, res) => {
    let name = req.query.name;
    res.status(200).json({name: `${name}`});
});

// 404 invalid route/method error:
app.use('*', errorHandler_404);
// 500 errors
app.use(errorHandler_500);

module.exports = { app, start }