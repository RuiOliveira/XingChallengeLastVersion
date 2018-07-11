'use strict';

var usersResponse = require('../page-objects/users-object');
var supertest =  require('supertest');
var chai= require('chai');
var app = ('https://reqres.in');
var request = supertest(app);
var should = require('should');

describe("Users", () => {
    it('should get list of users', (done) => {
        var listOfUsersResponseExpectations = function (err, res) {
            if (err) return done(err);
            var users = new usersResponse(res)

            //Assertions to check response
            users.getPage().should.be.instanceOf(Number);
            users.getPage().should.be.equal(2);
            users.getPerPage().should.be.instanceOf(Number);
            users.getPerPage().should.be.equal(3);
            users.getTotal().should.be.instanceOf(Number);
            users.getTotal().should.be.equal(12);
            users.getTotalPages().should.be.instanceOf(Number);
            users.getTotalPages().should.be.equal(4);
            users.getBody().should.have.property('data');
            users.getData().should.be.instanceOf(Array).and.have.length(3);

            done();
        }

        request.get('/api/users?page=2')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(listOfUsersResponseExpectations);
    });

    it('should get single user', (done) => {
        var singleUsersResponseExpectations = function (err, res) {
            if (err) return done(err);
            var users = new usersResponse(res)

            //Assertions to check response
            users.getDataIdSingleUser().should.be.instanceOf(Number);
            users.getDataIdSingleUser().should.be.equal(2);

            users.getDataFirstNameSingleUser().should.be.instanceOf(String);
            users.getDataFirstNameSingleUser().should.be.equal("Janet");

            users.getDataLastNameSingleUser().should.be.instanceOf(String);
            users.getDataLastNameSingleUser().should.be.equal("Weaver");

            users.getDataAvatarSingleUser().should.be.instanceOf(String);
            users.getDataAvatarSingleUser().should.be.equal("https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg");

            done();
        }

        request.get('/api/users/2')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(singleUsersResponseExpectations);
    });

    it('should single user not found', (done) => {
        //This test do not have response body so i validate only status code
        request.get('/api/users/23')
            .set('Accept', 'application/json')
            .expect(404)
            .expect('Content-Type', /json/)
            .end(function (err) {
                if (err) return done(err);
                done();
            })
    });

    it('should create single user', (done) => {
        var createUserResponseExpectations = function (err, res) {
            if (err) return done(err);
            var users = new usersResponse(res)

            //Assertions to check response
            users.getBody().should.have.property('firstname').and.be.equal('Rui');
            users.getBody().should.have.property('lastname').and.be.equal('Oliveira');

            done();
        }

        var params = { firstname: 'Rui', lastname: 'Oliveira' };

        request.post('/api/users')
            .send(params)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(createUserResponseExpectations);
    });

    it('should update user with put method request', (done) => {
        var updateUserPutResponseExpectations = function (err, res) {
            if (err) return done(err);
            var users = new usersResponse(res)

            //Assertions to check response
            users.getBody().should.have.property('name').and.be.equal('Oliveira');
            users.getBody().should.have.property('job').and.be.equal('Engineer');
            users.getBody().should.have.property('updatedAt');

            done();
        }

        var params = { name: 'Oliveira', job: 'Engineer' };

        request.put('/api/users/2')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(updateUserPutResponseExpectations);
    });

    it('should update user with patch method request', (done) => {
        var updateUserPatchResponseExpectations = function (err, res) {
            if (err) return done(err);
            var users = new usersResponse(res)

            //Assertions to check response
            users.getBody().should.have.property('name').and.be.equal('Oliveira');
            users.getBody().should.have.property('job').and.be.equal('Engineer');
            users.getBody().should.have.property('updatedAt');

            done();
        }

        var params = { name: 'Oliveira', job: 'Engineer' };

        request.patch('/api/users/2')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(updateUserPatchResponseExpectations);
    });


    it('should delete an user', (done) => {
        //This test do not have response body so i validate only status code
        request.delete('/api/users/2')
            .set('Accept', 'application/json')
            .expect(204)
            .end(function (err) {
                if (err) return done(err);
                done();
            })
    });
});