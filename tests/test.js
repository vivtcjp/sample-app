const request = require('supertest');
const app = require('../app');

describe('GET /locations', () => {
  it('should fetch locations from MongoDB and return as JSON', (done) => {
    request(app)
      .get('/locations')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });
});

// Add more tests as needed
