var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

function displayDoctor(doctor) {
  $('.search-result').append("<li>" + doctor.data.practices.name + "</li>");
}

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $("#find-doctor").submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    currentDoctor.findDoctor(medicalIssue);
  });
});
