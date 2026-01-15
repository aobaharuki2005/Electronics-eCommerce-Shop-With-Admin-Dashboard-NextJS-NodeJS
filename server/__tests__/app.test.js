const request = require('supertest');
const app = require('../app'); // Bây giờ app đã được export nên require sẽ hoạt động

describe('API Health Check', () => {
  it('nên trả về trạng thái OK từ endpoint /health', async () => {
    const res = await request(app).get('/health');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });

  it('nên trả về 404 cho các route không tồn tại', async () => {
    const res = await request(app).get('/api/v1/non-existent-route');
    
    expect(res.statusCode).toEqual(404);
    expect(res.body.error).toBe('Route not found');
  });
});