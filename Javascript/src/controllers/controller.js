const APIURL = "http://localhost:3000/CPMU";

$(document).ready(function() {
  $('#toggle-button').click(function() {
    togglePage();
  });
});

function togglePage(){
  if($('#toggle-button').text() === "Monthly"){
    $.when($.getJSON(APIURL)).then(function(response){ monthyView(response) ;});
  } else {
    $.when($.getJSON(APIURL)).then(function(response){ quarterlyView(response) ;});
  }
}
