require "./app/models/CPMU"

describe CPMU do

  describe "#calculate" do
    it "should raise an error if no values passed" do
      expect{CPMU.calculate}.to raise_error "Values not defined"
    end

    it "should work out the CPMU" do
      expect(CPMU.calculate(0,1000000)).to eq 0
      expect(CPMU.calculate(10,1000000)).to eq 10
      expect(CPMU.calculate(9999999,1000000)).to eq 9999999
    end
  end

  describe "#quarter" do
    it "should raise an error if no values passed" do
      expect{CPMU.quarter}.to raise_error "Values not defined"
    end

    it "should work out the Quarter" do
      expect(CPMU.quarter(0,0,0)).to eq 0.0
      expect(CPMU.quarter(10,20,30)).to eq 40.0
      expect(CPMU.quarter(9999999,9999999,9999999)).to eq 23333331.0
    end
  end

  describe "#quartile" do
    it "should raise an error if no values passed" do
      expect{CPMU.quartile}.to raise_error "Values not defined"
    end

    it "should work out the Quartile" do
      expect(CPMU.quartile(0) ).to eq 1
      expect(CPMU.quartile(15)).to eq 2
      expect(CPMU.quartile(10)).to eq 3
      expect(CPMU.quartile(25)).to eq 4
    end
  end

  describe "#display_date" do
    it "should raise an error if no values passed" do
      expect{CPMU.display_date}.to raise_error "Values not defined"
    end

    it "should display date in nice format" do
      expect(CPMU.display_date("2012-01-01T00:00:00")).to eq "01 January 2012"
      expect(CPMU.display_date("2050-12-31T00:00:00")).to eq "31 December 2050"
    end
  end

end
