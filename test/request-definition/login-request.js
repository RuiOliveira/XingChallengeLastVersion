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
            login.getTokenLoginSuccess().should.not.equal(null);
            login.getTokenLoginSuccess().should.be.instanceOf(String);
            login.getTokenLoginSuccess().should.be.equal('QpwL5tke4Pnpja7X');

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

    it('should login unsuccessful', (done) => {
        var loginUnsuccessResponseExpectations = function (err, res) {
            if (err) return done(err);
            var login = new loginResponse(res);

            //Assertions to check response
            login.getTokenLoginUnsuccess().should.not.equal(null);
            login.getTokenLoginUnsuccess().should.be.instanceOf(String);
            login.getTokenLoginUnsuccess().should.be.equal('Missing password');

            done();
        }

        var params = { email: 'peter@klaven'};

        request.post('/api/login')
            .send(params)
            .set('Accept', 'application/json')
            .expect(400)
            .expect('Content-Type', /json/)
            .end(loginUnsuccessResponseExpectations);
    });
});