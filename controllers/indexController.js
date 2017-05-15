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

//plain inline angular
exports.angular = function (req, res) {

    rp(getOptions)
        .then(function (response) {

            let data = helper.normaliseResponse(response);

            res.render('index-angular', {title: 'Complaints per million units', data: JSON.stringify(data)});
        })
        .catch(function (err) {
            console.log(err);
            res.render('index-angular', {title: 'Complaints per million units', data: []});
        });
};

// angular component
exports.angularComponent = function (req, res) {

    rp(getOptions)
        .then(function (response) {

            let data = helper.normaliseResponse(response);

            res.render('index-angular-component', {title: 'Complaints per million units', data: JSON.stringify(data)});
        })
        .catch(function (err) {
            console.log(err);
            res.render('index-angular-component', {title: 'Complaints per million units', data: []});
        });
};

// vue component
exports.vue = function (req, res) {

    rp(getOptions)
        .then(function (response) {

            let data = helper.normaliseResponse(response);

            res.render('index-vue', {title: 'Complaints per million units', data: JSON.stringify(data)});
        })
        .catch(function (err) {
            console.log(err);
            res.render('index-vue', {title: 'Complaints per million units', data: []});
        });
};