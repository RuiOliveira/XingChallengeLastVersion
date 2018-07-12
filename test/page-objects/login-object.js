function loginResponse (res)
{
    return {
        getTokenLoginSuccess: function () {
            //console.log(res.body);
            return res.body.token;
        },
        getTokenLoginUnsuccess: function () {
            return res.body.error;
        }
    }
}

module.exports = loginResponse;