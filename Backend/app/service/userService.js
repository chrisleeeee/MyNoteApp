const ResponseMessage = require('../models/response/ResponseMessage')
const codeEnums = require('../models/response/ResponseCodeEnum')
module.exports = {
    validate,
    login
}


function validate(username, password, repeatPassword, email) {
    console.log(username + password + repeatPassword + email);
    const response = new ResponseMessage();

    if (username.length >= 16) {
        return new ResponseMessage()
            .withSuccess(false)
            .withCode(codeEnums.USERNAME_TOO_LONG)
            .withMessage("Username is too long")
            .withData({});
    }

    if (password !== repeatPassword) {
        return new ResponseMessage()
            .withSuccess(false)
            .withCode(codeEnums.PASSWORD_NOT_MATCH)
            .withMessage("Two Passwords do not match")
            .withData({});
    }

    // email check, unique -> database

    return response;
}

function login(loginCredential, password) {

    // find username first

    // if cannot find username, find email

    // else login fail

}