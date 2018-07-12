function usersResponse (res)
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
            return res.body.data.id;
        },
        getDataFirstName: function () {
            return res.body.first_name;
        },
        getDataLasName: function () {
            console.log(res.body);
            return res.body.last_name;
        },
        getDataAvatar: function () {
            return res.body.avatar;
        },
        getDataSingleUser: function () {
            return res.body.data;
        },
        getDataIdSingleUser: function () {
            return res.body.data.id;
        },
        getDataFirstNameSingleUser: function () {
            return res.body.data.first_name;
        },
        getDataLastNameSingleUser: function () {
            return res.body.data.last_name;
        },
        getDataAvatarSingleUser: function () {
            return res.body.data.avatar;
        },
        getNameCreateUser: function () {
            //console.log(res.body);
            return res.body.name;
        },
        getjobCreateUser: function () {
            return res.body.job;
        },
        getIdCreateUser: function () {
            return res.body.id;
        },
        getCreatedAtCreateUser: function () {
            return res.body.createdAt;
        },
        getUpdatedAt: function () {
            console.log(res.body);
            return res.body.updatedAt;
        },
    }
}

module.exports = usersResponse;