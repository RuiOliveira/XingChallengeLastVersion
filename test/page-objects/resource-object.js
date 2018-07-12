function ressourceResponse (res)
{
    return {
        getBody: function () {
            return res.body;
        },
        getPage: function () {
            return res.body.page;
        },
        getPerPage: function () {
            return res.body.per_page;
        },
        getTotal: function () {
            return res.body.total;
        },
        getTotalPages: function () {
            return res.body.total_pages;
        },
        getData: function () {
            return res.body.data;
        },
        getDataId: function () {
            //console.log(res.body);
            return res.body.data.id;
        },
        getDataName: function () {
            return res.body.name;
        },
        getDataYear: function () {
            return res.body.year;
        },
        getDataColor: function () {
            return res.body.color;
        },
        getDataPantoneValue: function () {
            return res.body.pantone_value;
        },
        getDataSingleResource: function () {
            return res.body.data;
        },
        getDataIdSingleResource: function () {
            return res.body.data.id;
        },
        getDataNameSingleResource: function () {
            return res.body.data.name;
        },
        getDataYearSingleResource: function () {
            return res.body.data.year;
        },
        getDataColorSingleResource: function () {
            return res.body.data.color;
        },
        getDataPantoneValueSingleResource: function () {
            return res.body.data.pantone_value;
        }
    }
}

module.exports = ressourceResponse;