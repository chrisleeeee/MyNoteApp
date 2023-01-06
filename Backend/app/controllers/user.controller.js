var express = require('express');
var router = express.Router();
var service = require('../service/userService')


router.post('/signup', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const repeatPassword = req.body.repeatPassword;
    const email = req.body.email;
    var response = service.validate(username, password, repeatPassword, email);
    res.send(response);
})

router.post('login', function (req, res) {
    const loginCredential = req.body.username;
    const password = req.body.password;
    res.send(service.login(loginCredential, password));
})

module.exports = router;