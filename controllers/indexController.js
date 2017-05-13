const request = require('request');
require('any-promise/register/bluebird');
const rp = require('request-promise-any');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const helper = require('../helper/checkData');

// Could be pulled from env file to save hard coding woes later on
const base = 'http://127.0.0.1:3000/';

const getOptions = {
    method: 'GET',
    uri: base + 'CPMU',
    headers: {
        /* 'content-type': 'application/x-www-form-urlencoded' */ // Set automatically
    },
    json: true
};

exports.index = function (req, res, next) {

    rp(getOptions)
        .then(function (response) {

            let data = helper.sortedResponse(response);

            res.render('index', {title: 'Complaints per million units', data: JSON.stringify(data)});
        })
        .catch(function (err) {
            console.log(err);
            res.render('index', {title: 'Complaints per million units', data: []});
        });
};