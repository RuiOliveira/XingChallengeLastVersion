var should = require('should');
var lodash = require('lodash');

//I select lodash in order to validate undifined responses
function ressourceResponse (res)
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
            //console.log(res.body);
            return lodash.get(res, 'body.data.id');
        },
        getDataName: function () {
            return lodash.get(res, 'body.name');
        },
        getDataYear: function () {
            return lodash.get(res, 'body.year');
        },
        getDataColor: function () {
            return lodash.get(res, 'body.color');
        },
        getDataPantoneValue: function () {
            return lodash.get(res, 'body.pantone_value');
        },
        getDataSingleResource: function () {
            return lodash.get(res, 'body.data');
        },
        getDataIdSingleResource: function () {
            return lodash.get(res, 'body.data.id');
        },
        getDataNameSingleResource: function () {
            return lodash.get(res, 'body.data.name');
        },
        getDataYearSingleResource: function () {
            return lodash.get(res, 'body.data.year');
        },
        getDataColorSingleResource: function () {
            return lodash.get(res, 'body.data.color');
        },
        getDataPantoneValueSingleResource: function () {
            //console.log(res.body);
            return lodash.get(res, 'body.data.pantone_value');
        }
    }
}

module.exports = ressourceResponse;