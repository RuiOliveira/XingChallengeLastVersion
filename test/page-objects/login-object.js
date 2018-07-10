var should = require('should');
var lodash = require('lodash');

function loginResponse (res)
{
    return {
        getToken: function () {
            console.log(res.body);
            return lodash.get(res, 'body.token');
        },

    }
}

module.exports = loginResponse;