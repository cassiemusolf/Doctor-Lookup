var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.findDoctor = function(medicalIssue, state, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location='  + state + '&skip=0&limit=50&user_key=' + apiKey).then(function(response) {
    displayDoctor(medicalIssue, state, response);
  }).fail(function(error) {
    $('.search-result').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
