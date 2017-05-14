var supertest = require('supertest'),
    app = require('../app');

describe('GET /', function() {
    it('responds with 200', function(done) {
        supertest(app)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /vue', function() {
    it('responds with 200', function(done) {
        supertest(app)
            .get('/')
            .expect(200, done);
    });
});
