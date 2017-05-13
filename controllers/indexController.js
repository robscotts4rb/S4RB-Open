const request = require('request');

exports.index = function (req, res, next) {
    res.render('index', { title: 'Complaints per million units' });
};
