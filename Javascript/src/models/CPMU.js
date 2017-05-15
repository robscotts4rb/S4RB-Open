(function(exports) {

  function CPMU(){}

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
    return date[2] + " " + date[1] + " " + date[3];
  };

  CPMU.prototype.next_month = function(val1=null){
    this.checkerror(val1);
    return new Date(val1.setMonth(val1.getMonth() + 1));
  };

  CPMU.prototype.checkerror = function(val1=-1, val2=-1){
    if(val1===null || val2===null){
      throw new Error("Values not defined");
    }
  };

  exports.CPMU = CPMU;

})(this);
