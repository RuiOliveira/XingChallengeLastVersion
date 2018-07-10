var request = require('supertest');

function loginObject ()
{
}

loginObject.prototype.loginSuccess = function (res, token) {
    res.body.token.should.not.be.equal(null);
    res.body.token.should.be.instanceOf(String);
    res.body.should.have.property('token').and.be.equal(token);
}

module.exports = new loginObject();