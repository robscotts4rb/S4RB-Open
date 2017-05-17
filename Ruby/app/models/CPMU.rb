class CPMU

  def self.calculate(val1=nil, val2=nil)
    check_error(val1, val2)
    val1.to_f / val2.to_f * 1000000
  end

  def self.quarter(val1=nil, val2=nil, val3=nil)
    check_error(val1, val2, val3)
    val1.to_f + val2.to_f + val3.to_f / 3
  end

  def self.quartile(val1=nil)
    check_error(val1)
    total = 4 - (val1 % 4)
    total == 4 ? 1 : total + 1
  end

  def self.display_date(val1=nil)
    check_error(val1)
    DateTime.parse(val1).strftime("%d %B %Y")
  end

  def self.next_month(val1=nil)
    check_error(val1)
    DateTime.parse(val1) >> 1
  end

  def self.complaints(val1=nil)
    check_error(val1)
    month_val = DateTime.parse(val1[0]["Month"])
    complaints = []

    val1.each_with_index do |data, index|
      while (DateTime.parse(val1[index]["Month"]).to_s != month_val.to_s) do
        complaints << [month_val, 0,0]
        month_val = next_month(month_val.to_s)
      end
      complaints << [val1[index]["Month"], val1[index]["Complaints"].to_f,val1[index]["UnitsSold"].to_f]
      month_val = next_month(val1[index]["Month"])
    end

    complaints
  end

  private

  def self.check_error(val1=-1, val2=-1, val3=-1)
    raise "Values not defined" if val1 == nil || val2 == nil || val3 == nil
  end

end
