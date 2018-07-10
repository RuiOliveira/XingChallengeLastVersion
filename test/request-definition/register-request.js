'use strict';

var registerResponse = require('../page-objects/register-object');
var supertest =  require('supertest');
var chai= require('chai');
var app = ('https://reqres.in');
var request = supertest(app);
var should = require('should');

describe("Register Request", () => {
    it('should register successful', (done) => {
        var registerSuccessResponseExpectations = function (err, res) {
            if (err) return done(err);
            var login = new registerResponse(res)

            //Assertions to check response
            login.getTokenRegisterSuccess().should.not.equal(null);
            login.getTokenRegisterSuccess().should.be.instanceOf(String);
            login.getTokenRegisterSuccess().should.be.equal('QpwL5tke4Pnpja7X');

            done();
        }

        var params = { email: 'peter@klaven', password: 'pistol' };

        request.post('/api/login')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(registerSuccessResponseExpectations);
    });

    it('should register unsuccessful', (done) => {
        var registerUnsuccessResponseExpectations = function (err, res) {
            if (err) return done(err);
            var login = new registerResponse(res);

            //Assertions to check response
            login.getTokenRegisterUnsuccess().should.not.equal(null);
            login.getTokenRegisterUnsuccess().should.be.instanceOf(String);
            login.getTokenRegisterUnsuccess().should.be.equal('Missing password');

            done();
        }

        var params = { email: 'peter@klaven'};

        request.post('/api/login')
            .send(params)
            .set('Accept', 'application/json')
            .expect(400)
            .expect('Content-Type', /json/)
            .end(registerUnsuccessResponseExpectations);
    });
});