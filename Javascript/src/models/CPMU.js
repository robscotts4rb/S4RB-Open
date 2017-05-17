(function(exports) {

  function CPMU(){
    this.MONTHS = {"Jan":"January", "Feb":"February", "Mar":"March", "Apr":"April",
    "May":"May", "Jun":"June", "Jul":"July", "Aug":"August", "Sep":"September",
    "Oct":"October", "Nov":"November", "Dec":"December"};
  }

  CPMU.prototype.calculate = function(val1=null, val2=null){
    this.checkerror(val1, val2);
    return (parseFloat(val1) / parseFloat(val2) * 1000000).toFixed(8);
  };

  CPMU.prototype.quarter = function(val1=null){
    this.checkerror(val1);
    return (val1 / 3).toFixed(8);
  };

  CPMU.prototype.quartile = function(val1=null){
    this.checkerror(val1);
    var total = 4 - (val1 % 4);
    return total === 4 ? 1 : total + 1;
  };

  CPMU.prototype.display_date = function(val1=null){
    this.checkerror(val1);
    date = new Date(val1).toString().split(" ");
    month = this.MONTHS[date[1]];
    return date[2] + " " + month + " " + date[3];
  };

  CPMU.prototype.next_month = function(val1=null){
    this.checkerror(val1);
    return new Date(val1.setMonth(val1.getMonth() + 1));
  };

  CPMU.prototype.complaints = function(val1=null){
    this.checkerror(val1);

    result = [];
    var nextDate = new Date(val1[0].Month);
    for(var i=0; i<val1.length; i++){
      while (new Date(val1[i].Month).toDateString() !== new Date(nextDate).toDateString()) {
        result.push([new Date(nextDate), 0, 0]);
        nextDate = this.next_month(nextDate);
      }
      result.push([val1[i].Month, val1[i].Complaints, val1[i].UnitsSold]);
      nextDate = this.next_month(new Date(val1[i].Month));
    }
    return result;
  };

  CPMU.prototype.checkerror = function(val1=-1, val2=-1){
    if(val1===null || val2===null){
      throw new Error("Values not defined");
    }
  };

  exports.CPMU = CPMU;

})(this);
