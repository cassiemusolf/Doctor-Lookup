var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;
var displayDoctor = function(doctorArray) {
  $('.search-result').append("<li>" + doctorArray + "</li>");
};

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $("#find-doctor").submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    currentDoctor.findDoctor(medicalIssue);
  });
});
