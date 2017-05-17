function quarterlyView(response, quarterlyCPMU = new CPMU()){

  $('#title').text("Quarterly - Complaints per million");
  $('#toggle-button').text("Monthly");

  data = quarterlyCPMU.complaints(response);
  text = "<table border='1'><tr><td width='40'><b>Quarter</b></td><td width='200'><b>CPMU</b></td></tr>";

  for(var i=0; i<data.length-2; i+=3){
    var complaintsTotal = 0;
    var unitsSoldTotal = 0;
    for(var quart=i; quart<i+3; quart++){
      complaintsTotal += data[quart][1];
      unitsSoldTotal += data[quart][2];
    }
    total = parseFloat(quarterlyCPMU.calculate(complaintsTotal, unitsSoldTotal));
    text += "<tr><td width='40'>"+quarterlyCPMU.quartile(i)+"</td><td width='200'>"+total+"</td></tr>";
  }

  document.getElementById('table').innerHTML = text+"</table>";
}
