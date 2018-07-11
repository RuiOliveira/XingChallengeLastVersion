var should = require('should');
var lodash = require('lodash');

//I select lodash in order to validate undefined responses
function registerResponse (res)
{
    return {
        getTokenRegisterSuccess: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.token');
        },
        getTokenRegisterUnsuccess: function () {
            return lodash.get(res, 'body.error');
        }
    }
}

module.exports = registerResponse;