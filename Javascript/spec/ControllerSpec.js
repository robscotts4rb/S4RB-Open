describe('Controller', function() {

  describe("#initialize", function() {
    it("should have a constant for the JSON URL", function() {
      expect(APIURL).toEqual("http://localhost:3000/CPMU");
    });
  });

  describe("#togglePage", function() {
    it("should respond to request", function() {
      expect(togglePage()).toEqual(undefined);
    });
  });
});
