function monthyView(response, monthlyCPMU = new CPMU()){

  $('#title').text("Montly - Complaints per million");
  $('#toggle-button').text("Quarterly");

  data = monthlyCPMU.complaints(response);
  text = "<table border='1'><tr><td width='200'><b>Date</b></td><td width='200'><b>CPMU</b></td></tr>";
  for(var i=0; i<data.length; i++){
    total = monthlyCPMU.calculate(data[i][1], data[i][2]).toString();
    if(total==="NaN") total="0.00000";
    text += "<tr><td width='200'>"+monthlyCPMU.display_date(data[i][0])+"</td><td width='200'>"+total+"</td></tr>";
  }
  document.getElementById('table').innerHTML = text+"</table>";
}
