'use strict';

var resourceResponse = require('../page-objects/resource-object');
var supertest =  require('supertest');
var chai= require('chai');
var app = ('https://reqres.in');
var request = supertest(app);
var should = require('should');

describe("Resource request", () => {

    it('should single resource not found', (done) => {
        //This test do not have response body so i validate only status code
        request.get('/api/unknown/23')
            .set('Accept', 'application/json')
            .expect(404)
            .expect('Content-Type', /json/)
            .end(function (err) {
                if (err) return done(err);
                done();
            })
    });

    it('should check list of resources', (done) => {
        var listOfResourcesResponseExpectations = function (err, res) {
            var expectedResources = [
                {
                    "id": 1,
                    "name": "cerulean",
                    "year": 2000,
                    "color": "#98B2D1",
                    "pantone_value": "15-4020"
                },
                {
                    "id": 2,
                    "name": "fuchsia rose",
                    "year": 2001,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                },
                {
                    "id": 3,
                    "name": "true red",
                    "year": 2002,
                    "color": "#BF1932",
                    "pantone_value": "19-1664"
                }
            ];


            if (err) return done(err);
            var resource = new resourceResponse(res);

            //Assertions to check response
            resource.getPage().should.be.instanceOf(Number);
            resource.getPage().should.be.equal(1);
            resource.getPerPage().should.be.instanceOf(Number);
            resource.getPerPage().should.be.equal(3);
            resource.getTotal().should.be.instanceOf(Number);
            resource.getTotal().should.be.equal(12);
            resource.getTotalPages().should.be.instanceOf(Number);
            resource.getTotalPages().should.be.equal(4);
            resource.getData().should.be.instanceOf(Array).and.have.length(3);
            resource.getBody().should.have.property('data');
            JSON.stringify(resource.getData()).should.be.equal(JSON.stringify(expectedResources));

            done();
        }

        request.get('/api/unknown')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(listOfResourcesResponseExpectations);
    });

    it('should check single resource', (done) => {
        var singleResourcesResponseExpectations = function (err, res) {
            if (err) return done(err);
            var resource = new resourceResponse(res);

            //Assertions to check response
            resource.getDataIdSingleResource().should.be.instanceOf(Number);
            resource.getDataIdSingleResource().should.be.equal(2);

            resource.getDataNameSingleResource().should.be.instanceOf(String);
            resource.getDataNameSingleResource().should.be.equal("fuchsia rose");

            resource.getDataYearSingleResource().should.be.instanceOf(Number);
            resource.getDataYearSingleResource().should.be.equal(2001);

            resource.getDataColorSingleResource().should.be.instanceOf(String);
            resource.getDataColorSingleResource().should.be.equal("#C74375");

            resource.getDataPantoneValueSingleResource().should.be.instanceOf(String);
            resource.getDataPantoneValueSingleResource().should.be.equal("17-2031");

            done();
        }

        request.get('/api/unknown/2')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(singleResourcesResponseExpectations);
    });

});