var should = require('should');
var lodash = require('lodash');

//I select lodash in order to validate undifined responses
function registerResponse (res)
{
    return {
        getTokenRegisterSuccess: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.token');
        },
        getTokenRegisterUnsuccess: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.error');
        }
    }
}

module.exports = registerResponse;