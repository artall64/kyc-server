const express = require('express');
const router = express.Router();
const createError = require('http-errors');
//const randomString = require('random-string');

const sampleData = {
    "biSr69Gg29y0cEtBDohDwAu2temfRi": [{first_name: "Porter"}, {last_name: "Moneypenny"}, {email: "pmoneypenny0@plala.or.jp"}, {gender: "Male"}],
    "Ozub6hbYUurQ3nVa7PKtpxDcMXXXss": [{first_name: "Ham"}, {last_name: "Askam"}, {email: "haskam1@stumbleupon.com"}, {gender: "Male"}],
    "cZryUyegll48RZwlBx898dSNK0EFPw": [{first_name: "Alane"}, {last_name: "Losemann"}, {email: "alosemann2@techcrunch.com"}, {gender: "Female"}],
    "jESWcbUW2sfspDhevmwNyjm4ORgZ6I": [{first_name: "Ronni"}, {last_name: "Acres"}, {email: "racres3@sciencedirect.com"}, {gender: "Female"}],
    "SdJWcbUq2sfspDhevmwNyjm4OREFPw": [{first_name: "Hercules"}, {last_name: "Padly"}, {email: ""}, {gender: "Male"}],
};

/* GET users listing. */
router.get('/:id', function (req, res, next) {

    const userData = sampleData[req.params.id];
    if (!userData){
        next(createError(404));
        return;
    }
    res.send(JSON.stringify(userData));
});

/* GET users listing. */
router.put('/:id', function (req, res, next) {

    // TODO:
    // 1) Decode base64 with user data from request parameter, also should contain email where to send data
    // 2) Calculate

    // todo: sampleData -> generate merkle proof and put on block chain
    // const userData = sampleData[req.params.id];
    // if (!userData){
    //     next(createError(404));
    //     return;
    // }
    //
    // res.send(userData);
});

module.exports = router;