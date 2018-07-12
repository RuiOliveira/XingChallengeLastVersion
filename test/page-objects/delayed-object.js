function delayedResponse (res)
{
    return {
        getPage: function () {
            //console.log(res.body);
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
            return res.body.data.id;
        },
        getDataFirstName: function () {
            return res.body.first_name;
        },
        getDataLasName: function () {
            return res.body.last_name;
        },
        getDataAvatar: function () {
            return res.body.avatar;
        }
    }
}

module.exports = delayedResponse;