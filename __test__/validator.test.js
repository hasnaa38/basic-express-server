'use strict';

const validatorMiddleware = require('../src/middleware/validator');
const { app } = require('../src/server');
const supertest = require('supertest');
// server testing instance, responsible for kick starting the server for testing
const mockRequest = supertest(app);

describe('Query validator test', () => {
    test('Checking if the person endpoint is working', async () => {
        const response = await mockRequest.get('/person?name=hasnaa');
        expect(response.status).toBe(200);
    });

    test('Checking if it responds with 500 at server errors', async () => {
        const response = await mockRequest.get('/person?name=');
        expect(response.status).toBe(500);
    });
})
