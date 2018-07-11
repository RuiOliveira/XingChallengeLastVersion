var should = require('should');
var lodash = require('lodash');

//I select lodash in order to validate undifined responses
function delayedResponse (res)
{
    return {
        getPage: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.page');
        },
        getPerPage: function () {
            return lodash.get(res, 'body.per_page');
        },
        getTotal: function () {
            return lodash.get(res, 'body.total');
        },
        getTotalPages: function () {
            return lodash.get(res, 'body.total_pages');
        },
        getData: function () {
            return lodash.get(res, 'body.data');
        },
        getDataId: function () {
            return lodash.get(res, 'body.data.id');
        },
        getDataFirstName: function () {
            return lodash.get(res, 'body.first_name');
        },
        getDataLasName: function () {
            return lodash.get(res, 'body.last_name');
        },
        getDataAvatar: function () {
            return lodash.get(res, 'body.avatar');
        }
    }
}

module.exports = delayedResponse;