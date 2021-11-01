'use strict';

const express = require('express');
const app = express();

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

app.get('/person', (req, res) => {
    let name = req.query.name;
    res.status(200).send(`hello ${name}`);
})

module.exports = { app, start }