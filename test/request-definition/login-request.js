'use strict';

var loginResponse = require('../page-objects/login-object.js');
var supertest =  require('supertest');
var chai= require('chai');
var app = ('https://reqres.in');
var request = supertest(app);
var should = require('should');

describe("Login Request", () => {
    it('should login successful', (done) => {
        var loginSuccessResponseExpectations = function (err, res) {
            if (err) return done(err);
            var login = new loginResponse(res)

            //Assertions to check response
            login.getToken().should.not.equal(null);
            login.getToken().should.be.instanceOf(String);
            //login.getToken().should.have.property('token').and.be.equal('QpwL5tke4Pnpja7X');

            done();
        }

        var params = { email: 'peter@klaven', password: 'cityslicka1' };

        request.post('/api/login')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(loginSuccessResponseExpectations);
    });
});