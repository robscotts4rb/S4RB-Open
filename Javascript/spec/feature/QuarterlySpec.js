describe('Quarterly View', function() {
  beforeEach(function() {
    response = [
                {
                  "Value.date": "2012-01-01T00:00:00",
                  "Complaints": 27,
                  "UnitsSold": 4932508
                },
                {
                  "Value.date": "2012-02-01T00:00:00",
                  "Complaints": 5,
                  "UnitsSold": 86720
                },
                {
                  "Value.date": "2012-03-01T00:00:00",
                  "Complaints": 10,
                  "UnitsSold": 824680
                },
                {
                  "Value.date": "2012-04-01T00:00:00",
                  "Complaints": 25,
                  "UnitsSold": 756023
                },
                {
                  "Value.date": "2012-05-01T00:00:00",
                  "Complaints": 8,
                  "UnitsSold": 118029
                },
                {
                  "Value.date": "2012-06-01T00:00:00",
                  "Complaints": 15,
                  "UnitsSold": 160122
                }
              ];
  });

  describe("Quarterly Page", function() {
    it("should show figures from the response hash", function() {
      quarterlyView(response);
      expect(document.getElementById('title').innerHTML).toContain("Quarterly - Complaints per million");
      expect(document.getElementById('table').innerHTML).toContain("Quarter");
      expect(document.getElementById('table').innerHTML).toContain("CPMU");
      expect(document.getElementById('table').innerHTML).toContain("7.18697146");
      expect(document.getElementById('table').innerHTML).toContain("46.41385299");
    });
  });

});
