require "./app/models/JsonApi"

describe JsonApi do
  subject(:JsonApi) {described_class.new()}

  describe "#initialize" do
    it "should have a default URL" do
      expect(JsonApi::APIURL).to eq "http://localhost:3000/CPMU"
    end
  end

  describe "#readAPI" do
    it "should have a method called readAPI" do
      expect(subject.readAPI).not_to be nil
    end

    it "should return blank JSON if given an incorrect URL" do
      expect(subject.readAPI("http://wrong")).to be {}
    end

    it "should return JSON data" do
      expect(subject.readAPI()[0]["Quarter"]).not_to be nil
      expect(subject.readAPI()[0]["Month"]).not_to be nil
      expect(subject.readAPI()[0]["Complaints"]).not_to be nil
      expect(subject.readAPI()[0]["UnitsSold"]).not_to be nil
    end
  end

end
