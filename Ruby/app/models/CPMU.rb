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

  private

  def self.check_error(val1=-1, val2=-1, val3=-1)
    raise "Values not defined" if val1 == nil || val2 == nil || val3 == nil
  end

end
