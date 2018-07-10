'use strict';

var delayedResponse = require('../page-objects/delayed-object');
var supertest =  require('supertest');
var chai= require('chai');
var app = ('https://reqres.in');
var request = supertest(app);
var should = require('should');

describe("Delayed response", () => {
    it('should verify users', (done) => {
        var delayedResponseExpectations = function (err, res) {
            if (err) return done(err);
            var delayed = new delayedResponse(res);

            //Assertions to check response
            delayed.getPage().sould.be.instanceOf(Number);
            delayed.getPage().should.be.equal(1);
            delayed.getPerPage().sould.be.instanceOf(Number);
            delayed.getPerPage().should.be.equal(3);
            delayed.getTotal().sould.be.instanceOf(Number);
            delayed.getTotal().should.be.equal(12);
            delayed.getTotalPages().sould.be.instanceOf(Number);
            delayed.getTotalPages().should.be.equal(4);

            //Como iterar dentro do array

            delayed.getData().should.be.instanceOf(Array).and.have.lengthOf(3);

            done();
        }

        request.get('/api/users?delay=3')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(delayedResponseExpectations);
    });
});