const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {

  it('gets / html page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
  it('posts echo html page', () => {
    return request(app)
      .post('/echo')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('body stuff');
      });
  });
  it('gets red html page', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<html><body><h1>This is red</h1></body></html>');
      });
  });
  it('gets green html page', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<html><body><h1>This is green</h1></body></html>');
      });
  });
  it('gets blue html page', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<html><body><h1>This is blue</h1></body></html>');
      });
  });
});
