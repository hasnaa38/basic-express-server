'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

// Initializing the server port
const PORT = process.env.PORT || 3001;
function start() {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
}

// Proof of life
app.get('/', (req, res) => {
    res.status(200).send('Hello :) Server Running Successfully');
})

module.exports = { app, start }