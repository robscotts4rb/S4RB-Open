var chai = require('chai');
var expect = chai.expect;
var helper = require('../helper/checkData');

describe('sortedData', function() {
    it('should return array',function(){
        var temp = helper.sortedResponse([]);
        expect(temp).to.eql([]);
    });
});