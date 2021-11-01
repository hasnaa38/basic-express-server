'use strict';

// Sends 500/Server-Error message as the response

module.exports = (error, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        query: req.query,
        message: '500/Server-Error'
    })
}

/*
if the error message wasn't defined we can use this syntax:
const errorMessage = error.message ? error.message : error;
*/