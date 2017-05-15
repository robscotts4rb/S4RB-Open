function monthyView(response, monthlyCPMU = new CPMU()){

  $('#title').text("Montly - Complaints per million");
  $('#toggle-button').text("Quarterly");

  var nextDate = new Date(response[0].Month);
  text = "<table border='1'><tr><td width='200'><b>Date</b></td><td width='200'><b>CPMU</b></td></tr>";
  for(var i=0; i<response.length; i++){
    while (new Date(response[i].Month).toDateString() !== new Date(nextDate).toDateString()) {
      text += "<tr><td width='200'>"+monthlyCPMU.display_date(nextDate)+"</td><td width='200'>0.00000</td></tr>";
      nextDate = monthlyCPMU.next_month(nextDate);
    }
    var val1 = response[i].Complaints;
    var val2 = response[i].UnitsSold;
    var val3 = response[i].Month;
    text += "<tr><td width='200'>"+monthlyCPMU.display_date(val3)+"</td><td width='200'>"+monthlyCPMU.calculate(val1, val2)+"</td></tr>";
    nextDate = monthlyCPMU.next_month(new Date(response[i].Month));
  }

  document.getElementById('table').innerHTML = text+"</table>";
}
