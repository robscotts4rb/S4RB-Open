const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

exports.normaliseResponse = function (response) {

    try {
        // find any missing months and add them
        let range = moment().range(new Date(response[0]['Value.date']), new Date(response[(response.length - 1)]['Value.date'])),
            months = [];

        for (let month of range.by('month')) {
            months.push(month.format('YYYY-MM-DD'));
        }

        for (let i = 0; i < response.length; i++) {

            if (response[i].hasOwnProperty('Value.date')) {
                let date = new Date(response[i]['Value.date']);

                if (months[i] !== moment(date).format('YYYY-MM-DD')) {
                    let a = {
                        "Value.date": moment(months[i - 1]).add(1, 'month').format('YYYY-MM-DD'),
                        "Complaints": 0,
                        "UnitsSold": 0
                    };
                    response.splice(i, 0, a);
                }
            }
        }

        return response;

    } catch (e) {
        console.log(e.message);
        return [];
    }
};