const request = require('request');
require('any-promise/register/bluebird');
const rp = require('request-promise-any');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

// Could be pulled from env file to save hard coding woes
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

            let data = [];

            try {
                // find any missing months and add them
                let range = moment().range(new Date(response[0]['Value.date']), new Date(response[(response.length-1)]['Value.date'])),months = [];

                for (let month of range.by('month')) {
                    months.push(month.format('YYYY-MM-DD'));
                }

                for (let i = 0; i < response.length; i++) {

                    if (response[i].hasOwnProperty('Value.date')) {
                        let date = new Date(response[i]['Value.date']);

                        if(months[i] !== moment(date).format('YYYY-MM-DD')){
                            let a = {"Value.date": moment(months[i-1]).add(1, 'month').format('YYYY-MM-DD'), "Complaints": 0, "UnitsSold" : 0 };
                            response.splice(i,0,a);
                        }
                    }
                }

                data = response;

            } catch(e) {
                console.log(e.message);
            }

            res.render('index', {title: 'Complaints per million units', data: JSON.stringify(data)});
        })
        .catch(function (err) {
            console.log(err);
            res.render('index', {title: 'Complaints per million units', data: []});
        });
};