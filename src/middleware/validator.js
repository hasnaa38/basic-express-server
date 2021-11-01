'use strict';

/*
- it Checks the query string for a name property
- Sends the request through when valid, forces an error when not
*/

function queryValidator(req, res, next){
    let name = req.query.name;
    if(req.path !== '/person' || req.method !== 'GET') {
        next();
    }
    // Checking if the query was entered and since its a name, it should start with a letter not a number
    if(name && /^[a-z]/i.test(name)) {
        next();
    } else {
        next('500 error');
    }
}

module.exports = queryValidator;