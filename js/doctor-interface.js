var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

var displayDoctor = function(medicalIssue, state, response) {
  $('.search-count').text("There are " + response.meta.total + " doctors in " + state + " state that can help you with the medical issue " + medicalIssue + ". Here is a list of " + response.meta.count + " of them.");
  var doctorArray = [];
  for(var i=0; i<50; i ++) {
    doctorArray.push(response.data[i].practices[0].name + "<br>" + "Phone: " + response.data[i].practices[0].phones[0].number + "<br>" + "City: " + response.data[i].practices[0].visit_address.city);
  } for(var j=0; j<doctorArray.length; j++) {
    $('.search-result').append("<li>" + doctorArray[j] + "</li>");
  }
};

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $("#find-doctor").submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    var state = $('#state').val();
    $('#state').val("");
    currentDoctor.findDoctor(medicalIssue, state, displayDoctor);
  });
});
