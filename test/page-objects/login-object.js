var should = require('should');
var lodash = require('lodash');

//I select lodash in order to validate undifined responses
function loginResponse (res)
{
    return {
        getTokenLoginSuccess: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.token');
        },
        getTokenLoginUnsuccess: function () {
            return lodash.get(res, 'body.error');
        }
    }
}

module.exports = loginResponse;