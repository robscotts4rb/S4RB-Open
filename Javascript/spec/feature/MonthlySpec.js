describe('Monthly View', function() {

  beforeEach(function() {
    response = [
                {
                  "Month": "2012-01-01T00:00:00",
                  "Complaints": 27,
                  "UnitsSold": 4932508
                }
              ];
  });

  describe("Monthly Page", function() {
    it("should show figures from the response hash", function() {
      monthyView(response);
      expect(document.getElementById('title').innerHTML).toContain("Montly - Complaints per million");
      expect(document.getElementById('table').innerHTML).toContain("Date");
      expect(document.getElementById('table').innerHTML).toContain("CPMU");
      expect(document.getElementById('table').innerHTML).toContain("01 January 2012");
      expect(document.getElementById('table').innerHTML).toContain("5.47388874");
    });
  });

});
