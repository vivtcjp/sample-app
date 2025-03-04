const request = require('supertest');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use('/', require('../routes/index'));

// Mock the configuration file
jest.mock('fs');
fs.readFile.mockImplementation((path, encoding, callback) => {
  if (path === './routes/busesConfig.json') {
    callback(null, JSON.stringify({
      routes: [
        { route: 'Route 1', buses: ['Bus A', 'Bus B', 'Bus C'] },
        { route: 'Route 2', buses: ['Bus D', 'Bus E'] }
      ]
    }));
  } else {
    callback(new Error('File not found'));
  }
});

// Test the submit route
describe('POST /submit', () => {
  it('should return the list of buses for a valid route', async () => {
    const response = await request(app)
      .post('/submit')
      .send({ route: 'Route 1' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(['Bus A', 'Bus B', 'Bus C']);
  });

  it('should return 404 for an invalid route', async () => {
    const response = await request(app)
      .post('/submit')
      .send({ route: 'Invalid Route' });
    expect(response.status).toBe(404);
    expect(response.text).toBe('No buses found for this route');
  });

  it('should return 500 if there is an error reading the configuration file', async () => {
    fs.readFile.mockImplementationOnce((path, encoding, callback) => {
      callback(new Error('Error reading configuration file'));
    });
    const response = await request(app)
      .post('/submit')
      .send({ route: 'Route 1' });
    expect(response.status).toBe(500);
    expect(response.text).toBe('Error reading configuration file');
  });
});
