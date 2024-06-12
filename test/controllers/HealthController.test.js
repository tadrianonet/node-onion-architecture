const request = require('supertest');
const express = require('express');
const healthController = require('../../src/presentation/controllers/HealthController');

const app = express();
app.use(express.json());
app.use('/', healthController);

describe('HealthController', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(done);
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should return health status as UP', async () => {
        const res = await request(server)
            .get('/health')
            .expect(200);
        
        expect(res.body.status).toBe('UP');
    });
});
