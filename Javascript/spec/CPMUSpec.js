describe('CPMU', function() {

  beforeEach(function() {
    cpmu = new CPMU();
  });

  describe("#calculate", function() {
    it("should raise an error if no values passed", function() {
      expect(function() {cpmu.calculate();}).toThrowError("Values not defined");
    });
    it("should work out the CPMU", function() {
      expect(cpmu.calculate(0,1000000)).toEqual("0.00000000");
      expect(cpmu.calculate(10,1000000)).toEqual("10.00000000");
      expect(cpmu.calculate(9999999,1000000)).toEqual("9999999.00000000");
    });
  });

  describe("#quarter", function() {
    it("should raise an error if no values passed", function() {
      expect(function() {cpmu.quarter();}).toThrowError("Values not defined");
    });
    it("should work out the Quarter", function() {
      expect(cpmu.quarter(0)).toEqual("0.00000000");
      expect(cpmu.quarter(60)).toEqual("20.00000000");
      expect(cpmu.quarter(9999999)).toEqual("3333333.00000000");
    });
  });

  describe("#quartile", function() {
    it("should raise an error if no values passed", function() {
      expect(function() {cpmu.quartile();}).toThrowError("Values not defined");
    });
    it("should work out the Quartile", function() {
      expect(cpmu.quartile(0) ).toEqual(1);
      expect(cpmu.quartile(15)).toEqual(2);
      expect(cpmu.quartile(10)).toEqual(3);
      expect(cpmu.quartile(25)).toEqual(4);
    });
  });

  describe("#display_date", function() {
    it("should raise an error if no values passed", function() {
      expect(function() {cpmu.display_date();}).toThrowError("Values not defined");
    });
    it("should display date in nice format", function() {
      expect(cpmu.display_date("2012-01-01T00:00:00")).toEqual("01 January 2012");
      expect(cpmu.display_date("2050-12-31T00:00:00")).toEqual("31 December 2050");
    });
  });

});
