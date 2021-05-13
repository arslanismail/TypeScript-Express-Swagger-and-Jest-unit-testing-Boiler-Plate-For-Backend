import * as request from 'supertest';

import server from '../../src/server';

describe('Health API Tests', () => {
	beforeEach(() => {
		server.close();
	});
	it('should return a success message.', async () => {
		const someData: object = {
			name: 'Name',
			number: 8.5,
		};
		const res = await request(server)
			.post('/api/v1/health/check')
			.set('Content-Type', 'application/json')
			.send(someData);
		expect(res.status).toEqual(200);
		expect(res.body).toHaveProperty('name');
		expect(res.body).toHaveProperty('number');
	});

	it('should return a pulse for heartbeat API', async () => {
		const result = { status: 200, data: 'Server is running.' };
		const res = await request(server)
			.get('/api/v1/health')
			.set('Content-Type', 'application/json')
			.send();
		expect(res.status).toEqual(200);
		expect(res.body).toHaveProperty('status');
		expect(res.body).toHaveProperty('data');
	});
});
