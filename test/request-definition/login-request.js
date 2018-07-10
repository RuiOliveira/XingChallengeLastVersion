'use strict';
var loginObject = require('../page-objects/login-object');
var request = require('supertest');
var app = request('https://reqres.in');

describe("Login Request", function () {
    it('LOGIN SUCCESSFUL', function (done) {
        var params = { email: 'peter@klaven', password: 'cityslicka' };
        app.post('/api/login')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                loginObject.loginSuccess(res, 'QpwL5tke4Pnpja7X');
                done();
            });
    });
});

