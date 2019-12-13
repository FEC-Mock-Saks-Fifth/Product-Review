const app = require('./index.js')
const supertest = require('supertest')
const request = supertest(app);

    it("Testing get request route for reviews", async done => {
    const response = await request.get('/reviews')
    expect(response.status).toBe(200);
    done();
  });

    it('it should have a length of 100 or greater ', async (done) => {
        const response = await request.get('/reviews')
        expect(response.body.length).toBeGreaterThan(99)
        done()
    });
 
    it('it should respond with a status 200 for a succesful review post request', async done  => {
        const response = await request.post('/writereview')
        expect(response.status).toBe(200)
        done()
    });


