function registerResponse (res)
{
    return {
        getTokenRegisterSuccess: function () {
            //console.log(res.body);
            return res.body.token;
        },
        getTokenRegisterUnsuccess: function () {
            return res.body.error;
        }
    }
}

module.exports = registerResponse;