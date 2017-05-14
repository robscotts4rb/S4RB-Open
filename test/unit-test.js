var chai = require('chai');
var expect = chai.expect;
var helper = require('../helper/checkData');

describe('sortedData', function() {
    it('should return array',function(){
        var temp = helper.sortedResponse([]);
        expect(temp).to.eql([]);
    });
});

describe('sortedData', function() {
    it('should return array with 3 items',function(){
        var temp = helper.sortedResponse([
            {"Value.date": "2012-01-01T00:00:00", "Complaints": 27, "UnitsSold": 4932508},
            {"Value.date": "2012-03-01T00:00:00", "Complaints": 10, "UnitsSold": 824680}
            ]);
        expect(temp.length).to.eql(3);
    });
});