var should = require('should');
var lodash = require('lodash');

//I select lodash in order to validate undefined responses
function usersResponse (res)
{
    return {
        getBody: function () {
            return lodash.get(res, 'body');
        },
        getPage: function () {
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
            console.log(res.body);
            return lodash.get(res, 'body.last_name');
        },
        getDataAvatar: function () {
            return lodash.get(res, 'body.avatar');
        },
        getDataSingleUser: function () {
            return lodash.get(res, 'body.data');
        },
        getDataIdSingleUser: function () {
            return lodash.get(res, 'body.data.id');
        },
        getDataFirstNameSingleUser: function () {
            return lodash.get(res, 'body.data.first_name');
        },
        getDataLastNameSingleUser: function () {
            return lodash.get(res, 'body.data.last_name');
        },
        getDataAvatarSingleUser: function () {
            return lodash.get(res, 'body.data.avatar');
        },
        getNameCreateUser: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.name');
        },
        getjobCreateUser: function () {
            return lodash.get(res, 'body.job');
        },
        getIdCreateUser: function () {
            return lodash.get(res, 'body.id');
        },
        getCreatedAtCreateUser: function () {
            return lodash.get(res, 'body.createdAt');
        },
        getUpdatedAt: function () {
            console.log(res.body);
            return lodash.get(res, 'body.updatedAt');
        },
    }
}

module.exports = usersResponse;