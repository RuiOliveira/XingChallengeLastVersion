'use strict';

var delayedResponseRequest = require('../page-objects/delayed-object');
var supertest =  require('supertest');
var chai= require('chai');
var app = ('https://reqres.in');
var request = supertest(app);
var should = require('should');

describe("Delayed response", () => {
    it('should verify users', (done) => {
        var delayedResponseExpectations = function (err, res) {
            var expectedDelayedUsers = [
                {
                    "id": 1,
                    "first_name": "George",
                    "last_name": "Bluth",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
                },
                {
                    "id": 2,
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
                },
                {
                    "id": 3,
                    "first_name": "Emma",
                    "last_name": "Wong",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
                }
            ];

            if (err) return done(err);
            var delayed = new delayedResponseRequest(res);

            //Assertions to check response
            delayed.getPage().should.be.instanceOf(Number);
            delayed.getPage().should.be.equal(1);
            delayed.getPerPage().should.be.instanceOf(Number);
            delayed.getPerPage().should.be.equal(3);
            delayed.getTotal().should.be.instanceOf(Number);
            delayed.getTotal().should.be.equal(12);
            delayed.getTotalPages().should.be.instanceOf(Number);
            delayed.getTotalPages().should.be.equal(4);
            delayed.getData().should.be.instanceOf(Array).and.have.lengthOf(3);
            JSON.stringify(delayed.getData()).should.be.equal(JSON.stringify(expectedDelayedUsers));

            done();
        }

        request.get('/api/users?delay=3')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(delayedResponseExpectations);
    }).timeout(10000);
});