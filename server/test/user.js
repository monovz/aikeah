const request = require('supertest');
const app = require('../app');

describe('POST /login', function() {
    it('responds with token', function(done) {
      request(app)
        .post('/login')
        .send({username: 'admin', password: '1234'})
        .then(response=>{
            // console.log(response.body)
            const {body, status} = response;
            global.user = body.user
            global.token = body.token
            expect(status).toBe(200);
            expect(body).toHaveProperty('token', expect.any(String))
            done()
        })
        .catch(err => {
          done(err)
      })
    })
  })