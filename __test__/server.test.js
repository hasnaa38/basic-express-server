'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
// server testing instance, responsible for kick starting the server for testing
const mockRequest = supertest(app);

describe('web server', () => {
    // server testing unit 1 - check if the server is alive
    test('The server is alive', async() => {
        const response = await mockRequest.get('/');
        expect(response.status).toBe(200);
    });

    // server testing unit 2 - check if 404 is handled
    test('Responds with 404 if the path is invalid', async() => {
        const response = await mockRequest.get('/404-error');
        expect(response.status).toBe(404);
        expect(JSON.parse(response.text).message).toBe('404/Not-Found');
    });
});