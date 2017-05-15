function monthyView(response, monthlyCPMU = new CPMU()){

  $('#title').text("Montly - Complaints per million");
  $('#toggle-button').text("Quarterly");

  text = "<table border='1'><tr><td width='200'><b>Date</b></td><td width='200'><b>CPMU</b></td></tr>";
  for(var i=0; i<response.length; i++){
    var val1 = response[i].Complaints;
    var val2 = response[i].UnitsSold;
    var val3 = response[i]["Value.date"];
    text += "<tr><td width='200'>"+monthlyCPMU.display_date(val3)+"</td><td width='200'>"+monthlyCPMU.calculate(val1, val2)+"</td></tr>";
  }

  document.getElementById('table').innerHTML = text+"</table>";
}
