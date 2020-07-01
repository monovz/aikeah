const request = require('supertest');
const app = require('../app');
let product_id_test;

describe('POST /products', function(){
    it('response with new product', function(done){
        const obj = {
            name:'Atlas Dunia',
            image_url: undefined, 
            price: 10000, 
            stock: 10, 
            UserId: 2
        }
        request(app)
            .post('/products')
            .set('token', global.token)
            .send(obj)
            .then(response=>{
                const {body, status} = response
                expect(status).toBe(201);
                product_id_test = body.id
                expect(body).toHaveProperty("name", obj.name)
                // expect(body).toHaveProperty("image_url", obj.image_url)
                expect(body).toHaveProperty("price", obj.price)
                expect(body).toHaveProperty("stock", obj.stock)
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('GET /products', function(){
    it('response with new product', function(done){
        request(app)
            .get('/products')
            .set('token', global.token)
            .then(response=>{
                // console.log(response.body)
                const {status} = response
                expect(status).toBe(200);
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('GET /products/:id', function() {
    it('response with product with id :id', function(done) {
        request(app)
            .get(`/products/${product_id_test}`)
            .set('token', global.token)
            .then(response => {
                const {status} = response;
                expect(status).toBe(200);
                done();
            })
            .catch((err)=> {
                done(err)
            });
    })
})

describe('PUT /products/:id', function(){
    it('response with message', function(done){
        const obj = {
            name:'Atlas Indonesia',
            image_url: undefined, 
            price: 10000, 
            stock: 5, 
            UserId: 2
        }
        request(app)
            .put(`/products/${product_id_test}`)
            .set('token', global.token)
            .send(obj)
            .then(response=>{
                const {body, status} = response
                expect(status).toBe(200);
                expect(body).toHaveProperty("message", expect.any(String))
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('POST /products/:id/transaction', function(){
    it('response with new transaction', function(done){
        const obj = {
            ProductId: product_id_test,
            UserId: 2
        }
        request(app)
            .post(`/products/${product_id_test}/transaction`)
            .set('token', global.token)
            .send(obj)
            .then(response=>{
                const {body, status} = response
                expect(status).toBe(201);
                expect(body).toHaveProperty("UserId", obj.UserId)
                // expect(body).toHaveProperty("image_url", obj.image_url)
                expect(body).toHaveProperty("ProductId", obj.ProductId)
                expect(body).toHaveProperty("status", 'to cart')
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('GET /transactions', function(){
    it('response with message', function(done){
        request(app)
            .get('/transactions')
            .set('token', global.token)
            .then(response=>{
                // console.log(response.body)
                const {status} = response
                expect(status).toBe(200);
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('PUT /products/:id', function(){
    it('response with message', function(done){
        request(app)
            .put(`/products/${product_id_test}`)
            .set('token', global.token)
            .then(response=>{
                const {body, status} = response
                expect(status).toBe(200);
                expect(body).toHaveProperty("message", expect.any(String))
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('DELETE /products/:id/transaction', function(){
    it('response with message', function(done){
        request(app)
            .delete(`/products/${product_id_test}/transaction`)
            .set('token', global.token)
            .then(response=>{
                const {body, status} = response
                expect(status).toBe(200);
                expect(body).toHaveProperty("message", expect.any(String))
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('DELETE /products/:id', function(){
    it('response with message', function(done){
        request(app)
            .delete(`/products/${product_id_test}`)
            .set('token', global.token)
            .then(response=>{
                const {body, status} = response
                expect(status).toBe(200);
                expect(body).toHaveProperty("message", expect.any(String))
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})