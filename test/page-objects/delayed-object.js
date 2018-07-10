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
            //console.log(res.body);
            return lodash.get(res, 'body.per_page');
        },
        getTotalPages: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.total_pages');
        },
        getData: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.data');
        },
        getDataId: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.data.id');
        },
        getDataFirstName: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.first_name');
        },
        getDataLasName: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.last_name');
        },
        getDataAvatar: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.avatar');
        }

    }
}

module.exports = delayedResponse;